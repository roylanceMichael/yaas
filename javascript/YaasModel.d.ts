import * as $protobuf from "protobufjs";

/** Namespace org. */
export namespace org {

    /** Namespace roylance. */
    namespace roylance {

        /** Namespace yaas. */
        namespace yaas {

            /** Properties of a RequestAction. */
            interface IRequestAction {

                /** RequestAction request */
                request?: org.roylance.yaas.IUIYaasRequest;

                /** RequestAction response */
                response?: org.roylance.yaas.IUIYaasResponse;
            }

            /** Represents a RequestAction. */
            class RequestAction {

                /**
                 * Constructs a new RequestAction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IRequestAction);

                /** RequestAction request. */
                public request?: (org.roylance.yaas.IUIYaasRequest|null);

                /** RequestAction response. */
                public response?: (org.roylance.yaas.IUIYaasResponse|null);

                /**
                 * Creates a new RequestAction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestAction instance
                 */
                public static create(properties?: org.roylance.yaas.IRequestAction): org.roylance.yaas.RequestAction;

                /**
                 * Encodes the specified RequestAction message. Does not implicitly {@link org.roylance.yaas.RequestAction.verify|verify} messages.
                 * @param message RequestAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IRequestAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RequestAction message, length delimited. Does not implicitly {@link org.roylance.yaas.RequestAction.verify|verify} messages.
                 * @param message RequestAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IRequestAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestAction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.RequestAction;

                /**
                 * Decodes a RequestAction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.RequestAction;

                /**
                 * Verifies a RequestAction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RequestAction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RequestAction
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.RequestAction;

                /**
                 * Creates a plain object from a RequestAction message. Also converts values to other types if specified.
                 * @param message RequestAction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.RequestAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RequestAction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AdminController. */
            interface IAdminController {

                /** AdminController changePasswordForUser */
                changePasswordForUser?: org.roylance.yaas.IRequestAction;

                /** AdminController getAllUsers */
                getAllUsers?: org.roylance.yaas.IRequestAction;

                /** AdminController isUserAdmin */
                isUserAdmin?: org.roylance.yaas.IRequestAction;

                /** AdminController setUserAsAdmin */
                setUserAsAdmin?: org.roylance.yaas.IRequestAction;

                /** AdminController removeUserAsAdmin */
                removeUserAsAdmin?: org.roylance.yaas.IRequestAction;

                /** AdminController deleteUser */
                deleteUser?: org.roylance.yaas.IRequestAction;
            }

            /** Represents an AdminController. */
            class AdminController {

                /**
                 * Constructs a new AdminController.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IAdminController);

                /** AdminController changePasswordForUser. */
                public changePasswordForUser?: (org.roylance.yaas.IRequestAction|null);

                /** AdminController getAllUsers. */
                public getAllUsers?: (org.roylance.yaas.IRequestAction|null);

                /** AdminController isUserAdmin. */
                public isUserAdmin?: (org.roylance.yaas.IRequestAction|null);

                /** AdminController setUserAsAdmin. */
                public setUserAsAdmin?: (org.roylance.yaas.IRequestAction|null);

                /** AdminController removeUserAsAdmin. */
                public removeUserAsAdmin?: (org.roylance.yaas.IRequestAction|null);

                /** AdminController deleteUser. */
                public deleteUser?: (org.roylance.yaas.IRequestAction|null);

                /**
                 * Creates a new AdminController instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AdminController instance
                 */
                public static create(properties?: org.roylance.yaas.IAdminController): org.roylance.yaas.AdminController;

                /**
                 * Encodes the specified AdminController message. Does not implicitly {@link org.roylance.yaas.AdminController.verify|verify} messages.
                 * @param message AdminController message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IAdminController, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AdminController message, length delimited. Does not implicitly {@link org.roylance.yaas.AdminController.verify|verify} messages.
                 * @param message AdminController message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IAdminController, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AdminController message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AdminController
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.AdminController;

                /**
                 * Decodes an AdminController message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AdminController
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.AdminController;

                /**
                 * Verifies an AdminController message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AdminController message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AdminController
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.AdminController;

                /**
                 * Creates a plain object from an AdminController message. Also converts values to other types if specified.
                 * @param message AdminController
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.AdminController, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AdminController to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AuthenticationController. */
            interface IAuthenticationController {

