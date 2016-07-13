package org.roylance.yaas.yaorm

import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.services.ILogger
import org.roylance.yaas.services.ITokenService
import org.roylance.yaorm.models.YaormModel
import org.roylance.yaorm.services.proto.IEntityMessageService
import java.util.*

class EntityTokenService(
        private val entityMessageService: IEntityMessageService,
        private val logger: ILogger): ITokenService {
    override fun validateUser(token: String): YaasModels.UIAuthentication {
        val whereClause = this.buildWhereClauseForToken(token)
        val records = this.entityMessageService.where(YaasModels.Token.getDefaultInstance(), whereClause)

        if (records.size == 0) {
            this.logger.info("unable to find user with key: " + token)
            return this.buildUnauthenticated()
        }
        val foundToken = records.first()
        val foundUser = this.entityMessageService.get(YaasModels.UserModel.getDefaultInstance(), foundToken.userId)
                ?: return this.buildUnauthenticated()

        this.logger.info("found user with key: " + token)
        return YaasModels.UIAuthentication.newBuilder()
                .setAuthenticated(true)
                .setDisplay(foundUser.display)
                .setToken(token)
                .setIsAdmin(foundUser.rolesList.any { it.number.equals(YaasModels.UserRole.ADMIN.number) })
                .setUserName(foundUser.userName)
                .build()

    }

    override fun generateToken(userModel: YaasModels.UserModel): YaasModels.UIAuthentication {
        val whereClause = YaormModel.WhereClause.newBuilder()
                .setNameAndProperty(
                        YaormModel.Column.newBuilder()
                                .setStringHolder(userModel.id)
                                .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                                        .setName(YaasModels.Token.getDescriptor().findFieldByNumber(YaasModels.Token.USER_ID_FIELD_NUMBER).name)
                                        .setType(YaormModel.ProtobufType.STRING))
                ).build()
        val records = this.entityMessageService.where(YaasModels.Token.getDefaultInstance(), whereClause)

        if (records.size == 0) {
            val cal = Calendar.getInstance()
            cal.time = Date()
            cal.add(Calendar.MONTH, 1)
            val oneMonthFromNow = cal.time.time

            val newToken = YaasModels.Token.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserId(userModel.id)
                    .setIssued(Date().time)
                    .setExpiration(oneMonthFromNow)
                    .build()

            this.entityMessageService.merge(newToken)
            return YaasModels.UIAuthentication.newBuilder()
                    .setAuthenticated(true)
                    .setDisplay(userModel.display)
                    .setToken(newToken.id)
                    .setIsAdmin(userModel.rolesList.any { it.number.equals(YaasModels.UserRole.ADMIN.number) })
                    .setUserName(userModel.userName)
                    .build()
        }

        return YaasModels.UIAuthentication.newBuilder()
                .setAuthenticated(true)
                .setDisplay(userModel.display)
                .setToken(records.first().id)
                .setIsAdmin(userModel.rolesList.any { it.number.equals(YaasModels.UserRole.ADMIN.number) })
                .setUserName(userModel.userName)
                .build()
    }

    private fun buildWhereClauseForToken(token:String):YaormModel.WhereClause {
        return YaormModel.WhereClause.newBuilder()
                .setNameAndProperty(
                        YaormModel.Column.newBuilder()
                                .setStringHolder(token)
                                .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                                        .setName(YaasModels.Token.getDescriptor().findFieldByNumber(YaasModels.Token.ID_FIELD_NUMBER).name)
                                        .setType(YaormModel.ProtobufType.STRING))
                ).build()
    }

    private fun buildUnauthenticated():YaasModels.UIAuthentication {
        return YaasModels.UIAuthentication.newBuilder()
                .setAuthenticated(false)
                .build()
    }
}
