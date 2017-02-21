/*
 * DO NOT EDIT.
 *
 * Generated by the protocol buffer compiler.
 * Source: yaas_model.proto
 *
 */

import Foundation
import SwiftProtobuf


public enum Org_Roylance_Yaas_UserDeviceType: SwiftProtobuf.Enum {
  public typealias RawValue = Int
  case android // = 0
  case ios // = 1
  case javascript // = 2
  case UNRECOGNIZED(Int)

  public init() {
    self = .android
  }

  public init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .android
    case 1: self = .ios
    case 2: self = .javascript
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  public init?(name: String) {
    switch name {
    case "android": self = .android
    case "ios": self = .ios
    case "javascript": self = .javascript
    default: return nil
    }
  }

  public init?(jsonName: String) {
    switch jsonName {
    case "ANDROID": self = .android
    case "IOS": self = .ios
    case "JAVASCRIPT": self = .javascript
    default: return nil
    }
  }

  public init?(protoName: String) {
    switch protoName {
    case "ANDROID": self = .android
    case "IOS": self = .ios
    case "JAVASCRIPT": self = .javascript
    default: return nil
    }
  }

  public var rawValue: Int {
    get {
      switch self {
      case .android: return 0
      case .ios: return 1
      case .javascript: return 2
      case .UNRECOGNIZED(let i): return i
      }
    }
  }

  public var json: String {
    get {
      switch self {
      case .android: return "\"ANDROID\""
      case .ios: return "\"IOS\""
      case .javascript: return "\"JAVASCRIPT\""
      case .UNRECOGNIZED(let i): return String(i)
      }
    }
  }

  public var hashValue: Int { return rawValue }

  public var debugDescription: String {
    get {
      switch self {
      case .android: return ".android"
      case .ios: return ".ios"
      case .javascript: return ".javascript"
      case .UNRECOGNIZED(let v): return ".UNRECOGNIZED(\(v))"
      }
    }
  }

}

public enum Org_Roylance_Yaas_UserRole: SwiftProtobuf.Enum {
  public typealias RawValue = Int
  case normal // = 0
  case admin // = 1
  case UNRECOGNIZED(Int)

  public init() {
    self = .normal
  }

  public init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .normal
    case 1: self = .admin
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  public init?(name: String) {
    switch name {
    case "normal": self = .normal
    case "admin": self = .admin
    default: return nil
    }
  }

  public init?(jsonName: String) {
    switch jsonName {
    case "NORMAL": self = .normal
    case "ADMIN": self = .admin
    default: return nil
    }
  }

  public init?(protoName: String) {
    switch protoName {
    case "NORMAL": self = .normal
    case "ADMIN": self = .admin
    default: return nil
    }
  }

  public var rawValue: Int {
    get {
      switch self {
      case .normal: return 0
      case .admin: return 1
      case .UNRECOGNIZED(let i): return i
      }
    }
  }

  public var json: String {
    get {
      switch self {
      case .normal: return "\"NORMAL\""
      case .admin: return "\"ADMIN\""
      case .UNRECOGNIZED(let i): return String(i)
      }
    }
  }

  public var hashValue: Int { return rawValue }

  public var debugDescription: String {
    get {
      switch self {
      case .normal: return ".normal"
      case .admin: return ".admin"
      case .UNRECOGNIZED(let v): return ".UNRECOGNIZED(\(v))"
      }
    }
  }

}

public struct Org_Roylance_Yaas_UserDevice: SwiftProtobuf.Message, SwiftProtobuf.Proto3Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf.ProtoNameProviding {
  public var swiftClassName: String {return "Org_Roylance_Yaas_UserDevice"}
  public var protoMessageName: String {return "UserDevice"}
  public var protoPackageName: String {return "org.roylance.yaas"}
  public static let _protobuf_fieldNames: FieldNameMap = [
    1: .same(proto: "id", swift: "id"),
    2: .unique(proto: "user_device_type", json: "userDeviceType", swift: "userDeviceType"),
    3: .unique(proto: "user_device_token", json: "userDeviceToken", swift: "userDeviceToken"),
    4: .unique(proto: "last_updated", json: "lastUpdated", swift: "lastUpdated"),
    5: .same(proto: "user", swift: "user"),
  ]

