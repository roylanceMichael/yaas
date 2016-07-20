package org.roylance.yaas.services

import org.roylance.yaas.models.YaasModels

interface IAuthenticationService {
    fun exists(userName: String): Boolean
    fun login(user: YaasModels.User): YaasModels.UIAuthentication
    fun login(request: YaasModels.UIRequest): YaasModels.UIAuthentication
    fun register(user: YaasModels.User): YaasModels.UIAuthentication
    fun changePassword(model: YaasModels.UIChangePassword): YaasModels.UIAuthentication
    fun save(request: YaasModels.UIRequest): YaasModels.UIResponse
}