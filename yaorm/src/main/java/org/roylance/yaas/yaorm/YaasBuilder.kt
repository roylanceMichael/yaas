package org.roylance.yaas.yaorm

import org.roylance.common.service.ILogger
import org.roylance.yaorm.YaormModel
import org.roylance.yaorm.services.proto.IEntityMessageService
import org.roylance.yaorm.services.proto.IEntityProtoBuilder

class YaasBuilder(
        entityProtoBuilder: IEntityProtoBuilder,
        connectionInfo: YaormModel.ConnectionInfo,
        logger: ILogger): IYaasBuilder {

    private val actualAuthService: EntityAuthenticationService
    private val actualAdminService: EntityAdminService
    private val actualUserDeviceService: EntityUserDeviceService

    private val messageService: IEntityMessageService

    init {
        this.messageService = entityProtoBuilder.buildMessageService(connectionInfo,
                YaasGeneratedMessageBuilder(),
                YaasIndexes.indexes)

        val tokenService = EntityTokenService(messageService, logger)
        this.actualAuthService = EntityAuthenticationService(messageService, tokenService, logger)
        this.actualAdminService = EntityAdminService(messageService, tokenService, logger)
        this.actualUserDeviceService = EntityUserDeviceService(messageService, tokenService, logger)

    }

    override val authService: EntityAuthenticationService
        get() = this.actualAuthService
    override val adminService: EntityAdminService
        get() = this.actualAdminService
    override val userDeviceService: EntityUserDeviceService
        get() = this.actualUserDeviceService

    override fun close() {
        this.messageService.close()
    }
}