  private class _StorageClass {
    typealias ExtendedMessage = Org_Roylance_Yaas_UserDevice
    var _id: String = ""
    var _userDeviceType: Org_Roylance_Yaas_UserDeviceType = Org_Roylance_Yaas_UserDeviceType.android
    var _userDeviceToken: String = ""
    var _lastUpdated: Int64 = 0
    var _user: Org_Roylance_Yaas_User? = nil

    init() {}

    func decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
      switch protoFieldNumber {
      case 1: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &_id)
      case 2: try setter.decodeSingularField(fieldType: Org_Roylance_Yaas_UserDeviceType.self, value: &_userDeviceType)
      case 3: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &_userDeviceToken)
      case 4: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufInt64.self, value: &_lastUpdated)
      case 5: try setter.decodeSingularMessageField(fieldType: Org_Roylance_Yaas_User.self, value: &_user)
      default: break
      }
    }

    func traverse(visitor: SwiftProtobuf.Visitor) throws {
      if _id != "" {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: _id, fieldNumber: 1)
      }
      if _userDeviceType != Org_Roylance_Yaas_UserDeviceType.android {
        try visitor.visitSingularField(fieldType: Org_Roylance_Yaas_UserDeviceType.self, value: _userDeviceType, fieldNumber: 2)
      }
      if _userDeviceToken != "" {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: _userDeviceToken, fieldNumber: 3)
      }
      if _lastUpdated != 0 {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufInt64.self, value: _lastUpdated, fieldNumber: 4)
      }
      if let v = _user {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
      }
    }

    func isEqualTo(other: _StorageClass) -> Bool {
      if _id != other._id {return false}
      if _userDeviceType != other._userDeviceType {return false}
      if _userDeviceToken != other._userDeviceToken {return false}
      if _lastUpdated != other._lastUpdated {return false}
      if _user != other._user {return false}
      return true
    }

    func copy() -> _StorageClass {
      let clone = _StorageClass()
      clone._id = _id
      clone._userDeviceType = _userDeviceType
      clone._userDeviceToken = _userDeviceToken
      clone._lastUpdated = _lastUpdated
      clone._user = _user
      return clone
    }
  }

  private var _storage = _StorageClass()


  public var id: String {
    get {return _storage._id}
    set {_uniqueStorage()._id = newValue}
  }

  public var userDeviceType: Org_Roylance_Yaas_UserDeviceType {
    get {return _storage._userDeviceType}
    set {_uniqueStorage()._userDeviceType = newValue}
  }

  public var userDeviceToken: String {
    get {return _storage._userDeviceToken}
    set {_uniqueStorage()._userDeviceToken = newValue}
  }

  public var lastUpdated: Int64 {
    get {return _storage._lastUpdated}
    set {_uniqueStorage()._lastUpdated = newValue}
  }

  public var user: Org_Roylance_Yaas_User {
    get {return _storage._user ?? Org_Roylance_Yaas_User()}
    set {_uniqueStorage()._user = newValue}
  }
  public var hasUser: Bool {
    return _storage._user != nil
  }
  public mutating func clearUser() {
    return _storage._user = nil
  }

  public init() {}

  public mutating func _protoc_generated_decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
    try _uniqueStorage().decodeField(setter: &setter, protoFieldNumber: protoFieldNumber)
  }

  public func _protoc_generated_traverse(visitor: SwiftProtobuf.Visitor) throws {
    try _storage.traverse(visitor: visitor)
  }

  public func _protoc_generated_isEqualTo(other: Org_Roylance_Yaas_UserDevice) -> Bool {
    return _storage === other._storage || _storage.isEqualTo(other: other._storage)
  }

  private mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _storage.copy()
    }
    return _storage
  }
}

public struct Org_Roylance_Yaas_Image: SwiftProtobuf.Message, SwiftProtobuf.Proto3Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf.ProtoNameProviding {
  public var swiftClassName: String {return "Org_Roylance_Yaas_Image"}
  public var protoMessageName: String {return "Image"}
  public var protoPackageName: String {return "org.roylance.yaas"}
  public static let _protobuf_fieldNames: FieldNameMap = [
    1: .same(proto: "id", swift: "id"),
    2: .same(proto: "name", swift: "name"),
    3: .unique(proto: "actual_image", json: "actualImage", swift: "actualImage"),
  ]