                /** AuthenticationController exists */
                exists?: org.roylance.yaas.IRequestAction;

                /** AuthenticationController login */
                login?: org.roylance.yaas.IRequestAction;

                /** AuthenticationController authenticate */
                authenticate?: org.roylance.yaas.IRequestAction;

                /** AuthenticationController register */
                register?: org.roylance.yaas.IRequestAction;

                /** AuthenticationController changePassword */
                changePassword?: org.roylance.yaas.IRequestAction;

                /** AuthenticationController save */
                save?: org.roylance.yaas.IRequestAction;
            }

            /** Represents an AuthenticationController. */
            class AuthenticationController {

                /**
                 * Constructs a new AuthenticationController.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IAuthenticationController);

                /** AuthenticationController exists. */
                public exists?: (org.roylance.yaas.IRequestAction|null);

                /** AuthenticationController login. */
                public login?: (org.roylance.yaas.IRequestAction|null);

                /** AuthenticationController authenticate. */
                public authenticate?: (org.roylance.yaas.IRequestAction|null);

                /** AuthenticationController register. */
                public register?: (org.roylance.yaas.IRequestAction|null);

                /** AuthenticationController changePassword. */
                public changePassword?: (org.roylance.yaas.IRequestAction|null);

                /** AuthenticationController save. */
                public save?: (org.roylance.yaas.IRequestAction|null);

                /**
                 * Creates a new AuthenticationController instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuthenticationController instance
                 */
                public static create(properties?: org.roylance.yaas.IAuthenticationController): org.roylance.yaas.AuthenticationController;

                /**
                 * Encodes the specified AuthenticationController message. Does not implicitly {@link org.roylance.yaas.AuthenticationController.verify|verify} messages.
                 * @param message AuthenticationController message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IAuthenticationController, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuthenticationController message, length delimited. Does not implicitly {@link org.roylance.yaas.AuthenticationController.verify|verify} messages.
                 * @param message AuthenticationController message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IAuthenticationController, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuthenticationController message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuthenticationController
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.AuthenticationController;

                /**
                 * Decodes an AuthenticationController message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuthenticationController
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.AuthenticationController;

                /**
                 * Verifies an AuthenticationController message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuthenticationController message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuthenticationController
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.AuthenticationController;

                /**
                 * Creates a plain object from an AuthenticationController message. Also converts values to other types if specified.
                 * @param message AuthenticationController
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.AuthenticationController, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuthenticationController to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UserDeviceController. */
            interface IUserDeviceController {

                /** UserDeviceController save */
                save?: org.roylance.yaas.IRequestAction;

                /** UserDeviceController all */
                all?: org.roylance.yaas.IRequestAction;
            }

            /** Represents a UserDeviceController. */
            class UserDeviceController {

                /**
                 * Constructs a new UserDeviceController.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IUserDeviceController);

                /** UserDeviceController save. */
                public save?: (org.roylance.yaas.IRequestAction|null);

                /** UserDeviceController all. */
                public all?: (org.roylance.yaas.IRequestAction|null);

                /**
                 * Creates a new UserDeviceController instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UserDeviceController instance
                 */
                public static create(properties?: org.roylance.yaas.IUserDeviceController): org.roylance.yaas.UserDeviceController;

                /**
                 * Encodes the specified UserDeviceController message. Does not implicitly {@link org.roylance.yaas.UserDeviceController.verify|verify} messages.
                 * @param message UserDeviceController message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IUserDeviceController, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UserDeviceController message, length delimited. Does not implicitly {@link org.roylance.yaas.UserDeviceController.verify|verify} messages.
                 * @param message UserDeviceController message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IUserDeviceController, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserDeviceController message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserDeviceController
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.UserDeviceController;

                /**
                 * Decodes a UserDeviceController message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UserDeviceController
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.UserDeviceController;

                /**
                 * Verifies a UserDeviceController message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UserDeviceController message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserDeviceController
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.UserDeviceController;

                /**
                 * Creates a plain object from a UserDeviceController message. Also converts values to other types if specified.
                 * @param message UserDeviceController
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.UserDeviceController, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserDeviceController to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** UserDeviceType enum. */
            enum UserDeviceType {
                ANDROID = 0,
                IOS = 1,
                JAVASCRIPT = 2
            }

