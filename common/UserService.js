"use strict";
var UserService = (function () {
    function UserService(authenticationService, modelFactory, actionIfLoggedIn, actionIfNotLoggedIn) {
        this.accessTokenName = "org.roylance.yaas.accessToken";
        this.userNameName = "org.roylance.yaas.userName";
        this.isAdminName = "org.roylance.yaas.isadmin";
        if (localStorage[this.accessTokenName] &&
            localStorage[this.userNameName] &&
            localStorage[this.isAdminName]) {
            var self_1 = this;
            this.isLoggingIn = true;
            var request = new modelFactory.UIYaasRequest();
            request.setToken(localStorage[this.accessTokenName]);
            authenticationService.authenticate(request, function (response) {
                self_1.isLoggingIn = false;
                if (response.authenticated) {
                    self_1.userName = localStorage[self_1.userNameName];
                    self_1.isAdmin = localStorage[self_1.isAdminName];
                    self_1.isLoggedIn = true;
                    actionIfLoggedIn();
                }
                else {
                    self_1.logout();
                    actionIfNotLoggedIn();
                }
            }, function (response) {
                self_1.logout();
                self_1.isLoggingIn = false;
                actionIfNotLoggedIn();
            });
        }
    }
    UserService.prototype.getUserToken = function () {
        return localStorage[this.accessTokenName];
    };
    UserService.prototype.clearUserToken = function () {
        localStorage.removeItem(this.accessTokenName);
        localStorage.removeItem(this.userNameName);
        localStorage.removeItem(this.isAdminName);
        this.userName = "";
        this.isAdmin = false;
        this.isLoggedIn = false;
    };
    UserService.prototype.saveUserToken = function (userToken, userName, isAdmin) {
        localStorage[this.accessTokenName] = userToken;
        localStorage[this.userNameName] = userName;
        localStorage[this.isAdminName] = isAdmin;
        this.userName = userName;
        this.isAdmin = isAdmin;
        this.isLoggedIn = true;
    };
    UserService.prototype.logout = function () {
        this.clearUserToken();
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map