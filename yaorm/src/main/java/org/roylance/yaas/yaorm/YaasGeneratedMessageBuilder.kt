package org.roylance.yaas.yaorm

import com.google.protobuf.GeneratedMessageV3
import org.roylance.yaas.YaasModel
import org.roylance.yaorm.services.proto.BaseProtoGeneratedMessageBuilder

class YaasGeneratedMessageBuilder: BaseProtoGeneratedMessageBuilder() {
    override val name: String
        get() = "YaasModel"

    override fun buildGeneratedMessage(name: String): GeneratedMessageV3 {
        if (YaasModel.Image.getDescriptor().name == name) {
            return YaasModel.Image.getDefaultInstance()
        }
        if (YaasModel.Token.getDescriptor().name == name) {
            return YaasModel.Token.getDefaultInstance()
        }
        if (YaasModel.UIAuthentication.getDescriptor().name == name) {
            return YaasModel.UIAuthentication.getDefaultInstance()
        }
        if (YaasModel.UIAuthentications.getDescriptor().name == name) {
            return YaasModel.UIAuthentications.getDefaultInstance()
        }
        if (YaasModel.UIChangePassword.getDescriptor().name == name) {
            return YaasModel.UIChangePassword.getDefaultInstance()
        }
        if (YaasModel.UIYaasResponse.getDescriptor().name == name) {
            return YaasModel.UIYaasResponse.getDefaultInstance()
        }
        if (YaasModel.UIYaasRequest.getDescriptor().name == name) {
            return YaasModel.UIYaasRequest.getDefaultInstance()
        }
        if (YaasModel.UserDevice.getDescriptor().name == name) {
            return YaasModel.UserDevice.getDefaultInstance()
        }
        if (YaasModel.User.getDescriptor().name == name) {
            return YaasModel.User.getDefaultInstance()
        }

        return super.buildGeneratedMessage(name)
    }
}
