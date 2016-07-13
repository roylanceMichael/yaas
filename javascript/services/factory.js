"use strict";
/// <reference path="../model" />
exports.YaasFactory = dcodeIO.ProtoBuf.newBuilder({})['import']({
    "package": "org.roylance.yaas.models",
    "messages": [
        {
            "name": "UserDevice",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "UserDeviceType",
                    "name": "user_device_type",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_device_token",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "last_updated",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "User",
                    "name": "user",
                    "id": 5
                }
            ]
        },
        {
            "name": "Image",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "actual_image",
                    "id": 3
                }
            ]
        },
        {
            "name": "User",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_name",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "password",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "display",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "first_name",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "last_name",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "Image",
                    "name": "image",
                    "id": 7
                },
                {
                    "rule": "repeated",
                    "type": "UserRole",
                    "name": "roles",
                    "id": 8
                }
            ]
        },
        {
            "name": "Token",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "issued",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "expiration",
                    "id": 4
                }
            ]
        },
        {
            "name": "UIAuthentication",
            "fields": [
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "authenticated",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "token",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_name",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "display",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_admin",
                    "id": 5
                }
            ]
        },
        {
            "name": "UIChangePassword",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "user_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "old_password",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "new_password",
                    "id": 3
                }
            ]
        },
        {
            "name": "UIRequest",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "token",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 2
                }
            ]
        },
        {
            "name": "UIResponse",
            "fields": [
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "authenticated",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "error_message",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "successful",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "content",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_admin",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "UIAuthentication",
                    "name": "user",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "UIAuthentications",
                    "name": "users",
                    "id": 7
                }
            ]
        },
        {
            "name": "UIAuthentications",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "UIAuthentication",
                    "name": "users",
                    "id": 1
                }
            ]
        }
    ],
    "enums": [
        {
            "name": "UserDeviceType",
            "values": [
                {
                    "name": "ANDROID",
                    "id": 0
                },
                {
                    "name": "IOS",
                    "id": 1
                },
                {
                    "name": "JAVASCRIPT",
                    "id": 2
                }
            ]
        },
        {
            "name": "UserRole",
            "values": [
                {
                    "name": "NORMAL",
                    "id": 0
                },
                {
                    "name": "ADMIN",
                    "id": 1
                }
            ]
        }
    ]
}).build().org.roylance.yaas.models;
//# sourceMappingURL=factory.js.map