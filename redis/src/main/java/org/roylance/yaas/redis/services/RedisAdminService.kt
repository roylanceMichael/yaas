package org.roylance.yaas.redis.services

import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModels
import org.roylance.yaas.redis.enums.CommonKeys
import org.roylance.yaas.services.IAdminService

class RedisAdminService(host: String,
                        port: Int,
                        password: String,
                        private val tokenService: IServerTokenService,
                        private val logger: ILogger):RedisBase(host, port, password), IAdminService {
    override fun change_password_for_user(request: YaasModels.UIRequest): YaasModels.UIResponse {
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

        return YaasModels.UIResponse.newBuilder().setSuccessful(true).build()    }

    override fun delete_user(request: YaasModels.UIRequest): YaasModels.UIResponse {
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

    override fun get_all_users(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val auth = this.tokenService.validateUser(request.token)
        if (!auth.isAdmin) {
            return YaasModels.UIResponse.getDefaultInstance()
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

            val addedUsers = YaasModels.UIAuthentications.newBuilder().addAllUsers(users)

            return YaasModels.UIResponse.newBuilder().setUsers(addedUsers).build()
        }
        finally {
            client.close()
        }
    }

    override fun is_user_admin(request: YaasModels.UIRequest): YaasModels.UIResponse {
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

    override fun remove_user_as_admin(request: YaasModels.UIRequest): YaasModels.UIResponse {
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

    override fun set_user_as_admin(request: YaasModels.UIRequest): YaasModels.UIResponse {
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