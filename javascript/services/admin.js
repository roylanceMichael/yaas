"use strict";
var RestAdminService = (function () {
    function RestAdminService(httpExecuteService, userService, urlService, modelFactory) {
        this.httpExecuteService = httpExecuteService;
        this.userService = userService;
        this.urlService = urlService;
        this.modelFactory = modelFactory;
    }
    RestAdminService.prototype.getAllUsers = function (requestModel, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost(this.urlService.getUserInformationsUrl, requestModel.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    RestAdminService.prototype.setAdmin = function (requestModel, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost(this.urlService.setAdminUrl, requestModel.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    RestAdminService.prototype.deleteUser = function (requestModel, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost(this.urlService.deleteUserUrl, requestModel.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    RestAdminService.prototype.changePasswordForUser = function (requestModel, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost(this.urlService.changePasswordForUserUrl, requestModel.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    return RestAdminService;
}());
exports.RestAdminService = RestAdminService;
//# sourceMappingURL=admin.js.map