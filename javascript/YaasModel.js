/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.org = (function() {

    /**
     * Namespace org.
     * @exports org
     * @namespace
     */
    var org = {};

    org.roylance = (function() {

        /**
         * Namespace roylance.
         * @memberof org
         * @namespace
         */
        var roylance = {};

        roylance.yaas = (function() {

            /**
             * Namespace yaas.
             * @memberof org.roylance
             * @namespace
             */
            var yaas = {};

            yaas.RequestAction = (function() {

                /**
                 * Properties of a RequestAction.
                 * @memberof org.roylance.yaas
                 * @interface IRequestAction
                 * @property {org.roylance.yaas.IUIYaasRequest} [request] RequestAction request
                 * @property {org.roylance.yaas.IUIYaasResponse} [response] RequestAction response
                 */

                /**
                 * Constructs a new RequestAction.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents a RequestAction.
                 * @constructor
                 * @param {org.roylance.yaas.IRequestAction=} [properties] Properties to set
                 */
                function RequestAction(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RequestAction request.
                 * @member {(org.roylance.yaas.IUIYaasRequest|null|undefined)}request
                 * @memberof org.roylance.yaas.RequestAction
                 * @instance
                 */
                RequestAction.prototype.request = null;

                /**
                 * RequestAction response.
                 * @member {(org.roylance.yaas.IUIYaasResponse|null|undefined)}response
                 * @memberof org.roylance.yaas.RequestAction
                 * @instance
                 */
                RequestAction.prototype.response = null;

                /**
                 * Creates a new RequestAction instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.RequestAction
                 * @static
                 * @param {org.roylance.yaas.IRequestAction=} [properties] Properties to set
                 * @returns {org.roylance.yaas.RequestAction} RequestAction instance
                 */
                RequestAction.create = function create(properties) {
                    return new RequestAction(properties);
                };

                /**
                 * Encodes the specified RequestAction message. Does not implicitly {@link org.roylance.yaas.RequestAction.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.RequestAction
                 * @static
                 * @param {org.roylance.yaas.IRequestAction} message RequestAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequestAction.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.request != null && message.hasOwnProperty("request"))
                        $root.org.roylance.yaas.UIYaasRequest.encode(message.request, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.response != null && message.hasOwnProperty("response"))
                        $root.org.roylance.yaas.UIYaasResponse.encode(message.response, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified RequestAction message, length delimited. Does not implicitly {@link org.roylance.yaas.RequestAction.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.RequestAction
                 * @static
                 * @param {org.roylance.yaas.IRequestAction} message RequestAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequestAction.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RequestAction message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.RequestAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.RequestAction} RequestAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RequestAction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.RequestAction();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.request = $root.org.roylance.yaas.UIYaasRequest.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.response = $root.org.roylance.yaas.UIYaasResponse.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RequestAction message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.RequestAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.RequestAction} RequestAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RequestAction.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RequestAction message.
                 * @function verify
                 * @memberof org.roylance.yaas.RequestAction
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RequestAction.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.request != null && message.hasOwnProperty("request")) {
                        var error = $root.org.roylance.yaas.UIYaasRequest.verify(message.request);
                        if (error)
                            return "request." + error;
                    }
                    if (message.response != null && message.hasOwnProperty("response")) {
                        error = $root.org.roylance.yaas.UIYaasResponse.verify(message.response);
                        if (error)
                            return "response." + error;
                    }
                    return null;
                };

                /**
                 * Creates a RequestAction message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.RequestAction
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.RequestAction} RequestAction
                 */
                RequestAction.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.RequestAction)
                        return object;
                    var message = new $root.org.roylance.yaas.RequestAction();
                    if (object.request != null) {
                        if (typeof object.request !== "object")
                            throw TypeError(".org.roylance.yaas.RequestAction.request: object expected");
                        message.request = $root.org.roylance.yaas.UIYaasRequest.fromObject(object.request);
                    }
                    if (object.response != null) {
                        if (typeof object.response !== "object")
                            throw TypeError(".org.roylance.yaas.RequestAction.response: object expected");
                        message.response = $root.org.roylance.yaas.UIYaasResponse.fromObject(object.response);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a RequestAction message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.RequestAction
                 * @static
                 * @param {org.roylance.yaas.RequestAction} message RequestAction
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RequestAction.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.request = null;
                        object.response = null;
                    }
                    if (message.request != null && message.hasOwnProperty("request"))
                        object.request = $root.org.roylance.yaas.UIYaasRequest.toObject(message.request, options);
                    if (message.response != null && message.hasOwnProperty("response"))
                        object.response = $root.org.roylance.yaas.UIYaasResponse.toObject(message.response, options);
                    return object;
                };

                /**
                 * Converts this RequestAction to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.RequestAction
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RequestAction.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RequestAction;
            })();

            yaas.AdminController = (function() {

                /**
                 * Properties of an AdminController.
                 * @memberof org.roylance.yaas
                 * @interface IAdminController
                 * @property {org.roylance.yaas.IRequestAction} [changePasswordForUser] AdminController changePasswordForUser
                 * @property {org.roylance.yaas.IRequestAction} [getAllUsers] AdminController getAllUsers
                 * @property {org.roylance.yaas.IRequestAction} [isUserAdmin] AdminController isUserAdmin
                 * @property {org.roylance.yaas.IRequestAction} [setUserAsAdmin] AdminController setUserAsAdmin
                 * @property {org.roylance.yaas.IRequestAction} [removeUserAsAdmin] AdminController removeUserAsAdmin
                 * @property {org.roylance.yaas.IRequestAction} [deleteUser] AdminController deleteUser
                 */

                /**
                 * Constructs a new AdminController.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents an AdminController.
                 * @constructor
                 * @param {org.roylance.yaas.IAdminController=} [properties] Properties to set
                 */
                function AdminController(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AdminController changePasswordForUser.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}changePasswordForUser
                 * @memberof org.roylance.yaas.AdminController
                 * @instance
                 */
                AdminController.prototype.changePasswordForUser = null;

                /**
                 * AdminController getAllUsers.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}getAllUsers
                 * @memberof org.roylance.yaas.AdminController
                 * @instance
                 */
                AdminController.prototype.getAllUsers = null;

                /**
                 * AdminController isUserAdmin.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}isUserAdmin
                 * @memberof org.roylance.yaas.AdminController
                 * @instance
                 */
                AdminController.prototype.isUserAdmin = null;

                /**
                 * AdminController setUserAsAdmin.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}setUserAsAdmin
                 * @memberof org.roylance.yaas.AdminController
                 * @instance
                 */
                AdminController.prototype.setUserAsAdmin = null;

                /**
                 * AdminController removeUserAsAdmin.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}removeUserAsAdmin
                 * @memberof org.roylance.yaas.AdminController
                 * @instance
                 */
                AdminController.prototype.removeUserAsAdmin = null;

                /**
                 * AdminController deleteUser.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}deleteUser
                 * @memberof org.roylance.yaas.AdminController
                 * @instance
                 */
                AdminController.prototype.deleteUser = null;

                /**
                 * Creates a new AdminController instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.AdminController
                 * @static
                 * @param {org.roylance.yaas.IAdminController=} [properties] Properties to set
                 * @returns {org.roylance.yaas.AdminController} AdminController instance
                 */
                AdminController.create = function create(properties) {
                    return new AdminController(properties);
                };

                /**
                 * Encodes the specified AdminController message. Does not implicitly {@link org.roylance.yaas.AdminController.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.AdminController
                 * @static
                 * @param {org.roylance.yaas.IAdminController} message AdminController message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AdminController.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.changePasswordForUser != null && message.hasOwnProperty("changePasswordForUser"))
                        $root.org.roylance.yaas.RequestAction.encode(message.changePasswordForUser, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.getAllUsers != null && message.hasOwnProperty("getAllUsers"))
                        $root.org.roylance.yaas.RequestAction.encode(message.getAllUsers, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.isUserAdmin != null && message.hasOwnProperty("isUserAdmin"))
                        $root.org.roylance.yaas.RequestAction.encode(message.isUserAdmin, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.setUserAsAdmin != null && message.hasOwnProperty("setUserAsAdmin"))
                        $root.org.roylance.yaas.RequestAction.encode(message.setUserAsAdmin, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.removeUserAsAdmin != null && message.hasOwnProperty("removeUserAsAdmin"))
                        $root.org.roylance.yaas.RequestAction.encode(message.removeUserAsAdmin, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.deleteUser != null && message.hasOwnProperty("deleteUser"))
                        $root.org.roylance.yaas.RequestAction.encode(message.deleteUser, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AdminController message, length delimited. Does not implicitly {@link org.roylance.yaas.AdminController.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.AdminController
                 * @static
                 * @param {org.roylance.yaas.IAdminController} message AdminController message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AdminController.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AdminController message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.AdminController
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.AdminController} AdminController
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AdminController.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.AdminController();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.changePasswordForUser = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.getAllUsers = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.isUserAdmin = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.setUserAsAdmin = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.removeUserAsAdmin = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.deleteUser = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AdminController message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.AdminController
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.AdminController} AdminController
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AdminController.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AdminController message.
                 * @function verify
                 * @memberof org.roylance.yaas.AdminController
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AdminController.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.changePasswordForUser != null && message.hasOwnProperty("changePasswordForUser")) {
                        var error = $root.org.roylance.yaas.RequestAction.verify(message.changePasswordForUser);
                        if (error)
                            return "changePasswordForUser." + error;
                    }
                    if (message.getAllUsers != null && message.hasOwnProperty("getAllUsers")) {
                        error = $root.org.roylance.yaas.RequestAction.verify(message.getAllUsers);
                        if (error)
                            return "getAllUsers." + error;
                    }
                    if (message.isUserAdmin != null && message.hasOwnProperty("isUserAdmin")) {
                        error = $root.org.roylance.yaas.RequestAction.verify(message.isUserAdmin);
                        if (error)
                            return "isUserAdmin." + error;
                    }
                    if (message.setUserAsAdmin != null && message.hasOwnProperty("setUserAsAdmin")) {
                        error = $root.org.roylance.yaas.RequestAction.verify(message.setUserAsAdmin);
                        if (error)
                            return "setUserAsAdmin." + error;
                    }
                    if (message.removeUserAsAdmin != null && message.hasOwnProperty("removeUserAsAdmin")) {
                        error = $root.org.roylance.yaas.RequestAction.verify(message.removeUserAsAdmin);
                        if (error)
                            return "removeUserAsAdmin." + error;
                    }
                    if (message.deleteUser != null && message.hasOwnProperty("deleteUser")) {
                        error = $root.org.roylance.yaas.RequestAction.verify(message.deleteUser);
                        if (error)
                            return "deleteUser." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AdminController message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.AdminController
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.AdminController} AdminController
                 */
                AdminController.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.AdminController)
                        return object;
                    var message = new $root.org.roylance.yaas.AdminController();
                    if (object.changePasswordForUser != null) {
                        if (typeof object.changePasswordForUser !== "object")
                            throw TypeError(".org.roylance.yaas.AdminController.changePasswordForUser: object expected");
                        message.changePasswordForUser = $root.org.roylance.yaas.RequestAction.fromObject(object.changePasswordForUser);
                    }
                    if (object.getAllUsers != null) {
                        if (typeof object.getAllUsers !== "object")
                            throw TypeError(".org.roylance.yaas.AdminController.getAllUsers: object expected");
                        message.getAllUsers = $root.org.roylance.yaas.RequestAction.fromObject(object.getAllUsers);
                    }
                    if (object.isUserAdmin != null) {
                        if (typeof object.isUserAdmin !== "object")
                            throw TypeError(".org.roylance.yaas.AdminController.isUserAdmin: object expected");
                        message.isUserAdmin = $root.org.roylance.yaas.RequestAction.fromObject(object.isUserAdmin);
                    }
                    if (object.setUserAsAdmin != null) {
                        if (typeof object.setUserAsAdmin !== "object")
                            throw TypeError(".org.roylance.yaas.AdminController.setUserAsAdmin: object expected");
                        message.setUserAsAdmin = $root.org.roylance.yaas.RequestAction.fromObject(object.setUserAsAdmin);
                    }
                    if (object.removeUserAsAdmin != null) {
                        if (typeof object.removeUserAsAdmin !== "object")
                            throw TypeError(".org.roylance.yaas.AdminController.removeUserAsAdmin: object expected");
                        message.removeUserAsAdmin = $root.org.roylance.yaas.RequestAction.fromObject(object.removeUserAsAdmin);
                    }
                    if (object.deleteUser != null) {
                        if (typeof object.deleteUser !== "object")
                            throw TypeError(".org.roylance.yaas.AdminController.deleteUser: object expected");
                        message.deleteUser = $root.org.roylance.yaas.RequestAction.fromObject(object.deleteUser);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AdminController message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.AdminController
                 * @static
                 * @param {org.roylance.yaas.AdminController} message AdminController
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AdminController.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.changePasswordForUser = null;
                        object.getAllUsers = null;
                        object.isUserAdmin = null;
                        object.setUserAsAdmin = null;
                        object.removeUserAsAdmin = null;
                        object.deleteUser = null;
                    }
                    if (message.changePasswordForUser != null && message.hasOwnProperty("changePasswordForUser"))
                        object.changePasswordForUser = $root.org.roylance.yaas.RequestAction.toObject(message.changePasswordForUser, options);
                    if (message.getAllUsers != null && message.hasOwnProperty("getAllUsers"))
                        object.getAllUsers = $root.org.roylance.yaas.RequestAction.toObject(message.getAllUsers, options);
                    if (message.isUserAdmin != null && message.hasOwnProperty("isUserAdmin"))
                        object.isUserAdmin = $root.org.roylance.yaas.RequestAction.toObject(message.isUserAdmin, options);
                    if (message.setUserAsAdmin != null && message.hasOwnProperty("setUserAsAdmin"))
                        object.setUserAsAdmin = $root.org.roylance.yaas.RequestAction.toObject(message.setUserAsAdmin, options);
                    if (message.removeUserAsAdmin != null && message.hasOwnProperty("removeUserAsAdmin"))
                        object.removeUserAsAdmin = $root.org.roylance.yaas.RequestAction.toObject(message.removeUserAsAdmin, options);
                    if (message.deleteUser != null && message.hasOwnProperty("deleteUser"))
                        object.deleteUser = $root.org.roylance.yaas.RequestAction.toObject(message.deleteUser, options);
                    return object;
                };

                /**
                 * Converts this AdminController to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.AdminController
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AdminController.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AdminController;
            })();

            yaas.AuthenticationController = (function() {

                /**
                 * Properties of an AuthenticationController.
                 * @memberof org.roylance.yaas
                 * @interface IAuthenticationController
                 * @property {org.roylance.yaas.IRequestAction} [exists] AuthenticationController exists
                 * @property {org.roylance.yaas.IRequestAction} [login] AuthenticationController login
                 * @property {org.roylance.yaas.IRequestAction} [authenticate] AuthenticationController authenticate
                 * @property {org.roylance.yaas.IRequestAction} [register] AuthenticationController register
                 * @property {org.roylance.yaas.IRequestAction} [changePassword] AuthenticationController changePassword
                 * @property {org.roylance.yaas.IRequestAction} [save] AuthenticationController save
                 */

                /**
                 * Constructs a new AuthenticationController.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents an AuthenticationController.
                 * @constructor
                 * @param {org.roylance.yaas.IAuthenticationController=} [properties] Properties to set
                 */
                function AuthenticationController(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AuthenticationController exists.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}exists
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @instance
                 */
                AuthenticationController.prototype.exists = null;

                /**
                 * AuthenticationController login.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}login
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @instance
                 */
                AuthenticationController.prototype.login = null;

                /**
                 * AuthenticationController authenticate.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}authenticate
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @instance
                 */
                AuthenticationController.prototype.authenticate = null;

                /**
                 * AuthenticationController register.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}register
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @instance
                 */
                AuthenticationController.prototype.register = null;

                /**
                 * AuthenticationController changePassword.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}changePassword
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @instance
                 */
                AuthenticationController.prototype.changePassword = null;

                /**
                 * AuthenticationController save.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}save
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @instance
                 */
                AuthenticationController.prototype.save = null;

                /**
                 * Creates a new AuthenticationController instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @static
                 * @param {org.roylance.yaas.IAuthenticationController=} [properties] Properties to set
                 * @returns {org.roylance.yaas.AuthenticationController} AuthenticationController instance
                 */
                AuthenticationController.create = function create(properties) {
                    return new AuthenticationController(properties);
                };

                /**
                 * Encodes the specified AuthenticationController message. Does not implicitly {@link org.roylance.yaas.AuthenticationController.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @static
                 * @param {org.roylance.yaas.IAuthenticationController} message AuthenticationController message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AuthenticationController.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.exists != null && message.hasOwnProperty("exists"))
                        $root.org.roylance.yaas.RequestAction.encode(message.exists, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.login != null && message.hasOwnProperty("login"))
                        $root.org.roylance.yaas.RequestAction.encode(message.login, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.authenticate != null && message.hasOwnProperty("authenticate"))
                        $root.org.roylance.yaas.RequestAction.encode(message.authenticate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.register != null && message.hasOwnProperty("register"))
                        $root.org.roylance.yaas.RequestAction.encode(message.register, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.changePassword != null && message.hasOwnProperty("changePassword"))
                        $root.org.roylance.yaas.RequestAction.encode(message.changePassword, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.save != null && message.hasOwnProperty("save"))
                        $root.org.roylance.yaas.RequestAction.encode(message.save, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AuthenticationController message, length delimited. Does not implicitly {@link org.roylance.yaas.AuthenticationController.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @static
                 * @param {org.roylance.yaas.IAuthenticationController} message AuthenticationController message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AuthenticationController.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AuthenticationController message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.AuthenticationController} AuthenticationController
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AuthenticationController.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.AuthenticationController();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.exists = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.login = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.authenticate = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.register = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.changePassword = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.save = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AuthenticationController message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.AuthenticationController} AuthenticationController
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AuthenticationController.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AuthenticationController message.
                 * @function verify
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AuthenticationController.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.exists != null && message.hasOwnProperty("exists")) {
                        var error = $root.org.roylance.yaas.RequestAction.verify(message.exists);
                        if (error)
                            return "exists." + error;
                    }
                    if (message.login != null && message.hasOwnProperty("login")) {
                        error = $root.org.roylance.yaas.RequestAction.verify(message.login);
                        if (error)
                            return "login." + error;
                    }
                    if (message.authenticate != null && message.hasOwnProperty("authenticate")) {
                        error = $root.org.roylance.yaas.RequestAction.verify(message.authenticate);
                        if (error)
                            return "authenticate." + error;
                    }
                    if (message.register != null && message.hasOwnProperty("register")) {
                        error = $root.org.roylance.yaas.RequestAction.verify(message.register);
                        if (error)
                            return "register." + error;
                    }
                    if (message.changePassword != null && message.hasOwnProperty("changePassword")) {
                        error = $root.org.roylance.yaas.RequestAction.verify(message.changePassword);
                        if (error)
                            return "changePassword." + error;
                    }
                    if (message.save != null && message.hasOwnProperty("save")) {
                        error = $root.org.roylance.yaas.RequestAction.verify(message.save);
                        if (error)
                            return "save." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AuthenticationController message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.AuthenticationController} AuthenticationController
                 */
                AuthenticationController.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.AuthenticationController)
                        return object;
                    var message = new $root.org.roylance.yaas.AuthenticationController();
                    if (object.exists != null) {
                        if (typeof object.exists !== "object")
                            throw TypeError(".org.roylance.yaas.AuthenticationController.exists: object expected");
                        message.exists = $root.org.roylance.yaas.RequestAction.fromObject(object.exists);
                    }
                    if (object.login != null) {
                        if (typeof object.login !== "object")
                            throw TypeError(".org.roylance.yaas.AuthenticationController.login: object expected");
                        message.login = $root.org.roylance.yaas.RequestAction.fromObject(object.login);
                    }
                    if (object.authenticate != null) {
                        if (typeof object.authenticate !== "object")
                            throw TypeError(".org.roylance.yaas.AuthenticationController.authenticate: object expected");
                        message.authenticate = $root.org.roylance.yaas.RequestAction.fromObject(object.authenticate);
                    }
                    if (object.register != null) {
                        if (typeof object.register !== "object")
                            throw TypeError(".org.roylance.yaas.AuthenticationController.register: object expected");
                        message.register = $root.org.roylance.yaas.RequestAction.fromObject(object.register);
                    }
                    if (object.changePassword != null) {
                        if (typeof object.changePassword !== "object")
                            throw TypeError(".org.roylance.yaas.AuthenticationController.changePassword: object expected");
                        message.changePassword = $root.org.roylance.yaas.RequestAction.fromObject(object.changePassword);
                    }
                    if (object.save != null) {
                        if (typeof object.save !== "object")
                            throw TypeError(".org.roylance.yaas.AuthenticationController.save: object expected");
                        message.save = $root.org.roylance.yaas.RequestAction.fromObject(object.save);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AuthenticationController message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @static
                 * @param {org.roylance.yaas.AuthenticationController} message AuthenticationController
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AuthenticationController.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.exists = null;
                        object.login = null;
                        object.authenticate = null;
                        object.register = null;
                        object.changePassword = null;
                        object.save = null;
                    }
                    if (message.exists != null && message.hasOwnProperty("exists"))
                        object.exists = $root.org.roylance.yaas.RequestAction.toObject(message.exists, options);
                    if (message.login != null && message.hasOwnProperty("login"))
                        object.login = $root.org.roylance.yaas.RequestAction.toObject(message.login, options);
                    if (message.authenticate != null && message.hasOwnProperty("authenticate"))
                        object.authenticate = $root.org.roylance.yaas.RequestAction.toObject(message.authenticate, options);
                    if (message.register != null && message.hasOwnProperty("register"))
                        object.register = $root.org.roylance.yaas.RequestAction.toObject(message.register, options);
                    if (message.changePassword != null && message.hasOwnProperty("changePassword"))
                        object.changePassword = $root.org.roylance.yaas.RequestAction.toObject(message.changePassword, options);
                    if (message.save != null && message.hasOwnProperty("save"))
                        object.save = $root.org.roylance.yaas.RequestAction.toObject(message.save, options);
                    return object;
                };

                /**
                 * Converts this AuthenticationController to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.AuthenticationController
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AuthenticationController.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AuthenticationController;
            })();

            yaas.UserDeviceController = (function() {

                /**
                 * Properties of a UserDeviceController.
                 * @memberof org.roylance.yaas
                 * @interface IUserDeviceController
                 * @property {org.roylance.yaas.IRequestAction} [save] UserDeviceController save
                 * @property {org.roylance.yaas.IRequestAction} [all] UserDeviceController all
                 */

                /**
                 * Constructs a new UserDeviceController.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents a UserDeviceController.
                 * @constructor
                 * @param {org.roylance.yaas.IUserDeviceController=} [properties] Properties to set
                 */
                function UserDeviceController(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserDeviceController save.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}save
                 * @memberof org.roylance.yaas.UserDeviceController
                 * @instance
                 */
                UserDeviceController.prototype.save = null;

                /**
                 * UserDeviceController all.
                 * @member {(org.roylance.yaas.IRequestAction|null|undefined)}all
                 * @memberof org.roylance.yaas.UserDeviceController
                 * @instance
                 */
                UserDeviceController.prototype.all = null;

                /**
                 * Creates a new UserDeviceController instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.UserDeviceController
                 * @static
                 * @param {org.roylance.yaas.IUserDeviceController=} [properties] Properties to set
                 * @returns {org.roylance.yaas.UserDeviceController} UserDeviceController instance
                 */
                UserDeviceController.create = function create(properties) {
                    return new UserDeviceController(properties);
                };

                /**
                 * Encodes the specified UserDeviceController message. Does not implicitly {@link org.roylance.yaas.UserDeviceController.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.UserDeviceController
                 * @static
                 * @param {org.roylance.yaas.IUserDeviceController} message UserDeviceController message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserDeviceController.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.save != null && message.hasOwnProperty("save"))
                        $root.org.roylance.yaas.RequestAction.encode(message.save, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.all != null && message.hasOwnProperty("all"))
                        $root.org.roylance.yaas.RequestAction.encode(message.all, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UserDeviceController message, length delimited. Does not implicitly {@link org.roylance.yaas.UserDeviceController.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.UserDeviceController
                 * @static
                 * @param {org.roylance.yaas.IUserDeviceController} message UserDeviceController message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserDeviceController.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UserDeviceController message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.UserDeviceController
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.UserDeviceController} UserDeviceController
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserDeviceController.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.UserDeviceController();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.save = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.all = $root.org.roylance.yaas.RequestAction.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UserDeviceController message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.UserDeviceController
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.UserDeviceController} UserDeviceController
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserDeviceController.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UserDeviceController message.
                 * @function verify
                 * @memberof org.roylance.yaas.UserDeviceController
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UserDeviceController.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.save != null && message.hasOwnProperty("save")) {
                        var error = $root.org.roylance.yaas.RequestAction.verify(message.save);
                        if (error)
                            return "save." + error;
                    }
                    if (message.all != null && message.hasOwnProperty("all")) {
                        error = $root.org.roylance.yaas.RequestAction.verify(message.all);
                        if (error)
                            return "all." + error;
                    }
                    return null;
                };

                /**
                 * Creates a UserDeviceController message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.UserDeviceController
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.UserDeviceController} UserDeviceController
                 */
                UserDeviceController.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.UserDeviceController)
                        return object;
                    var message = new $root.org.roylance.yaas.UserDeviceController();
                    if (object.save != null) {
                        if (typeof object.save !== "object")
                            throw TypeError(".org.roylance.yaas.UserDeviceController.save: object expected");
                        message.save = $root.org.roylance.yaas.RequestAction.fromObject(object.save);
                    }
                    if (object.all != null) {
                        if (typeof object.all !== "object")
                            throw TypeError(".org.roylance.yaas.UserDeviceController.all: object expected");
                        message.all = $root.org.roylance.yaas.RequestAction.fromObject(object.all);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a UserDeviceController message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.UserDeviceController
                 * @static
                 * @param {org.roylance.yaas.UserDeviceController} message UserDeviceController
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserDeviceController.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.save = null;
                        object.all = null;
                    }
                    if (message.save != null && message.hasOwnProperty("save"))
                        object.save = $root.org.roylance.yaas.RequestAction.toObject(message.save, options);
                    if (message.all != null && message.hasOwnProperty("all"))
                        object.all = $root.org.roylance.yaas.RequestAction.toObject(message.all, options);
                    return object;
                };

                /**
                 * Converts this UserDeviceController to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.UserDeviceController
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserDeviceController.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UserDeviceController;
            })();

            /**
             * UserDeviceType enum.
             * @enum {string}
             * @property {number} ANDROID=0 ANDROID value
             * @property {number} IOS=1 IOS value
             * @property {number} JAVASCRIPT=2 JAVASCRIPT value
             */
            yaas.UserDeviceType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ANDROID"] = 0;
                values[valuesById[1] = "IOS"] = 1;
                values[valuesById[2] = "JAVASCRIPT"] = 2;
                return values;
            })();

            /**
             * UserRole enum.
             * @enum {string}
             * @property {number} NORMAL=0 NORMAL value
             * @property {number} ADMIN=1 ADMIN value
             */
            yaas.UserRole = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NORMAL"] = 0;
                values[valuesById[1] = "ADMIN"] = 1;
                return values;
            })();

            yaas.UserDevice = (function() {

                /**
                 * Properties of a UserDevice.
                 * @memberof org.roylance.yaas
                 * @interface IUserDevice
                 * @property {string} [id] UserDevice id
                 * @property {org.roylance.yaas.UserDeviceType} [userDeviceType] UserDevice userDeviceType
                 * @property {string} [userDeviceToken] UserDevice userDeviceToken
                 * @property {number|Long} [lastUpdated] UserDevice lastUpdated
                 * @property {org.roylance.yaas.IUser} [user] UserDevice user
                 */

                /**
                 * Constructs a new UserDevice.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents a UserDevice.
                 * @constructor
                 * @param {org.roylance.yaas.IUserDevice=} [properties] Properties to set
                 */
                function UserDevice(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserDevice id.
                 * @member {string}id
                 * @memberof org.roylance.yaas.UserDevice
                 * @instance
                 */
                UserDevice.prototype.id = "";

                /**
                 * UserDevice userDeviceType.
                 * @member {org.roylance.yaas.UserDeviceType}userDeviceType
                 * @memberof org.roylance.yaas.UserDevice
                 * @instance
                 */
                UserDevice.prototype.userDeviceType = 0;

                /**
                 * UserDevice userDeviceToken.
                 * @member {string}userDeviceToken
                 * @memberof org.roylance.yaas.UserDevice
                 * @instance
                 */
                UserDevice.prototype.userDeviceToken = "";

                /**
                 * UserDevice lastUpdated.
                 * @member {number|Long}lastUpdated
                 * @memberof org.roylance.yaas.UserDevice
                 * @instance
                 */
                UserDevice.prototype.lastUpdated = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * UserDevice user.
                 * @member {(org.roylance.yaas.IUser|null|undefined)}user
                 * @memberof org.roylance.yaas.UserDevice
                 * @instance
                 */
                UserDevice.prototype.user = null;

                /**
                 * Creates a new UserDevice instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.UserDevice
                 * @static
                 * @param {org.roylance.yaas.IUserDevice=} [properties] Properties to set
                 * @returns {org.roylance.yaas.UserDevice} UserDevice instance
                 */
                UserDevice.create = function create(properties) {
                    return new UserDevice(properties);
                };

                /**
                 * Encodes the specified UserDevice message. Does not implicitly {@link org.roylance.yaas.UserDevice.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.UserDevice
                 * @static
                 * @param {org.roylance.yaas.IUserDevice} message UserDevice message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserDevice.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.userDeviceType != null && message.hasOwnProperty("userDeviceType"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userDeviceType);
                    if (message.userDeviceToken != null && message.hasOwnProperty("userDeviceToken"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.userDeviceToken);
                    if (message.lastUpdated != null && message.hasOwnProperty("lastUpdated"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.lastUpdated);
                    if (message.user != null && message.hasOwnProperty("user"))
                        $root.org.roylance.yaas.User.encode(message.user, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UserDevice message, length delimited. Does not implicitly {@link org.roylance.yaas.UserDevice.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.UserDevice
                 * @static
                 * @param {org.roylance.yaas.IUserDevice} message UserDevice message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserDevice.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UserDevice message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.UserDevice
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.UserDevice} UserDevice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserDevice.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.UserDevice();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.userDeviceType = reader.int32();
                            break;
                        case 3:
                            message.userDeviceToken = reader.string();
                            break;
                        case 4:
                            message.lastUpdated = reader.int64();
                            break;
                        case 5:
                            message.user = $root.org.roylance.yaas.User.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UserDevice message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.UserDevice
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.UserDevice} UserDevice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserDevice.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UserDevice message.
                 * @function verify
                 * @memberof org.roylance.yaas.UserDevice
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UserDevice.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.userDeviceType != null && message.hasOwnProperty("userDeviceType"))
                        switch (message.userDeviceType) {
                        default:
                            return "userDeviceType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.userDeviceToken != null && message.hasOwnProperty("userDeviceToken"))
                        if (!$util.isString(message.userDeviceToken))
                            return "userDeviceToken: string expected";
                    if (message.lastUpdated != null && message.hasOwnProperty("lastUpdated"))
                        if (!$util.isInteger(message.lastUpdated) && !(message.lastUpdated && $util.isInteger(message.lastUpdated.low) && $util.isInteger(message.lastUpdated.high)))
                            return "lastUpdated: integer|Long expected";
                    if (message.user != null && message.hasOwnProperty("user")) {
                        var error = $root.org.roylance.yaas.User.verify(message.user);
                        if (error)
                            return "user." + error;
                    }
                    return null;
                };

                /**
                 * Creates a UserDevice message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.UserDevice
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.UserDevice} UserDevice
                 */
                UserDevice.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.UserDevice)
                        return object;
                    var message = new $root.org.roylance.yaas.UserDevice();
                    if (object.id != null)
                        message.id = String(object.id);
                    switch (object.userDeviceType) {
                    case "ANDROID":
                    case 0:
                        message.userDeviceType = 0;
                        break;
                    case "IOS":
                    case 1:
                        message.userDeviceType = 1;
                        break;
                    case "JAVASCRIPT":
                    case 2:
                        message.userDeviceType = 2;
                        break;
                    }
                    if (object.userDeviceToken != null)
                        message.userDeviceToken = String(object.userDeviceToken);
                    if (object.lastUpdated != null)
                        if ($util.Long)
                            (message.lastUpdated = $util.Long.fromValue(object.lastUpdated)).unsigned = false;
                        else if (typeof object.lastUpdated === "string")
                            message.lastUpdated = parseInt(object.lastUpdated, 10);
                        else if (typeof object.lastUpdated === "number")
                            message.lastUpdated = object.lastUpdated;
                        else if (typeof object.lastUpdated === "object")
                            message.lastUpdated = new $util.LongBits(object.lastUpdated.low >>> 0, object.lastUpdated.high >>> 0).toNumber();
                    if (object.user != null) {
                        if (typeof object.user !== "object")
                            throw TypeError(".org.roylance.yaas.UserDevice.user: object expected");
                        message.user = $root.org.roylance.yaas.User.fromObject(object.user);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a UserDevice message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.UserDevice
                 * @static
                 * @param {org.roylance.yaas.UserDevice} message UserDevice
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserDevice.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.userDeviceType = options.enums === String ? "ANDROID" : 0;
                        object.userDeviceToken = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.lastUpdated = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.lastUpdated = options.longs === String ? "0" : 0;
                        object.user = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.userDeviceType != null && message.hasOwnProperty("userDeviceType"))
                        object.userDeviceType = options.enums === String ? $root.org.roylance.yaas.UserDeviceType[message.userDeviceType] : message.userDeviceType;
                    if (message.userDeviceToken != null && message.hasOwnProperty("userDeviceToken"))
                        object.userDeviceToken = message.userDeviceToken;
                    if (message.lastUpdated != null && message.hasOwnProperty("lastUpdated"))
                        if (typeof message.lastUpdated === "number")
                            object.lastUpdated = options.longs === String ? String(message.lastUpdated) : message.lastUpdated;
                        else
                            object.lastUpdated = options.longs === String ? $util.Long.prototype.toString.call(message.lastUpdated) : options.longs === Number ? new $util.LongBits(message.lastUpdated.low >>> 0, message.lastUpdated.high >>> 0).toNumber() : message.lastUpdated;
                    if (message.user != null && message.hasOwnProperty("user"))
                        object.user = $root.org.roylance.yaas.User.toObject(message.user, options);
                    return object;
                };

                /**
                 * Converts this UserDevice to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.UserDevice
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserDevice.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UserDevice;
            })();

            yaas.Image = (function() {

                /**
                 * Properties of an Image.
                 * @memberof org.roylance.yaas
                 * @interface IImage
                 * @property {string} [id] Image id
                 * @property {string} [name] Image name
                 * @property {string} [actualImage] Image actualImage
                 */

                /**
                 * Constructs a new Image.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents an Image.
                 * @constructor
                 * @param {org.roylance.yaas.IImage=} [properties] Properties to set
                 */
                function Image(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Image id.
                 * @member {string}id
                 * @memberof org.roylance.yaas.Image
                 * @instance
                 */
                Image.prototype.id = "";

                /**
                 * Image name.
                 * @member {string}name
                 * @memberof org.roylance.yaas.Image
                 * @instance
                 */
                Image.prototype.name = "";

                /**
                 * Image actualImage.
                 * @member {string}actualImage
                 * @memberof org.roylance.yaas.Image
                 * @instance
                 */
                Image.prototype.actualImage = "";

                /**
                 * Creates a new Image instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.Image
                 * @static
                 * @param {org.roylance.yaas.IImage=} [properties] Properties to set
                 * @returns {org.roylance.yaas.Image} Image instance
                 */
                Image.create = function create(properties) {
                    return new Image(properties);
                };

                /**
                 * Encodes the specified Image message. Does not implicitly {@link org.roylance.yaas.Image.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.Image
                 * @static
                 * @param {org.roylance.yaas.IImage} message Image message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Image.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.actualImage != null && message.hasOwnProperty("actualImage"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.actualImage);
                    return writer;
                };

                /**
                 * Encodes the specified Image message, length delimited. Does not implicitly {@link org.roylance.yaas.Image.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.Image
                 * @static
                 * @param {org.roylance.yaas.IImage} message Image message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Image.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Image message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.Image
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.Image} Image
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Image.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.Image();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.actualImage = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Image message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.Image
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.Image} Image
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Image.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Image message.
                 * @function verify
                 * @memberof org.roylance.yaas.Image
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Image.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.actualImage != null && message.hasOwnProperty("actualImage"))
                        if (!$util.isString(message.actualImage))
                            return "actualImage: string expected";
                    return null;
                };

                /**
                 * Creates an Image message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.Image
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.Image} Image
                 */
                Image.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.Image)
                        return object;
                    var message = new $root.org.roylance.yaas.Image();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.actualImage != null)
                        message.actualImage = String(object.actualImage);
                    return message;
                };

                /**
                 * Creates a plain object from an Image message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.Image
                 * @static
                 * @param {org.roylance.yaas.Image} message Image
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Image.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.name = "";
                        object.actualImage = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.actualImage != null && message.hasOwnProperty("actualImage"))
                        object.actualImage = message.actualImage;
                    return object;
                };

                /**
                 * Converts this Image to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.Image
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Image.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Image;
            })();

            yaas.User = (function() {

                /**
                 * Properties of a User.
                 * @memberof org.roylance.yaas
                 * @interface IUser
                 * @property {string} [id] User id
                 * @property {string} [userName] User userName
                 * @property {string} [password] User password
                 * @property {string} [display] User display
                 * @property {string} [firstName] User firstName
                 * @property {string} [lastName] User lastName
                 * @property {org.roylance.yaas.IImage} [image] User image
                 * @property {Array.<org.roylance.yaas.UserRole>} [roles] User roles
                 */

                /**
                 * Constructs a new User.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents a User.
                 * @constructor
                 * @param {org.roylance.yaas.IUser=} [properties] Properties to set
                 */
                function User(properties) {
                    this.roles = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * User id.
                 * @member {string}id
                 * @memberof org.roylance.yaas.User
                 * @instance
                 */
                User.prototype.id = "";

                /**
                 * User userName.
                 * @member {string}userName
                 * @memberof org.roylance.yaas.User
                 * @instance
                 */
                User.prototype.userName = "";

                /**
                 * User password.
                 * @member {string}password
                 * @memberof org.roylance.yaas.User
                 * @instance
                 */
                User.prototype.password = "";

                /**
                 * User display.
                 * @member {string}display
                 * @memberof org.roylance.yaas.User
                 * @instance
                 */
                User.prototype.display = "";

                /**
                 * User firstName.
                 * @member {string}firstName
                 * @memberof org.roylance.yaas.User
                 * @instance
                 */
                User.prototype.firstName = "";

                /**
                 * User lastName.
                 * @member {string}lastName
                 * @memberof org.roylance.yaas.User
                 * @instance
                 */
                User.prototype.lastName = "";

                /**
                 * User image.
                 * @member {(org.roylance.yaas.IImage|null|undefined)}image
                 * @memberof org.roylance.yaas.User
                 * @instance
                 */
                User.prototype.image = null;

                /**
                 * User roles.
                 * @member {Array.<org.roylance.yaas.UserRole>}roles
                 * @memberof org.roylance.yaas.User
                 * @instance
                 */
                User.prototype.roles = $util.emptyArray;

                /**
                 * Creates a new User instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.User
                 * @static
                 * @param {org.roylance.yaas.IUser=} [properties] Properties to set
                 * @returns {org.roylance.yaas.User} User instance
                 */
                User.create = function create(properties) {
                    return new User(properties);
                };

                /**
                 * Encodes the specified User message. Does not implicitly {@link org.roylance.yaas.User.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.User
                 * @static
                 * @param {org.roylance.yaas.IUser} message User message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                User.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.userName != null && message.hasOwnProperty("userName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
                    if (message.password != null && message.hasOwnProperty("password"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
                    if (message.display != null && message.hasOwnProperty("display"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.display);
                    if (message.firstName != null && message.hasOwnProperty("firstName"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.firstName);
                    if (message.lastName != null && message.hasOwnProperty("lastName"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.lastName);
                    if (message.image != null && message.hasOwnProperty("image"))
                        $root.org.roylance.yaas.Image.encode(message.image, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.roles != null && message.roles.length) {
                        writer.uint32(/* id 8, wireType 2 =*/66).fork();
                        for (var i = 0; i < message.roles.length; ++i)
                            writer.int32(message.roles[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Encodes the specified User message, length delimited. Does not implicitly {@link org.roylance.yaas.User.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.User
                 * @static
                 * @param {org.roylance.yaas.IUser} message User message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                User.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a User message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.User
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.User} User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                User.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.User();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.userName = reader.string();
                            break;
                        case 3:
                            message.password = reader.string();
                            break;
                        case 4:
                            message.display = reader.string();
                            break;
                        case 5:
                            message.firstName = reader.string();
                            break;
                        case 6:
                            message.lastName = reader.string();
                            break;
                        case 7:
                            message.image = $root.org.roylance.yaas.Image.decode(reader, reader.uint32());
                            break;
                        case 8:
                            if (!(message.roles && message.roles.length))
                                message.roles = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.roles.push(reader.int32());
                            } else
                                message.roles.push(reader.int32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a User message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.User
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.User} User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                User.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a User message.
                 * @function verify
                 * @memberof org.roylance.yaas.User
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                User.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.userName != null && message.hasOwnProperty("userName"))
                        if (!$util.isString(message.userName))
                            return "userName: string expected";
                    if (message.password != null && message.hasOwnProperty("password"))
                        if (!$util.isString(message.password))
                            return "password: string expected";
                    if (message.display != null && message.hasOwnProperty("display"))
                        if (!$util.isString(message.display))
                            return "display: string expected";
                    if (message.firstName != null && message.hasOwnProperty("firstName"))
                        if (!$util.isString(message.firstName))
                            return "firstName: string expected";
                    if (message.lastName != null && message.hasOwnProperty("lastName"))
                        if (!$util.isString(message.lastName))
                            return "lastName: string expected";
                    if (message.image != null && message.hasOwnProperty("image")) {
                        var error = $root.org.roylance.yaas.Image.verify(message.image);
                        if (error)
                            return "image." + error;
                    }
                    if (message.roles != null && message.hasOwnProperty("roles")) {
                        if (!Array.isArray(message.roles))
                            return "roles: array expected";
                        for (var i = 0; i < message.roles.length; ++i)
                            switch (message.roles[i]) {
                            default:
                                return "roles: enum value[] expected";
                            case 0:
                            case 1:
                                break;
                            }
                    }
                    return null;
                };

                /**
                 * Creates a User message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.User
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.User} User
                 */
                User.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.User)
                        return object;
                    var message = new $root.org.roylance.yaas.User();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.userName != null)
                        message.userName = String(object.userName);
                    if (object.password != null)
                        message.password = String(object.password);
                    if (object.display != null)
                        message.display = String(object.display);
                    if (object.firstName != null)
                        message.firstName = String(object.firstName);
                    if (object.lastName != null)
                        message.lastName = String(object.lastName);
                    if (object.image != null) {
                        if (typeof object.image !== "object")
                            throw TypeError(".org.roylance.yaas.User.image: object expected");
                        message.image = $root.org.roylance.yaas.Image.fromObject(object.image);
                    }
                    if (object.roles) {
                        if (!Array.isArray(object.roles))
                            throw TypeError(".org.roylance.yaas.User.roles: array expected");
                        message.roles = [];
                        for (var i = 0; i < object.roles.length; ++i)
                            switch (object.roles[i]) {
                            default:
                            case "NORMAL":
                            case 0:
                                message.roles[i] = 0;
                                break;
                            case "ADMIN":
                            case 1:
                                message.roles[i] = 1;
                                break;
                            }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a User message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.User
                 * @static
                 * @param {org.roylance.yaas.User} message User
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                User.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.roles = [];
                    if (options.defaults) {
                        object.id = "";
                        object.userName = "";
                        object.password = "";
                        object.display = "";
                        object.firstName = "";
                        object.lastName = "";
                        object.image = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.userName != null && message.hasOwnProperty("userName"))
                        object.userName = message.userName;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    if (message.display != null && message.hasOwnProperty("display"))
                        object.display = message.display;
                    if (message.firstName != null && message.hasOwnProperty("firstName"))
                        object.firstName = message.firstName;
                    if (message.lastName != null && message.hasOwnProperty("lastName"))
                        object.lastName = message.lastName;
                    if (message.image != null && message.hasOwnProperty("image"))
                        object.image = $root.org.roylance.yaas.Image.toObject(message.image, options);
                    if (message.roles && message.roles.length) {
                        object.roles = [];
                        for (var j = 0; j < message.roles.length; ++j)
                            object.roles[j] = options.enums === String ? $root.org.roylance.yaas.UserRole[message.roles[j]] : message.roles[j];
                    }
                    return object;
                };

                /**
                 * Converts this User to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.User
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                User.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return User;
            })();

            yaas.Token = (function() {

                /**
                 * Properties of a Token.
                 * @memberof org.roylance.yaas
                 * @interface IToken
                 * @property {string} [id] Token id
                 * @property {string} [userId] Token userId
                 * @property {number|Long} [issued] Token issued
                 * @property {number|Long} [expiration] Token expiration
                 */

                /**
                 * Constructs a new Token.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents a Token.
                 * @constructor
                 * @param {org.roylance.yaas.IToken=} [properties] Properties to set
                 */
                function Token(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Token id.
                 * @member {string}id
                 * @memberof org.roylance.yaas.Token
                 * @instance
                 */
                Token.prototype.id = "";

                /**
                 * Token userId.
                 * @member {string}userId
                 * @memberof org.roylance.yaas.Token
                 * @instance
                 */
                Token.prototype.userId = "";

                /**
                 * Token issued.
                 * @member {number|Long}issued
                 * @memberof org.roylance.yaas.Token
                 * @instance
                 */
                Token.prototype.issued = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Token expiration.
                 * @member {number|Long}expiration
                 * @memberof org.roylance.yaas.Token
                 * @instance
                 */
                Token.prototype.expiration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new Token instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.Token
                 * @static
                 * @param {org.roylance.yaas.IToken=} [properties] Properties to set
                 * @returns {org.roylance.yaas.Token} Token instance
                 */
                Token.create = function create(properties) {
                    return new Token(properties);
                };

                /**
                 * Encodes the specified Token message. Does not implicitly {@link org.roylance.yaas.Token.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.Token
                 * @static
                 * @param {org.roylance.yaas.IToken} message Token message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Token.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
                    if (message.issued != null && message.hasOwnProperty("issued"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.issued);
                    if (message.expiration != null && message.hasOwnProperty("expiration"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.expiration);
                    return writer;
                };

                /**
                 * Encodes the specified Token message, length delimited. Does not implicitly {@link org.roylance.yaas.Token.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.Token
                 * @static
                 * @param {org.roylance.yaas.IToken} message Token message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Token.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Token message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.Token
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.Token} Token
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Token.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.Token();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.userId = reader.string();
                            break;
                        case 3:
                            message.issued = reader.int64();
                            break;
                        case 4:
                            message.expiration = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Token message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.Token
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.Token} Token
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Token.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Token message.
                 * @function verify
                 * @memberof org.roylance.yaas.Token
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Token.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (!$util.isString(message.userId))
                            return "userId: string expected";
                    if (message.issued != null && message.hasOwnProperty("issued"))
                        if (!$util.isInteger(message.issued) && !(message.issued && $util.isInteger(message.issued.low) && $util.isInteger(message.issued.high)))
                            return "issued: integer|Long expected";
                    if (message.expiration != null && message.hasOwnProperty("expiration"))
                        if (!$util.isInteger(message.expiration) && !(message.expiration && $util.isInteger(message.expiration.low) && $util.isInteger(message.expiration.high)))
                            return "expiration: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a Token message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.Token
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.Token} Token
                 */
                Token.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.Token)
                        return object;
                    var message = new $root.org.roylance.yaas.Token();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.userId != null)
                        message.userId = String(object.userId);
                    if (object.issued != null)
                        if ($util.Long)
                            (message.issued = $util.Long.fromValue(object.issued)).unsigned = false;
                        else if (typeof object.issued === "string")
                            message.issued = parseInt(object.issued, 10);
                        else if (typeof object.issued === "number")
                            message.issued = object.issued;
                        else if (typeof object.issued === "object")
                            message.issued = new $util.LongBits(object.issued.low >>> 0, object.issued.high >>> 0).toNumber();
                    if (object.expiration != null)
                        if ($util.Long)
                            (message.expiration = $util.Long.fromValue(object.expiration)).unsigned = false;
                        else if (typeof object.expiration === "string")
                            message.expiration = parseInt(object.expiration, 10);
                        else if (typeof object.expiration === "number")
                            message.expiration = object.expiration;
                        else if (typeof object.expiration === "object")
                            message.expiration = new $util.LongBits(object.expiration.low >>> 0, object.expiration.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a Token message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.Token
                 * @static
                 * @param {org.roylance.yaas.Token} message Token
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Token.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.userId = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.issued = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.issued = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.expiration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.expiration = options.longs === String ? "0" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        object.userId = message.userId;
                    if (message.issued != null && message.hasOwnProperty("issued"))
                        if (typeof message.issued === "number")
                            object.issued = options.longs === String ? String(message.issued) : message.issued;
                        else
                            object.issued = options.longs === String ? $util.Long.prototype.toString.call(message.issued) : options.longs === Number ? new $util.LongBits(message.issued.low >>> 0, message.issued.high >>> 0).toNumber() : message.issued;
                    if (message.expiration != null && message.hasOwnProperty("expiration"))
                        if (typeof message.expiration === "number")
                            object.expiration = options.longs === String ? String(message.expiration) : message.expiration;
                        else
                            object.expiration = options.longs === String ? $util.Long.prototype.toString.call(message.expiration) : options.longs === Number ? new $util.LongBits(message.expiration.low >>> 0, message.expiration.high >>> 0).toNumber() : message.expiration;
                    return object;
                };

                /**
                 * Converts this Token to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.Token
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Token.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Token;
            })();

            yaas.UIAuthentication = (function() {

                /**
                 * Properties of a UIAuthentication.
                 * @memberof org.roylance.yaas
                 * @interface IUIAuthentication
                 * @property {boolean} [authenticated] UIAuthentication authenticated
                 * @property {string} [token] UIAuthentication token
                 * @property {string} [userName] UIAuthentication userName
                 * @property {string} [display] UIAuthentication display
                 * @property {boolean} [isAdmin] UIAuthentication isAdmin
                 */

                /**
                 * Constructs a new UIAuthentication.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents a UIAuthentication.
                 * @constructor
                 * @param {org.roylance.yaas.IUIAuthentication=} [properties] Properties to set
                 */
                function UIAuthentication(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UIAuthentication authenticated.
                 * @member {boolean}authenticated
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @instance
                 */
                UIAuthentication.prototype.authenticated = false;

                /**
                 * UIAuthentication token.
                 * @member {string}token
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @instance
                 */
                UIAuthentication.prototype.token = "";

                /**
                 * UIAuthentication userName.
                 * @member {string}userName
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @instance
                 */
                UIAuthentication.prototype.userName = "";

                /**
                 * UIAuthentication display.
                 * @member {string}display
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @instance
                 */
                UIAuthentication.prototype.display = "";

                /**
                 * UIAuthentication isAdmin.
                 * @member {boolean}isAdmin
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @instance
                 */
                UIAuthentication.prototype.isAdmin = false;

                /**
                 * Creates a new UIAuthentication instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @static
                 * @param {org.roylance.yaas.IUIAuthentication=} [properties] Properties to set
                 * @returns {org.roylance.yaas.UIAuthentication} UIAuthentication instance
                 */
                UIAuthentication.create = function create(properties) {
                    return new UIAuthentication(properties);
                };

                /**
                 * Encodes the specified UIAuthentication message. Does not implicitly {@link org.roylance.yaas.UIAuthentication.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @static
                 * @param {org.roylance.yaas.IUIAuthentication} message UIAuthentication message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UIAuthentication.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.authenticated != null && message.hasOwnProperty("authenticated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.authenticated);
                    if (message.token != null && message.hasOwnProperty("token"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
                    if (message.userName != null && message.hasOwnProperty("userName"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.userName);
                    if (message.display != null && message.hasOwnProperty("display"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.display);
                    if (message.isAdmin != null && message.hasOwnProperty("isAdmin"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isAdmin);
                    return writer;
                };

                /**
                 * Encodes the specified UIAuthentication message, length delimited. Does not implicitly {@link org.roylance.yaas.UIAuthentication.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @static
                 * @param {org.roylance.yaas.IUIAuthentication} message UIAuthentication message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UIAuthentication.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UIAuthentication message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.UIAuthentication} UIAuthentication
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UIAuthentication.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.UIAuthentication();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.authenticated = reader.bool();
                            break;
                        case 2:
                            message.token = reader.string();
                            break;
                        case 3:
                            message.userName = reader.string();
                            break;
                        case 4:
                            message.display = reader.string();
                            break;
                        case 5:
                            message.isAdmin = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UIAuthentication message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.UIAuthentication} UIAuthentication
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UIAuthentication.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UIAuthentication message.
                 * @function verify
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UIAuthentication.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.authenticated != null && message.hasOwnProperty("authenticated"))
                        if (typeof message.authenticated !== "boolean")
                            return "authenticated: boolean expected";
                    if (message.token != null && message.hasOwnProperty("token"))
                        if (!$util.isString(message.token))
                            return "token: string expected";
                    if (message.userName != null && message.hasOwnProperty("userName"))
                        if (!$util.isString(message.userName))
                            return "userName: string expected";
                    if (message.display != null && message.hasOwnProperty("display"))
                        if (!$util.isString(message.display))
                            return "display: string expected";
                    if (message.isAdmin != null && message.hasOwnProperty("isAdmin"))
                        if (typeof message.isAdmin !== "boolean")
                            return "isAdmin: boolean expected";
                    return null;
                };

                /**
                 * Creates a UIAuthentication message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.UIAuthentication} UIAuthentication
                 */
                UIAuthentication.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.UIAuthentication)
                        return object;
                    var message = new $root.org.roylance.yaas.UIAuthentication();
                    if (object.authenticated != null)
                        message.authenticated = Boolean(object.authenticated);
                    if (object.token != null)
                        message.token = String(object.token);
                    if (object.userName != null)
                        message.userName = String(object.userName);
                    if (object.display != null)
                        message.display = String(object.display);
                    if (object.isAdmin != null)
                        message.isAdmin = Boolean(object.isAdmin);
                    return message;
                };

                /**
                 * Creates a plain object from a UIAuthentication message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @static
                 * @param {org.roylance.yaas.UIAuthentication} message UIAuthentication
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UIAuthentication.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.authenticated = false;
                        object.token = "";
                        object.userName = "";
                        object.display = "";
                        object.isAdmin = false;
                    }
                    if (message.authenticated != null && message.hasOwnProperty("authenticated"))
                        object.authenticated = message.authenticated;
                    if (message.token != null && message.hasOwnProperty("token"))
                        object.token = message.token;
                    if (message.userName != null && message.hasOwnProperty("userName"))
                        object.userName = message.userName;
                    if (message.display != null && message.hasOwnProperty("display"))
                        object.display = message.display;
                    if (message.isAdmin != null && message.hasOwnProperty("isAdmin"))
                        object.isAdmin = message.isAdmin;
                    return object;
                };

                /**
                 * Converts this UIAuthentication to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.UIAuthentication
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UIAuthentication.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UIAuthentication;
            })();

            yaas.UIChangePassword = (function() {

                /**
                 * Properties of a UIChangePassword.
                 * @memberof org.roylance.yaas
                 * @interface IUIChangePassword
                 * @property {string} [userName] UIChangePassword userName
                 * @property {string} [oldPassword] UIChangePassword oldPassword
                 * @property {string} [newPassword] UIChangePassword newPassword
                 */

                /**
                 * Constructs a new UIChangePassword.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents a UIChangePassword.
                 * @constructor
                 * @param {org.roylance.yaas.IUIChangePassword=} [properties] Properties to set
                 */
                function UIChangePassword(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UIChangePassword userName.
                 * @member {string}userName
                 * @memberof org.roylance.yaas.UIChangePassword
                 * @instance
                 */
                UIChangePassword.prototype.userName = "";

                /**
                 * UIChangePassword oldPassword.
                 * @member {string}oldPassword
                 * @memberof org.roylance.yaas.UIChangePassword
                 * @instance
                 */
                UIChangePassword.prototype.oldPassword = "";

                /**
                 * UIChangePassword newPassword.
                 * @member {string}newPassword
                 * @memberof org.roylance.yaas.UIChangePassword
                 * @instance
                 */
                UIChangePassword.prototype.newPassword = "";

                /**
                 * Creates a new UIChangePassword instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.UIChangePassword
                 * @static
                 * @param {org.roylance.yaas.IUIChangePassword=} [properties] Properties to set
                 * @returns {org.roylance.yaas.UIChangePassword} UIChangePassword instance
                 */
                UIChangePassword.create = function create(properties) {
                    return new UIChangePassword(properties);
                };

                /**
                 * Encodes the specified UIChangePassword message. Does not implicitly {@link org.roylance.yaas.UIChangePassword.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.UIChangePassword
                 * @static
                 * @param {org.roylance.yaas.IUIChangePassword} message UIChangePassword message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UIChangePassword.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userName != null && message.hasOwnProperty("userName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
                    if (message.oldPassword != null && message.hasOwnProperty("oldPassword"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.oldPassword);
                    if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.newPassword);
                    return writer;
                };

                /**
                 * Encodes the specified UIChangePassword message, length delimited. Does not implicitly {@link org.roylance.yaas.UIChangePassword.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.UIChangePassword
                 * @static
                 * @param {org.roylance.yaas.IUIChangePassword} message UIChangePassword message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UIChangePassword.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UIChangePassword message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.UIChangePassword
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.UIChangePassword} UIChangePassword
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UIChangePassword.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.UIChangePassword();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userName = reader.string();
                            break;
                        case 2:
                            message.oldPassword = reader.string();
                            break;
                        case 3:
                            message.newPassword = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UIChangePassword message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.UIChangePassword
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.UIChangePassword} UIChangePassword
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UIChangePassword.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UIChangePassword message.
                 * @function verify
                 * @memberof org.roylance.yaas.UIChangePassword
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UIChangePassword.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.userName != null && message.hasOwnProperty("userName"))
                        if (!$util.isString(message.userName))
                            return "userName: string expected";
                    if (message.oldPassword != null && message.hasOwnProperty("oldPassword"))
                        if (!$util.isString(message.oldPassword))
                            return "oldPassword: string expected";
                    if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                        if (!$util.isString(message.newPassword))
                            return "newPassword: string expected";
                    return null;
                };

                /**
                 * Creates a UIChangePassword message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.UIChangePassword
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.UIChangePassword} UIChangePassword
                 */
                UIChangePassword.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.UIChangePassword)
                        return object;
                    var message = new $root.org.roylance.yaas.UIChangePassword();
                    if (object.userName != null)
                        message.userName = String(object.userName);
                    if (object.oldPassword != null)
                        message.oldPassword = String(object.oldPassword);
                    if (object.newPassword != null)
                        message.newPassword = String(object.newPassword);
                    return message;
                };

                /**
                 * Creates a plain object from a UIChangePassword message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.UIChangePassword
                 * @static
                 * @param {org.roylance.yaas.UIChangePassword} message UIChangePassword
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UIChangePassword.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.userName = "";
                        object.oldPassword = "";
                        object.newPassword = "";
                    }
                    if (message.userName != null && message.hasOwnProperty("userName"))
                        object.userName = message.userName;
                    if (message.oldPassword != null && message.hasOwnProperty("oldPassword"))
                        object.oldPassword = message.oldPassword;
                    if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                        object.newPassword = message.newPassword;
                    return object;
                };

                /**
                 * Converts this UIChangePassword to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.UIChangePassword
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UIChangePassword.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UIChangePassword;
            })();

            yaas.UIYaasRequest = (function() {

                /**
                 * Properties of a UIYaasRequest.
                 * @memberof org.roylance.yaas
                 * @interface IUIYaasRequest
                 * @property {string} [token] UIYaasRequest token
                 * @property {string} [content] UIYaasRequest content
                 * @property {org.roylance.yaas.IUser} [user] UIYaasRequest user
                 * @property {org.roylance.yaas.IUserDevice} [userDevice] UIYaasRequest userDevice
                 * @property {org.roylance.yaas.IImage} [image] UIYaasRequest image
                 * @property {number} [offset] UIYaasRequest offset
                 * @property {number} [limit] UIYaasRequest limit
                 * @property {org.roylance.yaas.IUIChangePassword} [changePassword] UIYaasRequest changePassword
                 */

                /**
                 * Constructs a new UIYaasRequest.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents a UIYaasRequest.
                 * @constructor
                 * @param {org.roylance.yaas.IUIYaasRequest=} [properties] Properties to set
                 */
                function UIYaasRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UIYaasRequest token.
                 * @member {string}token
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @instance
                 */
                UIYaasRequest.prototype.token = "";

                /**
                 * UIYaasRequest content.
                 * @member {string}content
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @instance
                 */
                UIYaasRequest.prototype.content = "";

                /**
                 * UIYaasRequest user.
                 * @member {(org.roylance.yaas.IUser|null|undefined)}user
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @instance
                 */
                UIYaasRequest.prototype.user = null;

                /**
                 * UIYaasRequest userDevice.
                 * @member {(org.roylance.yaas.IUserDevice|null|undefined)}userDevice
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @instance
                 */
                UIYaasRequest.prototype.userDevice = null;

                /**
                 * UIYaasRequest image.
                 * @member {(org.roylance.yaas.IImage|null|undefined)}image
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @instance
                 */
                UIYaasRequest.prototype.image = null;

                /**
                 * UIYaasRequest offset.
                 * @member {number}offset
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @instance
                 */
                UIYaasRequest.prototype.offset = 0;

                /**
                 * UIYaasRequest limit.
                 * @member {number}limit
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @instance
                 */
                UIYaasRequest.prototype.limit = 0;

                /**
                 * UIYaasRequest changePassword.
                 * @member {(org.roylance.yaas.IUIChangePassword|null|undefined)}changePassword
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @instance
                 */
                UIYaasRequest.prototype.changePassword = null;

                /**
                 * Creates a new UIYaasRequest instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @static
                 * @param {org.roylance.yaas.IUIYaasRequest=} [properties] Properties to set
                 * @returns {org.roylance.yaas.UIYaasRequest} UIYaasRequest instance
                 */
                UIYaasRequest.create = function create(properties) {
                    return new UIYaasRequest(properties);
                };

                /**
                 * Encodes the specified UIYaasRequest message. Does not implicitly {@link org.roylance.yaas.UIYaasRequest.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @static
                 * @param {org.roylance.yaas.IUIYaasRequest} message UIYaasRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UIYaasRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.token != null && message.hasOwnProperty("token"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                    if (message.content != null && message.hasOwnProperty("content"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                    if (message.user != null && message.hasOwnProperty("user"))
                        $root.org.roylance.yaas.User.encode(message.user, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.userDevice != null && message.hasOwnProperty("userDevice"))
                        $root.org.roylance.yaas.UserDevice.encode(message.userDevice, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.image != null && message.hasOwnProperty("image"))
                        $root.org.roylance.yaas.Image.encode(message.image, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.offset != null && message.hasOwnProperty("offset"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.offset);
                    if (message.limit != null && message.hasOwnProperty("limit"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.limit);
                    if (message.changePassword != null && message.hasOwnProperty("changePassword"))
                        $root.org.roylance.yaas.UIChangePassword.encode(message.changePassword, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UIYaasRequest message, length delimited. Does not implicitly {@link org.roylance.yaas.UIYaasRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @static
                 * @param {org.roylance.yaas.IUIYaasRequest} message UIYaasRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UIYaasRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UIYaasRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.UIYaasRequest} UIYaasRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UIYaasRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.UIYaasRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.token = reader.string();
                            break;
                        case 2:
                            message.content = reader.string();
                            break;
                        case 3:
                            message.user = $root.org.roylance.yaas.User.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.userDevice = $root.org.roylance.yaas.UserDevice.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.image = $root.org.roylance.yaas.Image.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.offset = reader.int32();
                            break;
                        case 7:
                            message.limit = reader.int32();
                            break;
                        case 8:
                            message.changePassword = $root.org.roylance.yaas.UIChangePassword.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UIYaasRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.UIYaasRequest} UIYaasRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UIYaasRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UIYaasRequest message.
                 * @function verify
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UIYaasRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.token != null && message.hasOwnProperty("token"))
                        if (!$util.isString(message.token))
                            return "token: string expected";
                    if (message.content != null && message.hasOwnProperty("content"))
                        if (!$util.isString(message.content))
                            return "content: string expected";
                    if (message.user != null && message.hasOwnProperty("user")) {
                        var error = $root.org.roylance.yaas.User.verify(message.user);
                        if (error)
                            return "user." + error;
                    }
                    if (message.userDevice != null && message.hasOwnProperty("userDevice")) {
                        error = $root.org.roylance.yaas.UserDevice.verify(message.userDevice);
                        if (error)
                            return "userDevice." + error;
                    }
                    if (message.image != null && message.hasOwnProperty("image")) {
                        error = $root.org.roylance.yaas.Image.verify(message.image);
                        if (error)
                            return "image." + error;
                    }
                    if (message.offset != null && message.hasOwnProperty("offset"))
                        if (!$util.isInteger(message.offset))
                            return "offset: integer expected";
                    if (message.limit != null && message.hasOwnProperty("limit"))
                        if (!$util.isInteger(message.limit))
                            return "limit: integer expected";
                    if (message.changePassword != null && message.hasOwnProperty("changePassword")) {
                        error = $root.org.roylance.yaas.UIChangePassword.verify(message.changePassword);
                        if (error)
                            return "changePassword." + error;
                    }
                    return null;
                };

                /**
                 * Creates a UIYaasRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.UIYaasRequest} UIYaasRequest
                 */
                UIYaasRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.UIYaasRequest)
                        return object;
                    var message = new $root.org.roylance.yaas.UIYaasRequest();
                    if (object.token != null)
                        message.token = String(object.token);
                    if (object.content != null)
                        message.content = String(object.content);
                    if (object.user != null) {
                        if (typeof object.user !== "object")
                            throw TypeError(".org.roylance.yaas.UIYaasRequest.user: object expected");
                        message.user = $root.org.roylance.yaas.User.fromObject(object.user);
                    }
                    if (object.userDevice != null) {
                        if (typeof object.userDevice !== "object")
                            throw TypeError(".org.roylance.yaas.UIYaasRequest.userDevice: object expected");
                        message.userDevice = $root.org.roylance.yaas.UserDevice.fromObject(object.userDevice);
                    }
                    if (object.image != null) {
                        if (typeof object.image !== "object")
                            throw TypeError(".org.roylance.yaas.UIYaasRequest.image: object expected");
                        message.image = $root.org.roylance.yaas.Image.fromObject(object.image);
                    }
                    if (object.offset != null)
                        message.offset = object.offset | 0;
                    if (object.limit != null)
                        message.limit = object.limit | 0;
                    if (object.changePassword != null) {
                        if (typeof object.changePassword !== "object")
                            throw TypeError(".org.roylance.yaas.UIYaasRequest.changePassword: object expected");
                        message.changePassword = $root.org.roylance.yaas.UIChangePassword.fromObject(object.changePassword);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a UIYaasRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @static
                 * @param {org.roylance.yaas.UIYaasRequest} message UIYaasRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UIYaasRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.token = "";
                        object.content = "";
                        object.user = null;
                        object.userDevice = null;
                        object.image = null;
                        object.offset = 0;
                        object.limit = 0;
                        object.changePassword = null;
                    }
                    if (message.token != null && message.hasOwnProperty("token"))
                        object.token = message.token;
                    if (message.content != null && message.hasOwnProperty("content"))
                        object.content = message.content;
                    if (message.user != null && message.hasOwnProperty("user"))
                        object.user = $root.org.roylance.yaas.User.toObject(message.user, options);
                    if (message.userDevice != null && message.hasOwnProperty("userDevice"))
                        object.userDevice = $root.org.roylance.yaas.UserDevice.toObject(message.userDevice, options);
                    if (message.image != null && message.hasOwnProperty("image"))
                        object.image = $root.org.roylance.yaas.Image.toObject(message.image, options);
                    if (message.offset != null && message.hasOwnProperty("offset"))
                        object.offset = message.offset;
                    if (message.limit != null && message.hasOwnProperty("limit"))
                        object.limit = message.limit;
                    if (message.changePassword != null && message.hasOwnProperty("changePassword"))
                        object.changePassword = $root.org.roylance.yaas.UIChangePassword.toObject(message.changePassword, options);
                    return object;
                };

                /**
                 * Converts this UIYaasRequest to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.UIYaasRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UIYaasRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UIYaasRequest;
            })();

            yaas.UIYaasResponse = (function() {

                /**
                 * Properties of a UIYaasResponse.
                 * @memberof org.roylance.yaas
                 * @interface IUIYaasResponse
                 * @property {boolean} [authenticated] UIYaasResponse authenticated
                 * @property {string} [errorMessage] UIYaasResponse errorMessage
                 * @property {boolean} [successful] UIYaasResponse successful
                 * @property {string} [content] UIYaasResponse content
                 * @property {boolean} [isAdmin] UIYaasResponse isAdmin
                 * @property {org.roylance.yaas.IUIAuthentication} [user] UIYaasResponse user
                 * @property {org.roylance.yaas.IUIAuthentications} [users] UIYaasResponse users
                 * @property {Array.<org.roylance.yaas.IUserDevice>} [userDevices] UIYaasResponse userDevices
                 */

                /**
                 * Constructs a new UIYaasResponse.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents a UIYaasResponse.
                 * @constructor
                 * @param {org.roylance.yaas.IUIYaasResponse=} [properties] Properties to set
                 */
                function UIYaasResponse(properties) {
                    this.userDevices = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UIYaasResponse authenticated.
                 * @member {boolean}authenticated
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @instance
                 */
                UIYaasResponse.prototype.authenticated = false;

                /**
                 * UIYaasResponse errorMessage.
                 * @member {string}errorMessage
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @instance
                 */
                UIYaasResponse.prototype.errorMessage = "";

                /**
                 * UIYaasResponse successful.
                 * @member {boolean}successful
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @instance
                 */
                UIYaasResponse.prototype.successful = false;

                /**
                 * UIYaasResponse content.
                 * @member {string}content
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @instance
                 */
                UIYaasResponse.prototype.content = "";

                /**
                 * UIYaasResponse isAdmin.
                 * @member {boolean}isAdmin
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @instance
                 */
                UIYaasResponse.prototype.isAdmin = false;

                /**
                 * UIYaasResponse user.
                 * @member {(org.roylance.yaas.IUIAuthentication|null|undefined)}user
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @instance
                 */
                UIYaasResponse.prototype.user = null;

                /**
                 * UIYaasResponse users.
                 * @member {(org.roylance.yaas.IUIAuthentications|null|undefined)}users
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @instance
                 */
                UIYaasResponse.prototype.users = null;

                /**
                 * UIYaasResponse userDevices.
                 * @member {Array.<org.roylance.yaas.IUserDevice>}userDevices
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @instance
                 */
                UIYaasResponse.prototype.userDevices = $util.emptyArray;

                /**
                 * Creates a new UIYaasResponse instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @static
                 * @param {org.roylance.yaas.IUIYaasResponse=} [properties] Properties to set
                 * @returns {org.roylance.yaas.UIYaasResponse} UIYaasResponse instance
                 */
                UIYaasResponse.create = function create(properties) {
                    return new UIYaasResponse(properties);
                };

                /**
                 * Encodes the specified UIYaasResponse message. Does not implicitly {@link org.roylance.yaas.UIYaasResponse.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @static
                 * @param {org.roylance.yaas.IUIYaasResponse} message UIYaasResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UIYaasResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.authenticated != null && message.hasOwnProperty("authenticated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.authenticated);
                    if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
                    if (message.successful != null && message.hasOwnProperty("successful"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.successful);
                    if (message.content != null && message.hasOwnProperty("content"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
                    if (message.isAdmin != null && message.hasOwnProperty("isAdmin"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isAdmin);
                    if (message.user != null && message.hasOwnProperty("user"))
                        $root.org.roylance.yaas.UIAuthentication.encode(message.user, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.users != null && message.hasOwnProperty("users"))
                        $root.org.roylance.yaas.UIAuthentications.encode(message.users, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.userDevices != null && message.userDevices.length)
                        for (var i = 0; i < message.userDevices.length; ++i)
                            $root.org.roylance.yaas.UserDevice.encode(message.userDevices[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UIYaasResponse message, length delimited. Does not implicitly {@link org.roylance.yaas.UIYaasResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @static
                 * @param {org.roylance.yaas.IUIYaasResponse} message UIYaasResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UIYaasResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UIYaasResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.UIYaasResponse} UIYaasResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UIYaasResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.UIYaasResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.authenticated = reader.bool();
                            break;
                        case 2:
                            message.errorMessage = reader.string();
                            break;
                        case 3:
                            message.successful = reader.bool();
                            break;
                        case 4:
                            message.content = reader.string();
                            break;
                        case 5:
                            message.isAdmin = reader.bool();
                            break;
                        case 6:
                            message.user = $root.org.roylance.yaas.UIAuthentication.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.users = $root.org.roylance.yaas.UIAuthentications.decode(reader, reader.uint32());
                            break;
                        case 8:
                            if (!(message.userDevices && message.userDevices.length))
                                message.userDevices = [];
                            message.userDevices.push($root.org.roylance.yaas.UserDevice.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UIYaasResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.UIYaasResponse} UIYaasResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UIYaasResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UIYaasResponse message.
                 * @function verify
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UIYaasResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.authenticated != null && message.hasOwnProperty("authenticated"))
                        if (typeof message.authenticated !== "boolean")
                            return "authenticated: boolean expected";
                    if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                        if (!$util.isString(message.errorMessage))
                            return "errorMessage: string expected";
                    if (message.successful != null && message.hasOwnProperty("successful"))
                        if (typeof message.successful !== "boolean")
                            return "successful: boolean expected";
                    if (message.content != null && message.hasOwnProperty("content"))
                        if (!$util.isString(message.content))
                            return "content: string expected";
                    if (message.isAdmin != null && message.hasOwnProperty("isAdmin"))
                        if (typeof message.isAdmin !== "boolean")
                            return "isAdmin: boolean expected";
                    if (message.user != null && message.hasOwnProperty("user")) {
                        var error = $root.org.roylance.yaas.UIAuthentication.verify(message.user);
                        if (error)
                            return "user." + error;
                    }
                    if (message.users != null && message.hasOwnProperty("users")) {
                        error = $root.org.roylance.yaas.UIAuthentications.verify(message.users);
                        if (error)
                            return "users." + error;
                    }
                    if (message.userDevices != null && message.hasOwnProperty("userDevices")) {
                        if (!Array.isArray(message.userDevices))
                            return "userDevices: array expected";
                        for (var i = 0; i < message.userDevices.length; ++i) {
                            error = $root.org.roylance.yaas.UserDevice.verify(message.userDevices[i]);
                            if (error)
                                return "userDevices." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a UIYaasResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.UIYaasResponse} UIYaasResponse
                 */
                UIYaasResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.UIYaasResponse)
                        return object;
                    var message = new $root.org.roylance.yaas.UIYaasResponse();
                    if (object.authenticated != null)
                        message.authenticated = Boolean(object.authenticated);
                    if (object.errorMessage != null)
                        message.errorMessage = String(object.errorMessage);
                    if (object.successful != null)
                        message.successful = Boolean(object.successful);
                    if (object.content != null)
                        message.content = String(object.content);
                    if (object.isAdmin != null)
                        message.isAdmin = Boolean(object.isAdmin);
                    if (object.user != null) {
                        if (typeof object.user !== "object")
                            throw TypeError(".org.roylance.yaas.UIYaasResponse.user: object expected");
                        message.user = $root.org.roylance.yaas.UIAuthentication.fromObject(object.user);
                    }
                    if (object.users != null) {
                        if (typeof object.users !== "object")
                            throw TypeError(".org.roylance.yaas.UIYaasResponse.users: object expected");
                        message.users = $root.org.roylance.yaas.UIAuthentications.fromObject(object.users);
                    }
                    if (object.userDevices) {
                        if (!Array.isArray(object.userDevices))
                            throw TypeError(".org.roylance.yaas.UIYaasResponse.userDevices: array expected");
                        message.userDevices = [];
                        for (var i = 0; i < object.userDevices.length; ++i) {
                            if (typeof object.userDevices[i] !== "object")
                                throw TypeError(".org.roylance.yaas.UIYaasResponse.userDevices: object expected");
                            message.userDevices[i] = $root.org.roylance.yaas.UserDevice.fromObject(object.userDevices[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a UIYaasResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @static
                 * @param {org.roylance.yaas.UIYaasResponse} message UIYaasResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UIYaasResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.userDevices = [];
                    if (options.defaults) {
                        object.authenticated = false;
                        object.errorMessage = "";
                        object.successful = false;
                        object.content = "";
                        object.isAdmin = false;
                        object.user = null;
                        object.users = null;
                    }
                    if (message.authenticated != null && message.hasOwnProperty("authenticated"))
                        object.authenticated = message.authenticated;
                    if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                        object.errorMessage = message.errorMessage;
                    if (message.successful != null && message.hasOwnProperty("successful"))
                        object.successful = message.successful;
                    if (message.content != null && message.hasOwnProperty("content"))
                        object.content = message.content;
                    if (message.isAdmin != null && message.hasOwnProperty("isAdmin"))
                        object.isAdmin = message.isAdmin;
                    if (message.user != null && message.hasOwnProperty("user"))
                        object.user = $root.org.roylance.yaas.UIAuthentication.toObject(message.user, options);
                    if (message.users != null && message.hasOwnProperty("users"))
                        object.users = $root.org.roylance.yaas.UIAuthentications.toObject(message.users, options);
                    if (message.userDevices && message.userDevices.length) {
                        object.userDevices = [];
                        for (var j = 0; j < message.userDevices.length; ++j)
                            object.userDevices[j] = $root.org.roylance.yaas.UserDevice.toObject(message.userDevices[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this UIYaasResponse to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.UIYaasResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UIYaasResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UIYaasResponse;
            })();

            yaas.UIAuthentications = (function() {

                /**
                 * Properties of a UIAuthentications.
                 * @memberof org.roylance.yaas
                 * @interface IUIAuthentications
                 * @property {Array.<org.roylance.yaas.IUIAuthentication>} [users] UIAuthentications users
                 */

                /**
                 * Constructs a new UIAuthentications.
                 * @memberof org.roylance.yaas
                 * @classdesc Represents a UIAuthentications.
                 * @constructor
                 * @param {org.roylance.yaas.IUIAuthentications=} [properties] Properties to set
                 */
                function UIAuthentications(properties) {
                    this.users = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UIAuthentications users.
                 * @member {Array.<org.roylance.yaas.IUIAuthentication>}users
                 * @memberof org.roylance.yaas.UIAuthentications
                 * @instance
                 */
                UIAuthentications.prototype.users = $util.emptyArray;

                /**
                 * Creates a new UIAuthentications instance using the specified properties.
                 * @function create
                 * @memberof org.roylance.yaas.UIAuthentications
                 * @static
                 * @param {org.roylance.yaas.IUIAuthentications=} [properties] Properties to set
                 * @returns {org.roylance.yaas.UIAuthentications} UIAuthentications instance
                 */
                UIAuthentications.create = function create(properties) {
                    return new UIAuthentications(properties);
                };

                /**
                 * Encodes the specified UIAuthentications message. Does not implicitly {@link org.roylance.yaas.UIAuthentications.verify|verify} messages.
                 * @function encode
                 * @memberof org.roylance.yaas.UIAuthentications
                 * @static
                 * @param {org.roylance.yaas.IUIAuthentications} message UIAuthentications message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UIAuthentications.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.users != null && message.users.length)
                        for (var i = 0; i < message.users.length; ++i)
                            $root.org.roylance.yaas.UIAuthentication.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UIAuthentications message, length delimited. Does not implicitly {@link org.roylance.yaas.UIAuthentications.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.roylance.yaas.UIAuthentications
                 * @static
                 * @param {org.roylance.yaas.IUIAuthentications} message UIAuthentications message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UIAuthentications.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UIAuthentications message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.roylance.yaas.UIAuthentications
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.roylance.yaas.UIAuthentications} UIAuthentications
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UIAuthentications.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.roylance.yaas.UIAuthentications();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.users && message.users.length))
                                message.users = [];
                            message.users.push($root.org.roylance.yaas.UIAuthentication.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UIAuthentications message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.roylance.yaas.UIAuthentications
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.roylance.yaas.UIAuthentications} UIAuthentications
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UIAuthentications.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UIAuthentications message.
                 * @function verify
                 * @memberof org.roylance.yaas.UIAuthentications
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UIAuthentications.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.users != null && message.hasOwnProperty("users")) {
                        if (!Array.isArray(message.users))
                            return "users: array expected";
                        for (var i = 0; i < message.users.length; ++i) {
                            var error = $root.org.roylance.yaas.UIAuthentication.verify(message.users[i]);
                            if (error)
                                return "users." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a UIAuthentications message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.roylance.yaas.UIAuthentications
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.roylance.yaas.UIAuthentications} UIAuthentications
                 */
                UIAuthentications.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.roylance.yaas.UIAuthentications)
                        return object;
                    var message = new $root.org.roylance.yaas.UIAuthentications();
                    if (object.users) {
                        if (!Array.isArray(object.users))
                            throw TypeError(".org.roylance.yaas.UIAuthentications.users: array expected");
                        message.users = [];
                        for (var i = 0; i < object.users.length; ++i) {
                            if (typeof object.users[i] !== "object")
                                throw TypeError(".org.roylance.yaas.UIAuthentications.users: object expected");
                            message.users[i] = $root.org.roylance.yaas.UIAuthentication.fromObject(object.users[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a UIAuthentications message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.roylance.yaas.UIAuthentications
                 * @static
                 * @param {org.roylance.yaas.UIAuthentications} message UIAuthentications
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UIAuthentications.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.users = [];
                    if (message.users && message.users.length) {
                        object.users = [];
                        for (var j = 0; j < message.users.length; ++j)
                            object.users[j] = $root.org.roylance.yaas.UIAuthentication.toObject(message.users[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this UIAuthentications to JSON.
                 * @function toJSON
                 * @memberof org.roylance.yaas.UIAuthentications
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UIAuthentications.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UIAuthentications;
            })();

            return yaas;
        })();

        return roylance;
    })();

    return org;
})();

module.exports = $root;
