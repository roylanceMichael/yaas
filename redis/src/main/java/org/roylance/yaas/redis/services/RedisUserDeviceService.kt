package org.roylance.yaas.redis.services

import org.roylance.yaas.YaasModel
import org.roylance.yaas.redis.enums.CommonKeys
import org.roylance.yaas.services.IUserDeviceService
import java.util.*

class RedisUserDeviceService(
        host: String,
        port: Int,
        private val tokenService: IServerTokenService,
        password: String):RedisBase(host, port, password), IUserDeviceService {
    override fun all(request: YaasModel.UIRequest): YaasModel.UIResponse {
        val auth = this.tokenService.validateUser(request.token)

        if (!auth.authenticated) {
            return YaasModel.UIResponse.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            val key = this.buildKey(request.userDevice.user.userName)
            val subKey = request.userDevice.userDeviceToken
            val builder = request.userDevice.toBuilder()
            builder.lastUpdated = Date().time

            client.hset(key, subKey, Base64.getEncoder().encodeToString(builder.build().toByteArray()))
        }
        finally {
            client.close()
        }

        return YaasModel.UIResponse.newBuilder().setSuccessful(true).build()
    }

    override fun save(request: YaasModel.UIRequest): YaasModel.UIResponse {
        val auth = this.tokenService.validateUser(request.token)

        if (!auth.authenticated) {
            return YaasModel.UIResponse.getDefaultInstance()
        }

        val client = this.buildJedisClient()
        try {
            val key = this.buildKey(request.userDevice.user.userName)
            val subKey = request.userDevice.userDeviceToken
            val builder = request.userDevice.toBuilder()
            builder.lastUpdated = Date().time

            client.hset(key, subKey, Base64.getEncoder().encodeToString(builder.build().toByteArray()))
        }
        finally {
            client.close()
        }
        return YaasModel.UIResponse.newBuilder().setSuccessful(true).build()
    }

    private fun buildKey(userName: String): String {
        return "${CommonKeys.UserDeviceTemplate}$userName"
    }
}
