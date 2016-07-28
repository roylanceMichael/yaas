package org.roylance.yaas.yaorm

import org.roylance.yaas.YaasModel
import org.roylance.yaorm.YaormModel
import org.roylance.yaorm.utilities.YaormUtils
import java.util.*

object YaasIndexes {
    val indexes = object: HashMap<String, YaormModel.Index>() {
        init {
            put(
                    YaasModel.UserDevice.getDescriptor().name,
                    YaormModel.Index.newBuilder()
                .addColumnNames(
                        YaormModel.ColumnDefinition.newBuilder().setName(
                                YaormUtils.IdName
                        ).setType(YaormModel.ProtobufType.STRING).build()
                )
                .addColumnNames(
                        YaormModel.ColumnDefinition.newBuilder().setName(
                                YaasModel.User.getDescriptor().name
                        ).setType(YaormModel.ProtobufType.STRING).build()
                ).build()
            )

            put(
                    YaasModel.Image.getDescriptor().name,
                    YaormModel.Index.newBuilder()
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaormUtils.IdName
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            )
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaasModel.Image.getDescriptor().findFieldByNumber(
                                                    YaasModel.Image.NAME_FIELD_NUMBER).name
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            ).build()
            )

            put(
                    YaasModel.Token.getDescriptor().name,
                    YaormModel.Index.newBuilder()
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaormUtils.IdName
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            )
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaasModel.Token.getDescriptor().findFieldByNumber(
                                                    YaasModel.Token.USER_ID_FIELD_NUMBER).name
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            ).build()
            )

            put(
                    YaasModel.User.getDescriptor().name,
                    YaormModel.Index.newBuilder()
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaormUtils.IdName
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            )
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaasModel.User.getDescriptor().findFieldByNumber(
                                                    YaasModel.User.USER_NAME_FIELD_NUMBER).name
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            )
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaasModel.User.getDescriptor().findFieldByNumber(
                                                    YaasModel.User.DISPLAY_FIELD_NUMBER).name
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            ).build()
            )
        }
    }
}