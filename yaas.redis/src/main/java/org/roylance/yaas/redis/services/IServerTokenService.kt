package org.roylance.yaas.redis.services

import org.roylance.yaas.YaasModel

interface IServerTokenService {
    fun generateToken(user: YaasModel.User): YaasModel.UIAuthentication
    fun validateUser(token: String): YaasModel.UIAuthentication
}