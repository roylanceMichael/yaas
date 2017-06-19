"use strict";
exports.__esModule = true;
var AdminService = (function () {
    function AdminService(httpExecute) {
        this.httpExecute = httpExecute;
    }
    AdminService.prototype.change_password_for_user = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/admin/change-password-for-user", request, onSuccess, onError);
    };
    AdminService.prototype.get_all_users = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/admin/get-all-users", request, onSuccess, onError);
    };
    AdminService.prototype.is_user_admin = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/admin/is-user-admin", request, onSuccess, onError);
    };
    AdminService.prototype.set_user_as_admin = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/admin/set-user-as-admin", request, onSuccess, onError);
    };
    AdminService.prototype.remove_user_as_admin = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/admin/remove-user-as-admin", request, onSuccess, onError);
    };
    AdminService.prototype.delete_user = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/admin/delete-user", request, onSuccess, onError);
    };
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=AdminService.js.map