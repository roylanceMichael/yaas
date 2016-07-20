package org.roylance.yaas.services.client

import org.roylance.common.service.IProtoSerializerService
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.rest.IRestAdminService
import org.roylance.yaas.services.IAdminService

class ClientAdminService(
        private val protoSerializerService: IProtoSerializerService,
        private val restAdminService: IRestAdminService): IAdminService {
    override fun changePasswordForUser(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val request64 = this.protoSerializerService.serializeToBase64(request)
        val response64 = this.restAdminService.allUsers(request64).execute()
        return this.protoSerializerService.deserializeFromBase64(response64.body(),
                YaasModels.UIResponse.getDefaultInstance())
    }

    override fun getAllUsers(request: YaasModels.UIRequest): YaasModels.UIAuthentications {
        val request64 = this.protoSerializerService.serializeToBase64(request)
        val response64 = this.restAdminService.allUsers(request64).execute()
        return this.protoSerializerService.deserializeFromBase64(response64.body(),
                YaasModels.UIAuthentications.getDefaultInstance())
    }

    override fun isUserAdmin(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val request64 = this.protoSerializerService.serializeToBase64(request)
        val response64 = this.restAdminService.isAdmin(request64).execute()
        return this.protoSerializerService.deserializeFromBase64(response64.body(),
                YaasModels.UIResponse.getDefaultInstance())
    }

    override fun setUserAsAdmin(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val request64 = this.protoSerializerService.serializeToBase64(request)
        val response64 = this.restAdminService.setAdmin(request64).execute()
        return this.protoSerializerService.deserializeFromBase64(response64.body(),
                YaasModels.UIResponse.getDefaultInstance())    }

    override fun removeUserAsAdmin(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val request64 = this.protoSerializerService.serializeToBase64(request)
        val response64 = this.restAdminService.removeAdmin(request64).execute()
        return this.protoSerializerService.deserializeFromBase64(response64.body(),
                YaasModels.UIResponse.getDefaultInstance())    }

    override fun deleteUser(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val request64 = this.protoSerializerService.serializeToBase64(request)
        val response64 = this.restAdminService.deleteUser(request64).execute()
        return this.protoSerializerService.deserializeFromBase64(response64.body(),
                YaasModels.UIResponse.getDefaultInstance())    }
}