  public var id: String = ""

  public var name: String = ""

  public var actualImage: String = ""

  public init() {}

  public mutating func _protoc_generated_decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
    switch protoFieldNumber {
    case 1: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &id)
    case 2: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &name)
    case 3: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &actualImage)
    default: break
    }
  }

  public func _protoc_generated_traverse(visitor: SwiftProtobuf.Visitor) throws {
    if id != "" {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: id, fieldNumber: 1)
    }
    if name != "" {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: name, fieldNumber: 2)
    }
    if actualImage != "" {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: actualImage, fieldNumber: 3)
    }
  }

  public func _protoc_generated_isEqualTo(other: Org_Roylance_Yaas_Image) -> Bool {
    if id != other.id {return false}
    if name != other.name {return false}
    if actualImage != other.actualImage {return false}
    return true
  }
}

public struct Org_Roylance_Yaas_User: SwiftProtobuf.Message, SwiftProtobuf.Proto3Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf.ProtoNameProviding {
  public var swiftClassName: String {return "Org_Roylance_Yaas_User"}
  public var protoMessageName: String {return "User"}
  public var protoPackageName: String {return "org.roylance.yaas"}
  public static let _protobuf_fieldNames: FieldNameMap = [
    1: .same(proto: "id", swift: "id"),
    2: .unique(proto: "user_name", json: "userName", swift: "userName"),
    3: .same(proto: "password", swift: "password"),
    4: .same(proto: "display", swift: "display"),
    5: .unique(proto: "first_name", json: "firstName", swift: "firstName"),
    6: .unique(proto: "last_name", json: "lastName", swift: "lastName"),
    7: .same(proto: "image", swift: "image"),
    8: .same(proto: "roles", swift: "roles"),
  ]

  private class _StorageClass {
    typealias ExtendedMessage = Org_Roylance_Yaas_User
    var _id: String = ""
    var _userName: String = ""
    var _password: String = ""
    var _display: String = ""
    var _firstName: String = ""
    var _lastName: String = ""
    var _image: Org_Roylance_Yaas_Image? = nil
    var _roles: [Org_Roylance_Yaas_UserRole] = []

    init() {}

