package org.roylance.yaas.yaorm

import org.junit.Assert
import org.junit.Test
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.services.ILogger
import org.roylance.yaorm.services.jdbc.JDBCGranularDatabaseProtoService
import org.roylance.yaorm.services.proto.EntityMessageService
import org.roylance.yaorm.services.proto.EntityProtoService
import org.roylance.yaorm.services.sqlite.SQLiteConnectionSourceFactory
import org.roylance.yaorm.services.sqlite.SQLiteGeneratorService
import java.io.File
import java.util.*

class EntityAuthenticationServiceTest {
    @Test
    fun userNameExistsTest() {
        // arrange
        val database = File(UUID.randomUUID().toString().replace("-", ""))
        try {
            val sourceConnection = SQLiteConnectionSourceFactory(database.absolutePath)
            val granularDatabaseService = JDBCGranularDatabaseProtoService(
                    sourceConnection.connectionSource,
                    false)
            val sqliteGeneratorService = SQLiteGeneratorService()
            val entityService = EntityProtoService(granularDatabaseService, sqliteGeneratorService)
            val protoService = YaasGeneratedMessageBuilder()
            val entityMessageService = EntityMessageService(protoService, entityService)

            entityMessageService.createEntireSchema(YaasModels.Image.getDefaultInstance())
            entityMessageService.createEntireSchema(YaasModels.User.getDefaultInstance())
            entityMessageService.createEntireSchema(YaasModels.Token.getDefaultInstance())
            entityMessageService.createEntireSchema(YaasModels.UserDevice.getDefaultInstance())

            val newUser = YaasModels.User.newBuilder()
                .setId(UUID.randomUUID().toString())
                .setUserName("roylance.michael@gmail.com")
                .setPassword("blah")
                .setDisplay("mike roylance")
                .build()

            val logger = object: ILogger {
                override fun info(p0: String?) {
                    System.out.println(p0)
                }

                override fun error(p0: String?) {
                    System.out.println(p0)
                }
            }

            val authenticationService = EntityAuthenticationService(
                    entityMessageService,
                    EntityTokenService(entityMessageService, logger),
                    logger)

            entityMessageService.merge(newUser)

            // act
            val userNameExists = authenticationService.userNameExists(newUser.userName)

            // assert
            Assert.assertTrue(userNameExists)
        }
        finally {
            database.deleteOnExit()
        }
    }

    @Test
    fun userNameDoesNotExistTest() {
        // arrange
        val database = File(UUID.randomUUID().toString().replace("-", ""))
        try {
            val sourceConnection = SQLiteConnectionSourceFactory(database.absolutePath)
            val granularDatabaseService = JDBCGranularDatabaseProtoService(
                    sourceConnection.connectionSource,
                    false)
            val sqliteGeneratorService = SQLiteGeneratorService()
            val entityService = EntityProtoService(granularDatabaseService, sqliteGeneratorService)
            val protoService = YaasGeneratedMessageBuilder()
            val entityMessageService = EntityMessageService(protoService, entityService)

            entityMessageService.createEntireSchema(YaasModels.getDescriptor())

            val newUser = YaasModels.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .build()

            val logger = object: ILogger {
                override fun info(p0: String?) {
                    System.out.println(p0)
                }

                override fun error(p0: String?) {
                    System.out.println(p0)
                }
            }

            val tokenService = EntityTokenService(entityMessageService, logger)

            val authenticationService = EntityAuthenticationService(
                    entityMessageService,
                    tokenService,
                    logger)

            entityMessageService.merge(newUser)
            tokenService.generateToken(newUser)

            // act
            val foundUsers = authenticationService.getAllUsers(10, 0)

            // assert
            Assert.assertTrue(foundUsers.size == 1)

            val foundUser = foundUsers.first()
            Assert.assertTrue(foundUser.display.equals(newUser.display))
            Assert.assertTrue(foundUser.userName.equals(newUser.userName))
            Assert.assertFalse(foundUser.isAdmin)
        }
        finally {
            database.deleteOnExit()
        }
    }
}
