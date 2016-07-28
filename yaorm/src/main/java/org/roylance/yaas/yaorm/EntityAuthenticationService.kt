package org.roylance.yaas.yaorm

import org.apache.commons.codec.digest.DigestUtils
import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModels
import org.roylance.yaas.services.IAuthenticationService
import org.roylance.yaorm.models.YaormModel
import org.roylance.yaorm.services.proto.IEntityMessageService

class EntityAuthenticationService(
        private val entityMessageService:IEntityMessageService,
        private val tokenService: IServerTokenService,
        private val logger: ILogger): IAuthenticationService {
    override fun authenticate(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val auth = this.tokenService.validateUser(request.token)
        return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
    }

    override fun change_password(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val tempUser = YaasModels.User.newBuilder()
                .setUserName(request.changePassword.userName)
                .setPassword(request.changePassword.oldPassword)

        val whereClause = YaormModel.WhereClause.newBuilder()
                .setNameAndProperty(YaormModel.Column.newBuilder()
                        .setStringHolder(request.changePassword.userName)
                        .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                                .setName(YaasModels.User.getDescriptor().findFieldByNumber(
                                        YaasModels.User.USER_NAME_FIELD_NUMBER
                                ).name)
                                .setType(YaormModel.ProtobufType.STRING)))
                .build()

        val foundRecord = this.entityMessageService.where(tempUser.build(), whereClause)
        if (foundRecord.size > 0) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        val tempRequest = YaasModels.UIRequest.newBuilder().setUser(tempUser).build()
        val authModel = this.login(tempRequest)

        if (!authModel.authenticated) {
            this.logger.info("unable to authenticate user: " + tempUser.userName)
            return authModel
        }

        val existingUser = foundRecord.first().toBuilder()

        val newHashedPassword = DigestUtils.md5Hex(request.changePassword.newPassword)
        existingUser.password = newHashedPassword

        this.entityMessageService.merge(existingUser.build())

        val auth = this.tokenService.generateToken(tempUser.build())
        return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
    }

    override fun exists(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val exists = this.entityMessageService.get(YaasModels.User.getDefaultInstance(), request.content) != null
        return YaasModels.UIResponse.newBuilder().setContent(exists.toString()).build()
    }

    override fun register(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val hashedPassword = DigestUtils.md5Hex(request.user.password)

        val existingUser = this.entityMessageService.get(request.user, request.user.id)
        if (existingUser == null) {
            // register
            this.logger.info("registering new user: " + request.user.userName)
            val builder = request.user.toBuilder().setPassword(hashedPassword).build()
            this.entityMessageService.merge(builder)

            val auth = this.tokenService.generateToken(builder)
            return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
        }

        if (existingUser.password.equals(hashedPassword)) {
            // ok
            this.logger.info("user exists already, password correct")
            val auth = this.tokenService.generateToken(request.user)
            return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
        }

        this.logger.info("user exists already, password incorrect")
        val auth = YaasModels.UIAuthentication.newBuilder()
                .setAuthenticated(false)
                .setUserName(request.user.userName)
                .setDisplay(request.user.display)
                .setIsAdmin(false)
                .build()

        return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
    }

    override fun login(request: YaasModels.UIRequest): YaasModels.UIResponse {
        val hashedPassword = DigestUtils.md5Hex(request.user.password)

        val existingUser = this.entityMessageService.get(request.user, request.user.id)
        if (existingUser == null || !hashedPassword.equals(existingUser.password)) {
            return YaasModels.UIResponse.getDefaultInstance()
        }

        val auth = this.tokenService.generateToken(existingUser)
        return YaasModels.UIResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
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
}
