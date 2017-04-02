// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.services;

class AuthenticationServiceJNI: IAuthenticationService {
    private val bridge = AuthenticationJNIBridge()
	override fun exists(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.exists(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
	override fun login(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.login(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
	override fun authenticate(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.authenticate(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
	override fun register(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.register(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
	override fun change_password(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.change_password(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
	override fun save(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.save(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
}
