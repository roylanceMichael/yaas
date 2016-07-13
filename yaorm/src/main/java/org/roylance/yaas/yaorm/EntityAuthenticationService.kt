package org.roylance.yaas.yaorm

import org.apache.commons.codec.digest.DigestUtils
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.services.IAuthenticationService
import org.roylance.yaas.services.ILogger
import org.roylance.yaas.services.ITokenService
import org.roylance.yaorm.models.YaormModel
import org.roylance.yaorm.services.proto.IEntityMessageService

class EntityAuthenticationService(
        private val entityMessageService:IEntityMessageService,
        private val tokenService: ITokenService,
        private val logger: ILogger):IAuthenticationService {
    override fun setUserAsAdmin(user: YaasModels.User): Boolean {
        if (!user.rolesList.any { it.number.equals(YaasModels.UserRole.ADMIN.number) }) {
            val builder = user.toBuilder()
            builder.addRoles(YaasModels.UserRole.ADMIN)
            this.entityMessageService.merge(builder.build())
        }

        return true
    }

    override fun registerUser(user: YaasModels.User): YaasModels.UIAuthentication {
        val hashedPassword = DigestUtils.md5Hex(user.password)

        val existingUser = this.entityMessageService.get(user, user.id)
        if (existingUser == null) {
            // register
            this.logger.info("registering new user: " + user.userName)
            val builder = user.toBuilder().setPassword(hashedPassword).build()
            this.entityMessageService.merge(builder)

            return this.tokenService.generateToken(builder)
        }

        if (existingUser.password.equals(hashedPassword)) {
            // ok
            this.logger.info("user exists already, password correct")
            return this.tokenService.generateToken(user)
        }

        this.logger.info("user exists already, password incorrect")
        return YaasModels.UIAuthentication.newBuilder()
                .setAuthenticated(false)
                .setUserName(user.userName)
                .setDisplay(user.display)
                .setIsAdmin(false)
                .build()
    }

    override fun getAllUsers(limit: Int, offset: Int): List<YaasModels.UIAuthentication> {
        val users = this.entityMessageService
                .getMany(YaasModels.User.getDefaultInstance(),
                limit,
                offset)

        return users.map { user ->
            YaasModels.UIAuthentication.newBuilder()
                .setUserName(user.userName)
                .setDisplay(user.display)
                .setIsAdmin(user.rolesList.any { it.number.equals(YaasModels.UserRole.ADMIN.number) })
                .build()
        }
    }

    override fun userNameExists(userName: String): Boolean {
        return this.entityMessageService.get(YaasModels.User.getDefaultInstance(), userName) != null
    }

    override fun authenticateUser(user: YaasModels.User): YaasModels.UIAuthentication {
        val hashedPassword = DigestUtils.md5Hex(user.password)

        val existingUser = this.entityMessageService.get(user, user.id)
        if (existingUser == null || !hashedPassword.equals(existingUser.password)) {
            return this.buildUnauthenticated()
        }

        return this.tokenService.generateToken(existingUser)
    }

    override fun authenticateUser(token: String): YaasModels.UIAuthentication {
        return this.tokenService.validateUser(token)
    }

    override fun isUserAdmin(user: YaasModels.User): Boolean {
        val foundUser = this.entityMessageService.get(user, user.id)
                ?: return false
        return foundUser.rolesList.any { it.number.equals(YaasModels.UserRole.ADMIN.number) }
    }

    override fun saveInfo(user: YaasModels.User, token: String): Boolean {
        if (user.password.length > 0) {
            this.entityMessageService.merge(user)
        }

        val existingUser = this.entityMessageService.get(user, user.id)
                ?: return false // no password, not saving

        val builder = existingUser.toBuilder()
        builder.firstName = existingUser.firstName
        builder.lastName = existingUser.lastName
        builder.display = existingUser.display
        builder.userName = existingUser.userName
        builder.image = user.image

        this.entityMessageService.merge(builder.build())
        return true
    }

    override fun changePasswordForUser(userModel: YaasModels.User): Boolean {
        val foundUser = this.entityMessageService.get(userModel, userModel.id)
                ?: return false

        val builder = foundUser.toBuilder()
        builder.password = DigestUtils.md2Hex(userModel.password)

        this.entityMessageService.merge(builder.build())
        return true
    }

    override fun removeUserAsAdmin(user: YaasModels.User): Boolean {
        val foundUser = this.entityMessageService.get(user, user.id)
                ?: return false

        val builder = foundUser.toBuilder()
        val foundNotAdminRoles = user.rolesList.filter { !it.number.equals(YaasModels.UserRole.ADMIN.number) }

        if (foundNotAdminRoles.size != builder.rolesCount) {
            builder.clearRoles()
            builder.addAllRoles(foundNotAdminRoles)
            this.entityMessageService.merge(builder.build())
        }
        return true
    }

    override fun changePassword(model: YaasModels.UIChangePassword): YaasModels.UIAuthentication {
        val tempUser = YaasModels.User.newBuilder()
                .setUserName(model.userName)
                .setPassword(model.oldPassword)

        val whereClause = YaormModel.WhereClause.newBuilder()
            .setNameAndProperty(YaormModel.Column.newBuilder()
                .setStringHolder(model.userName)
                .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                    .setName(YaasModels.User.getDescriptor().findFieldByNumber(
                            YaasModels.User.USER_NAME_FIELD_NUMBER
                    ).name)
                    .setType(YaormModel.ProtobufType.STRING)))
            .build()

        val foundRecord = this.entityMessageService.where(tempUser.build(), whereClause)
        if (foundRecord.size > 0) {
            return this.buildUnauthenticated()
        }

        val authModel = this.authenticateUser(tempUser.build())

        if (!authModel.authenticated) {
            this.logger.info("unable to authenticate user: " + model.userName)
            return authModel
        }

        val existingUser = foundRecord.first().toBuilder()

        val newHashedPassword = DigestUtils.md5Hex(model.newPassword)
        existingUser.password = newHashedPassword

        this.entityMessageService.merge(existingUser.build())

        return this.tokenService.generateToken(tempUser.build())
    }

    override fun deleteUser(user: YaasModels.User): Boolean {
        this.entityMessageService.delete(user)

        val whereClause = YaormModel.WhereClause.newBuilder()
                .setNameAndProperty(
                        YaormModel.Column.newBuilder()
                                .setStringHolder(user.id)
                                .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                                        .setName(YaasModels.Token.getDescriptor().findFieldByNumber(YaasModels.Token.USER_ID_FIELD_NUMBER).name)
                                        .setType(YaormModel.ProtobufType.STRING))
                ).build()

        val tokens = this.entityMessageService.where(YaasModels.Token.getDefaultInstance(), whereClause)
        tokens.forEach {
            this.entityMessageService.delete(it)
        }

        return true
    }

    private fun buildUnauthenticated():YaasModels.UIAuthentication {
        return YaasModels.UIAuthentication.newBuilder()
                .setAuthenticated(false)
                .build()
    }
}
