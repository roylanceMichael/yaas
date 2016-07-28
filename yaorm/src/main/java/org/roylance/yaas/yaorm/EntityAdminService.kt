package org.roylance.yaas.yaorm

import org.apache.commons.codec.digest.DigestUtils
import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModels
import org.roylance.yaas.services.IAdminService
import org.roylance.yaorm.models.YaormModel
import org.roylance.yaorm.services.proto.IEntityMessageService

class EntityAdminService(
        private val entityMessageService: IEntityMessageService,
        private val tokenService: IServerTokenService,
        private val logger: ILogger
): IAdminService {
    override fun change_password_for_user(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        if (!authenticatedUser.isAdmin) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        val foundUser = this.entityMessageService.get(YaasModels.User.getDefaultInstance(), request.user.id) ?: return YaasModels.UIResponse.getDefaultInstance()

        val builder = foundUser.toBuilder()
        builder.password = DigestUtils.md2Hex(request.user.password)

        this.entityMessageService.merge(builder.build())
        return YaasModels.UIResponse.newBuilder().setSuccessful(true).build()
    }

    override fun delete_user(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        if (!authenticatedUser.isAdmin) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        this.entityMessageService.delete(request.user)

        val whereClause = YaormModel.WhereClause.newBuilder()
                .setNameAndProperty(
                        YaormModel.Column.newBuilder()
                                .setStringHolder(request.user.id)
                                .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                                        .setName(YaasModels.Token.getDescriptor().findFieldByNumber(YaasModels.Token.USER_ID_FIELD_NUMBER).name)
                                        .setType(YaormModel.ProtobufType.STRING))
                ).build()

        val tokens = this.entityMessageService.where(YaasModels.Token.getDefaultInstance(), whereClause)
        tokens.forEach {
            this.entityMessageService.delete(it)
        }

        return YaasModels.UIResponse.newBuilder().setSuccessful(true).build()
    }

    override fun get_all_users(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        if (!authenticatedUser.isAdmin) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        val users = this.entityMessageService
                .getMany(YaasModels.User.getDefaultInstance(),
                        request.limit,
                        request.offset)

        val mappedUsers = users.map { user ->
            YaasModels.UIAuthentication.newBuilder()
                    .setUserName(user.userName)
                    .setDisplay(user.display)
                    .setIsAdmin(user.rolesList.any { it.number.equals(YaasModels.UserRole.ADMIN.number) })
                    .build()
        }

        return YaasModels.UIResponse.newBuilder().setUsers(YaasModels.UIAuthentications.newBuilder().addAllUsers(mappedUsers).build()).build()
    }

    override fun is_user_admin(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        return YaasModels.UIResponse.newBuilder().setIsAdmin(authenticatedUser.isAdmin).setAuthenticated(true).build()
    }

    override fun remove_user_as_admin(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        if (!authenticatedUser.isAdmin) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        val foundUser = this.entityMessageService.get(YaasModels.User.getDefaultInstance(), request.user.id)
        if (foundUser != null) {
            val builder = foundUser.toBuilder()
            builder.clearRoles()

            this.entityMessageService.merge(builder.build())
        }

        return YaasModels.UIResponse.newBuilder().setSuccessful(true).build()
    }

    override fun set_user_as_admin(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)

        if (authenticatedUser.isAdmin) {
            val builder = request.user.toBuilder()
            builder.addRoles(YaasModels.UserRole.ADMIN)
            this.entityMessageService.merge(builder.build())
        }

        return YaasModels.UIResponse.newBuilder().setSuccessful(true).build()
    }
}