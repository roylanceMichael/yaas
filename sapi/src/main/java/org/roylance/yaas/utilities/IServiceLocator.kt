package org.roylance.yaas.utilities

interface IServiceLocator {
    val protobufSerializerService: org.roylance.common.service.IProtoSerializerService
    val adminService: org.roylance.yaas.services.IAdminService
    val authenticationService: org.roylance.yaas.services.IAuthenticationService
    val userDeviceService: org.roylance.yaas.services.IUserDeviceService

}
