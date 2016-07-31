package org.roylance.yaas.yaorm

import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModel
import org.roylance.yaas.services.IUserDeviceService
import org.roylance.yaorm.YaormModel
import org.roylance.yaorm.services.proto.IEntityMessageService

class EntityUserDeviceService(private val entityMessageService: IEntityMessageService,
                              private val tokenService: IServerTokenService,
                              private val logger: ILogger) : IUserDeviceService {
    override fun all(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
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

        val items = this.entityMessageService.where(YaasModel.UserDevice.getDefaultInstance(), whereClause)
        return YaasModel.UIYaasResponse.newBuilder().addAllUserDevices(items).build()
    }

    override fun save(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        if (!authenticatedUser.authenticated) {
            return YaasModel.UIYaasResponse.getDefaultInstance()
        }

        val foundUser = this.entityMessageService.get(YaasModel.User.getDefaultInstance(), authenticatedUser.userName)
        val builder = request.userDevice.toBuilder()
        builder.user = foundUser

        this.entityMessageService.merge(builder.build())

        return YaasModel.UIYaasResponse.newBuilder().setSuccessful(true).build()
    }
}