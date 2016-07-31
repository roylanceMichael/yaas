package org.roylance.yaas.services

interface IUserDeviceService {
	fun save(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse
	fun all(request: org.roylance.yaas.YaasModel.UIYaasRequest): org.roylance.yaas.YaasModel.UIYaasResponse
}