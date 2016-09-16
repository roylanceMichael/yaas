// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
import {YaasModel} from "../node_modules/org.roylance.yaas.api/YaasModelFactory";

import {AdminService} from "../node_modules/org.roylance.yaas.api/AdminService";
import {AuthenticationService} from "../node_modules/org.roylance.yaas.api/AuthenticationService";
import {UserDeviceService} from "../node_modules/org.roylance.yaas.api/UserDeviceService";

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