            /** UserRole enum. */
            enum UserRole {
                NORMAL = 0,
                ADMIN = 1
            }

            /** Properties of a UserDevice. */
            interface IUserDevice {

                /** UserDevice id */
                id?: string;

                /** UserDevice userDeviceType */
                userDeviceType?: org.roylance.yaas.UserDeviceType;

                /** UserDevice userDeviceToken */
                userDeviceToken?: string;

                /** UserDevice lastUpdated */
                lastUpdated?: (number|Long);

                /** UserDevice user */
                user?: org.roylance.yaas.IUser;
            }

            /** Represents a UserDevice. */
            class UserDevice {

                /**
                 * Constructs a new UserDevice.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IUserDevice);

                /** UserDevice id. */
                public id: string;

                /** UserDevice userDeviceType. */
                public userDeviceType: org.roylance.yaas.UserDeviceType;

                /** UserDevice userDeviceToken. */
                public userDeviceToken: string;

                /** UserDevice lastUpdated. */
                public lastUpdated: (number|Long);

                /** UserDevice user. */
                public user?: (org.roylance.yaas.IUser|null);

                /**
                 * Creates a new UserDevice instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UserDevice instance
                 */
                public static create(properties?: org.roylance.yaas.IUserDevice): org.roylance.yaas.UserDevice;

                /**
                 * Encodes the specified UserDevice message. Does not implicitly {@link org.roylance.yaas.UserDevice.verify|verify} messages.
                 * @param message UserDevice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IUserDevice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UserDevice message, length delimited. Does not implicitly {@link org.roylance.yaas.UserDevice.verify|verify} messages.
                 * @param message UserDevice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IUserDevice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserDevice message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserDevice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.UserDevice;

                /**
                 * Decodes a UserDevice message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UserDevice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.UserDevice;

                /**
                 * Verifies a UserDevice message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UserDevice message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserDevice
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.UserDevice;

                /**
                 * Creates a plain object from a UserDevice message. Also converts values to other types if specified.
                 * @param message UserDevice
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.UserDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserDevice to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Image. */
            interface IImage {

                /** Image id */
                id?: string;

                /** Image name */
                name?: string;

                /** Image actualImage */
                actualImage?: string;
            }

            /** Represents an Image. */
            class Image {

                /**
                 * Constructs a new Image.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IImage);

                /** Image id. */
                public id: string;

                /** Image name. */
                public name: string;

                /** Image actualImage. */
                public actualImage: string;

                /**
                 * Creates a new Image instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Image instance
                 */
                public static create(properties?: org.roylance.yaas.IImage): org.roylance.yaas.Image;

                /**
                 * Encodes the specified Image message. Does not implicitly {@link org.roylance.yaas.Image.verify|verify} messages.
                 * @param message Image message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Image message, length delimited. Does not implicitly {@link org.roylance.yaas.Image.verify|verify} messages.
                 * @param message Image message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Image message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Image
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.Image;

                /**
                 * Decodes an Image message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Image
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.Image;

                /**
                 * Verifies an Image message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Image message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Image
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.Image;

                /**
                 * Creates a plain object from an Image message. Also converts values to other types if specified.
                 * @param message Image
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Image to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a User. */
            interface IUser {

                /** User id */
                id?: string;

                /** User userName */
                userName?: string;

                /** User password */
                password?: string;

                /** User display */
                display?: string;

                /** User firstName */
                firstName?: string;

                /** User lastName */
                lastName?: string;

                /** User image */
                image?: org.roylance.yaas.IImage;

                /** User roles */
                roles?: org.roylance.yaas.UserRole[];
            }

            /** Represents a User. */
            class User {

                /**
                 * Constructs a new User.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IUser);

                /** User id. */
                public id: string;

                /** User userName. */
                public userName: string;

                /** User password. */
                public password: string;

                /** User display. */
                public display: string;

                /** User firstName. */
                public firstName: string;

                /** User lastName. */
                public lastName: string;

