package org.roylance.yaas.yaorm

import org.roylance.yaas.YaasModels
import org.roylance.yaorm.models.YaormModel
import org.roylance.yaorm.utilities.YaormUtils
import java.util.*

object YaasIndexes {
    val indexes = object: HashMap<String, YaormModel.Index>() {
        init {
            put(
                    YaasModels.UserDevice.getDescriptor().name,
                    YaormModel.Index.newBuilder()
                .addColumnNames(
                        YaormModel.ColumnDefinition.newBuilder().setName(
                                YaormUtils.IdName
                        ).setType(YaormModel.ProtobufType.STRING).build()
                )
                .addColumnNames(
                        YaormModel.ColumnDefinition.newBuilder().setName(
                                YaasModels.User.getDescriptor().name
                        ).setType(YaormModel.ProtobufType.STRING).build()
                ).build()
            )

            put(
                    YaasModels.Image.getDescriptor().name,
                    YaormModel.Index.newBuilder()
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaormUtils.IdName
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            )
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaasModels.Image.getDescriptor().findFieldByNumber(
                                                    YaasModels.Image.NAME_FIELD_NUMBER).name
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            ).build()
            )

            put(
                    YaasModels.Token.getDescriptor().name,
                    YaormModel.Index.newBuilder()
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaormUtils.IdName
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            )
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaasModels.Token.getDescriptor().findFieldByNumber(
                                                    YaasModels.Token.USER_ID_FIELD_NUMBER).name
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            ).build()
            )

            put(
                    YaasModels.User.getDescriptor().name,
                    YaormModel.Index.newBuilder()
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaormUtils.IdName
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            )
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaasModels.User.getDescriptor().findFieldByNumber(
                                                    YaasModels.User.USER_NAME_FIELD_NUMBER).name
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            )
                            .addColumnNames(
                                    YaormModel.ColumnDefinition.newBuilder().setName(
                                            YaasModels.User.getDescriptor().findFieldByNumber(
                                                    YaasModels.User.DISPLAY_FIELD_NUMBER).name
                                    ).setType(YaormModel.ProtobufType.STRING).build()
                            ).build()
            )
        }
    }
}