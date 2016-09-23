// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: yaas_controller.proto
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Org.Roylance.Yaas {

  /// <summary>Holder for reflection information generated from yaas_controller.proto</summary>
  public static partial class YaasControllerReflection {

    #region Descriptor
    /// <summary>File descriptor for yaas_controller.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static YaasControllerReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChV5YWFzX2NvbnRyb2xsZXIucHJvdG8SEW9yZy5yb3lsYW5jZS55YWFzGhB5",
            "YWFzX21vZGVsLnByb3RvIncKDVJlcXVlc3RBY3Rpb24SMQoHcmVxdWVzdBgB",
            "IAEoCzIgLm9yZy5yb3lsYW5jZS55YWFzLlVJWWFhc1JlcXVlc3QSMwoIcmVz",
            "cG9uc2UYAiABKAsyIS5vcmcucm95bGFuY2UueWFhcy5VSVlhYXNSZXNwb25z",
            "ZSL7AgoPQWRtaW5Db250cm9sbGVyEkIKGGNoYW5nZV9wYXNzd29yZF9mb3Jf",
            "dXNlchgBIAEoCzIgLm9yZy5yb3lsYW5jZS55YWFzLlJlcXVlc3RBY3Rpb24S",
            "NwoNZ2V0X2FsbF91c2VycxgCIAEoCzIgLm9yZy5yb3lsYW5jZS55YWFzLlJl",
            "cXVlc3RBY3Rpb24SNwoNaXNfdXNlcl9hZG1pbhgDIAEoCzIgLm9yZy5yb3ls",
            "YW5jZS55YWFzLlJlcXVlc3RBY3Rpb24SOwoRc2V0X3VzZXJfYXNfYWRtaW4Y",
            "BCABKAsyIC5vcmcucm95bGFuY2UueWFhcy5SZXF1ZXN0QWN0aW9uEj4KFHJl",
            "bW92ZV91c2VyX2FzX2FkbWluGAUgASgLMiAub3JnLnJveWxhbmNlLnlhYXMu",
            "UmVxdWVzdEFjdGlvbhI1CgtkZWxldGVfdXNlchgGIAEoCzIgLm9yZy5yb3ls",
            "YW5jZS55YWFzLlJlcXVlc3RBY3Rpb24i1AIKGEF1dGhlbnRpY2F0aW9uQ29u",
            "dHJvbGxlchIwCgZleGlzdHMYASABKAsyIC5vcmcucm95bGFuY2UueWFhcy5S",
            "ZXF1ZXN0QWN0aW9uEi8KBWxvZ2luGAIgASgLMiAub3JnLnJveWxhbmNlLnlh",
            "YXMuUmVxdWVzdEFjdGlvbhI2CgxhdXRoZW50aWNhdGUYAyABKAsyIC5vcmcu",
            "cm95bGFuY2UueWFhcy5SZXF1ZXN0QWN0aW9uEjIKCHJlZ2lzdGVyGAQgASgL",
            "MiAub3JnLnJveWxhbmNlLnlhYXMuUmVxdWVzdEFjdGlvbhI5Cg9jaGFuZ2Vf",
            "cGFzc3dvcmQYBSABKAsyIC5vcmcucm95bGFuY2UueWFhcy5SZXF1ZXN0QWN0",
            "aW9uEi4KBHNhdmUYBiABKAsyIC5vcmcucm95bGFuY2UueWFhcy5SZXF1ZXN0",
            "QWN0aW9uInUKFFVzZXJEZXZpY2VDb250cm9sbGVyEi4KBHNhdmUYASABKAsy",
            "IC5vcmcucm95bGFuY2UueWFhcy5SZXF1ZXN0QWN0aW9uEi0KA2FsbBgCIAEo",
            "CzIgLm9yZy5yb3lsYW5jZS55YWFzLlJlcXVlc3RBY3Rpb25iBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Org.Roylance.Yaas.YaasModelReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Org.Roylance.Yaas.RequestAction), global::Org.Roylance.Yaas.RequestAction.Parser, new[]{ "Request", "Response" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Org.Roylance.Yaas.AdminController), global::Org.Roylance.Yaas.AdminController.Parser, new[]{ "ChangePasswordForUser", "GetAllUsers", "IsUserAdmin", "SetUserAsAdmin", "RemoveUserAsAdmin", "DeleteUser" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Org.Roylance.Yaas.AuthenticationController), global::Org.Roylance.Yaas.AuthenticationController.Parser, new[]{ "Exists", "Login", "Authenticate", "Register", "ChangePassword", "Save" }, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Org.Roylance.Yaas.UserDeviceController), global::Org.Roylance.Yaas.UserDeviceController.Parser, new[]{ "Save", "All" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class RequestAction : pb::IMessage<RequestAction> {
    private static readonly pb::MessageParser<RequestAction> _parser = new pb::MessageParser<RequestAction>(() => new RequestAction());
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<RequestAction> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Org.Roylance.Yaas.YaasControllerReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RequestAction() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RequestAction(RequestAction other) : this() {
      Request = other.request_ != null ? other.Request.Clone() : null;
      Response = other.response_ != null ? other.Response.Clone() : null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RequestAction Clone() {
      return new RequestAction(this);
    }

    /// <summary>Field number for the "request" field.</summary>
    public const int RequestFieldNumber = 1;
    private global::Org.Roylance.Yaas.UIYaasRequest request_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.UIYaasRequest Request {
      get { return request_; }
      set {
        request_ = value;
      }
    }

    /// <summary>Field number for the "response" field.</summary>
    public const int ResponseFieldNumber = 2;
    private global::Org.Roylance.Yaas.UIYaasResponse response_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.UIYaasResponse Response {
      get { return response_; }
      set {
        response_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as RequestAction);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(RequestAction other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Request, other.Request)) return false;
      if (!object.Equals(Response, other.Response)) return false;
      return true;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (request_ != null) hash ^= Request.GetHashCode();
      if (response_ != null) hash ^= Response.GetHashCode();
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (request_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Request);
      }
      if (response_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Response);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (request_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Request);
      }
      if (response_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Response);
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(RequestAction other) {
      if (other == null) {
        return;
      }
      if (other.request_ != null) {
        if (request_ == null) {
          request_ = new global::Org.Roylance.Yaas.UIYaasRequest();
        }
        Request.MergeFrom(other.Request);
      }
      if (other.response_ != null) {
        if (response_ == null) {
          response_ = new global::Org.Roylance.Yaas.UIYaasResponse();
        }
        Response.MergeFrom(other.Response);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            input.SkipLastField();
            break;
          case 10: {
            if (request_ == null) {
              request_ = new global::Org.Roylance.Yaas.UIYaasRequest();
            }
            input.ReadMessage(request_);
            break;
          }
          case 18: {
            if (response_ == null) {
              response_ = new global::Org.Roylance.Yaas.UIYaasResponse();
            }
            input.ReadMessage(response_);
            break;
          }
        }
      }
    }

  }

  public sealed partial class AdminController : pb::IMessage<AdminController> {
    private static readonly pb::MessageParser<AdminController> _parser = new pb::MessageParser<AdminController>(() => new AdminController());
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<AdminController> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Org.Roylance.Yaas.YaasControllerReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AdminController() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AdminController(AdminController other) : this() {
      ChangePasswordForUser = other.changePasswordForUser_ != null ? other.ChangePasswordForUser.Clone() : null;
      GetAllUsers = other.getAllUsers_ != null ? other.GetAllUsers.Clone() : null;
      IsUserAdmin = other.isUserAdmin_ != null ? other.IsUserAdmin.Clone() : null;
      SetUserAsAdmin = other.setUserAsAdmin_ != null ? other.SetUserAsAdmin.Clone() : null;
      RemoveUserAsAdmin = other.removeUserAsAdmin_ != null ? other.RemoveUserAsAdmin.Clone() : null;
      DeleteUser = other.deleteUser_ != null ? other.DeleteUser.Clone() : null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AdminController Clone() {
      return new AdminController(this);
    }

    /// <summary>Field number for the "change_password_for_user" field.</summary>
    public const int ChangePasswordForUserFieldNumber = 1;
    private global::Org.Roylance.Yaas.RequestAction changePasswordForUser_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction ChangePasswordForUser {
      get { return changePasswordForUser_; }
      set {
        changePasswordForUser_ = value;
      }
    }

    /// <summary>Field number for the "get_all_users" field.</summary>
    public const int GetAllUsersFieldNumber = 2;
    private global::Org.Roylance.Yaas.RequestAction getAllUsers_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction GetAllUsers {
      get { return getAllUsers_; }
      set {
        getAllUsers_ = value;
      }
    }

    /// <summary>Field number for the "is_user_admin" field.</summary>
    public const int IsUserAdminFieldNumber = 3;
    private global::Org.Roylance.Yaas.RequestAction isUserAdmin_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction IsUserAdmin {
      get { return isUserAdmin_; }
      set {
        isUserAdmin_ = value;
      }
    }

    /// <summary>Field number for the "set_user_as_admin" field.</summary>
    public const int SetUserAsAdminFieldNumber = 4;
    private global::Org.Roylance.Yaas.RequestAction setUserAsAdmin_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction SetUserAsAdmin {
      get { return setUserAsAdmin_; }
      set {
        setUserAsAdmin_ = value;
      }
    }

    /// <summary>Field number for the "remove_user_as_admin" field.</summary>
    public const int RemoveUserAsAdminFieldNumber = 5;
    private global::Org.Roylance.Yaas.RequestAction removeUserAsAdmin_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction RemoveUserAsAdmin {
      get { return removeUserAsAdmin_; }
      set {
        removeUserAsAdmin_ = value;
      }
    }

    /// <summary>Field number for the "delete_user" field.</summary>
    public const int DeleteUserFieldNumber = 6;
    private global::Org.Roylance.Yaas.RequestAction deleteUser_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction DeleteUser {
      get { return deleteUser_; }
      set {
        deleteUser_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as AdminController);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(AdminController other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(ChangePasswordForUser, other.ChangePasswordForUser)) return false;
      if (!object.Equals(GetAllUsers, other.GetAllUsers)) return false;
      if (!object.Equals(IsUserAdmin, other.IsUserAdmin)) return false;
      if (!object.Equals(SetUserAsAdmin, other.SetUserAsAdmin)) return false;
      if (!object.Equals(RemoveUserAsAdmin, other.RemoveUserAsAdmin)) return false;
      if (!object.Equals(DeleteUser, other.DeleteUser)) return false;
      return true;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (changePasswordForUser_ != null) hash ^= ChangePasswordForUser.GetHashCode();
      if (getAllUsers_ != null) hash ^= GetAllUsers.GetHashCode();
      if (isUserAdmin_ != null) hash ^= IsUserAdmin.GetHashCode();
      if (setUserAsAdmin_ != null) hash ^= SetUserAsAdmin.GetHashCode();
      if (removeUserAsAdmin_ != null) hash ^= RemoveUserAsAdmin.GetHashCode();
      if (deleteUser_ != null) hash ^= DeleteUser.GetHashCode();
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (changePasswordForUser_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(ChangePasswordForUser);
      }
      if (getAllUsers_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(GetAllUsers);
      }
      if (isUserAdmin_ != null) {
        output.WriteRawTag(26);
        output.WriteMessage(IsUserAdmin);
      }
      if (setUserAsAdmin_ != null) {
        output.WriteRawTag(34);
        output.WriteMessage(SetUserAsAdmin);
      }
      if (removeUserAsAdmin_ != null) {
        output.WriteRawTag(42);
        output.WriteMessage(RemoveUserAsAdmin);
      }
      if (deleteUser_ != null) {
        output.WriteRawTag(50);
        output.WriteMessage(DeleteUser);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (changePasswordForUser_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(ChangePasswordForUser);
      }
      if (getAllUsers_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(GetAllUsers);
      }
      if (isUserAdmin_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(IsUserAdmin);
      }
      if (setUserAsAdmin_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(SetUserAsAdmin);
      }
      if (removeUserAsAdmin_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(RemoveUserAsAdmin);
      }
      if (deleteUser_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(DeleteUser);
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(AdminController other) {
      if (other == null) {
        return;
      }
      if (other.changePasswordForUser_ != null) {
        if (changePasswordForUser_ == null) {
          changePasswordForUser_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        ChangePasswordForUser.MergeFrom(other.ChangePasswordForUser);
      }
      if (other.getAllUsers_ != null) {
        if (getAllUsers_ == null) {
          getAllUsers_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        GetAllUsers.MergeFrom(other.GetAllUsers);
      }
      if (other.isUserAdmin_ != null) {
        if (isUserAdmin_ == null) {
          isUserAdmin_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        IsUserAdmin.MergeFrom(other.IsUserAdmin);
      }
      if (other.setUserAsAdmin_ != null) {
        if (setUserAsAdmin_ == null) {
          setUserAsAdmin_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        SetUserAsAdmin.MergeFrom(other.SetUserAsAdmin);
      }
      if (other.removeUserAsAdmin_ != null) {
        if (removeUserAsAdmin_ == null) {
          removeUserAsAdmin_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        RemoveUserAsAdmin.MergeFrom(other.RemoveUserAsAdmin);
      }
      if (other.deleteUser_ != null) {
        if (deleteUser_ == null) {
          deleteUser_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        DeleteUser.MergeFrom(other.DeleteUser);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            input.SkipLastField();
            break;
          case 10: {
            if (changePasswordForUser_ == null) {
              changePasswordForUser_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(changePasswordForUser_);
            break;
          }
          case 18: {
            if (getAllUsers_ == null) {
              getAllUsers_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(getAllUsers_);
            break;
          }
          case 26: {
            if (isUserAdmin_ == null) {
              isUserAdmin_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(isUserAdmin_);
            break;
          }
          case 34: {
            if (setUserAsAdmin_ == null) {
              setUserAsAdmin_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(setUserAsAdmin_);
            break;
          }
          case 42: {
            if (removeUserAsAdmin_ == null) {
              removeUserAsAdmin_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(removeUserAsAdmin_);
            break;
          }
          case 50: {
            if (deleteUser_ == null) {
              deleteUser_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(deleteUser_);
            break;
          }
        }
      }
    }

  }

  public sealed partial class AuthenticationController : pb::IMessage<AuthenticationController> {
    private static readonly pb::MessageParser<AuthenticationController> _parser = new pb::MessageParser<AuthenticationController>(() => new AuthenticationController());
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<AuthenticationController> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Org.Roylance.Yaas.YaasControllerReflection.Descriptor.MessageTypes[2]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AuthenticationController() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AuthenticationController(AuthenticationController other) : this() {
      Exists = other.exists_ != null ? other.Exists.Clone() : null;
      Login = other.login_ != null ? other.Login.Clone() : null;
      Authenticate = other.authenticate_ != null ? other.Authenticate.Clone() : null;
      Register = other.register_ != null ? other.Register.Clone() : null;
      ChangePassword = other.changePassword_ != null ? other.ChangePassword.Clone() : null;
      Save = other.save_ != null ? other.Save.Clone() : null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AuthenticationController Clone() {
      return new AuthenticationController(this);
    }

    /// <summary>Field number for the "exists" field.</summary>
    public const int ExistsFieldNumber = 1;
    private global::Org.Roylance.Yaas.RequestAction exists_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction Exists {
      get { return exists_; }
      set {
        exists_ = value;
      }
    }

    /// <summary>Field number for the "login" field.</summary>
    public const int LoginFieldNumber = 2;
    private global::Org.Roylance.Yaas.RequestAction login_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction Login {
      get { return login_; }
      set {
        login_ = value;
      }
    }

    /// <summary>Field number for the "authenticate" field.</summary>
    public const int AuthenticateFieldNumber = 3;
    private global::Org.Roylance.Yaas.RequestAction authenticate_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction Authenticate {
      get { return authenticate_; }
      set {
        authenticate_ = value;
      }
    }

    /// <summary>Field number for the "register" field.</summary>
    public const int RegisterFieldNumber = 4;
    private global::Org.Roylance.Yaas.RequestAction register_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction Register {
      get { return register_; }
      set {
        register_ = value;
      }
    }

    /// <summary>Field number for the "change_password" field.</summary>
    public const int ChangePasswordFieldNumber = 5;
    private global::Org.Roylance.Yaas.RequestAction changePassword_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction ChangePassword {
      get { return changePassword_; }
      set {
        changePassword_ = value;
      }
    }

    /// <summary>Field number for the "save" field.</summary>
    public const int SaveFieldNumber = 6;
    private global::Org.Roylance.Yaas.RequestAction save_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction Save {
      get { return save_; }
      set {
        save_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as AuthenticationController);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(AuthenticationController other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Exists, other.Exists)) return false;
      if (!object.Equals(Login, other.Login)) return false;
      if (!object.Equals(Authenticate, other.Authenticate)) return false;
      if (!object.Equals(Register, other.Register)) return false;
      if (!object.Equals(ChangePassword, other.ChangePassword)) return false;
      if (!object.Equals(Save, other.Save)) return false;
      return true;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (exists_ != null) hash ^= Exists.GetHashCode();
      if (login_ != null) hash ^= Login.GetHashCode();
      if (authenticate_ != null) hash ^= Authenticate.GetHashCode();
      if (register_ != null) hash ^= Register.GetHashCode();
      if (changePassword_ != null) hash ^= ChangePassword.GetHashCode();
      if (save_ != null) hash ^= Save.GetHashCode();
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (exists_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Exists);
      }
      if (login_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Login);
      }
      if (authenticate_ != null) {
        output.WriteRawTag(26);
        output.WriteMessage(Authenticate);
      }
      if (register_ != null) {
        output.WriteRawTag(34);
        output.WriteMessage(Register);
      }
      if (changePassword_ != null) {
        output.WriteRawTag(42);
        output.WriteMessage(ChangePassword);
      }
      if (save_ != null) {
        output.WriteRawTag(50);
        output.WriteMessage(Save);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (exists_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Exists);
      }
      if (login_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Login);
      }
      if (authenticate_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Authenticate);
      }
      if (register_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Register);
      }
      if (changePassword_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(ChangePassword);
      }
      if (save_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Save);
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(AuthenticationController other) {
      if (other == null) {
        return;
      }
      if (other.exists_ != null) {
        if (exists_ == null) {
          exists_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        Exists.MergeFrom(other.Exists);
      }
      if (other.login_ != null) {
        if (login_ == null) {
          login_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        Login.MergeFrom(other.Login);
      }
      if (other.authenticate_ != null) {
        if (authenticate_ == null) {
          authenticate_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        Authenticate.MergeFrom(other.Authenticate);
      }
      if (other.register_ != null) {
        if (register_ == null) {
          register_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        Register.MergeFrom(other.Register);
      }
      if (other.changePassword_ != null) {
        if (changePassword_ == null) {
          changePassword_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        ChangePassword.MergeFrom(other.ChangePassword);
      }
      if (other.save_ != null) {
        if (save_ == null) {
          save_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        Save.MergeFrom(other.Save);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            input.SkipLastField();
            break;
          case 10: {
            if (exists_ == null) {
              exists_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(exists_);
            break;
          }
          case 18: {
            if (login_ == null) {
              login_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(login_);
            break;
          }
          case 26: {
            if (authenticate_ == null) {
              authenticate_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(authenticate_);
            break;
          }
          case 34: {
            if (register_ == null) {
              register_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(register_);
            break;
          }
          case 42: {
            if (changePassword_ == null) {
              changePassword_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(changePassword_);
            break;
          }
          case 50: {
            if (save_ == null) {
              save_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(save_);
            break;
          }
        }
      }
    }

  }

  public sealed partial class UserDeviceController : pb::IMessage<UserDeviceController> {
    private static readonly pb::MessageParser<UserDeviceController> _parser = new pb::MessageParser<UserDeviceController>(() => new UserDeviceController());
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<UserDeviceController> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Org.Roylance.Yaas.YaasControllerReflection.Descriptor.MessageTypes[3]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public UserDeviceController() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public UserDeviceController(UserDeviceController other) : this() {
      Save = other.save_ != null ? other.Save.Clone() : null;
      All = other.all_ != null ? other.All.Clone() : null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public UserDeviceController Clone() {
      return new UserDeviceController(this);
    }

    /// <summary>Field number for the "save" field.</summary>
    public const int SaveFieldNumber = 1;
    private global::Org.Roylance.Yaas.RequestAction save_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction Save {
      get { return save_; }
      set {
        save_ = value;
      }
    }

    /// <summary>Field number for the "all" field.</summary>
    public const int AllFieldNumber = 2;
    private global::Org.Roylance.Yaas.RequestAction all_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Org.Roylance.Yaas.RequestAction All {
      get { return all_; }
      set {
        all_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as UserDeviceController);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(UserDeviceController other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Save, other.Save)) return false;
      if (!object.Equals(All, other.All)) return false;
      return true;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (save_ != null) hash ^= Save.GetHashCode();
      if (all_ != null) hash ^= All.GetHashCode();
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (save_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Save);
      }
      if (all_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(All);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (save_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Save);
      }
      if (all_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(All);
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(UserDeviceController other) {
      if (other == null) {
        return;
      }
      if (other.save_ != null) {
        if (save_ == null) {
          save_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        Save.MergeFrom(other.Save);
      }
      if (other.all_ != null) {
        if (all_ == null) {
          all_ = new global::Org.Roylance.Yaas.RequestAction();
        }
        All.MergeFrom(other.All);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            input.SkipLastField();
            break;
          case 10: {
            if (save_ == null) {
              save_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(save_);
            break;
          }
          case 18: {
            if (all_ == null) {
              all_ = new global::Org.Roylance.Yaas.RequestAction();
            }
            input.ReadMessage(all_);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code