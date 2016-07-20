package org.roylance.yaas.services

import org.roylance.yaas.models.YaasModels

interface IAdminService {
    fun changePasswordForUser(request: YaasModels.UIRequest): YaasModels.UIResponse
    fun getAllUsers(request: YaasModels.UIRequest): YaasModels.UIAuthentications
    fun isUserAdmin(request: YaasModels.UIRequest): YaasModels.UIResponse
    fun setUserAsAdmin(request: YaasModels.UIRequest): YaasModels.UIResponse
    fun removeUserAsAdmin(request: YaasModels.UIRequest): YaasModels.UIResponse
    fun deleteUser(request: YaasModels.UIRequest): YaasModels.UIResponse
}