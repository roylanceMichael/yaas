package org.roylance.yaas.yaorm

import com.google.protobuf.GeneratedMessage
import org.roylance.yaas.YaasModels
import org.roylance.yaorm.services.proto.BaseProtoGeneratedMessageBuilder

class YaasGeneratedMessageBuilder: BaseProtoGeneratedMessageBuilder() {
    override fun buildGeneratedMessage(name: String): GeneratedMessage {
        if (YaasModels.Image.getDescriptor().name.equals(name)) {
            return YaasModels.Image.getDefaultInstance()
        }
        if (YaasModels.Token.getDescriptor().name.equals(name)) {
            return YaasModels.Token.getDefaultInstance()
        }
        if (YaasModels.UIAuthentication.getDescriptor().name.equals(name)) {
            return YaasModels.UIAuthentication.getDefaultInstance()
        }
        if (YaasModels.UIAuthentications.getDescriptor().name.equals(name)) {
            return YaasModels.UIAuthentications.getDefaultInstance()
        }
        if (YaasModels.UIChangePassword.getDescriptor().name.equals(name)) {
            return YaasModels.UIChangePassword.getDefaultInstance()
        }
        if (YaasModels.UIRequest.getDescriptor().name.equals(name)) {
            return YaasModels.UIRequest.getDefaultInstance()
        }
        if (YaasModels.UIResponse.getDescriptor().name.equals(name)) {
            return YaasModels.UIResponse.getDefaultInstance()
        }
        if (YaasModels.UserDevice.getDescriptor().name.equals(name)) {
            return YaasModels.UserDevice.getDefaultInstance()
        }
        if (YaasModels.User.getDescriptor().name.equals(name)) {
            return YaasModels.User.getDefaultInstance()
        }

        return super.buildGeneratedMessage(name)
    }
}
