// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.services

import com.google.protobuf.util.JsonFormat;
import org.roylance.common.service.IProtoSerializerService

class AuthenticationService(
        private val restAuthentication: IAuthenticationRest,
        private val protoSerializer: IProtoSerializerService): IAuthenticationService {

    override fun exists(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAuthentication.exists(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }

    override fun login(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAuthentication.login(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }

    override fun authenticate(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAuthentication.authenticate(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }

    override fun register(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAuthentication.register(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }

    override fun change_password(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAuthentication.change_password(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }

    override fun save(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAuthentication.save(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }
}