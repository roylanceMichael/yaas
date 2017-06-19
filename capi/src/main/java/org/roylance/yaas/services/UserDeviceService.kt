// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.services

import com.google.protobuf.util.JsonFormat;

class UserDeviceService(
        private val restUserDevice: IUserDeviceRest): IUserDeviceService {
        private val parser = JsonFormat.parser()
        private val printer = JsonFormat.printer()

    override fun save(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restUserDevice.save(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }

    override fun all(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
        val jsonrequest = this.printer.print(request)
        val responseCall = restUserDevice.all(jsonrequest)
        val response = responseCall.execute()
        val actualResponse = org.roylance.yaas.YaasModel.UIYaasResponse.newBuilder()
        this.parser.merge(response.body(), actualResponse);
        return actualResponse.build()
    }
}