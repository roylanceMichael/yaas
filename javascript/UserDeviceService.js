"use strict";
exports.__esModule = true;
var UserDeviceService = (function () {
    function UserDeviceService(httpExecute) {
        this.httpExecute = httpExecute;
    }
    UserDeviceService.prototype.save = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/userdevice/save", request, onSuccess, onError);
    };
    UserDeviceService.prototype.all = function (request, onSuccess, onError) {
        var self = this;
        this.httpExecute.performPost("/rest/userdevice/all", request, onSuccess, onError);
    };
    return UserDeviceService;
}());
exports.UserDeviceService = UserDeviceService;
//# sourceMappingURL=UserDeviceService.js.map