    func decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
      switch protoFieldNumber {
      case 1: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &_id)
      case 2: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &_userName)
      case 3: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &_password)
      case 4: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &_display)
      case 5: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &_firstName)
      case 6: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &_lastName)
      case 7: try setter.decodeSingularMessageField(fieldType: Org_Roylance_Yaas_Image.self, value: &_image)
      case 8: try setter.decodePackedField(fieldType: Org_Roylance_Yaas_UserRole.self, value: &_roles)
      default: break
      }
    }

    func traverse(visitor: SwiftProtobuf.Visitor) throws {
      if _id != "" {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: _id, fieldNumber: 1)
      }
      if _userName != "" {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: _userName, fieldNumber: 2)
      }
      if _password != "" {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: _password, fieldNumber: 3)
      }
      if _display != "" {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: _display, fieldNumber: 4)
      }
      if _firstName != "" {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: _firstName, fieldNumber: 5)
      }
      if _lastName != "" {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: _lastName, fieldNumber: 6)
      }
      if let v = _image {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 7)
      }
      if !_roles.isEmpty {
        try visitor.visitPackedField(fieldType: Org_Roylance_Yaas_UserRole.self, value: _roles, fieldNumber: 8)
      }
    }

    func isEqualTo(other: _StorageClass) -> Bool {
      if _id != other._id {return false}
      if _userName != other._userName {return false}
      if _password != other._password {return false}
      if _display != other._display {return false}
      if _firstName != other._firstName {return false}
      if _lastName != other._lastName {return false}
      if _image != other._image {return false}
      if _roles != other._roles {return false}
      return true
    }

    func copy() -> _StorageClass {
      let clone = _StorageClass()
      clone._id = _id
      clone._userName = _userName
      clone._password = _password
      clone._display = _display
      clone._firstName = _firstName
      clone._lastName = _lastName
      clone._image = _image
      clone._roles = _roles
      return clone
    }
  }

  private var _storage = _StorageClass()


  public var id: String {
    get {return _storage._id}
    set {_uniqueStorage()._id = newValue}
  }

  public var userName: String {
    get {return _storage._userName}
    set {_uniqueStorage()._userName = newValue}
  }

  public var password: String {
    get {return _storage._password}
    set {_uniqueStorage()._password = newValue}
  }

  public var display: String {
    get {return _storage._display}
    set {_uniqueStorage()._display = newValue}
  }

  public var firstName: String {
    get {return _storage._firstName}
    set {_uniqueStorage()._firstName = newValue}
  }

  public var lastName: String {
    get {return _storage._lastName}
    set {_uniqueStorage()._lastName = newValue}
  }

  public var image: Org_Roylance_Yaas_Image {
    get {return _storage._image ?? Org_Roylance_Yaas_Image()}
    set {_uniqueStorage()._image = newValue}
  }
  public var hasImage: Bool {
    return _storage._image != nil
  }
  public mutating func clearImage() {
    return _storage._image = nil
  }

  public var roles: [Org_Roylance_Yaas_UserRole] {
    get {return _storage._roles}
    set {_uniqueStorage()._roles = newValue}
  }

  public init() {}

  public mutating func _protoc_generated_decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
    try _uniqueStorage().decodeField(setter: &setter, protoFieldNumber: protoFieldNumber)
  }

  public func _protoc_generated_traverse(visitor: SwiftProtobuf.Visitor) throws {
    try _storage.traverse(visitor: visitor)
  }

  public func _protoc_generated_isEqualTo(other: Org_Roylance_Yaas_User) -> Bool {
    return _storage === other._storage || _storage.isEqualTo(other: other._storage)
  }

  private mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _storage.copy()
    }
    return _storage
  }
}

public struct Org_Roylance_Yaas_Token: SwiftProtobuf.Message, SwiftProtobuf.Proto3Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf.ProtoNameProviding {
  public var swiftClassName: String {return "Org_Roylance_Yaas_Token"}
  public var protoMessageName: String {return "Token"}
  public var protoPackageName: String {return "org.roylance.yaas"}
  public static let _protobuf_fieldNames: FieldNameMap = [
    1: .same(proto: "id", swift: "id"),
    2: .unique(proto: "user_id", json: "userId", swift: "userId"),
    3: .same(proto: "issued", swift: "issued"),
    4: .same(proto: "expiration", swift: "expiration"),
  ]


  public var id: String = ""

  public var userId: String = ""

  public var issued: Int64 = 0

  public var expiration: Int64 = 0

  public init() {}

  public mutating func _protoc_generated_decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
    switch protoFieldNumber {
    case 1: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &id)
    case 2: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &userId)
    case 3: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufInt64.self, value: &issued)
    case 4: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufInt64.self, value: &expiration)
    default: break
    }
  }

  public func _protoc_generated_traverse(visitor: SwiftProtobuf.Visitor) throws {
    if id != "" {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: id, fieldNumber: 1)
    }
    if userId != "" {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: userId, fieldNumber: 2)
    }
    if issued != 0 {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufInt64.self, value: issued, fieldNumber: 3)
    }
    if expiration != 0 {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufInt64.self, value: expiration, fieldNumber: 4)
    }
  }

  public func _protoc_generated_isEqualTo(other: Org_Roylance_Yaas_Token) -> Bool {
    if id != other.id {return false}
    if userId != other.userId {return false}
    if issued != other.issued {return false}
    if expiration != other.expiration {return false}
    return true
  }
}

public struct Org_Roylance_Yaas_UIAuthentication: SwiftProtobuf.Message, SwiftProtobuf.Proto3Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf.ProtoNameProviding {
  public var swiftClassName: String {return "Org_Roylance_Yaas_UIAuthentication"}
  public var protoMessageName: String {return "UIAuthentication"}
  public var protoPackageName: String {return "org.roylance.yaas"}
  public static let _protobuf_fieldNames: FieldNameMap = [
    1: .same(proto: "authenticated", swift: "authenticated"),
    2: .same(proto: "token", swift: "token"),
    3: .unique(proto: "user_name", json: "userName", swift: "userName"),
    4: .same(proto: "display", swift: "display"),
    5: .unique(proto: "is_admin", json: "isAdmin", swift: "isAdmin"),
  ]


