package org.roylance.yaas.services

import org.roylance.common.service.IProtoSerializerService

class AuthenticationService(
        private val restAuthentication: IAuthenticationRest,
        private val protoSerializer: IProtoSerializerService): IAuthenticationService {

    override fun exists(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAuthentication.exists(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModels.UIResponse.getDefaultInstance())
    }

    override fun login(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAuthentication.login(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModels.UIResponse.getDefaultInstance())
    }

    override fun authenticate(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAuthentication.authenticate(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModels.UIResponse.getDefaultInstance())
    }

    override fun register(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAuthentication.register(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModels.UIResponse.getDefaultInstance())
    }

    override fun change_password(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAuthentication.change_password(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModels.UIResponse.getDefaultInstance())
    }

    override fun save(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAuthentication.save(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModels.UIResponse.getDefaultInstance())
    }
}