                /** User image. */
                public image?: (org.roylance.yaas.IImage|null);

                /** User roles. */
                public roles: org.roylance.yaas.UserRole[];

                /**
                 * Creates a new User instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns User instance
                 */
                public static create(properties?: org.roylance.yaas.IUser): org.roylance.yaas.User;

                /**
                 * Encodes the specified User message. Does not implicitly {@link org.roylance.yaas.User.verify|verify} messages.
                 * @param message User message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified User message, length delimited. Does not implicitly {@link org.roylance.yaas.User.verify|verify} messages.
                 * @param message User message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a User message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.User;

                /**
                 * Decodes a User message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.User;

                /**
                 * Verifies a User message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a User message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns User
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.User;

                /**
                 * Creates a plain object from a User message. Also converts values to other types if specified.
                 * @param message User
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this User to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Token. */
            interface IToken {

                /** Token id */
                id?: string;

                /** Token userId */
                userId?: string;

                /** Token issued */
                issued?: (number|Long);

                /** Token expiration */
                expiration?: (number|Long);
            }

            /** Represents a Token. */
            class Token {

                /**
                 * Constructs a new Token.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IToken);

                /** Token id. */
                public id: string;

                /** Token userId. */
                public userId: string;

                /** Token issued. */
                public issued: (number|Long);

                /** Token expiration. */
                public expiration: (number|Long);

                /**
                 * Creates a new Token instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Token instance
                 */
                public static create(properties?: org.roylance.yaas.IToken): org.roylance.yaas.Token;

                /**
                 * Encodes the specified Token message. Does not implicitly {@link org.roylance.yaas.Token.verify|verify} messages.
                 * @param message Token message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Token message, length delimited. Does not implicitly {@link org.roylance.yaas.Token.verify|verify} messages.
                 * @param message Token message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Token message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Token
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.Token;

                /**
                 * Decodes a Token message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Token
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.Token;

                /**
                 * Verifies a Token message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Token message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Token
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.Token;

                /**
                 * Creates a plain object from a Token message. Also converts values to other types if specified.
                 * @param message Token
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Token to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UIAuthentication. */
            interface IUIAuthentication {

                /** UIAuthentication authenticated */
                authenticated?: boolean;

                /** UIAuthentication token */
                token?: string;

                /** UIAuthentication userName */
                userName?: string;

                /** UIAuthentication display */
                display?: string;

                /** UIAuthentication isAdmin */
                isAdmin?: boolean;
            }

            /** Represents a UIAuthentication. */
            class UIAuthentication {

                /**
                 * Constructs a new UIAuthentication.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IUIAuthentication);

                /** UIAuthentication authenticated. */
                public authenticated: boolean;

                /** UIAuthentication token. */
                public token: string;

                /** UIAuthentication userName. */
                public userName: string;

                /** UIAuthentication display. */
                public display: string;

                /** UIAuthentication isAdmin. */
                public isAdmin: boolean;

                /**
                 * Creates a new UIAuthentication instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UIAuthentication instance
                 */
                public static create(properties?: org.roylance.yaas.IUIAuthentication): org.roylance.yaas.UIAuthentication;

                /**
                 * Encodes the specified UIAuthentication message. Does not implicitly {@link org.roylance.yaas.UIAuthentication.verify|verify} messages.
                 * @param message UIAuthentication message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IUIAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UIAuthentication message, length delimited. Does not implicitly {@link org.roylance.yaas.UIAuthentication.verify|verify} messages.
                 * @param message UIAuthentication message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IUIAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UIAuthentication message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UIAuthentication
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.UIAuthentication;

                /**
                 * Decodes a UIAuthentication message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UIAuthentication
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.UIAuthentication;

                /**
                 * Verifies a UIAuthentication message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UIAuthentication message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UIAuthentication
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.UIAuthentication;

                /**
                 * Creates a plain object from a UIAuthentication message. Also converts values to other types if specified.
                 * @param message UIAuthentication
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.UIAuthentication, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UIAuthentication to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UIChangePassword. */
            interface IUIChangePassword {

                /** UIChangePassword userName */
                userName?: string;

                /** UIChangePassword oldPassword */
                oldPassword?: string;

