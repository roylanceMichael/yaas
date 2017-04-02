// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.services;

class AdminServiceJNI: IAdminService {
    private val bridge = AdminJNIBridge()
	override fun change_password_for_user(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.change_password_for_user(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
	override fun get_all_users(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.get_all_users(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
	override fun is_user_admin(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.is_user_admin(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
	override fun set_user_as_admin(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.set_user_as_admin(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
	override fun remove_user_as_admin(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.remove_user_as_admin(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
	override fun delete_user(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse {
		val bytes = request.toByteArray()
		val result = this.bridge.delete_user(bytes)
		return org.roylance.yaas.YaasModel.UIYaasResponse.parseFrom(result)
	}
}
