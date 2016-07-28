"use strict";
var AdminService = (function () {
    function AdminService(httpExecuteService, modelFactory) {
        this.httpExecuteService = httpExecuteService;
        this.modelFactory = modelFactory;
    }
    AdminService.prototype.change_password_for_user = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost("/rest/admin/change-password-for-user", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    AdminService.prototype.get_all_users = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost("/rest/admin/get-all-users", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    AdminService.prototype.is_user_admin = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost("/rest/admin/is-user-admin", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    AdminService.prototype.set_user_as_admin = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost("/rest/admin/set-user-as-admin", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    AdminService.prototype.remove_user_as_admin = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost("/rest/admin/remove-user-as-admin", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    AdminService.prototype.delete_user = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost("/rest/admin/delete-user", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=AdminService.js.map