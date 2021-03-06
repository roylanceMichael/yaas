package org.roylance.yaas.redis.services

import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModel
import org.roylance.yaas.redis.enums.CommonKeys
import org.roylance.services.IAdminService

class RedisAdminService(host: String,
                        port: Int,
                        password: String,
                        private val tokenService: IServerTokenService,
                        private val logger: ILogger):RedisBase(host, port, password), IAdminService {
    override fun change_password_for_user(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val auth = this.tokenService.validateUser(request.token)

        if (!auth.isAdmin) {
            return YaasModel.UIYaasResponse.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            client.sadd(CommonKeys.UserAdminsKey, request.user.userName)
        }
        finally {
            client.close()
        }

        return YaasModel.UIYaasResponse.newBuilder().setSuccessful(true).build()
    }

    override fun delete_user(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val auth = this.tokenService.validateUser(request.token)
        if (!auth.isAdmin) {
            return YaasModel.UIYaasResponse.getDefaultInstance()
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

            return YaasModel.UIYaasResponse.newBuilder().setSuccessful(true).build()
        }
        finally {
            client.close()
        }
    }

    override fun get_all_users(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val auth = this.tokenService.validateUser(request.token)
        if (!auth.isAdmin) {
            return YaasModel.UIYaasResponse.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            val allUsers = client.smembers(CommonKeys.AllUsersKey)
            val admins = client.smembers(CommonKeys.UserAdminsKey)

            val users = allUsers
                    .map {
                        YaasModel.UIAuthentication.newBuilder()
                                .setUserName(it)
                                .setIsAdmin(admins.contains(it))
                                .build()
                    }

            val addedUsers = YaasModel.UIAuthentications.newBuilder().addAllUsers(users)

            return YaasModel.UIYaasResponse.newBuilder().setUsers(addedUsers).build()
        }
        finally {
            client.close()
        }
    }

    override fun is_user_admin(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val auth = this.tokenService.validateUser(request.token)
        if (!auth.isAdmin) {
            return YaasModel.UIYaasResponse.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            return YaasModel.UIYaasResponse.newBuilder().setIsAdmin(client.sismember(CommonKeys.UserAdminsKey, request.user.userName)).build()
        }
        finally {
            client.close()
        }
    }

    override fun remove_user_as_admin(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val auth = this.tokenService.validateUser(request.token)
        if (!auth.isAdmin) {
            return YaasModel.UIYaasResponse.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            client.srem(CommonKeys.UserAdminsKey, request.user.userName)
        }
        finally {
            client.close()
        }
        return YaasModel.UIYaasResponse.newBuilder().setSuccessful(true).build()
    }

    override fun set_user_as_admin(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val auth = this.tokenService.validateUser(request.token)
        if (!auth.isAdmin) {
            return YaasModel.UIYaasResponse.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            client.sadd(CommonKeys.UserAdminsKey, request.user.userName)
        }
        finally {
            client.close()
        }
        return YaasModel.UIYaasResponse.newBuilder().setSuccessful(true).build()
    }
}