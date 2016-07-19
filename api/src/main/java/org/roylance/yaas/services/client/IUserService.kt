package org.roylance.yaas.services.client

import org.roylance.yaas.models.YaasModels

interface IUserService {
    fun getAuthenticationModel() : YaasModels.UIAuthentication?
    fun getCachedUserModel(includePassword: Boolean) : YaasModels.User?
    fun setUserDeviceToken(token: String)
    fun setAuthenticationModel(authenticationModel: YaasModels.UIAuthentication)
    fun setCachedUserModel(user: YaasModels.User)
    fun isConnectedToInternet(website:String, port: Int): Boolean
    fun isLoggedIn(): Boolean
    fun logout()
}