  public var authenticated: Bool = false

  public var token: String = ""

  public var userName: String = ""

  public var display: String = ""

  public var isAdmin: Bool = false

  public init() {}

  public mutating func _protoc_generated_decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
    switch protoFieldNumber {
    case 1: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufBool.self, value: &authenticated)
    case 2: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &token)
    case 3: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &userName)
    case 4: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &display)
    case 5: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufBool.self, value: &isAdmin)
    default: break
    }
  }

  public func _protoc_generated_traverse(visitor: SwiftProtobuf.Visitor) throws {
    if authenticated != false {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufBool.self, value: authenticated, fieldNumber: 1)
    }
    if token != "" {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: token, fieldNumber: 2)
    }
    if userName != "" {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: userName, fieldNumber: 3)
    }
    if display != "" {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: display, fieldNumber: 4)
    }
    if isAdmin != false {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufBool.self, value: isAdmin, fieldNumber: 5)
    }
  }

  public func _protoc_generated_isEqualTo(other: Org_Roylance_Yaas_UIAuthentication) -> Bool {
    if authenticated != other.authenticated {return false}
    if token != other.token {return false}
    if userName != other.userName {return false}
    if display != other.display {return false}
    if isAdmin != other.isAdmin {return false}
    return true
  }
}

public struct Org_Roylance_Yaas_UIChangePassword: SwiftProtobuf.Message, SwiftProtobuf.Proto3Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf.ProtoNameProviding {
  public var swiftClassName: String {return "Org_Roylance_Yaas_UIChangePassword"}
  public var protoMessageName: String {return "UIChangePassword"}
  public var protoPackageName: String {return "org.roylance.yaas"}
  public static let _protobuf_fieldNames: FieldNameMap = [
    1: .unique(proto: "user_name", json: "userName", swift: "userName"),
    2: .unique(proto: "old_password", json: "oldPassword", swift: "oldPassword"),
    3: .unique(proto: "new_password", json: "newPassword", swift: "newPassword"),
  ]


  public var userName: String = ""

  public var oldPassword: String = ""

  public var newPassword: String = ""

  public init() {}

  public mutating func _protoc_generated_decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
    switch protoFieldNumber {
    case 1: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &userName)
    case 2: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &oldPassword)
    case 3: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &newPassword)
    default: break
    }
  }

  public func _protoc_generated_traverse(visitor: SwiftProtobuf.Visitor) throws {
    if userName != "" {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: userName, fieldNumber: 1)
    }
    if oldPassword != "" {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: oldPassword, fieldNumber: 2)
    }
    if newPassword != "" {
      try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: newPassword, fieldNumber: 3)
    }
  }

  public func _protoc_generated_isEqualTo(other: Org_Roylance_Yaas_UIChangePassword) -> Bool {
    if userName != other.userName {return false}
    if oldPassword != other.oldPassword {return false}
    if newPassword != other.newPassword {return false}
    return true
  }
}

public struct Org_Roylance_Yaas_UIYaasRequest: SwiftProtobuf.Message, SwiftProtobuf.Proto3Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf.ProtoNameProviding {
  public var swiftClassName: String {return "Org_Roylance_Yaas_UIYaasRequest"}
  public var protoMessageName: String {return "UIYaasRequest"}
  public var protoPackageName: String {return "org.roylance.yaas"}
  public static let _protobuf_fieldNames: FieldNameMap = [
    1: .same(proto: "token", swift: "token"),
    2: .same(proto: "content", swift: "content"),
    3: .same(proto: "user", swift: "user"),
    4: .unique(proto: "user_device", json: "userDevice", swift: "userDevice"),
    5: .same(proto: "image", swift: "image"),
    6: .same(proto: "offset", swift: "offset"),
    7: .same(proto: "limit", swift: "limit"),
    8: .unique(proto: "change_password", json: "changePassword", swift: "changePassword"),
  ]

