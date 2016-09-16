// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
package org.roylance.yaas.services

interface IAdminService {
	fun change_password_for_user(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse
	fun get_all_users(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse
	fun is_user_admin(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse
	fun set_user_as_admin(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse
	fun remove_user_as_admin(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse
	fun delete_user(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse
}