package org.roylance.yaas.yaorm

import org.apache.commons.codec.digest.DigestUtils
import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModel
import org.roylance.yaas.services.IAuthenticationService
import org.roylance.yaorm.YaormModel
import org.roylance.yaorm.services.IEntityBuilder

class EntityAuthenticationService(
        private val entityProtoBuilder: IEntityBuilder,
        private val connectionInfo: YaormModel.ConnectionInfo,
        private val logger: ILogger): IAuthenticationService {
    override fun authenticate(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasIndexes.indexes)
        try {
            val tokenService = EntityTokenService(entityMessageService, this.logger)
            val auth = tokenService.validateUser(request.token)
            return YaasModel.UIYaasResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
        }
        finally {
            entityMessageService.close()
        }
    }

    override fun change_password(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasIndexes.indexes)
        try {
            val tokenService = EntityTokenService(entityMessageService, this.logger)
            val tempUser = YaasModel.User.newBuilder()
                    .setId(request.changePassword.userName)
                    .setUserName(request.changePassword.userName)
                    .setPassword(request.changePassword.oldPassword)

            val whereClause = YaormModel.WhereClause.newBuilder()
                    .setNameAndProperty(YaormModel.Column.newBuilder()
                            .setStringHolder(request.changePassword.userName)
                            .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                                    .setName(YaasModel.User.getDescriptor().findFieldByNumber(
                                            YaasModel.User.USER_NAME_FIELD_NUMBER
                                    ).name)
                                    .setType(YaormModel.ProtobufType.STRING)))
                    .build()

            val foundRecord = entityMessageService.where(tempUser.build(), whereClause)
            if (foundRecord.isNotEmpty()) {
                return YaasModel.UIYaasResponse.getDefaultInstance()
            }

            val tempRequest = YaasModel.UIYaasRequest.newBuilder().setUser(tempUser).build()
            val authModel = this.login(tempRequest)

            if (!authModel.authenticated) {
                this.logger.info("unable to authenticate user: " + tempUser.userName)
                return authModel
            }

            val existingUser = foundRecord.first().toBuilder()

            val newHashedPassword = DigestUtils.md5Hex(request.changePassword.newPassword)
            existingUser.password = newHashedPassword

            entityMessageService.merge(existingUser.build())

            val auth = tokenService.generateToken(tempUser.build())
            return YaasModel.UIYaasResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
        }
        finally {
            entityMessageService.close()
        }
    }

    override fun exists(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasIndexes.indexes)

        try {
            val exists = entityMessageService.get(YaasModel.User.getDefaultInstance(), request.content) != null
            return YaasModel.UIYaasResponse.newBuilder().setContent(exists.toString()).build()
        }
        finally {
            entityMessageService.close()
        }
    }

    override fun register(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasIndexes.indexes)

        try {
            val hashedPassword = DigestUtils.md5Hex(request.user.password)

            val existingUser = entityMessageService.get(request.user, request.user.id)
            if (existingUser == null) {
                // register
                this.logger.info("registering new user: " + request.user.userName)
                val builder = request.user.toBuilder().setPassword(hashedPassword).build()
                entityMessageService.merge(builder)
                val tokenService = EntityTokenService(entityMessageService, this.logger)

                val auth = tokenService.generateToken(builder)
                return YaasModel.UIYaasResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
            }

            if (existingUser.password == hashedPassword) {
                // ok
                val tokenService = EntityTokenService(entityMessageService, this.logger)
                this.logger.info("user exists already, password correct")
                val auth = tokenService.generateToken(request.user)
                return YaasModel.UIYaasResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
            }

            this.logger.info("user exists already, password incorrect")
            val auth = YaasModel.UIAuthentication.newBuilder()
                    .setAuthenticated(false)
                    .setUserName(request.user.userName)
                    .setDisplay(request.user.display)
                    .setIsAdmin(false)
                    .build()

            return YaasModel.UIYaasResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
        }
        finally {
            entityMessageService.close()
        }
    }

    override fun login(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasIndexes.indexes)

        try {
            val hashedPassword = DigestUtils.md5Hex(request.user.password)

            val existingUser = entityMessageService.get(request.user, request.user.id)
            if (existingUser == null || hashedPassword != existingUser.password) {
                return YaasModel.UIYaasResponse.getDefaultInstance()
            }
            val tokenService = EntityTokenService(entityMessageService, this.logger)
            val auth = tokenService.generateToken(existingUser)
            return YaasModel.UIYaasResponse.newBuilder().setAuthenticated(auth.authenticated).setUser(auth).build()
        }
        finally {
            entityMessageService.close()
        }

    }

    override fun save(request: YaasModel.UIYaasRequest): YaasModel.UIYaasResponse {
        val entityMessageService = this.entityProtoBuilder.buildMessageService(connectionInfo, YaasIndexes.indexes)

        try {
            val tokenService = EntityTokenService(entityMessageService, this.logger)
            val returnResponse = YaasModel.UIYaasResponse.newBuilder().setSuccessful(false)
            val validatedUser = tokenService.validateUser(request.token)

            if (!validatedUser.authenticated) {
                return returnResponse.build()
            }

            val existingUser = entityMessageService.get(YaasModel.User.getDefaultInstance(), request.user.id)
                    ?: return returnResponse.build() // no password, not saving

            val builder = existingUser.toBuilder()
            builder.firstName = existingUser.firstName
            builder.lastName = existingUser.lastName
            builder.display = existingUser.display
            builder.userName = existingUser.userName
            builder.image = request.image

            entityMessageService.merge(builder.build())
            returnResponse.successful = true

            return returnResponse.build()
        }
        finally {
            entityMessageService.close()
        }

    }
}