  private class _StorageClass {
    typealias ExtendedMessage = Org_Roylance_Yaas_UIYaasRequest
    var _token: String = ""
    var _content: String = ""
    var _user: Org_Roylance_Yaas_User? = nil
    var _userDevice: Org_Roylance_Yaas_UserDevice? = nil
    var _image: Org_Roylance_Yaas_Image? = nil
    var _offset: Int32 = 0
    var _limit: Int32 = 0
    var _changePassword: Org_Roylance_Yaas_UIChangePassword? = nil

    init() {}

    func decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
      switch protoFieldNumber {
      case 1: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &_token)
      case 2: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &_content)
      case 3: try setter.decodeSingularMessageField(fieldType: Org_Roylance_Yaas_User.self, value: &_user)
      case 4: try setter.decodeSingularMessageField(fieldType: Org_Roylance_Yaas_UserDevice.self, value: &_userDevice)
      case 5: try setter.decodeSingularMessageField(fieldType: Org_Roylance_Yaas_Image.self, value: &_image)
      case 6: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufInt32.self, value: &_offset)
      case 7: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufInt32.self, value: &_limit)
      case 8: try setter.decodeSingularMessageField(fieldType: Org_Roylance_Yaas_UIChangePassword.self, value: &_changePassword)
      default: break
      }
    }

    func traverse(visitor: SwiftProtobuf.Visitor) throws {
      if _token != "" {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: _token, fieldNumber: 1)
      }
      if _content != "" {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: _content, fieldNumber: 2)
      }
      if let v = _user {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
      }
      if let v = _userDevice {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 4)
      }
      if let v = _image {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
      }
      if _offset != 0 {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufInt32.self, value: _offset, fieldNumber: 6)
      }
      if _limit != 0 {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufInt32.self, value: _limit, fieldNumber: 7)
      }
      if let v = _changePassword {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 8)
      }
    }

    func isEqualTo(other: _StorageClass) -> Bool {
      if _token != other._token {return false}
      if _content != other._content {return false}
      if _user != other._user {return false}
      if _userDevice != other._userDevice {return false}
      if _image != other._image {return false}
      if _offset != other._offset {return false}
      if _limit != other._limit {return false}
      if _changePassword != other._changePassword {return false}
      return true
    }

    func copy() -> _StorageClass {
      let clone = _StorageClass()
      clone._token = _token
      clone._content = _content
      clone._user = _user
      clone._userDevice = _userDevice
      clone._image = _image
      clone._offset = _offset
      clone._limit = _limit
      clone._changePassword = _changePassword
      return clone
    }
  }

  private var _storage = _StorageClass()


  public var token: String {
    get {return _storage._token}
    set {_uniqueStorage()._token = newValue}
  }

  public var content: String {
    get {return _storage._content}
    set {_uniqueStorage()._content = newValue}
  }

  public var user: Org_Roylance_Yaas_User {
    get {return _storage._user ?? Org_Roylance_Yaas_User()}
    set {_uniqueStorage()._user = newValue}
  }
  public var hasUser: Bool {
    return _storage._user != nil
  }
  public mutating func clearUser() {
    return _storage._user = nil
  }

  public var userDevice: Org_Roylance_Yaas_UserDevice {
    get {return _storage._userDevice ?? Org_Roylance_Yaas_UserDevice()}
    set {_uniqueStorage()._userDevice = newValue}
  }
  public var hasUserDevice: Bool {
    return _storage._userDevice != nil
  }
  public mutating func clearUserDevice() {
    return _storage._userDevice = nil
  }

  public var image: Org_Roylance_Yaas_Image {
    get {return _storage._image ?? Org_Roylance_Yaas_Image()}
    set {_uniqueStorage()._image = newValue}
  }
  public var hasImage: Bool {
    return _storage._image != nil
  }
  public mutating func clearImage() {
    return _storage._image = nil
  }

  public var offset: Int32 {
    get {return _storage._offset}
    set {_uniqueStorage()._offset = newValue}
  }

  public var limit: Int32 {
    get {return _storage._limit}
    set {_uniqueStorage()._limit = newValue}
  }

  public var changePassword: Org_Roylance_Yaas_UIChangePassword {
    get {return _storage._changePassword ?? Org_Roylance_Yaas_UIChangePassword()}
    set {_uniqueStorage()._changePassword = newValue}
  }
  public var hasChangePassword: Bool {
    return _storage._changePassword != nil
  }
  public mutating func clearChangePassword() {
    return _storage._changePassword = nil
  }

  public init() {}

  public mutating func _protoc_generated_decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
    try _uniqueStorage().decodeField(setter: &setter, protoFieldNumber: protoFieldNumber)
  }

  public func _protoc_generated_traverse(visitor: SwiftProtobuf.Visitor) throws {
    try _storage.traverse(visitor: visitor)
  }

  public func _protoc_generated_isEqualTo(other: Org_Roylance_Yaas_UIYaasRequest) -> Bool {
    return _storage === other._storage || _storage.isEqualTo(other: other._storage)
  }

  private mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _storage.copy()
    }
    return _storage
  }
}

