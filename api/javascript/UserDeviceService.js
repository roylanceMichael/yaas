"use strict";
var UserDeviceService = (function () {
    function UserDeviceService(httpExecuteService, modelFactory) {
        this.httpExecuteService = httpExecuteService;
        this.modelFactory = modelFactory;
    }
    UserDeviceService.prototype.save = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost("/rest/userdevice/save", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    UserDeviceService.prototype.all = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost("/rest/userdevice/all", request.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    return UserDeviceService;
}());
exports.UserDeviceService = UserDeviceService;
//# sourceMappingURL=UserDeviceService.js.map