package org.roylance.yaas.redis.services

import org.roylance.yaas.YaasModels

interface IServerTokenService {
    fun generateToken(user: YaasModels.User): YaasModels.UIAuthentication
    fun validateUser(token: String): YaasModels.UIAuthentication
}