package org.roylance.yaas.redis.services

import org.apache.commons.codec.digest.DigestUtils
import org.roylance.common.service.ILogger
import org.roylance.common.service.IProtoSerializerService
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.redis.enums.CommonKeys
import org.roylance.yaas.services.IAuthenticationService
import org.roylance.yaas.services.server.IServerTokenService
import redis.clients.jedis.Jedis

class RedisAuthenticationService(
        host: String,
        port: Int,
        password: String,
        private val serializerService: IProtoSerializerService,
        private val tokenService: IServerTokenService,
        private val logger: ILogger): RedisBase(host, port, password), IAuthenticationService {
    override fun exists(userName: String): Boolean {
        val client = this.buildJedisClient()
        try {
            val key = "${CommonKeys.UserTemplate}$userName"

            logger.info("checking key if exists: " + key)
            return client
                    .get(key) != null
        }
        finally {
            client.close()
        }
    }

    override fun login(request: YaasModels.UIRequest): YaasModels.UIAuthentication {
        return this.tokenService.validateUser(request.token)
    }

    override fun login(user: YaasModels.User): YaasModels.UIAuthentication {
        val client = this.buildJedisClient()
        try {
            val key = "${CommonKeys.UserTemplate}${user.userName}"
            val hashedPassword = DigestUtils.md5Hex(user.password)

            val existingHashedPassword = client.get(key)
            if (existingHashedPassword == null ||
                    !hashedPassword.equals(existingHashedPassword)) {

                return YaasModels.UIAuthentication.newBuilder()
                        .setAuthenticated(false)
                        .setUserName(user.userName)
                        .setDisplay(user.display)
                        .setIsAdmin(client.sismember(CommonKeys.UserAdminsKey, user.userName))
                        .build()
            }

            return this.tokenService.generateToken(user)
        }
        finally {
            client.close()
        }
    }

    override fun register(user: YaasModels.User): YaasModels.UIAuthentication {
        val client = this.buildJedisClient()
        try {
            val key = "${CommonKeys.UserTemplate}${user.userName}"
            val hashedPassword = DigestUtils.md5Hex(user.password)

            val existingHashedPassword = client.get(key)
            // does the password exist?
            if (existingHashedPassword == null) {
                // register
                client.set(key, hashedPassword)
                client.sadd(CommonKeys.AllUsersKey, user.userName)
                this.logger.info("registering new user: " + user.userName)
                return this.tokenService.generateToken(user)
            }

            if (hashedPassword.equals(existingHashedPassword)) {
                this.logger.info("user exists already, password correct")
                return this.tokenService.generateToken(user)
            }

            this.logger.info("user exists already, password incorrect")
            return YaasModels.UIAuthentication.newBuilder()
                    .setAuthenticated(false)
                    .setUserName(user.userName)
                    .setDisplay(user.display)
                    .setIsAdmin(client.sismember(CommonKeys.UserAdminsKey, user.userName))
                    .build()
        }
        finally {
            client.close()
        }
    }

    override fun save(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val client = this.buildJedisClient()
        try {
            val key = "${CommonKeys.TokenTemplate}${request.token}"
            val value = this.serializerService.serializeToBase64(request.user)
            client.set(key, value)

            if (request.user.password.length > 0) {
                this.updateUserPassword(request.user.userName, request.user.password, client)
            }
        }
        finally {
            client.close()
        }

        return YaasModels.UIResponse.newBuilder().setSuccessful(true).build()
    }


    override fun changePassword(model: YaasModels.UIChangePassword): YaasModels.UIAuthentication {
        val client = this.buildJedisClient()
        try {
            val tempUserModel = YaasModels.User.newBuilder()
                    .setUserName(model.userName)
                    .setPassword(model.oldPassword)

            val authModel = this.login(tempUserModel.build())

            if (!authModel.authenticated) {
                this.logger.info("unable to authenticate user: " + model.userName)
                return authModel
            }

            tempUserModel.display = authModel.display

            // remove the other passwords
            val newHashedPassword = DigestUtils.md5Hex(model.newPassword)
            client.set("${CommonKeys.UserTemplate}${model.userName}", newHashedPassword)

            // generate a new token
            val existingToken = client.get(
                    "${CommonKeys.TokenUserTemplate}${model.userName}")

            if (existingToken != null) {
                client.del("${CommonKeys.TokenTemplate}$existingToken")
            }

            this.logger.info("updated password for user: " + model.userName)
            return this.tokenService.generateToken(tempUserModel.build())
        }
        finally {
            client.close()
        }
    }

    private fun updateUserPassword(userName:String, password:String, client: Jedis) {
        if (password.length == 0) {
            return
        }

        val key = "${CommonKeys.UserTemplate}$userName"
        val existingHashedPassword = client.get(key)
        if (existingHashedPassword != null && existingHashedPassword.length > 0) {
            client.del(key)
        }

        val hashedPassword = DigestUtils.md5Hex(password)
        client.set(key, hashedPassword)
    }

}
