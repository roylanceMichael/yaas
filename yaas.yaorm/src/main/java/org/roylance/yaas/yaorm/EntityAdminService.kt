package org.roylance.yaas.yaorm

import org.apache.commons.codec.digest.DigestUtils
import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModel
import org.roylance.services.IAdminService
import org.roylance.yaorm.YaormModel
import org.roylance.yaorm.services.IEntityBuilder

class EntityAdminService(
        private val entityProtoBuilder: IEntityBuilder,
        private val connectionInfo: YaormModel.ConnectionInfo,
        private val logger: ILogger
): IAdminService {
    override fun change_password_for_user(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasIndexes.indexes)
        try {
            val tokenService = EntityTokenService(entityMessageService, this.logger)

            val authenticatedUser = tokenService.validateUser(request.token)
            if (!authenticatedUser.isAdmin) {
                return YaasModel.UIYaasResponse.getDefaultInstance()
            }

            val foundUser = entityMessageService.get(YaasModel.User.getDefaultInstance(), request.user.id) ?: return YaasModel.UIYaasResponse.getDefaultInstance()

            val builder = foundUser.toBuilder()
            builder.password = DigestUtils.md2Hex(request.user.password)

            entityMessageService.merge(builder.build())
            return YaasModel.UIYaasResponse.newBuilder().setSuccessful(true).build()
        }
        finally {
            entityMessageService.close()
        }
    }

    override fun delete_user(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasIndexes.indexes)
        try {
            val tokenService = EntityTokenService(entityMessageService, this.logger)

            val authenticatedUser = tokenService.validateUser(request.token)
            if (!authenticatedUser.isAdmin) {
                return YaasModel.UIYaasResponse.getDefaultInstance()
            }

            entityMessageService.delete(request.user)

            val whereClause = YaormModel.WhereClause.newBuilder()
                    .setNameAndProperty(
                            YaormModel.Column.newBuilder()
                                    .setStringHolder(request.user.id)
                                    .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                                            .setName(YaasModel.Token.getDescriptor().findFieldByNumber(YaasModel.Token.USER_ID_FIELD_NUMBER).name)
                                            .setType(YaormModel.ProtobufType.STRING))
                    ).build()

            val tokens = entityMessageService.where(YaasModel.Token.getDefaultInstance(), whereClause)
            tokens.forEach {
                entityMessageService.delete(it)
            }

            return YaasModel.UIYaasResponse.newBuilder().setSuccessful(true).build()
        }
        finally {
            entityMessageService.close()
        }
    }

    override fun get_all_users(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasIndexes.indexes)
        try {
            val tokenService = EntityTokenService(entityMessageService, this.logger)

            val authenticatedUser = tokenService.validateUser(request.token)
            if (!authenticatedUser.isAdmin) {
                return YaasModel.UIYaasResponse.getDefaultInstance()
            }

            val users = entityMessageService
                    .getMany(YaasModel.User.getDefaultInstance(),
                            request.limit,
                            request.offset)

            val mappedUsers = users.map { user ->
                YaasModel.UIAuthentication.newBuilder()
                        .setUserName(user.userName)
                        .setDisplay(user.display)
                        .setIsAdmin(user.rolesList.any { it.number.equals(YaasModel.UserRole.ADMIN.number) })
                        .build()
            }

            return YaasModel.UIYaasResponse.newBuilder()
                    .setUsers(YaasModel.UIAuthentications.newBuilder()
                            .addAllUsers(mappedUsers).build()).build()
        }
        finally {
            entityMessageService.close()
        }
    }

    override fun is_user_admin(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasIndexes.indexes)
        try {
            val tokenService = EntityTokenService(entityMessageService, this.logger)
            val authenticatedUser = tokenService.validateUser(request.token)
            return YaasModel.UIYaasResponse.newBuilder().setIsAdmin(authenticatedUser.isAdmin).setAuthenticated(true).build()
        }
        finally {
            entityMessageService.close()
        }
    }

    override fun remove_user_as_admin(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasIndexes.indexes)
        try {
            val tokenService = EntityTokenService(entityMessageService, this.logger)
            val authenticatedUser = tokenService.validateUser(request.token)
            if (!authenticatedUser.isAdmin) {
                return YaasModel.UIYaasResponse.getDefaultInstance()
            }

            val foundUser = entityMessageService.get(YaasModel.User.getDefaultInstance(), request.user.id)
            if (foundUser != null) {
                val builder = foundUser.toBuilder()
                builder.clearRoles()
                entityMessageService.merge(builder.build())
            }

            return YaasModel.UIYaasResponse.newBuilder().setSuccessful(true).build()
        }
        finally {
            entityMessageService.close()
        }
    }

    override fun set_user_as_admin(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasIndexes.indexes)
        try {
            val tokenService = EntityTokenService(entityMessageService, this.logger)
            val authenticatedUser = tokenService.validateUser(request.token)

            if (authenticatedUser.isAdmin) {
                val existingUser = entityMessageService.get(YaasModel.User.getDefaultInstance(), request.user.id)
                        ?: return YaasModel.UIYaasResponse.newBuilder().setSuccessful(false).build()

                if (existingUser.rolesList.any { it == YaasModel.UserRole.ADMIN }) {
                    return YaasModel.UIYaasResponse.newBuilder().setSuccessful(false).build()
                }

                val builder = existingUser.toBuilder()
                builder.addRoles(YaasModel.UserRole.ADMIN)
                entityMessageService.merge(builder.build())
            }

            return YaasModel.UIYaasResponse.newBuilder().setSuccessful(true).build()
        }
        finally {
            entityMessageService.close()
        }
    }
}