                /** UIChangePassword newPassword */
                newPassword?: string;
            }

            /** Represents a UIChangePassword. */
            class UIChangePassword {

                /**
                 * Constructs a new UIChangePassword.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IUIChangePassword);

                /** UIChangePassword userName. */
                public userName: string;

                /** UIChangePassword oldPassword. */
                public oldPassword: string;

                /** UIChangePassword newPassword. */
                public newPassword: string;

                /**
                 * Creates a new UIChangePassword instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UIChangePassword instance
                 */
                public static create(properties?: org.roylance.yaas.IUIChangePassword): org.roylance.yaas.UIChangePassword;

                /**
                 * Encodes the specified UIChangePassword message. Does not implicitly {@link org.roylance.yaas.UIChangePassword.verify|verify} messages.
                 * @param message UIChangePassword message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IUIChangePassword, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UIChangePassword message, length delimited. Does not implicitly {@link org.roylance.yaas.UIChangePassword.verify|verify} messages.
                 * @param message UIChangePassword message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IUIChangePassword, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UIChangePassword message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UIChangePassword
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.UIChangePassword;

                /**
                 * Decodes a UIChangePassword message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UIChangePassword
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.UIChangePassword;

                /**
                 * Verifies a UIChangePassword message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UIChangePassword message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UIChangePassword
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.UIChangePassword;

                /**
                 * Creates a plain object from a UIChangePassword message. Also converts values to other types if specified.
                 * @param message UIChangePassword
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.UIChangePassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UIChangePassword to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UIYaasRequest. */
            interface IUIYaasRequest {

                /** UIYaasRequest token */
                token?: string;

                /** UIYaasRequest content */
                content?: string;

                /** UIYaasRequest user */
                user?: org.roylance.yaas.IUser;

                /** UIYaasRequest userDevice */
                userDevice?: org.roylance.yaas.IUserDevice;

                /** UIYaasRequest image */
                image?: org.roylance.yaas.IImage;

                /** UIYaasRequest offset */
                offset?: number;

                /** UIYaasRequest limit */
                limit?: number;

                /** UIYaasRequest changePassword */
                changePassword?: org.roylance.yaas.IUIChangePassword;
            }

            /** Represents a UIYaasRequest. */
            class UIYaasRequest {

                /**
                 * Constructs a new UIYaasRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IUIYaasRequest);

                /** UIYaasRequest token. */
                public token: string;

                /** UIYaasRequest content. */
                public content: string;

                /** UIYaasRequest user. */
                public user?: (org.roylance.yaas.IUser|null);

                /** UIYaasRequest userDevice. */
                public userDevice?: (org.roylance.yaas.IUserDevice|null);

                /** UIYaasRequest image. */
                public image?: (org.roylance.yaas.IImage|null);

                /** UIYaasRequest offset. */
                public offset: number;

                /** UIYaasRequest limit. */
                public limit: number;

                /** UIYaasRequest changePassword. */
                public changePassword?: (org.roylance.yaas.IUIChangePassword|null);

                /**
                 * Creates a new UIYaasRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UIYaasRequest instance
                 */
                public static create(properties?: org.roylance.yaas.IUIYaasRequest): org.roylance.yaas.UIYaasRequest;

                /**
                 * Encodes the specified UIYaasRequest message. Does not implicitly {@link org.roylance.yaas.UIYaasRequest.verify|verify} messages.
                 * @param message UIYaasRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IUIYaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UIYaasRequest message, length delimited. Does not implicitly {@link org.roylance.yaas.UIYaasRequest.verify|verify} messages.
                 * @param message UIYaasRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IUIYaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UIYaasRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UIYaasRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.UIYaasRequest;

                /**
                 * Decodes a UIYaasRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UIYaasRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.UIYaasRequest;

                /**
                 * Verifies a UIYaasRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UIYaasRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UIYaasRequest
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.UIYaasRequest;

                /**
                 * Creates a plain object from a UIYaasRequest message. Also converts values to other types if specified.
                 * @param message UIYaasRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.UIYaasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UIYaasRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UIYaasResponse. */
            interface IUIYaasResponse {

                /** UIYaasResponse authenticated */
                authenticated?: boolean;

