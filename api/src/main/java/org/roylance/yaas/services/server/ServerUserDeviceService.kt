package org.roylance.yaas.services.server

import org.roylance.common.service.ICallback
import org.roylance.common.service.IProtoSerializerService
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.rest.IRestUserDeviceService
import org.roylance.yaas.services.IUserDeviceService
import retrofit2.Call

class ServerUserDeviceService(
        private val protoSerializerService: IProtoSerializerService,
        private val userDeviceService: IUserDeviceService,
        private val valueCallback: ICallback<String>
): IRestUserDeviceService {
    override fun save(requestModel: String): Call<String>? {
        val request = this.protoSerializerService.deserializeFromBase64(requestModel, YaasModels.UIRequest.getDefaultInstance())
        val response = this.userDeviceService.save(request)
        val response64 = this.protoSerializerService.serializeToBase64(response)
        this.valueCallback.callback(response64)

        return null
    }

    override fun all(requestModel: String): Call<String>? {
        val request = this.protoSerializerService.deserializeFromBase64(requestModel, YaasModels.UIRequest.getDefaultInstance())
        val response = this.userDeviceService.all(request)
        val response64 = this.protoSerializerService.serializeToBase64(response)
        this.valueCallback.callback(response64)

        return null
    }
}