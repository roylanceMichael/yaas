package org.roylance.yaas.services.server

import org.roylance.common.service.ICallback
import org.roylance.common.service.IProtoSerializerService
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.rest.IRestAdminService
import org.roylance.yaas.services.IAdminService
import retrofit2.Call

class ServerAdminService(
        private val protoSerializerService: IProtoSerializerService,
        private val adminService: IAdminService,
        private val valueCallback: ICallback<String>
): IRestAdminService {
    override fun allUsers(base64Request: String): Call<String>? {
        val request = this.protoSerializerService.deserializeFromBase64(base64Request, YaasModels.UIRequest.getDefaultInstance())
        val response = this.adminService.getAllUsers(request)
        val response64 = this.protoSerializerService.serializeToBase64(response)
        this.valueCallback.callback(response64)

        return null
    }

    override fun isAdmin(base64Request: String): Call<String>? {
        val request = this.protoSerializerService.deserializeFromBase64(base64Request, YaasModels.UIRequest.getDefaultInstance())
        val response = this.adminService.isUserAdmin(request)
        val response64 = this.protoSerializerService.serializeToBase64(response)
        this.valueCallback.callback(response64)

        return null
    }

    override fun setAdmin(base64Request: String): Call<String>? {
        val request = this.protoSerializerService.deserializeFromBase64(base64Request, YaasModels.UIRequest.getDefaultInstance())
        val response = this.adminService.setUserAsAdmin(request)
        val response64 = this.protoSerializerService.serializeToBase64(response)
        this.valueCallback.callback(response64)

        return null
    }

    override fun removeAdmin(base64Request: String): Call<String>? {
        val request = this.protoSerializerService.deserializeFromBase64(base64Request, YaasModels.UIRequest.getDefaultInstance())
        val response = this.adminService.removeUserAsAdmin(request)
        val response64 = this.protoSerializerService.serializeToBase64(response)
        this.valueCallback.callback(response64)

        return null
    }

    override fun deleteUser(base64Request: String): Call<String>? {
        val request = this.protoSerializerService.deserializeFromBase64(base64Request, YaasModels.UIRequest.getDefaultInstance())
        val response = this.adminService.deleteUser(request)
        val response64 = this.protoSerializerService.serializeToBase64(response)
        this.valueCallback.callback(response64)

        return null
    }

    override fun changePassword(base64Request: String): Call<String>? {
        val request = this.protoSerializerService.deserializeFromBase64(base64Request, YaasModels.UIRequest.getDefaultInstance())
        val response = this.adminService.changePasswordForUser(request)
        val response64 = this.protoSerializerService.serializeToBase64(response)
        this.valueCallback.callback(response64)

        return null
    }
}