public struct Org_Roylance_Yaas_UIYaasResponse: SwiftProtobuf.Message, SwiftProtobuf.Proto3Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf.ProtoNameProviding {
  public var swiftClassName: String {return "Org_Roylance_Yaas_UIYaasResponse"}
  public var protoMessageName: String {return "UIYaasResponse"}
  public var protoPackageName: String {return "org.roylance.yaas"}
  public static let _protobuf_fieldNames: FieldNameMap = [
    1: .same(proto: "authenticated", swift: "authenticated"),
    2: .unique(proto: "error_message", json: "errorMessage", swift: "errorMessage"),
    3: .same(proto: "successful", swift: "successful"),
    4: .same(proto: "content", swift: "content"),
    5: .unique(proto: "is_admin", json: "isAdmin", swift: "isAdmin"),
    6: .same(proto: "user", swift: "user"),
    7: .same(proto: "users", swift: "users"),
    8: .unique(proto: "user_devices", json: "userDevices", swift: "userDevices"),
  ]

  private class _StorageClass {
    typealias ExtendedMessage = Org_Roylance_Yaas_UIYaasResponse
    var _authenticated: Bool = false
    var _errorMessage: String = ""
    var _successful: Bool = false
    var _content: String = ""
    var _isAdmin: Bool = false
    var _user: Org_Roylance_Yaas_UIAuthentication? = nil
    var _users: Org_Roylance_Yaas_UIAuthentications? = nil
    var _userDevices: [Org_Roylance_Yaas_UserDevice] = []

    init() {}

