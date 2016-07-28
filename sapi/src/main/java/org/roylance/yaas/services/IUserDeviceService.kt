package org.roylance.yaas.services

interface IUserDeviceService {
	fun save(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
	fun all(request: org.roylance.yaas.YaasModel.UIRequest): org.roylance.yaas.YaasModel.UIResponse
}