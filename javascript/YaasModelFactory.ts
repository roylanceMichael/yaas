
/// <reference path="./YaasModel.d.ts" />
declare var dcodeIO:any;
var _root = dcodeIO.ProtoBuf.newBuilder({})['import']({
    "package": "org.roylance.yaas",
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
            "name": "UIYaasRequest",
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
                },
                {
                    "rule": "optional",
                    "type": "User",
                    "name": "user",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "UserDevice",
                    "name": "user_device",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "Image",
                    "name": "image",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "offset",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "limit",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "UIChangePassword",
                    "name": "change_password",
                    "id": 8
                }
            ]
        },
        {
            "name": "UIYaasResponse",
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
                },
                {
                    "rule": "repeated",
                    "type": "UserDevice",
                    "name": "user_devices",
                    "id": 8
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
        },
        {
            "name": "RequestAction",
            "fields": [
                {
                    "rule": "optional",
                    "type": "UIYaasRequest",
                    "name": "request",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "UIYaasResponse",
                    "name": "response",
                    "id": 2
                }
            ]
        },
        {
            "name": "AdminController",
            "fields": [
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "change_password_for_user",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "get_all_users",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "is_user_admin",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "set_user_as_admin",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "remove_user_as_admin",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "delete_user",
                    "id": 6
                }
            ]
        },
        {
            "name": "AuthenticationController",
            "fields": [
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "exists",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "login",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "authenticate",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "register",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "change_password",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "save",
                    "id": 6
                }
            ]
        },
        {
            "name": "UserDeviceController",
            "fields": [
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "save",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "RequestAction",
                    "name": "all",
                    "id": 2
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
}).build();
export var YaasModel = _root;
