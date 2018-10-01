// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.services

import com.google.protobuf.util.JsonFormat;
import org.roylance.common.service.IProtoSerializerService

class UserDeviceService(
        private val restUserDevice: IUserDeviceRest,
        private val protoSerializer: IProtoSerializerService): IUserDeviceService {

    override fun save(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restUserDevice.save(base64request)
        val response = responseCall.execute()
        response.body()?.let {
            return protoSerializer.deserializeFromBase64(it,
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
        }
        return protoSerializer.deserializeFromBase64("",
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }

    override fun all(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restUserDevice.all(base64request)
        val response = responseCall.execute()
        response.body()?.let {
            return protoSerializer.deserializeFromBase64(it,
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
        }
        return protoSerializer.deserializeFromBase64("",
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }
}