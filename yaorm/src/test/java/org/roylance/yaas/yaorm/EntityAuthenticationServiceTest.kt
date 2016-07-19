package org.roylance.yaas.yaorm

import org.junit.Assert
import org.junit.Test
import org.roylance.yaas.models.YaasModels
import org.roylance.yaas.services.ILogger
import org.roylance.yaorm.services.jdbc.JDBCGranularDatabaseProtoService
import org.roylance.yaorm.services.postgres.PostgresConnectionSourceFactory
import org.roylance.yaorm.services.postgres.PostgresGeneratorService
import org.roylance.yaorm.services.proto.EntityMessageService
import org.roylance.yaorm.services.proto.EntityProtoService
import org.roylance.yaorm.services.sqlite.SQLiteConnectionSourceFactory
import org.roylance.yaorm.services.sqlite.SQLiteGeneratorService
import java.io.File
import java.util.*

class EntityAuthenticationServiceTest {
    @Test
    fun userNameExistsPostgresTest() {
        // arrange
        val sourceConnection = PostgresConnectionSourceFactory(
                "localhost",
                "5432",
                "postgres",
                "postgres",
                "postgres",
                false)
        val granularDatabaseService = JDBCGranularDatabaseProtoService(
                sourceConnection.connectionSource,
                false)
        val postgresGeneratorService = PostgresGeneratorService()
        val entityService = EntityProtoService(granularDatabaseService, postgresGeneratorService)
        val protoService = YaasGeneratedMessageBuilder()
        val entityMessageService = EntityMessageService(protoService, entityService, YaasIndexes.indexes)

        entityMessageService.dropAndCreateEntireSchema(YaasModels.getDescriptor())

        val newUser = YaasModels.User.newBuilder()
                .setId("roylance.michael@gmail.com")
                .setUserName("roylance.michael@gmail.com")
                .setPassword("blah")
                .setDisplay("mike roylance")
                .build()

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
            val entityMessageService = EntityMessageService(protoService, entityService, YaasIndexes.indexes)

            entityMessageService.createEntireSchema(YaasModels.getDescriptor())

            val newUser = YaasModels.User.newBuilder()
                .setId("roylance.michael@gmail.com")
                .setUserName("roylance.michael@gmail.com")
                .setPassword("blah")
                .setDisplay("mike roylance")
                .build()

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
            val entityMessageService = EntityMessageService(protoService, entityService, YaasIndexes.indexes)

            entityMessageService.createEntireSchema(YaasModels.getDescriptor())

            val newUser = YaasModels.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .build()

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

    @Test
    fun setUserAsAdminTest() {
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
            val entityMessageService = EntityMessageService(protoService, entityService, YaasIndexes.indexes)

            entityMessageService.createEntireSchema(YaasModels.getDescriptor())

            val newUser = YaasModels.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .build()

            val tokenService = EntityTokenService(entityMessageService, logger)

            val authenticationService = EntityAuthenticationService(
                    entityMessageService,
                    tokenService,
                    logger)

            // act
            authenticationService.setUserAsAdmin(newUser)

            // assert
            val foundUsers = authenticationService.getAllUsers(10, 0)
            Assert.assertTrue(foundUsers.size == 1)

            val foundUser = foundUsers.first()
            Assert.assertTrue(foundUser.display.equals(newUser.display))
            Assert.assertTrue(foundUser.userName.equals(newUser.userName))
            Assert.assertTrue(foundUser.isAdmin)
        }
        finally {
            database.deleteOnExit()
        }
    }

    @Test
    fun registerUserTest() {
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
            val entityMessageService = EntityMessageService(protoService, entityService, YaasIndexes.indexes)

            entityMessageService.createEntireSchema(YaasModels.getDescriptor())

            val newUser = YaasModels.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .build()

            val tokenService = EntityTokenService(entityMessageService, logger)

            val authenticationService = EntityAuthenticationService(
                    entityMessageService,
                    tokenService,
                    logger)

            // act
            authenticationService.registerUser(newUser)

            // assert
            val foundUsers = authenticationService.getAllUsers(10, 0)
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

    @Test
    fun authenticateUserTest() {
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
            val entityMessageService = EntityMessageService(protoService, entityService, YaasIndexes.indexes)

            entityMessageService.createEntireSchema(YaasModels.getDescriptor())

            val newUser = YaasModels.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .build()

            val tokenService = EntityTokenService(entityMessageService, logger)

            val authenticationService = EntityAuthenticationService(
                    entityMessageService,
                    tokenService,
                    logger)
            val authentication = authenticationService.registerUser(newUser)

            // act
            val authenticationResult = authenticationService.authenticateUser(authentication.token)

            // assert
            Assert.assertTrue(authenticationResult.authenticated)

            val foundUsers = authenticationService.getAllUsers(10, 0)
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

    @Test
    fun authenticateUserWithoutTokenTest() {
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
            val entityMessageService = EntityMessageService(protoService, entityService, YaasIndexes.indexes)

            entityMessageService.createEntireSchema(YaasModels.getDescriptor())

            val newUser = YaasModels.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .build()

            val tokenService = EntityTokenService(entityMessageService, logger)

            val authenticationService = EntityAuthenticationService(
                    entityMessageService,
                    tokenService,
                    logger)
            authenticationService.registerUser(newUser)

            // act
            val authenticationResult = authenticationService.authenticateUser(newUser)

            // assert
            Assert.assertTrue(authenticationResult.authenticated)

            val foundUsers = authenticationService.getAllUsers(10, 0)
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

    companion object {
        val logger = object: ILogger {
            override fun info(p0: String?) {
                System.out.println(p0)
            }

            override fun error(p0: String?) {
                System.out.println(p0)
            }
        }
    }
}
