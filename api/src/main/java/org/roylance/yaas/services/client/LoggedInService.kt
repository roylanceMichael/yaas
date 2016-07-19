package org.roylance.yaas.services.client

import org.roylance.yaas.enums.UserInfoEnums
import org.roylance.yaas.models.YaasModels
import java.io.IOException
import java.net.Socket

class LoggedInService(
        private val secureCachingService: ISecureCachingService
): IUserService {
    private var inMemoryAuthentication: YaasModels.UIAuthentication? = null
    private var inMemoryUserDeviceToken: String? = null

    override fun getAuthenticationModel(): YaasModels.UIAuthentication? {
        return this.inMemoryAuthentication
    }

    override fun getCachedUserModel(includePassword: Boolean): YaasModels.User? {
        val userName = this.secureCachingService.getValue(UserInfoEnums.UserNameKey)
        if (userName != null && userName.length > 0) {
            val user = YaasModels.User.newBuilder()
                    .setUserName(userName)
            if (includePassword) {
                val password = this.secureCachingService.getValue(UserInfoEnums.PasswordKey)
                if (password != null && password.length > 0) {
                    user.password = password
                }
            }

            val display = this.secureCachingService.getValue(UserInfoEnums.DisplayKey)
            if (display == null) {
                user.display = EmptyString
            }
            else {
                user.display = display
            }
            return user.build()
        }

        return null
    }

    override fun setUserDeviceToken(token: String) {
        this.inMemoryUserDeviceToken = token
    }

    override fun setAuthenticationModel(authenticationModel: YaasModels.UIAuthentication) {
        this.inMemoryAuthentication = authenticationModel
        this.secureCachingService.setValue(UserInfoEnums.DisplayKey, authenticationModel.display)
    }

    override fun setCachedUserModel(user: YaasModels.User) {
        this.secureCachingService.setValue(UserInfoEnums.UserNameKey, user.userName)
        this.secureCachingService.setValue(UserInfoEnums.PasswordKey, user.password)
    }

    override fun isConnectedToInternet(website:String, port:Int): Boolean {
        var socket: Socket? = null;
        val reachable: Boolean
        try {
            socket = Socket(website, port)
            reachable = true
        }
        catch(e: Exception) {
            reachable = false
        }
        finally {
            if (socket != null) {
                try {
                    socket.close()
                }
                catch(e: IOException) {
                    e.printStackTrace()
                }
            }
        }

        return reachable
    }

    override fun isLoggedIn(): Boolean {
        return this.inMemoryAuthentication != null
    }

    override fun logout() {
        this.inMemoryAuthentication = null
        this.secureCachingService.setValue(UserInfoEnums.UserNameKey, EmptyString)
        this.secureCachingService.setValue(UserInfoEnums.PasswordKey, EmptyString)
        this.secureCachingService.setValue(UserInfoEnums.DisplayKey, EmptyString)
    }

    companion object {
        private const val EmptyString = ""
    }
}