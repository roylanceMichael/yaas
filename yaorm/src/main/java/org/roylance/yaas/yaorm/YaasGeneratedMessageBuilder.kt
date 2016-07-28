package org.roylance.yaas.yaorm

import com.google.protobuf.GeneratedMessage
import org.roylance.yaas.YaasModel
import org.roylance.yaorm.services.proto.BaseProtoGeneratedMessageBuilder

class YaasGeneratedMessageBuilder: BaseProtoGeneratedMessageBuilder() {
    override fun buildGeneratedMessage(name: String): GeneratedMessage {
        if (YaasModel.Image.getDescriptor().name.equals(name)) {
            return YaasModel.Image.getDefaultInstance()
        }
        if (YaasModel.Token.getDescriptor().name.equals(name)) {
            return YaasModel.Token.getDefaultInstance()
        }
        if (YaasModel.UIAuthentication.getDescriptor().name.equals(name)) {
            return YaasModel.UIAuthentication.getDefaultInstance()
        }
        if (YaasModel.UIAuthentications.getDescriptor().name.equals(name)) {
            return YaasModel.UIAuthentications.getDefaultInstance()
        }
        if (YaasModel.UIChangePassword.getDescriptor().name.equals(name)) {
            return YaasModel.UIChangePassword.getDefaultInstance()
        }
        if (YaasModel.UIRequest.getDescriptor().name.equals(name)) {
            return YaasModel.UIRequest.getDefaultInstance()
        }
        if (YaasModel.UIResponse.getDescriptor().name.equals(name)) {
            return YaasModel.UIResponse.getDefaultInstance()
        }
        if (YaasModel.UserDevice.getDescriptor().name.equals(name)) {
            return YaasModel.UserDevice.getDefaultInstance()
        }
        if (YaasModel.User.getDescriptor().name.equals(name)) {
            return YaasModel.User.getDefaultInstance()
        }

        return super.buildGeneratedMessage(name)
    }
}
