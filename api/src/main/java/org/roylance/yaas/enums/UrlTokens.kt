package org.roylance.yaas.enums

object UrlTokens {
    const val Prefix = "/rest"

    const val Admin = "/admin"
    const val AllUsers = "/all-users"
    const val IsAdmin = "/is-admin"
    const val SetAdmin = "/set-admin"
    const val RemoveAdmin = "/remove-admin"
    const val DeleteUser = "/delete-user"
    const val ChangePassword = "/change-password"
    const val AdminAllUsers = "$Admin$AllUsers"
    const val AdminIsAdmin = "$Admin$IsAdmin"
    const val AdminSetAdmin = "$Admin$SetAdmin"
    const val AdminRemoveAdmin = "$Admin$RemoveAdmin"
    const val AdminDeleteUser = "$Admin$DeleteUser"
    const val AdminChangePassword = "$Admin$ChangePassword"

    const val FullAdminAllUsers = Prefix + AdminAllUsers
    const val FullAdminIsAdmin = Prefix + AdminIsAdmin
    const val FullAdminSetAdmin = Prefix + AdminSetAdmin
    const val FullAdminRemoveAdmin = Prefix + AdminRemoveAdmin
    const val FullAdminDeleteUser = Prefix + AdminDeleteUser
    const val FullAdminChangePassword = Prefix + AdminChangePassword

    const val Auth = "/auth"
    const val Save = "/save"
    const val Login = "/login"
    const val Exists = "/exists"
    const val Register = "/register"
    const val Authenticate = "/authenticate"
    const val AuthSave = "$Auth$Save"
    const val AuthLogin = "$Auth$Login"
    const val AuthAuthenticate = "$Auth$Authenticate"
    const val AuthExists = "$Auth$Exists"
    const val AuthRegister = "$Auth$Register"
    const val AuthChangePassword = "$Auth$ChangePassword"

    const val FullAuthSave = Prefix + AuthSave
    const val FullAuthLogin = Prefix + AuthLogin
    const val FullAuthAuthenticate = Prefix + AuthAuthenticate
    const val FullAuthExists = Prefix + AuthExists
    const val FullAuthRegister = Prefix + AuthRegister
    const val FullAuthChangePassword = Prefix + AuthChangePassword

    const val UserDevice = "/user-device"
    const val All = "/all"
    const val UserDeviceAll = "$UserDevice$All"
    const val UserDeviceSave = "$UserDevice$Save"

    const val FullUserDeviceAll = Prefix + UserDeviceAll
    const val FullUserDeviceSave = Prefix + UserDeviceSave

}