package org.roylance.yaas.yaorm

import org.junit.Assert
import org.junit.Test
import org.roylance.common.service.ILogger
import org.roylance.yaas.YaasModel
import org.roylance.yaorm.YaormModel
import org.roylance.yaorm.services.EntityMessageService
import org.roylance.yaorm.services.EntityService
import org.roylance.yaorm.services.jdbc.JDBCGranularDatabaseService
import org.roylance.yaorm.services.postgres.PostgresBuilder
import org.roylance.yaorm.services.postgres.PostgresConnectionSourceFactory
import org.roylance.yaorm.services.postgres.PostgresGeneratorService
import org.roylance.yaorm.services.sqlite.SQLiteBuilder
import org.roylance.yaorm.services.sqlite.SQLiteConnectionSourceFactory
import org.roylance.yaorm.services.sqlite.SQLiteGeneratorService
import java.io.File
import java.util.*

class EntityAuthenticationServiceTest {
    @Test
    @org.junit.Ignore
    fun userNameExistsPostgresTest() {
        // arrange
        val sourceConnection = PostgresConnectionSourceFactory(
                "localhost",
                "5432",
                "postgres",
                "postgres",
                "postgres",
                false)
        val granularDatabaseService = JDBCGranularDatabaseService(
                sourceConnection,
                false)
        val postgresGeneratorService = PostgresGeneratorService()
        val entityService = EntityService(granularDatabaseService, postgresGeneratorService)
        val entityMessageService = EntityMessageService(entityService, YaasIndexes.indexes)
        entityMessageService.dropAndCreateEntireSchema(YaasModel.getDescriptor())

        val newUser = YaasModel.User.newBuilder()
                .setId("roylance.michael@gmail.com")
                .setUserName("roylance.michael@gmail.com")
                .setPassword("blah")
                .setDisplay("mike roylance")
                .build()

        val authenticationService = EntityAuthenticationService(
                PostgresBuilder(),
                YaormModel.ConnectionInfo.newBuilder().setHost("localhost").setPort(5432).setUser("postgres").setPassword("postgres").setSchema("postgres").build(),
                logger)

        entityMessageService.merge(newUser)

        // act
        val tempRequest = YaasModel.UIYaasRequest.newBuilder().setContent(newUser.userName).build()
        val userNameExists = authenticationService.exists(tempRequest)

        // assert
        Assert.assertTrue(userNameExists.content == true.toString())
    }

    @Test
    fun userNameExistsTest() {
        // arrange
        val database = File(UUID.randomUUID().toString().replace("-", ""))
        try {
            val sourceConnection = SQLiteConnectionSourceFactory(database.absolutePath)
            val granularDatabaseService = JDBCGranularDatabaseService(
                    sourceConnection,
                    false)
            val sqliteGeneratorService = SQLiteGeneratorService()
            val entityService = EntityService(granularDatabaseService, sqliteGeneratorService)
            val entityMessageService = EntityMessageService(entityService, YaasIndexes.indexes)

            entityMessageService.createEntireSchema(YaasModel.getDescriptor())

            val newUser = YaasModel.User.newBuilder()
                .setId("roylance.michael@gmail.com")
                .setUserName("roylance.michael@gmail.com")
                .setPassword("blah")
                .setDisplay("mike roylance")
                .build()

            val authenticationService = EntityAuthenticationService(
                    SQLiteBuilder(),
                    YaormModel.ConnectionInfo.newBuilder().setSchema(database.name).build(),
                    logger)

            entityMessageService.merge(newUser)

            // act
            val tempRequest = YaasModel.UIYaasRequest.newBuilder().setContent(newUser.userName).build()
            val userNameExists = authenticationService.exists(tempRequest)

            // assert
            System.out.println(userNameExists)
            Assert.assertTrue(userNameExists.content == true.toString())
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
            val granularDatabaseService = JDBCGranularDatabaseService(
                    sourceConnection,
                    false)
            val sqliteGeneratorService = SQLiteGeneratorService()
            val entityService = EntityService(granularDatabaseService, sqliteGeneratorService)
            val entityMessageService = EntityMessageService(entityService, YaasIndexes.indexes)

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
                    SQLiteBuilder(),
                    YaormModel.ConnectionInfo.newBuilder().setSchema(database.name).build(),
                    logger)

            entityMessageService.merge(newUser)
            val authentication = tokenService.generateToken(newUser)

            // act
            val foundUsers = adminService.get_all_users(YaasModel.UIYaasRequest
                    .newBuilder().setLimit(10).setOffset(0).setToken(authentication.token).build())

            // assert
            Assert.assertTrue(foundUsers.users.usersCount == 1)

            val foundUser = foundUsers.users.usersList.first()
            Assert.assertTrue(foundUser.display == newUser.display)
            Assert.assertTrue(foundUser.userName == newUser.userName)
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
            val granularDatabaseService = JDBCGranularDatabaseService(
                    sourceConnection,
                    false)
            val sqliteGeneratorService = SQLiteGeneratorService()
            val entityService = EntityService(granularDatabaseService, sqliteGeneratorService)
            val entityMessageService = EntityMessageService(entityService, YaasIndexes.indexes)

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
                    SQLiteBuilder(),
                    YaormModel.ConnectionInfo.newBuilder().setSchema(database.name).build(),
                    logger)

            entityMessageService.merge(newUser)

            val authentication = tokenService.generateToken(newUser)
            val request = YaasModel.UIYaasRequest.newBuilder().setToken(authentication.token).setUser(newUser).build()

