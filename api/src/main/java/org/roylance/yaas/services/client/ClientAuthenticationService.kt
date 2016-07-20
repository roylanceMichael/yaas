package org.roylance.yaas.services.client

import org.roylance.common.service.IProtoSerializerService
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.rest.IRestAuthenticationService
import org.roylance.yaas.services.IAuthenticationService

class ClientAuthenticationService(
        private val serializerService: IProtoSerializerService,
        private val authenticationService: IRestAuthenticationService): IAuthenticationService {
    override fun login(request: YaasModels.UIRequest): YaasModels.UIAuthentication {
        val request64 = this.serializerService.serializeToBase64(request)
        val response64 = this.authenticationService.save(request64).execute()
        return this.serializerService.deserializeFromBase64(response64.body(),
                YaasModels.UIAuthentication.getDefaultInstance())
    }

    override fun save(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val request64 = this.serializerService.serializeToBase64(request)
        val response64 = this.authenticationService.save(request64).execute()
        return this.serializerService.deserializeFromBase64(response64.body(),
                YaasModels.UIResponse.getDefaultInstance())
    }

    override fun login(user: YaasModels.User): YaasModels.UIAuthentication {
        val user64 = this.serializerService.serializeToBase64(user)
        val auth64 = this.authenticationService.login(user64).execute()
        return this.serializerService.deserializeFromBase64(auth64.body(),
                YaasModels.UIAuthentication.getDefaultInstance())
    }

    override fun exists(userName: String): Boolean {
        val response = this.authenticationService.exists(userName).execute()
        return response.body().toLowerCase().equals("true")
    }

    override fun register(user: YaasModels.User): YaasModels.UIAuthentication {
        val user64 = this.serializerService.serializeToBase64(user)
        val auth64 = this.authenticationService.register(user64).execute()
        return this.serializerService.deserializeFromBase64(auth64.body(),
                YaasModels.UIAuthentication.getDefaultInstance())
    }

    override fun changePassword(model: YaasModels.UIChangePassword): YaasModels.UIAuthentication {
        val model64 = this.serializerService.serializeToBase64(model)
        val auth64 = this.authenticationService.changePassword(model64).execute()
        return this.serializerService.deserializeFromBase64(auth64.body(),
                YaasModels.UIAuthentication.getDefaultInstance())
    }
}