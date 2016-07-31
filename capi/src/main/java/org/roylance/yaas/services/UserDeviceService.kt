package org.roylance.yaas.services

import org.roylance.common.service.IProtoSerializerService

class UserDeviceService(
        private val restUserDevice: IUserDeviceRest,
        private val protoSerializer: IProtoSerializerService): IUserDeviceService {

    override fun save(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restUserDevice.save(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }

    override fun all(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restUserDevice.all(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }
}