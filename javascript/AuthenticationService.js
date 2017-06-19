"use strict";
exports.__esModule = true;
var AuthenticationService = (function () {
    function AuthenticationService(httpExecute) {
        this.httpExecute = httpExecute;
    }
    AuthenticationService.prototype.exists = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/authentication/exists", request, onSuccess, onError);
    };
    AuthenticationService.prototype.login = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/authentication/login", request, onSuccess, onError);
    };
    AuthenticationService.prototype.authenticate = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/authentication/authenticate", request, onSuccess, onError);
    };
    AuthenticationService.prototype.register = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/authentication/register", request, onSuccess, onError);
    };
    AuthenticationService.prototype.change_password = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/authentication/change-password", request, onSuccess, onError);
    };
    AuthenticationService.prototype.save = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/authentication/save", request, onSuccess, onError);
    };
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=AuthenticationService.js.map