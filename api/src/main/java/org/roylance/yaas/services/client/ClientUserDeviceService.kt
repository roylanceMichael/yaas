package org.roylance.yaas.services.client

import org.roylance.common.service.IProtoSerializerService
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.rest.IRestUserDeviceService
import org.roylance.yaas.services.IUserDeviceService

class ClientUserDeviceService(
        private val protoSerializerService: IProtoSerializerService,
        private val restUserDeviceService: IRestUserDeviceService
): IUserDeviceService {
    override fun save(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val request64 = this.protoSerializerService.serializeToBase64(request)
        val response64 = this.restUserDeviceService.save(request64).execute()
        return this.protoSerializerService.deserializeFromBase64(response64.body(),
                YaasModels.UIResponse.getDefaultInstance())
    }

    override fun all(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val request64 = this.protoSerializerService.serializeToBase64(request)
        val response64 = this.restUserDeviceService.all(request64).execute()
        return this.protoSerializerService.deserializeFromBase64(response64.body(),
                YaasModels.UIResponse.getDefaultInstance())
    }
}