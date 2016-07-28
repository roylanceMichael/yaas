package org.roylance.yaas.services

interface IUserDeviceService {
	fun save(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse
	fun all(request: org.roylance.yaas.YaasModels.UIRequest): org.roylance.yaas.YaasModels.UIResponse
}