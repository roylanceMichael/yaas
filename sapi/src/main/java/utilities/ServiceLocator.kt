// This file was auto-generated, but can be altered. It will not be overwritten.
package .utilities

object ServiceLocator: IServiceLocator {
    override val protobufSerializerService: org.roylance.common.service.IProtoSerializerService
        get() = org.roylance.common.service.ProtoSerializerService(.services.Base64Service())
    override val adminService: .services.IAdminService
        get() = throw UnsupportedOperationException()
    override val authenticationService: .services.IAuthenticationService
        get() = throw UnsupportedOperationException()
    override val userDeviceService: .services.IUserDeviceService
        get() = throw UnsupportedOperationException()

}
