import {IUserService} from "./All";
import {IAuthenticationService} from "org.roylance.yaas/IAuthenticationService"
declare var localStorage:any;
export class UserService implements IUserService {
    accessTokenName = "org.roylance.yaas.accessToken";
    userNameName = "org.roylance.yaas.userName";
    isAdminName = "org.roylance.yaas.isadmin";

    userName:string;
    isAdmin:boolean;
    isLoggedIn:boolean;
    isLoggingIn: boolean;

    constructor(authenticationService: IAuthenticationService,
                modelFactory: org.roylance.yaas.ProtoBufBuilder,
                actionIfLoggedIn: ()=>void,
                actionIfNotLoggedIn: ()=>void) {
        if (localStorage[this.accessTokenName] &&
            localStorage[this.userNameName] &&
            localStorage[this.isAdminName]) {

            const self = this;
            this.isLoggingIn = true;
            const request = new modelFactory.UIYaasRequest();
            request.setToken(localStorage[this.accessTokenName]);

            authenticationService.authenticate(request,
                function (response: org.roylance.yaas.UIYaasResponse) {
                    self.isLoggingIn = false;
                    if (response.authenticated) {
                        self.userName = localStorage[self.userNameName];
                        self.isAdmin = localStorage[self.isAdminName];
                        self.isLoggedIn = true;
                        actionIfLoggedIn();
                    }
                    else {
                        self.logout();
                        actionIfNotLoggedIn();
                    }
                },
                function (response) {
                    self.logout();
                    self.isLoggingIn = false;
                    actionIfNotLoggedIn();
                });
        }
    }

    getUserToken():string {
        return localStorage[this.accessTokenName];
    }

    clearUserToken() {
        localStorage.removeItem(this.accessTokenName);
        localStorage.removeItem(this.userNameName);
        localStorage.removeItem(this.isAdminName);
        this.userName = "";
        this.isAdmin = false;
        this.isLoggedIn = false;
    }

    saveUserToken(userToken:string, userName:string, isAdmin:boolean) {
        localStorage[this.accessTokenName] = userToken;
        localStorage[this.userNameName] = userName;
        localStorage[this.isAdminName] = isAdmin;
        this.userName = userName;
        this.isAdmin = isAdmin;
        this.isLoggedIn = true;
    }

    logout() {
        this.clearUserToken();
    }
}