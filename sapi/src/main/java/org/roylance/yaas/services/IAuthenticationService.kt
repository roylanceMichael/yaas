package org.roylance.yaas.services

interface IAuthenticationService {
	fun exists(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse
	fun login(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse
	fun authenticate(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse
	fun register(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse
	fun change_password(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse
	fun save(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse
}