package org.roylance.yaas.redis.services

import org.apache.commons.codec.digest.DigestUtils
import org.roylance.common.service.ILogger
import org.roylance.common.service.IProtoSerializerService
import org.roylance.yaas.YaasModels
import org.roylance.yaas.redis.enums.CommonKeys
import org.roylance.yaas.services.IAuthenticationService
import redis.clients.jedis.Jedis

class RedisAuthenticationService(
        host: String,
        port: Int,
        password: String,
        private val serializerService: IProtoSerializerService,
        private val tokenService: IServerTokenService,
        private val logger: ILogger): RedisBase(host, port, password), IAuthenticationService {
    override fun authenticate(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val auth = this.tokenService.validateUser(request.token)
        return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()    }

    override fun change_password(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val client = this.buildJedisClient()
        try {
            val model = request.changePassword
            val tempUserModel = YaasModels.User.newBuilder()
                    .setUserName(model.userName)
                    .setPassword(model.oldPassword)

            val tempRequest = YaasModels.UIRequest.newBuilder().setUser(tempUserModel).build()

            val authModel = this.login(tempRequest).user

            if (!authModel.authenticated) {
                this.logger.info("unable to authenticate user: " + model.userName)
                return YaasModels.UIResponse.newBuilder().setAuthenticated(false).build()
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
            val auth = this.tokenService.generateToken(tempUserModel.build())
            return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()

        }
        finally {
            client.close()
        }
    }

    override fun exists(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val client = this.buildJedisClient()
        try {
            val key = "${CommonKeys.UserTemplate}${request.content}"

            logger.info("checking key if exists: " + key)
            val existsOrNot = client
                    .get(key) != null
            return YaasModels.UIResponse.newBuilder().setContent(existsOrNot.toString()).build()
        }
        finally {
            client.close()
        }
    }

    override fun register(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val client = this.buildJedisClient()
        try {
            val user = request.user
            val key = "${CommonKeys.UserTemplate}${user.userName}"
            val hashedPassword = DigestUtils.md5Hex(user.password)

            val existingHashedPassword = client.get(key)
            // does the password exist?
            if (existingHashedPassword == null) {
                // register
                client.set(key, hashedPassword)
                client.sadd(CommonKeys.AllUsersKey, user.userName)
                this.logger.info("registering new user: " + user.userName)
                val auth = this.tokenService.generateToken(user)
                return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
            }

            if (hashedPassword.equals(existingHashedPassword)) {
                this.logger.info("user exists already, password correct")
                val auth = this.tokenService.generateToken(user)
                return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
            }

            this.logger.info("user exists already, password incorrect")
            val auth = YaasModels.UIAuthentication.newBuilder()
                    .setAuthenticated(false)
                    .setUserName(user.userName)
                    .setDisplay(user.display)
                    .setIsAdmin(client.sismember(CommonKeys.UserAdminsKey, user.userName))
                    .build()
            return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
        }
        finally {
            client.close()
        }
    }

    override fun login(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val client = this.buildJedisClient()
        val user = request.user
        try {
            val key = "${CommonKeys.UserTemplate}${user.userName}"
            val hashedPassword = DigestUtils.md5Hex(user.password)

            val existingHashedPassword = client.get(key)
            if (existingHashedPassword == null ||
                    !hashedPassword.equals(existingHashedPassword)) {

                val auth = YaasModels.UIAuthentication.newBuilder()
                        .setAuthenticated(false)
                        .setUserName(user.userName)
                        .setDisplay(user.display)
                        .setIsAdmin(client.sismember(CommonKeys.UserAdminsKey, user.userName))
                        .build()
                return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
            }

            val auth = this.tokenService.generateToken(user)
            return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
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
