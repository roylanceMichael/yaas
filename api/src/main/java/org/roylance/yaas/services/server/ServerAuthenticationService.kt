package org.roylance.yaas.services.server

import org.roylance.common.service.ICallback
import org.roylance.common.service.IProtoSerializerService
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.rest.IRestAuthenticationService
import org.roylance.yaas.services.IAuthenticationService
import retrofit2.Call

class ServerAuthenticationService(
        private val protoSerializerService: IProtoSerializerService,
        private val authenticationService: IAuthenticationService,
        private val valueCallback: ICallback<String>
):IRestAuthenticationService {
    override fun authenticate(base64Request: String): Call<String>? {
        try {
            val request = this.protoSerializerService.deserializeFromBase64(base64Request, YaasModels.UIRequest.getDefaultInstance())
            val response = this.authenticationService.login(request)
            val response64 = this.protoSerializerService.serializeToBase64(response)
            this.valueCallback.callback(response64)
        }
        catch(e: Exception) {
            this.valueCallback.callback(this.protoSerializerService.serializeToBase64(YaasModels.UIAuthentication.getDefaultInstance()))
        }

        return null
    }

    override fun save(base64Request: String): Call<String>? {
        try {
            val request = this.protoSerializerService.deserializeFromBase64(base64Request, YaasModels.UIRequest.getDefaultInstance())
            val response = this.authenticationService.save(request)
            val response64 = this.protoSerializerService.serializeToBase64(response)
            this.valueCallback.callback(response64)
        }
        catch(e: Exception) {
            this.valueCallback.callback(this.protoSerializerService.serializeToBase64(YaasModels.UIResponse.getDefaultInstance()))
        }

        // todo: less hacky way to call this
        return null
    }

    override fun login(base64User: String): Call<String>? {
        try {
            val user = this.protoSerializerService.deserializeFromBase64(base64User, YaasModels.User.getDefaultInstance())
            val response = this.authenticationService.login(user)
            val response64 = this.protoSerializerService.serializeToBase64(response)
            this.valueCallback.callback(response64)
        }
        catch(e: Exception) {
            this.valueCallback.callback(this.protoSerializerService.serializeToBase64(YaasModels.UIAuthentication.getDefaultInstance()))
        }

        return null
    }

    override fun exists(userName: String): Call<String>? {
        try {
            val response = this.authenticationService.exists(userName)
            this.valueCallback.callback(response.toString())
        }
        catch(e: Exception) {
            this.valueCallback.callback(true.toString())
        }

        return null
    }

    override fun register(base64User: String): Call<String>? {
        try {
            val user = this.protoSerializerService.deserializeFromBase64(base64User, YaasModels.User.getDefaultInstance())
            val response = this.authenticationService.register(user)
            val response64 = this.protoSerializerService.serializeToBase64(response)
            this.valueCallback.callback(response64)
        }
        catch(e: Exception) {
            this.valueCallback.callback(this.protoSerializerService.serializeToBase64(YaasModels.UIAuthentication.getDefaultInstance()))
        }

        return null
    }

    override fun changePassword(base64ChangePassword: String): Call<String>? {
        try {
            val user = this.protoSerializerService.deserializeFromBase64(base64ChangePassword,
                    YaasModels.UIChangePassword.getDefaultInstance())
            val response = this.authenticationService.changePassword(user)
            val response64 = this.protoSerializerService.serializeToBase64(response)
            this.valueCallback.callback(response64)
        }
        catch(e: Exception) {
            this.valueCallback.callback(this.protoSerializerService.serializeToBase64(YaasModels.UIAuthentication.getDefaultInstance()))
        }
        
        return null
    }
}