            // act
            adminService.set_user_as_admin(request)

            // assert
            val foundUsers = adminService.get_all_users(YaasModel.UIYaasRequest.newBuilder().setToken(authentication.token).setOffset(0).setLimit(10).build())
            Assert.assertTrue(foundUsers.users.usersCount == 1)

            val foundUser = foundUsers.users.usersList.first()
            Assert.assertTrue(foundUser.display == newUser.display)
            Assert.assertTrue(foundUser.userName == newUser.userName)
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
            val granularDatabaseService = JDBCGranularDatabaseService(
                    sourceConnection,
                    false)
            val sqliteGeneratorService = SQLiteGeneratorService()
            val entityService = EntityService(granularDatabaseService, sqliteGeneratorService)
            val entityMessageService = EntityMessageService(entityService, YaasIndexes.indexes)

            entityMessageService.createEntireSchema(YaasModel.getDescriptor())

            val newUser = YaasModel.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .addRoles(YaasModel.UserRole.ADMIN)
                    .build()

            val authenticationService = EntityAuthenticationService(
                    SQLiteBuilder(),
                    YaormModel.ConnectionInfo.newBuilder().setSchema(database.name).build(),
                    logger)

            val adminService = EntityAdminService(
                    SQLiteBuilder(),
                    YaormModel.ConnectionInfo.newBuilder().setSchema(database.name).build(),
                    logger)

            // act
            val request = YaasModel.UIYaasRequest.newBuilder().setUser(newUser).build()
            val authentication = authenticationService.register(request)

            // assert
            val foundUsers = adminService.get_all_users(YaasModel.UIYaasRequest.newBuilder().setToken(authentication.user.token).setOffset(0).setLimit(10).build())
            Assert.assertTrue(foundUsers.users.usersCount == 1)

            val foundUser = foundUsers.users.usersList.first()
            Assert.assertTrue(foundUser.display == newUser.display)
            Assert.assertTrue(foundUser.userName == newUser.userName)
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
            val granularDatabaseService = JDBCGranularDatabaseService(
                    sourceConnection,
                    false)
            val sqliteGeneratorService = SQLiteGeneratorService()
            val entityService = EntityService(granularDatabaseService, sqliteGeneratorService)
            val entityMessageService = EntityMessageService(entityService, YaasIndexes.indexes)

            entityMessageService.createEntireSchema(YaasModel.getDescriptor())

            val newUser = YaasModel.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .addRoles(YaasModel.UserRole.ADMIN)
                    .build()

            val authenticationService = EntityAuthenticationService(
                    SQLiteBuilder(),
                    YaormModel.ConnectionInfo.newBuilder().setSchema(database.name).build(),
                    logger)

            val adminService = EntityAdminService(
                    SQLiteBuilder(),
                    YaormModel.ConnectionInfo.newBuilder().setSchema(database.name).build(),
                    logger)

            val request = YaasModel.UIYaasRequest.newBuilder().setUser(newUser).build()
            val authentication = authenticationService.register(request)

            // act
            val authenticationResult = authenticationService.authenticate(YaasModel.UIYaasRequest.newBuilder().setToken(authentication.user.token).build())

            // assert
            System.out.println(authenticationResult)
            Assert.assertTrue(authenticationResult.authenticated)

            val foundUsers = adminService.get_all_users(YaasModel.UIYaasRequest.newBuilder().setToken(authenticationResult.user.token).setOffset(0).setLimit(10).build())
            Assert.assertTrue(foundUsers.users.usersCount == 1)

            val foundUser = foundUsers.users.usersList.first()
            Assert.assertTrue(foundUser.display == newUser.display)
            Assert.assertTrue(foundUser.userName == newUser.userName)
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
            val granularDatabaseService = JDBCGranularDatabaseService(
                    sourceConnection,
                    false)
            val sqliteGeneratorService = SQLiteGeneratorService()
            val entityService = EntityService(granularDatabaseService, sqliteGeneratorService)
            val entityMessageService = EntityMessageService(entityService, YaasIndexes.indexes)

            entityMessageService.createEntireSchema(YaasModel.getDescriptor())

            val newUser = YaasModel.User.newBuilder()
                    .setId(UUID.randomUUID().toString())
                    .setUserName("roylance.michael@gmail.com")
                    .setPassword("blah")
                    .setDisplay("mike roylance")
                    .build()

            val authenticationService = EntityAuthenticationService(
                    SQLiteBuilder(),
                    YaormModel.ConnectionInfo.newBuilder().setSchema(database.name).build(),
                    logger)

            val request = YaasModel.UIYaasRequest.newBuilder().setUser(newUser).build()
            authenticationService.register(request)

            // act
            val authenticationResult = authenticationService.login(request)

            // assert
            Assert.assertTrue(authenticationResult.authenticated)

            val foundUsers = entityMessageService.getMany(newUser)
            Assert.assertTrue(foundUsers.size == 1)

            val foundUser = foundUsers.first()
            Assert.assertTrue(foundUser.display == newUser.display)
            Assert.assertTrue(foundUser.userName == newUser.userName)
        }
        finally {
            database.deleteOnExit()
        }
    }

    companion object {
        val logger = object: ILogger {
            override fun debug(message: String) {
                println(message)
            }

            override fun error(message: String) {
                println(message)
            }

            override fun info(message: String) {
                println(message)
            }
        }
    }
}
