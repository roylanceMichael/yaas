"use strict";
var RestAuthenticationService = (function () {
    function RestAuthenticationService(httpExecuteService, userService, urlService, modelFactory) {
        this.httpExecuteService = httpExecuteService;
        this.userService = userService;
        this.urlService = urlService;
        this.modelFactory = modelFactory;
    }
    RestAuthenticationService.prototype.save = function (requestModel, onSuccess, onError) {
        this.httpExecuteService.performPost(this.urlService.updateProfileUrl, requestModel.toBase64(), onSuccess, onError);
    };
    RestAuthenticationService.prototype.login = function (userModel, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost(this.urlService.loginUrl, userModel.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIAuthentication.decode64(result));
        }, onError);
    };
    RestAuthenticationService.prototype.exists = function (userName, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performGet(this.urlService.userExistsUrl + userName, function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    RestAuthenticationService.prototype.register = function (userModel, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost(this.urlService.registerUrl, userModel.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIAuthentication.decode64(result));
        }, onError);
    };
    return RestAuthenticationService;
}());
exports.RestAuthenticationService = RestAuthenticationService;
//# sourceMappingURL=authentication.js.map