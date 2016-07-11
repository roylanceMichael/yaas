package org.roylance.yaas.redis.enums

object CommonKeys {
    const val yaas = "yaas"

    const val AllUsersKey: String = "$yaas/users"
    const val UserAdminsKey: String = "$yaas/admins"

    const val UserTemplate: String = "$yaas/users/"
    const val TokenUserTemplate: String = "$yaas/tokens/user/"
    const val TokenTemplate: String = "$yaas/tokens/token/"
    const val UserDeviceTemplate: String = "$yaas/userDevices/"
}