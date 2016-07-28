package org.roylance.yaas.services

interface IAdminService {
	fun change_password_for_user(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
	fun get_all_users(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
	fun is_user_admin(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
	fun set_user_as_admin(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
	fun remove_user_as_admin(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
	fun delete_user(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
}