// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.services

import com.google.protobuf.util.JsonFormat;

class AdminService(
        private val restAdmin: IAdminRest): IAdminService {
        private val parser = JsonFormat.parser()
        private val printer = JsonFormat.printer()

    override fun change_password_for_user(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restAdmin.change_password_for_user(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }

    override fun get_all_users(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restAdmin.get_all_users(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }

    override fun is_user_admin(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restAdmin.is_user_admin(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }

    override fun set_user_as_admin(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restAdmin.set_user_as_admin(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }

    override fun remove_user_as_admin(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restAdmin.remove_user_as_admin(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }

    override fun delete_user(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restAdmin.delete_user(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }
}