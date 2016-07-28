package org.roylance.yaas

import org.junit.Test
import org.roylance.yaclib.Models
import org.roylance.yaclib.core.enums.CommonTokens
import org.roylance.yaclib.core.services.FilePersistService
import org.roylance.yaclib.core.services.ProcessFileDescriptorService
import org.roylance.yaclib.core.services.java.client.JavaClientProcessLanguageService
import org.roylance.yaclib.core.services.java.server.JavaServerProcessLanguageService
import org.roylance.yaclib.core.services.typescript.TypeScriptProcessLanguageService
import java.util.*

class SyncTest {
    @Test
    fun executeSync() {
        getInfo()
        val dependency = Models.Dependency.newBuilder()
            .setGroup("org.roylance.yaas")
            .setName("api")
            .setVersion(version!!)
            .build()

        val filePersistService = FilePersistService()
        val processFileDescriptorService = ProcessFileDescriptorService()

        val controllers = processFileDescriptorService.processFile(YaasControllers.getDescriptor())

        val serverFiles = JavaServerProcessLanguageService().buildInterface(controllers, dependency)
        filePersistService.persistFiles(location + CommonTokens.ServerApi, serverFiles)

        val clientFiles = JavaClientProcessLanguageService().buildInterface(controllers, dependency)
        filePersistService.persistFiles(location + CommonTokens.ClientApi, clientFiles)

        val typeScriptFiles = TypeScriptProcessLanguageService().buildInterface(controllers, dependency)
        filePersistService.persistFiles(location + "api/javascript", typeScriptFiles)
    }

    companion object {
        var version: String? = null
        var location: String? = null
        fun getInfo() {
            val properties = Properties()
            val stream = SyncTest::class.java.getResourceAsStream("/creds.properties")
            try {
                properties.load(stream)
                version = properties.getProperty("version")
                location = properties.getProperty("location")
            }
            finally {
                stream.close()
            }
        }
    }
}