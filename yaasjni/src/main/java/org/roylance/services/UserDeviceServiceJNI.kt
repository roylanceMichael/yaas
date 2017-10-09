// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.services;

class UserDeviceServiceJNI: IUserDeviceService {
    private val bridge = UserDeviceJNIBridge()
	override fun save(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.save(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
	override fun all(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.all(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
}
