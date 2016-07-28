package org.roylance.yaas.yaorm

import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModel
import org.roylance.yaorm.YaormModel
import org.roylance.yaorm.services.proto.IEntityMessageService
import java.util.*

class EntityTokenService(
        private val entityMessageService: IEntityMessageService,
        private val logger: ILogger): IServerTokenService {
    override fun validateUser(token: String): YaasModel.UIAuthentication {
        val whereClause = this.buildWhereClauseForToken(token)
        val records = this.entityMessageService.where(YaasModel.Token.getDefaultInstance(), whereClause)

        if (records.size == 0) {
            this.logger.info("unable to find user with key: " + token)
            return this.buildUnauthenticated()
        }
        val foundToken = records.first()
        val foundUser = this.entityMessageService.get(YaasModel.User.getDefaultInstance(), foundToken.userId)
                ?: return this.buildUnauthenticated()

        this.logger.info("found user with key: " + token)
        return YaasModel.UIAuthentication.newBuilder()
                .setAuthenticated(true)
                .setDisplay(foundUser.display)
                .setToken(token)
                .setIsAdmin(foundUser.rolesList.any { it.number.equals(YaasModel.UserRole.ADMIN.number) })
                .setUserName(foundUser.userName)
                .build()

    }

    override fun generateToken(user: YaasModel.User): YaasModel.UIAuthentication {
        val whereClause = YaormModel.WhereClause.newBuilder()
                .setNameAndProperty(
                        YaormModel.Column.newBuilder()
                                .setStringHolder(user.id)
                                .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                                        .setName(YaasModel.Token.getDescriptor().findFieldByNumber(YaasModel.Token.USER_ID_FIELD_NUMBER).name)
                                        .setType(YaormModel.ProtobufType.STRING))
                ).build()
        val records = this.entityMessageService.where(YaasModel.Token.getDefaultInstance(), whereClause)

        if (records.size == 0) {
            val cal = Calendar.getInstance()
            cal.time = Date()
            cal.add(Calendar.MONTH, 1)
            val oneMonthFromNow = cal.time.time

            val newToken = YaasModel.Token.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserId(user.id)
                    .setIssued(Date().time)
                    .setExpiration(oneMonthFromNow)
                    .build()

            this.entityMessageService.merge(newToken)
            return YaasModel.UIAuthentication.newBuilder()
                    .setAuthenticated(true)
                    .setDisplay(user.display)
                    .setToken(newToken.id)
                    .setIsAdmin(user.rolesList.any { it.number.equals(YaasModel.UserRole.ADMIN.number) })
                    .setUserName(user.userName)
                    .build()
        }

        return YaasModel.UIAuthentication.newBuilder()
                .setAuthenticated(true)
                .setDisplay(user.display)
                .setToken(records.first().id)
                .setIsAdmin(user.rolesList.any { it.number.equals(YaasModel.UserRole.ADMIN.number) })
                .setUserName(user.userName)
                .build()
    }

    private fun buildWhereClauseForToken(token:String):YaormModel.WhereClause {
        return YaormModel.WhereClause.newBuilder()
                .setNameAndProperty(
                        YaormModel.Column.newBuilder()
                                .setStringHolder(token)
                                .setDefinition(YaormModel.ColumnDefinition.newBuilder()
                                        .setName(YaasModel.Token.getDescriptor().findFieldByNumber(YaasModel.Token.ID_FIELD_NUMBER).name)
                                        .setType(YaormModel.ProtobufType.STRING))
                ).build()
    }

    private fun buildUnauthenticated():YaasModel.UIAuthentication {
        return YaasModel.UIAuthentication.newBuilder()
                .setAuthenticated(false)
                .build()
    }
}
