"use strict";
var UserService = (function () {
    function UserService() {
        this.accessTokenName = "org.roylance.yaas.accessToken";
        this.userNameName = "org.roylance.yaas.userName";
        this.isAdminName = "org.roylance.yaas.isadmin";
        if (localStorage[this.accessTokenName] && localStorage[this.userNameName] && localStorage[this.isAdminName]) {
            this.userName = localStorage[this.userNameName];
            this.isAdmin = localStorage[this.isAdminName];
            this.isLoggedIn = true;
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
//# sourceMappingURL=user.js.map