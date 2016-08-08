package org.roylance.yaas.yaorm

interface IYaasBuilder: AutoCloseable {
    val authService: EntityAuthenticationService
    val adminService: EntityAdminService
    val userDeviceService: EntityUserDeviceService
}