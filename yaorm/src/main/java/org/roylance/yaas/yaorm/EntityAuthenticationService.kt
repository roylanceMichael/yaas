package org.roylance.yaas.yaorm

import org.apache.commons.codec.digest.DigestUtils
import org.roylance.common.service.ILogger
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.services.IAuthenticationService
import org.roylance.yaas.services.server.IServerTokenService
import org.roylance.yaorm.models.YaormModel
import org.roylance.yaorm.services.proto.IEntityMessageService

class EntityAuthenticationService(
        private val entityMessageService:IEntityMessageService,
        private val tokenService: IServerTokenService,
        private val logger: ILogger): IAuthenticationService {
    override fun exists(userName: String): Boolean {
        return this.entityMessageService.get(YaasModels.User.getDefaultInstance(), userName) != null
    }

    override fun login(request: YaasModels.UIRequest): YaasModels.UIAuthentication {
        return this.tokenService.validateUser(request.token)
    }

    override fun login(user: YaasModels.User): YaasModels.UIAuthentication {
        val hashedPassword = DigestUtils.md5Hex(user.password)

        val existingUser = this.entityMessageService.get(user, user.id)
        if (existingUser == null || !hashedPassword.equals(existingUser.password)) {
            return this.buildUnauthenticated()
        }

        return this.tokenService.generateToken(existingUser)
    }

    override fun register(user: YaasModels.User): YaasModels.UIAuthentication {
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

    override fun save(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val returnResponse = YaasModels.UIResponse.newBuilder().setSuccessful(false)

        val validatedUser = this.tokenService.validateUser(request.token)

        if (!validatedUser.authenticated) {
            return returnResponse.build()
        }

        val existingUser = this.entityMessageService.get(YaasModels.User.getDefaultInstance(), request.user.id)
                ?: return returnResponse.build() // no password, not saving

        val builder = existingUser.toBuilder()
        builder.firstName = existingUser.firstName
        builder.lastName = existingUser.lastName
        builder.display = existingUser.display
        builder.userName = existingUser.userName
        builder.image = request.image

        this.entityMessageService.merge(builder.build())
        returnResponse.successful = true

        return returnResponse.build()
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

        val authModel = this.login(tempUser.build())

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

    private fun buildUnauthenticated():YaasModels.UIAuthentication {
        return YaasModels.UIAuthentication.newBuilder()
                .setAuthenticated(false)
                .build()
    }
}
