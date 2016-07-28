package org.roylance.yaas.yaorm

import org.junit.Assert
import org.junit.Test
import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModel
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

        entityMessageService.dropAndCreateEntireSchema(YaasModel.getDescriptor())

        val newUser = YaasModel.User.newBuilder()
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
        val tempRequest = YaasModel.UIRequest.newBuilder().setContent(newUser.userName).build()
        val userNameExists = authenticationService.exists(tempRequest)

        // assert
        Assert.assertTrue(userNameExists.content.equals(true.toString()))
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

            entityMessageService.createEntireSchema(YaasModel.getDescriptor())

            val newUser = YaasModel.User.newBuilder()
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
            val tempRequest = YaasModel.UIRequest.newBuilder().setContent(newUser.userName).build()
            val userNameExists = authenticationService.exists(tempRequest)

            // assert
            System.out.println(userNameExists)
            Assert.assertTrue(userNameExists.content.equals(true.toString()))
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

            entityMessageService.createEntireSchema(YaasModel.getDescriptor())

            val newUser = YaasModel.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .addRoles(YaasModel.UserRole.ADMIN)
                    .build()

            val tokenService = EntityTokenService(entityMessageService, logger)

            val authenticationService = EntityAdminService(
                    entityMessageService,
                    tokenService,
                    logger)

            entityMessageService.merge(newUser)
            val authentication = tokenService.generateToken(newUser)

            // act
            val foundUsers = authenticationService.get_all_users(YaasModel.UIRequest
                    .newBuilder().setLimit(10).setOffset(0).setToken(authentication.token).build())

            // assert
            Assert.assertTrue(foundUsers.users.usersCount == 1)

            val foundUser = foundUsers.users.usersList.first()
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

            entityMessageService.createEntireSchema(YaasModel.getDescriptor())

            val newUser = YaasModel.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .addRoles(YaasModel.UserRole.ADMIN)
                    .build()

            val tokenService = EntityTokenService(entityMessageService, logger)

            val adminService = EntityAdminService(
                    entityMessageService,
                    tokenService,
                    logger)

            entityMessageService.merge(newUser)

            val authentication = tokenService.generateToken(newUser)
            val request = YaasModel.UIRequest.newBuilder().setToken(authentication.token).setUser(newUser).build()

            // act
            adminService.set_user_as_admin(request)

            // assert
            val foundUsers = adminService.get_all_users(YaasModel.UIRequest.newBuilder().setToken(authentication.token).setOffset(0).setLimit(10).build())
            Assert.assertTrue(foundUsers.users.usersCount == 1)

            val foundUser = foundUsers.users.usersList.first()
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

            entityMessageService.createEntireSchema(YaasModel.getDescriptor())

            val newUser = YaasModel.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .addRoles(YaasModel.UserRole.ADMIN)
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
            val request = YaasModel.UIRequest.newBuilder().setUser(newUser).build()
            val authentication = authenticationService.register(request)

            // assert
            val foundUsers = adminService.get_all_users(YaasModel.UIRequest.newBuilder().setToken(authentication.user.token).setOffset(0).setLimit(10).build())
            Assert.assertTrue(foundUsers.users.usersCount == 1)

            val foundUser = foundUsers.users.usersList.first()
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

            entityMessageService.createEntireSchema(YaasModel.getDescriptor())

            val newUser = YaasModel.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .addRoles(YaasModel.UserRole.ADMIN)
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

            val request = YaasModel.UIRequest.newBuilder().setUser(newUser).build()
            val authentication = authenticationService.register(request)

            // act
            val authenticationResult = authenticationService.authenticate(YaasModel.UIRequest.newBuilder().setToken(authentication.user.token).build())

            // assert
            System.out.println(authenticationResult)
            Assert.assertTrue(authenticationResult.authenticated)

            val foundUsers = adminService.get_all_users(YaasModel.UIRequest.newBuilder().setToken(authenticationResult.user.token).setOffset(0).setLimit(10).build())
            Assert.assertTrue(foundUsers.users.usersCount == 1)

            val foundUser = foundUsers.users.usersList.first()
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

            entityMessageService.createEntireSchema(YaasModel.getDescriptor())

            val newUser = YaasModel.User.newBuilder()
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
            val request = YaasModel.UIRequest.newBuilder().setUser(newUser).build()
            authenticationService.register(request)

            // act
            val authenticationResult = authenticationService.login(request)

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
