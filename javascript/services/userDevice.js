"use strict";
var RestUserDeviceService = (function () {
    function RestUserDeviceService(httpExecuteService, userService, urlService, modelFactory) {
        this.httpExecuteService = httpExecuteService;
        this.userService = userService;
        this.urlService = urlService;
        this.modelFactory = modelFactory;
    }
    RestUserDeviceService.prototype.save = function (requestModel, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost(this.urlService.saveUserDeviceUrl, requestModel.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    RestUserDeviceService.prototype.all = function (requestModel, onSuccess, onError) {
        var self = this;
        this.httpExecuteService.performPost(this.urlService.allUserDevicesUrl, requestModel.toBase64(), function (result) {
            onSuccess(self.modelFactory.UIResponse.decode64(result));
        }, onError);
    };
    return RestUserDeviceService;
}());
exports.RestUserDeviceService = RestUserDeviceService;
//# sourceMappingURL=userDevice.js.map