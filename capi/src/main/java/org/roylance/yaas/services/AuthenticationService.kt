// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.services

import com.google.protobuf.util.JsonFormat;

class AuthenticationService(
        private val restAuthentication: IAuthenticationRest): IAuthenticationService {
        private val parser = JsonFormat.parser()
        private val printer = JsonFormat.printer()

    override fun exists(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restAuthentication.exists(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }

    override fun login(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restAuthentication.login(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }

    override fun authenticate(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restAuthentication.authenticate(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }

    override fun register(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restAuthentication.register(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }

    override fun change_password(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restAuthentication.change_password(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }

    override fun save(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restAuthentication.save(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }
}