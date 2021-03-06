// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
/// <reference path="../node_modules/roylance.common/bytebuffer.d.ts" />
import {YaasModel} from "../node_modules/org.roylance.yaas/YaasModelFactory";

import {AdminService} from "../node_modules/org.roylance.yaas/AdminService";
import {AuthenticationService} from "../node_modules/org.roylance.yaas/AuthenticationService";
import {UserDeviceService} from "../node_modules/org.roylance.yaas/UserDeviceService";

import {HttpExecute} from "./HttpExecute"
import {furtherAngularSetup} from "./FurtherAngularSetup"

declare var angular: any;
const app = angular.module('jsapp', [
    "ngRoute"
]);

app.factory("httpExecute", function ($window, $http) {
    return new HttpExecute($http);
});

app.factory("yaasModel", function () {
    return YaasModel.org.roylance.yaas;
});

app.factory("adminService", function(httpExecute:HttpExecute, yaasModel:org.roylance.yaas.ProtoBufBuilder) {
    return new AdminService(httpExecute, yaasModel)
});
app.factory("authenticationService", function(httpExecute:HttpExecute, yaasModel:org.roylance.yaas.ProtoBufBuilder) {
    return new AuthenticationService(httpExecute, yaasModel)
});
app.factory("userDeviceService", function(httpExecute:HttpExecute, yaasModel:org.roylance.yaas.ProtoBufBuilder) {
    return new UserDeviceService(httpExecute, yaasModel)
});


furtherAngularSetup(app);
