package org.roylance.yaas.redis.services

import org.apache.commons.codec.digest.DigestUtils
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.redis.enums.CommonKeys
import org.roylance.yaas.services.ILogger
import org.roylance.yaas.services.server.IAuthenticationService
import org.roylance.yaas.services.server.ITokenService
import redis.clients.jedis.Jedis
import java.util.*

class RedisAuthenticationService(
        host: String,
        port: Int,
        password: String,
        private val tokenService: ITokenService,
        private val logger: ILogger): RedisBase(host, port, password), IAuthenticationService {
    override fun setUserAsAdmin(user: YaasModels.User): Boolean {
        val client = this.buildJedisClient()
        try {
            client.sadd(CommonKeys.UserAdminsKey, user.userName)
        }
        finally {
            client.close()
        }

        return true
    }

    override fun registerUser(user: YaasModels.User): YaasModels.UIAuthentication {
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

    override fun getAllUsers(limit:Int, offset:Int): List<YaasModels.UIAuthentication> {
        val client = this.buildJedisClient()
        try {
            val allUsers = client.smembers(CommonKeys.AllUsersKey)
            val admins = client.smembers(CommonKeys.UserAdminsKey)

            return allUsers
                    .map {
                        YaasModels.UIAuthentication.newBuilder()
                                .setUserName(it)
                                .setIsAdmin(admins.contains(it))
                                .build()
                    }
        }
        finally {
            client.close()
        }
    }

    override fun userNameExists(userName: String): Boolean {
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

    override fun authenticateUser(user: YaasModels.User): YaasModels.UIAuthentication {
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

    override fun authenticateUser(token: String): YaasModels.UIAuthentication {
        return this.tokenService.validateUser(token)
    }

    override fun isUserAdmin(user: YaasModels.User): Boolean {
        val client = this.buildJedisClient()
        try {
            return client.sismember(CommonKeys.UserAdminsKey, user.userName)
        }
        finally {
            client.close()
        }
    }

    override fun saveInfo(user: YaasModels.User, token: String): Boolean {
        val client = this.buildJedisClient()
        try {
            val key = "${CommonKeys.TokenTemplate}$token"
            val value = Base64.getEncoder().encodeToString(user.toByteArray())
            client.set(key, value)

            if (user.password.length > 0) {
                this.updateUserPassword(user.userName, user.password, client)
            }
        }
        finally {
            client.close()
        }

        return true
    }

    override fun changePasswordForUser(userModel: YaasModels.User): Boolean {
        val client = this.buildJedisClient()
        try {
            this.updateUserPassword(userModel.userName, userModel.password, client)
            return true
        }
        finally {
            client.close()
        }
    }

    override fun removeUserAsAdmin(user: YaasModels.User): Boolean {
        val client = this.buildJedisClient()
        try {
            client.srem(CommonKeys.UserAdminsKey, user.userName)
        }
        finally {
            client.close()
        }

        return true
    }

    override fun changePassword(model: YaasModels.UIChangePassword): YaasModels.UIAuthentication {
        val client = this.buildJedisClient()
        try {
            val tempUserModel = YaasModels.User.newBuilder()
                    .setUserName(model.userName)
                    .setPassword(model.oldPassword)

            val authModel = this.authenticateUser(tempUserModel.build())

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

    override fun deleteUser(user: YaasModels.User): Boolean {
        val client = this.buildJedisClient()
        try {
            // just remove all the keys
            client.del("${CommonKeys.UserTemplate}${user.userName}")
            val token = client.get("${CommonKeys.TokenUserTemplate}${user.userName}")

            if (token != null) {
                client.del("${CommonKeys.TokenTemplate}$token")
            }

            this.logger.info("deleting user: " + user.userName)
            client.del("${CommonKeys.TokenUserTemplate}${user.userName}")
            client.srem(CommonKeys.AllUsersKey, user.userName)

            return true
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
