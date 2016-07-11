package org.roylance.yaas.redis.services

import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.redis.enums.CommonKeys
import org.roylance.yaas.services.IUserDeviceService
import java.util.*

class RedisUserDeviceService(
        host: String,
        port: Int,
        password: String):RedisBase(host, port, password), IUserDeviceService {
    override fun saveUserDevice(userDevice: YaasModels.UserDevice) {
        val client = this.buildJedisClient()
        try {
            val key = this.buildKey(userDevice.user.userName)
            val subKey = userDevice.userDeviceToken
            val builder = userDevice.toBuilder()
            builder.lastUpdated = Date().time

            client.hset(key, subKey, Base64.getEncoder().encodeToString(builder.build().toByteArray()))
        }
        finally {
            client.close()
        }
    }

    override fun getUserDevices(user: YaasModels.User): List<YaasModels.UserDevice>? {
        val client = this.buildJedisClient()
        try {
            val key = this.buildKey(user.userName)
            val items = client.hgetAll(key)
            return items
                    .values
                    .map {
                        YaasModels.UserDevice.parseFrom(Base64.getDecoder().decode(it))
                    }
                    .toList()
        }
        finally {
            client.close()
        }
    }

    private fun buildKey(userName: String): String {
        return "${CommonKeys.UserDeviceTemplate}$userName"
    }
}
