"use strict";
exports.__esModule = true;
// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
var AdminService_1 = require("../node_modules/org.roylance.yaas.api/AdminService");
var AuthenticationService_1 = require("../node_modules/org.roylance.yaas.api/AuthenticationService");
var UserDeviceService_1 = require("../node_modules/org.roylance.yaas.api/UserDeviceService");
var HttpExecute_1 = require("./HttpExecute");
var FurtherAngularSetup_1 = require("./FurtherAngularSetup");
var app = angular.module('jsapp', [
    "ngRoute"
]);
app.factory("httpExecute", function ($window, $http) {
    return new HttpExecute_1.HttpExecute($http);
});
app.factory("adminService", function (httpExecute) {
    return new AdminService_1.AdminService(httpExecute);
});
app.factory("authenticationService", function (httpExecute) {
    return new AuthenticationService_1.AuthenticationService(httpExecute);
});
app.factory("userDeviceService", function (httpExecute) {
    return new UserDeviceService_1.UserDeviceService(httpExecute);
});
FurtherAngularSetup_1.furtherAngularSetup(app);