                /** UIYaasResponse errorMessage */
                errorMessage?: string;

                /** UIYaasResponse successful */
                successful?: boolean;

                /** UIYaasResponse content */
                content?: string;

                /** UIYaasResponse isAdmin */
                isAdmin?: boolean;

                /** UIYaasResponse user */
                user?: org.roylance.yaas.IUIAuthentication;

                /** UIYaasResponse users */
                users?: org.roylance.yaas.IUIAuthentications;

                /** UIYaasResponse userDevices */
                userDevices?: org.roylance.yaas.IUserDevice[];
            }

            /** Represents a UIYaasResponse. */
            class UIYaasResponse {

                /**
                 * Constructs a new UIYaasResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IUIYaasResponse);

                /** UIYaasResponse authenticated. */
                public authenticated: boolean;

                /** UIYaasResponse errorMessage. */
                public errorMessage: string;

                /** UIYaasResponse successful. */
                public successful: boolean;

                /** UIYaasResponse content. */
                public content: string;

                /** UIYaasResponse isAdmin. */
                public isAdmin: boolean;

                /** UIYaasResponse user. */
                public user?: (org.roylance.yaas.IUIAuthentication|null);

                /** UIYaasResponse users. */
                public users?: (org.roylance.yaas.IUIAuthentications|null);

                /** UIYaasResponse userDevices. */
                public userDevices: org.roylance.yaas.IUserDevice[];

                /**
                 * Creates a new UIYaasResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UIYaasResponse instance
                 */
                public static create(properties?: org.roylance.yaas.IUIYaasResponse): org.roylance.yaas.UIYaasResponse;

                /**
                 * Encodes the specified UIYaasResponse message. Does not implicitly {@link org.roylance.yaas.UIYaasResponse.verify|verify} messages.
                 * @param message UIYaasResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IUIYaasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UIYaasResponse message, length delimited. Does not implicitly {@link org.roylance.yaas.UIYaasResponse.verify|verify} messages.
                 * @param message UIYaasResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IUIYaasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UIYaasResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UIYaasResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.UIYaasResponse;

                /**
                 * Decodes a UIYaasResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UIYaasResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.UIYaasResponse;

                /**
                 * Verifies a UIYaasResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UIYaasResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UIYaasResponse
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.UIYaasResponse;

                /**
                 * Creates a plain object from a UIYaasResponse message. Also converts values to other types if specified.
                 * @param message UIYaasResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.UIYaasResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UIYaasResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UIAuthentications. */
            interface IUIAuthentications {

                /** UIAuthentications users */
                users?: org.roylance.yaas.IUIAuthentication[];
            }

            /** Represents a UIAuthentications. */
            class UIAuthentications {

                /**
                 * Constructs a new UIAuthentications.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.roylance.yaas.IUIAuthentications);

                /** UIAuthentications users. */
                public users: org.roylance.yaas.IUIAuthentication[];

                /**
                 * Creates a new UIAuthentications instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UIAuthentications instance
                 */
                public static create(properties?: org.roylance.yaas.IUIAuthentications): org.roylance.yaas.UIAuthentications;

                /**
                 * Encodes the specified UIAuthentications message. Does not implicitly {@link org.roylance.yaas.UIAuthentications.verify|verify} messages.
                 * @param message UIAuthentications message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.roylance.yaas.IUIAuthentications, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UIAuthentications message, length delimited. Does not implicitly {@link org.roylance.yaas.UIAuthentications.verify|verify} messages.
                 * @param message UIAuthentications message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.roylance.yaas.IUIAuthentications, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UIAuthentications message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UIAuthentications
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.roylance.yaas.UIAuthentications;

                /**
                 * Decodes a UIAuthentications message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UIAuthentications
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.roylance.yaas.UIAuthentications;

                /**
                 * Verifies a UIAuthentications message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UIAuthentications message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UIAuthentications
                 */
                public static fromObject(object: { [k: string]: any }): org.roylance.yaas.UIAuthentications;

                /**
                 * Creates a plain object from a UIAuthentications message. Also converts values to other types if specified.
                 * @param message UIAuthentications
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.roylance.yaas.UIAuthentications, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UIAuthentications to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
