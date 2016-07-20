package org.roylance.yaas.enums

object UrlTokens {
    const val Prefix = "/rest"

    const val AdminAllUsers = "/admin/all-users"
    const val AdminIsAdmin = "/admin/is-admin"
    const val AdminSetAdmin = "/admin/set-admin"
    const val AdminRemoveAdmin = "/admin/remove-admin"
    const val AdminDeleteUser = "/admin/delete-user"
    const val AdminChangePassword = "/admin/change-password"

    const val FullAdminAllUsers = Prefix + AdminAllUsers
    const val FullAdminIsAdmin = Prefix + AdminIsAdmin
    const val FullAdminSetAdmin = Prefix + AdminSetAdmin
    const val FullAdminRemoveAdmin = Prefix + AdminRemoveAdmin
    const val FullAdminDeleteUser = Prefix + AdminDeleteUser
    const val FullAdminChangePassword = Prefix + AdminChangePassword

    const val AuthSave = "/auth/save"
    const val AuthLogin = "/auth/login"
    const val AuthAuthenticate = "/auth/authenticate"
    const val AuthExists = "/auth/exists/{userName}"
    const val AuthRegister = "/auth/register"
    const val AuthChangePassword = "/auth/change-password"

    const val FullAuthSave = Prefix + AuthSave
    const val FullAuthLogin = Prefix + AuthLogin
    const val FullAuthAuthenticate = Prefix + AuthAuthenticate
    const val FullAuthExists = Prefix + AuthExists
    const val FullAuthRegister = Prefix + AuthRegister
    const val FullAuthChangePassword = Prefix + AuthChangePassword

    const val UserDeviceAll = "/user-device/all"
    const val UserDeviceSave = "/user-device/save"

    const val FullUserDeviceAll = Prefix + UserDeviceAll
    const val FullUserDeviceSave = Prefix + UserDeviceSave

}