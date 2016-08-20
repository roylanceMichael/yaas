"use strict";
var AuthenticationService = (function () {
    function AuthenticationService(httpExecute, modelFactory) {
        this.httpExecute = httpExecute;
        this.modelFactory = modelFactory;
    }
    AuthenticationService.prototype.exists = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/authentication/exists", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
        }, onError);
    };
    AuthenticationService.prototype.login = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/authentication/login", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
        }, onError);
    };
    AuthenticationService.prototype.authenticate = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/authentication/authenticate", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
        }, onError);
    };
    AuthenticationService.prototype.register = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/authentication/register", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
        }, onError);
    };
    AuthenticationService.prototype.change_password = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/authentication/change-password", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
        }, onError);
    };
    AuthenticationService.prototype.save = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/authentication/save", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
        }, onError);
    };
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=AuthenticationService.js.map