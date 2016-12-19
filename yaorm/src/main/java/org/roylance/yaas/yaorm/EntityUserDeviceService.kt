package org.roylance.yaas.yaorm

import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModel
import org.roylance.yaas.services.IUserDeviceService
import org.roylance.yaorm.YaormModel
import org.roylance.yaorm.services.IEntityBuilder

class EntityUserDeviceService(private val entityProtoBuilder: IEntityBuilder,
                              private val connectionInfo: YaormModel.ConnectionInfo,
                              private val logger: ILogger) : IUserDeviceService {
    override fun all(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasGeneratedMessageBuilder(), YaasIndexes.indexes)
        try {
            val tokenService = EntityTokenService(entityMessageService, this.logger)
            val authenticatedUser = tokenService.validateUser(request.token)
            if (!authenticatedUser.authenticated) {
                return YaasModel.UIYaasResponse.getDefaultInstance()
            }

            val whereClause = YaormModel.WhereClause.newBuilder()
                    .setNameAndProperty(
                            YaormModel.Column.newBuilder()
                                    .setStringHolder(request.user.id)
                                    .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                                            .setName(YaasModel.UserDevice.getDescriptor().findFieldByNumber(YaasModel.UserDevice.USER_FIELD_NUMBER).name)
                                            .setType(YaormModel.ProtobufType.STRING))
                    ).build()

            val items = entityMessageService.where(YaasModel.UserDevice.getDefaultInstance(), whereClause)
            return YaasModel.UIYaasResponse.newBuilder().addAllUserDevices(items).build()
        }
        finally {
            entityMessageService.close()
        }
    }

    override fun save(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasGeneratedMessageBuilder(), YaasIndexes.indexes)
        try {
            val tokenService = EntityTokenService(entityMessageService, this.logger)
            val authenticatedUser = tokenService.validateUser(request.token)
            if (!authenticatedUser.authenticated) {
                return YaasModel.UIYaasResponse.getDefaultInstance()
            }

            val foundUser = entityMessageService.get(YaasModel.User.getDefaultInstance(), authenticatedUser.userName)
            val builder = request.userDevice.toBuilder()
            builder.user = foundUser

            entityMessageService.merge(builder.build())

            return YaasModel.UIYaasResponse.newBuilder().setSuccessful(true).build()
        }
        finally {
            entityMessageService.close()
        }
    }
}