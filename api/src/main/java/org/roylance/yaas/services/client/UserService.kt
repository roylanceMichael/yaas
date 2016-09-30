package org.roylance.yaas.services.client

import org.roylance.yaas.YaasModel
import org.roylance.yaas.enums.UserInfoEnums
import java.io.IOException
import java.net.Socket

class UserService(private val secureCachingService: ISecureCachingService): IUserService {
    private var inMemoryAuthentication: YaasModel.UIAuthentication? = null
    private var inMemoryUserDeviceToken: String? = null

    override fun getAuthenticationModel(): YaasModel.UIAuthentication? {
        return this.inMemoryAuthentication
    }

    override fun getCachedUserModel(includePassword: Boolean): YaasModel.User? {
        val userName = this.secureCachingService.getValue(UserInfoEnums.UserNameKey)
        if (userName != null && userName.length > 0) {
            val user = YaasModel.User.newBuilder()
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

    override fun setAuthenticationModel(authenticationModel: YaasModel.UIAuthentication) {
        this.inMemoryAuthentication = authenticationModel
        this.secureCachingService.setValue(UserInfoEnums.DisplayKey, authenticationModel.display)
    }

    override fun setCachedUserModel(user: YaasModel.User) {
        this.secureCachingService.setValue(UserInfoEnums.UserNameKey, user.userName)
        this.secureCachingService.setValue(UserInfoEnums.PasswordKey, user.password)
    }

    override fun isConnectedToInternet(website:String, port:Int): Boolean {
        var socket: Socket? = null
        val reachable: Boolean
        reachable = try {
            socket = Socket(website, port)
            true
        }
        catch(e: Exception) {
            false
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