package org.roylance.yaas.yaorm

import org.roylance.yaas.YaasModel

interface IServerTokenService {
    fun generateToken(user: YaasModel.User): YaasModel.UIAuthentication
    fun validateUser(token: String): YaasModel.UIAuthentication
}