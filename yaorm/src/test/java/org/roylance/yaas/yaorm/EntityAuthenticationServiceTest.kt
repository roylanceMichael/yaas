package org.roylance.yaas.yaorm

import org.junit.Assert
import org.junit.Test
import org.roylance.common.service.ILogger
import org.roylance.yaas.models.YaasModels
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
        val userNameExists = authenticationService.exists(newUser.userName)

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
            val userNameExists = authenticationService.exists(newUser.userName)

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
                    .addRoles(YaasModels.UserRole.ADMIN)
                    .build()

            val tokenService = EntityTokenService(entityMessageService, logger)

            val authenticationService = EntityAdminService(
                    entityMessageService,
                    tokenService,
                    logger)

            entityMessageService.merge(newUser)
            val authentication = tokenService.generateToken(newUser)

            // act
            val foundUsers = authenticationService.getAllUsers(YaasModels.UIRequest
                    .newBuilder().setLimit(10).setOffset(0).setToken(authentication.token).build())

            // assert
            Assert.assertTrue(foundUsers.usersCount == 1)

            val foundUser = foundUsers.usersList.first()
            Assert.assertTrue(foundUser.display.equals(newUser.display))
            Assert.assertTrue(foundUser.userName.equals(newUser.userName))
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
                    .addRoles(YaasModels.UserRole.ADMIN)
                    .build()

            val tokenService = EntityTokenService(entityMessageService, logger)

            val adminService = EntityAdminService(
                    entityMessageService,
                    tokenService,
                    logger)

            entityMessageService.merge(newUser)

            val authentication = tokenService.generateToken(newUser)
            val request = YaasModels.UIRequest.newBuilder().setToken(authentication.token).setUser(newUser).build()

            // act
            adminService.setUserAsAdmin(request)

            // assert
            val foundUsers = adminService.getAllUsers(YaasModels.UIRequest.newBuilder().setToken(authentication.token).setOffset(0).setLimit(10).build())
            Assert.assertTrue(foundUsers.usersCount == 1)

            val foundUser = foundUsers.usersList.first()
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
                    .addRoles(YaasModels.UserRole.ADMIN)
                    .build()

            val tokenService = EntityTokenService(entityMessageService, logger)
            val authenticationService = EntityAuthenticationService(
                    entityMessageService,
                    tokenService,
                    logger)

            val adminService = EntityAdminService(
                    entityMessageService,
                    tokenService,
                    logger)

            // act
            val authentication = authenticationService.register(newUser)

            // assert
            val foundUsers = adminService.getAllUsers(YaasModels.UIRequest.newBuilder().setToken(authentication.token).setOffset(0).setLimit(10).build())
            Assert.assertTrue(foundUsers.usersCount == 1)

            val foundUser = foundUsers.usersList.first()
            Assert.assertTrue(foundUser.display.equals(newUser.display))
            Assert.assertTrue(foundUser.userName.equals(newUser.userName))
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
                    .addRoles(YaasModels.UserRole.ADMIN)
                    .build()

            val tokenService = EntityTokenService(entityMessageService, logger)

            val authenticationService = EntityAuthenticationService(
                    entityMessageService,
                    tokenService,
                    logger)
            val adminService = EntityAdminService(
                    entityMessageService,
                    tokenService,
                    logger)

            val authentication = authenticationService.register(newUser)

            // act
            val authenticationResult = authenticationService.login(YaasModels.UIRequest.newBuilder().setToken(authentication.token).build())

            // assert
            Assert.assertTrue(authenticationResult.authenticated)

            val foundUsers = adminService.getAllUsers(YaasModels.UIRequest.newBuilder().setToken(authenticationResult.token).setOffset(0).setLimit(10).build())
            Assert.assertTrue(foundUsers.usersCount == 1)

            val foundUser = foundUsers.usersList.first()
            Assert.assertTrue(foundUser.display.equals(newUser.display))
            Assert.assertTrue(foundUser.userName.equals(newUser.userName))
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
            authenticationService.register(newUser)

            // act
            val authenticationResult = authenticationService.login(newUser)

            // assert
            Assert.assertTrue(authenticationResult.authenticated)

            val foundUsers = entityMessageService.getMany(newUser)
            Assert.assertTrue(foundUsers.size == 1)

            val foundUser = foundUsers.first()
            Assert.assertTrue(foundUser.display.equals(newUser.display))
            Assert.assertTrue(foundUser.userName.equals(newUser.userName))
        }
        finally {
            database.deleteOnExit()
        }
    }

    companion object {
        val logger = object: ILogger {
            override fun error(message: String) {
                System.out.println(message)
            }

            override fun info(message: String) {
                System.out.println(message)
            }
        }
    }
}
