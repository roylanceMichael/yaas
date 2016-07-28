package org.roylance.yaas.services

import org.roylance.common.service.IProtoSerializerService

class UserDeviceService(
        private val restUserDevice: IUserDeviceRest,
        private val protoSerializer: IProtoSerializerService): IUserDeviceService {

    override fun save(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restUserDevice.save(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModels.UIResponse.getDefaultInstance())
    }

    override fun all(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restUserDevice.all(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModels.UIResponse.getDefaultInstance())
    }
}