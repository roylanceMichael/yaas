package org.roylance.yaas.yaorm

import org.apache.commons.codec.digest.DigestUtils
import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModel
import org.roylance.yaas.services.IAdminService
import org.roylance.yaorm.YaormModel
import org.roylance.yaorm.services.proto.IEntityMessageService

class EntityAdminService(
        private val entityMessageService: IEntityMessageService,
        private val tokenService: IServerTokenService,
        private val logger: ILogger
): IAdminService {
    override fun change_password_for_user(request: YaasModel.UIRequest): YaasModel.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        if (!authenticatedUser.isAdmin) {
            return YaasModel.UIResponse.getDefaultInstance()
        }

        val foundUser = this.entityMessageService.get(YaasModel.User.getDefaultInstance(), request.user.id) ?: return YaasModel.UIResponse.getDefaultInstance()

        val builder = foundUser.toBuilder()
        builder.password = DigestUtils.md2Hex(request.user.password)

        this.entityMessageService.merge(builder.build())
        return YaasModel.UIResponse.newBuilder().setSuccessful(true).build()
    }

    override fun delete_user(request: YaasModel.UIRequest): YaasModel.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        if (!authenticatedUser.isAdmin) {
            return YaasModel.UIResponse.getDefaultInstance()
        }

        this.entityMessageService.delete(request.user)

        val whereClause = YaormModel.WhereClause.newBuilder()
                .setNameAndProperty(
                        YaormModel.Column.newBuilder()
                                .setStringHolder(request.user.id)
                                .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                                        .setName(YaasModel.Token.getDescriptor().findFieldByNumber(YaasModel.Token.USER_ID_FIELD_NUMBER).name)
                                        .setType(YaormModel.ProtobufType.STRING))
                ).build()

        val tokens = this.entityMessageService.where(YaasModel.Token.getDefaultInstance(), whereClause)
        tokens.forEach {
            this.entityMessageService.delete(it)
        }

        return YaasModel.UIResponse.newBuilder().setSuccessful(true).build()
    }

    override fun get_all_users(request: YaasModel.UIRequest): YaasModel.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        if (!authenticatedUser.isAdmin) {
            return YaasModel.UIResponse.getDefaultInstance()
        }

        val users = this.entityMessageService
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

        return YaasModel.UIResponse.newBuilder()
                .setUsers(YaasModel.UIAuthentications.newBuilder()
                .addAllUsers(mappedUsers).build()).build()
    }

    override fun is_user_admin(request: YaasModel.UIRequest): YaasModel.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        return YaasModel.UIResponse.newBuilder().setIsAdmin(authenticatedUser.isAdmin).setAuthenticated(true).build()
    }

    override fun remove_user_as_admin(request: YaasModel.UIRequest): YaasModel.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)
        if (!authenticatedUser.isAdmin) {
            return YaasModel.UIResponse.getDefaultInstance()
        }

        val foundUser = this.entityMessageService.get(YaasModel.User.getDefaultInstance(), request.user.id)
        if (foundUser != null) {
            val builder = foundUser.toBuilder()
            builder.clearRoles()

            this.entityMessageService.merge(builder.build())
        }

        return YaasModel.UIResponse.newBuilder().setSuccessful(true).build()
    }

    override fun set_user_as_admin(request: YaasModel.UIRequest): YaasModel.UIResponse {
        val authenticatedUser = this.tokenService.validateUser(request.token)

        if (authenticatedUser.isAdmin) {
            val builder = request.user.toBuilder()
            builder.addRoles(YaasModel.UserRole.ADMIN)
            this.entityMessageService.merge(builder.build())
        }

        return YaasModel.UIResponse.newBuilder().setSuccessful(true).build()
    }
}