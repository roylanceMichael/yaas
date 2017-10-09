// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.services

import com.google.protobuf.util.JsonFormat;
import org.roylance.common.service.IProtoSerializerService

class AdminService(
        private val restAdmin: IAdminRest,
        private val protoSerializer: IProtoSerializerService): IAdminService {

    override fun change_password_for_user(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAdmin.change_password_for_user(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }

    override fun get_all_users(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAdmin.get_all_users(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }

    override fun is_user_admin(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAdmin.is_user_admin(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }

    override fun set_user_as_admin(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAdmin.set_user_as_admin(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }

    override fun remove_user_as_admin(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAdmin.remove_user_as_admin(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }

    override fun delete_user(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val base64request = protoSerializer.serializeToBase64(request)
        val responseCall = restAdmin.delete_user(base64request)
        val response = responseCall.execute()
        return protoSerializer.deserializeFromBase64(response.body(),
                org.roylance.yaas.YaasModel.UIYaasResponse.getDefaultInstance())
    }
}