    func decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
      switch protoFieldNumber {
      case 1: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufBool.self, value: &_authenticated)
      case 2: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &_errorMessage)
      case 3: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufBool.self, value: &_successful)
      case 4: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: &_content)
      case 5: try setter.decodeSingularField(fieldType: SwiftProtobuf.ProtobufBool.self, value: &_isAdmin)
      case 6: try setter.decodeSingularMessageField(fieldType: Org_Roylance_Yaas_UIAuthentication.self, value: &_user)
      case 7: try setter.decodeSingularMessageField(fieldType: Org_Roylance_Yaas_UIAuthentications.self, value: &_users)
      case 8: try setter.decodeRepeatedMessageField(fieldType: Org_Roylance_Yaas_UserDevice.self, value: &_userDevices)
      default: break
      }
    }

    func traverse(visitor: SwiftProtobuf.Visitor) throws {
      if _authenticated != false {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufBool.self, value: _authenticated, fieldNumber: 1)
      }
      if _errorMessage != "" {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: _errorMessage, fieldNumber: 2)
      }
      if _successful != false {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufBool.self, value: _successful, fieldNumber: 3)
      }
      if _content != "" {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufString.self, value: _content, fieldNumber: 4)
      }
      if _isAdmin != false {
        try visitor.visitSingularField(fieldType: SwiftProtobuf.ProtobufBool.self, value: _isAdmin, fieldNumber: 5)
      }
      if let v = _user {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 6)
      }
      if let v = _users {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 7)
      }
      if !_userDevices.isEmpty {
        try visitor.visitRepeatedMessageField(value: _userDevices, fieldNumber: 8)
      }
    }

    func isEqualTo(other: _StorageClass) -> Bool {
      if _authenticated != other._authenticated {return false}
      if _errorMessage != other._errorMessage {return false}
      if _successful != other._successful {return false}
      if _content != other._content {return false}
      if _isAdmin != other._isAdmin {return false}
      if _user != other._user {return false}
      if _users != other._users {return false}
      if _userDevices != other._userDevices {return false}
      return true
    }

    func copy() -> _StorageClass {
      let clone = _StorageClass()
      clone._authenticated = _authenticated
      clone._errorMessage = _errorMessage
      clone._successful = _successful
      clone._content = _content
      clone._isAdmin = _isAdmin
      clone._user = _user
      clone._users = _users
      clone._userDevices = _userDevices
      return clone
    }
  }

  private var _storage = _StorageClass()


  public var authenticated: Bool {
    get {return _storage._authenticated}
    set {_uniqueStorage()._authenticated = newValue}
  }

  public var errorMessage: String {
    get {return _storage._errorMessage}
    set {_uniqueStorage()._errorMessage = newValue}
  }

  public var successful: Bool {
    get {return _storage._successful}
    set {_uniqueStorage()._successful = newValue}
  }

  public var content: String {
    get {return _storage._content}
    set {_uniqueStorage()._content = newValue}
  }

  public var isAdmin: Bool {
    get {return _storage._isAdmin}
    set {_uniqueStorage()._isAdmin = newValue}
  }

  public var user: Org_Roylance_Yaas_UIAuthentication {
    get {return _storage._user ?? Org_Roylance_Yaas_UIAuthentication()}
    set {_uniqueStorage()._user = newValue}
  }
  public var hasUser: Bool {
    return _storage._user != nil
  }
  public mutating func clearUser() {
    return _storage._user = nil
  }

  public var users: Org_Roylance_Yaas_UIAuthentications {
    get {return _storage._users ?? Org_Roylance_Yaas_UIAuthentications()}
    set {_uniqueStorage()._users = newValue}
  }
  public var hasUsers: Bool {
    return _storage._users != nil
  }
  public mutating func clearUsers() {
    return _storage._users = nil
  }

  public var userDevices: [Org_Roylance_Yaas_UserDevice] {
    get {return _storage._userDevices}
    set {_uniqueStorage()._userDevices = newValue}
  }

  public init() {}

  public mutating func _protoc_generated_decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
    try _uniqueStorage().decodeField(setter: &setter, protoFieldNumber: protoFieldNumber)
  }

  public func _protoc_generated_traverse(visitor: SwiftProtobuf.Visitor) throws {
    try _storage.traverse(visitor: visitor)
  }

  public func _protoc_generated_isEqualTo(other: Org_Roylance_Yaas_UIYaasResponse) -> Bool {
    return _storage === other._storage || _storage.isEqualTo(other: other._storage)
  }

  private mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _storage.copy()
    }
    return _storage
  }
}

public struct Org_Roylance_Yaas_UIAuthentications: SwiftProtobuf.Message, SwiftProtobuf.Proto3Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf.ProtoNameProviding {
  public var swiftClassName: String {return "Org_Roylance_Yaas_UIAuthentications"}
  public var protoMessageName: String {return "UIAuthentications"}
  public var protoPackageName: String {return "org.roylance.yaas"}
  public static let _protobuf_fieldNames: FieldNameMap = [
    1: .same(proto: "users", swift: "users"),
  ]


  public var users: [Org_Roylance_Yaas_UIAuthentication] = []

  public init() {}

  public mutating func _protoc_generated_decodeField<T: SwiftProtobuf.FieldDecoder>(setter: inout T, protoFieldNumber: Int) throws {
    switch protoFieldNumber {
    case 1: try setter.decodeRepeatedMessageField(fieldType: Org_Roylance_Yaas_UIAuthentication.self, value: &users)
    default: break
    }
  }

  public func _protoc_generated_traverse(visitor: SwiftProtobuf.Visitor) throws {
    if !users.isEmpty {
      try visitor.visitRepeatedMessageField(value: users, fieldNumber: 1)
    }
  }

  public func _protoc_generated_isEqualTo(other: Org_Roylance_Yaas_UIAuthentications) -> Bool {
    if users != other.users {return false}
    return true
  }
}
