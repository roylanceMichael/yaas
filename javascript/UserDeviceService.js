"use strict";
exports.__esModule = true;
var UserDeviceService = (function () {
    function UserDeviceService(httpExecute, modelFactory) {
        this.httpExecute = httpExecute;
        this.modelFactory = modelFactory;
    }
    UserDeviceService.prototype.save = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/userdevice/save", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
        }, onError);
    };
    UserDeviceService.prototype.all = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/userdevice/all", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
        }, onError);
    };
    return UserDeviceService;
}());
exports.UserDeviceService = UserDeviceService;
//# sourceMappingURL=UserDeviceService.js.map