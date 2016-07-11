import {IUserService} from "./all";
declare var localStorage:any;
export class UserService implements IUserService {
    accessTokenName = "org.roylance.yaas.accessToken";
    userNameName = "org.roylance.yaas.userName";
    isAdminName = "org.roylance.yaas.isadmin";

    userName:string;
    isAdmin:boolean;
    isLoggedIn:boolean;

    constructor() {
        if (localStorage[this.accessTokenName] && localStorage[this.userNameName] && localStorage[this.isAdminName]) {
            this.userName = localStorage[this.userNameName];
            this.isAdmin = localStorage[this.isAdminName];
            this.isLoggedIn = true;
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