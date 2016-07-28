package org.roylance.yaas.services

interface IAuthenticationService {
	fun exists(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
	fun login(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
	fun authenticate(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
	fun register(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
	fun change_password(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
	fun save(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
}