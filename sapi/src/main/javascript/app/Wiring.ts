// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
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

app.factory("adminService", function(httpExecute:HttpExecute) {
    return new AdminService(httpExecute);
});
app.factory("authenticationService", function(httpExecute:HttpExecute) {
    return new AuthenticationService(httpExecute);
});
app.factory("userDeviceService", function(httpExecute:HttpExecute) {
    return new UserDeviceService(httpExecute);
});


furtherAngularSetup(app);
