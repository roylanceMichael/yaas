package org.roylance.yaas.services

import org.roylance.yaas.models.YaasModels

interface IUserDeviceService {
    fun save(request: YaasModels.UIRequest): YaasModels.UIResponse
    fun all(request: YaasModels.UIRequest): YaasModels.UIResponse
}