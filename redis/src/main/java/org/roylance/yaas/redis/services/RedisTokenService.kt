package org.roylance.yaas.redis.services

import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.redis.enums.CommonKeys
import org.roylance.yaas.services.ILogger
import org.roylance.yaas.services.ITokenService
import java.util.*

class RedisTokenService(host: String,
                        port: Int,
                        password: String,
                        private val logger: ILogger): RedisBase(host, port, password), ITokenService {
    override fun validateUser(token: String): YaasModels.UIAuthentication {
        val client = this.buildJedisClient()
        try {
            val tokenKey = "${CommonKeys.TokenTemplate}$token"
            val userModelBase64 = client.get(tokenKey)

            if (userModelBase64 == null || userModelBase64.length == 0) {
                this.logger.info("unable to find user with key: " + tokenKey)
                return YaasModels.UIAuthentication.newBuilder()
                        .setAuthenticated(false)
                        .setToken(token)
                        .build()
            }

            this.logger.info("found user with key: " + tokenKey)
            val bytes = Base64.getDecoder().decode(userModelBase64)
            val userModel = YaasModels.User.parseFrom(bytes)

            val authModel = YaasModels.UIAuthentication.newBuilder()
                    .setUserName(userModel.userName)
                    .setToken(token)
                    .setDisplay(userModel.display)
                    .setIsAdmin(client.sismember(CommonKeys.UserAdminsKey, userModel.userName))
            return authModel.build()
        }
        finally {
            client.close()
        }
    }

    override fun generateToken(userModel: YaasModels.User): YaasModels.UIAuthentication {
        val client = this.buildJedisClient()
        try {
            val key = "${CommonKeys.TokenUserTemplate}${userModel.userName}"
            val existingToken = client.get(key)

            if (existingToken != null) {
                val userModelBase64 = client.get("${CommonKeys.TokenTemplate}$existingToken")
                val userModelBytes = Base64.getDecoder().decode(userModelBase64)
                val existingUserModel = YaasModels.User.parseFrom(userModelBytes)

                return YaasModels.UIAuthentication.newBuilder()
                        .setAuthenticated(true)
                        .setUserName(userModel.userName)
                        .setToken(existingToken)
                        .setDisplay(existingUserModel.display)
                        .setIsAdmin(client.sismember(CommonKeys.UserAdminsKey, userModel.userName))
                        .build()
            }

            val newToken = UUID.randomUUID().toString()
            // set both places
            client.set(key, newToken)
            val base64 = Base64.getEncoder().encodeToString(userModel.toByteArray())
            client.set("${CommonKeys.TokenTemplate}$newToken", base64)
            this.logger.info("generated token for user with key: " + newToken)

            return YaasModels.UIAuthentication.newBuilder()
                    .setAuthenticated(true)
                    .setUserName(userModel.userName)
                    .setToken(newToken)
                    .setDisplay(userModel.display)
                    .setIsAdmin(client.sismember(CommonKeys.UserAdminsKey, userModel.userName))
                    .build()
        }
        finally {
            client.close()
        }
    }
}
