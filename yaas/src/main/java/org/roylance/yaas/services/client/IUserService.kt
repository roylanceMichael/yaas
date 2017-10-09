package org.roylance.yaas.services.client

import org.roylance.yaas.YaasModel

interface IUserService {
    fun getAuthenticationModel() : YaasModel.UIAuthentication?
    fun getCachedUserModel(includePassword: Boolean) : YaasModel.User?
    fun setUserDeviceToken(token: String)
    fun setAuthenticationModel(authenticationModel: YaasModel.UIAuthentication)
    fun setCachedUserModel(user: YaasModel.User)
    fun isConnectedToInternet(website:String, port: Int): Boolean
    fun isLoggedIn(): Boolean
    fun logout()
}