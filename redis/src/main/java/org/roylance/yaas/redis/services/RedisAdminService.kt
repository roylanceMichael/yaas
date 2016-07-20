package org.roylance.yaas.redis.services

import org.roylance.common.service.ILogger
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.redis.enums.CommonKeys
import org.roylance.yaas.services.IAdminService
import org.roylance.yaas.services.server.IServerTokenService

class RedisAdminService(host: String,
                        port: Int,
                        password: String,
                        private val tokenService: IServerTokenService,
                        private val logger: ILogger):RedisBase(host, port, password), IAdminService {
    override fun changePasswordForUser(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val auth = this.tokenService.validateUser(request.token)

        if (!auth.isAdmin) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            client.sadd(CommonKeys.UserAdminsKey, request.user.userName)
        }
        finally {
            client.close()
        }

        return YaasModels.UIResponse.newBuilder().setSuccessful(true).build()
    }

    override fun deleteUser(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val auth = this.tokenService.validateUser(request.token)
        if (!auth.isAdmin) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            // just remove all the keys
            client.del("${CommonKeys.UserTemplate}${request.user.userName}")
            val token = client.get("${CommonKeys.TokenUserTemplate}${request.user.userName}")

            if (token != null) {
                client.del("${CommonKeys.TokenTemplate}$token")
            }

            this.logger.info("deleting user: " + request.user.userName)
            client.del("${CommonKeys.TokenUserTemplate}${request.user.userName}")
            client.srem(CommonKeys.AllUsersKey, request.user.userName)

            return YaasModels.UIResponse.newBuilder().setSuccessful(true).build()
        }
        finally {
            client.close()
        }
    }

    override fun getAllUsers(request: YaasModels.UIRequest): YaasModels.UIAuthentications {
        val auth = this.tokenService.validateUser(request.token)
        if (!auth.isAdmin) {
            return YaasModels.UIAuthentications.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            val allUsers = client.smembers(CommonKeys.AllUsersKey)
            val admins = client.smembers(CommonKeys.UserAdminsKey)

            val users = allUsers
                    .map {
                        YaasModels.UIAuthentication.newBuilder()
                                .setUserName(it)
                                .setIsAdmin(admins.contains(it))
                                .build()
                    }

            return YaasModels.UIAuthentications.newBuilder().addAllUsers(users).build()
        }
        finally {
            client.close()
        }
    }

    override fun isUserAdmin(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val auth = this.tokenService.validateUser(request.token)
        if (!auth.isAdmin) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            return YaasModels.UIResponse.newBuilder().setIsAdmin(client.sismember(CommonKeys.UserAdminsKey, request.user.userName)).build()
        }
        finally {
            client.close()
        }
    }

    override fun removeUserAsAdmin(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val auth = this.tokenService.validateUser(request.token)
        if (!auth.isAdmin) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            client.srem(CommonKeys.UserAdminsKey, request.user.userName)
        }
        finally {
            client.close()
        }
        return YaasModels.UIResponse.newBuilder().setSuccessful(true).build()
    }

    override fun setUserAsAdmin(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val auth = this.tokenService.validateUser(request.token)
        if (!auth.isAdmin) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            client.sadd(CommonKeys.UserAdminsKey, request.user.userName)
        }
        finally {
            client.close()
        }
        return YaasModels.UIResponse.newBuilder().setSuccessful(true).build()
    }
}