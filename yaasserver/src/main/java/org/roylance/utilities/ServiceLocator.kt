// This file was auto-generated, but can be altered. It will not be overwritten.
package org.roylance.utilities

object ServiceLocator: IServiceLocator {
    override val protobufSerializerService: org.roylance.common.service.IProtoSerializerService
        get() = org.roylance.common.service.ProtoSerializerService(org.roylance.services.Base64Service())
    override val adminService: org.roylance.services.IAdminService
        get() = throw UnsupportedOperationException()
    override val authenticationService: org.roylance.services.IAuthenticationService
        get() = throw UnsupportedOperationException()
    override val userDeviceService: org.roylance.services.IUserDeviceService
        get() = throw UnsupportedOperationException()

}
