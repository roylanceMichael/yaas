package org.roylance.yaas.yaorm

import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModels
import org.roylance.yaas.services.IUserDeviceService
import org.roylance.yaorm.models.YaormModel
import org.roylance.yaorm.services.proto.IEntityMessageService

class EntityUserDeviceService(private val entityMessageService: IEntityMessageService,
                              private val tokenService: IServerTokenService,
                              private val logger: ILogger) : IUserDeviceService {
    override fun all(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        if (!authenticatedUser.authenticated) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        val whereClause = YaormModel.WhereClause.newBuilder()
                .setNameAndProperty(
                        YaormModel.Column.newBuilder()
                                .setStringHolder(request.user.id)
                                .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                                        .setName(YaasModels.UserDevice.getDescriptor().findFieldByNumber(YaasModels.UserDevice.USER_FIELD_NUMBER).name)
                                        .setType(YaormModel.ProtobufType.STRING))
                ).build()

        val items = this.entityMessageService.where(YaasModels.UserDevice.getDefaultInstance(), whereClause)
        return YaasModels.UIResponse.newBuilder().addAllUserDevices(items).build()
    }

    override fun save(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        if (!authenticatedUser.authenticated) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        val foundUser = this.entityMessageService.get(YaasModels.User.getDefaultInstance(), authenticatedUser.userName)
        val builder = request.userDevice.toBuilder()
        builder.user = foundUser

        this.entityMessageService.merge(builder.build())

        return YaasModels.UIResponse.newBuilder().setSuccessful(true).build()
    }
}