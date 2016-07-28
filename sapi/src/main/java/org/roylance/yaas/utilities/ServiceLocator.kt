package org.roylance.yaas.utilities

object ServiceLocator: IServiceLocator {
    override val protobufSerializerService: org.roylance.common.service.IProtoSerializerService
        get() = throw UnsupportedOperationException()
    override val adminService: org.roylance.yaas.services.IAdminService
        get() = throw UnsupportedOperationException()

    override val authenticationService: org.roylance.yaas.services.IAuthenticationService
        get() = throw UnsupportedOperationException()

    override val userDeviceService: org.roylance.yaas.services.IUserDeviceService
        get() = throw UnsupportedOperationException()

}
