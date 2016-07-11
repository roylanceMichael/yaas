import {IUrlService} from "./all";

export class UrlService implements IUrlService {
    loginUrl:string;
    registerUrl:string;
    updateProfileUrl:string;
    userExistsUrl:string;

    getUserInformationsUrl:string;
    setAdminUrl:string;
    deleteUserUrl:string;
    changePasswordForUserUrl:string;

    constructor(window:any) {
        var pathLocation = window.location.pathname + "rest/";

        this.loginUrl = pathLocation + "auth/login";
        this.registerUrl = pathLocation + "auth/register";
        this.updateProfileUrl = pathLocation + "auth/save";
        this.userExistsUrl = pathLocation + "auth/auth/exists/";

        this.getUserInformationsUrl = pathLocation + "admin/all-users";
        this.setAdminUrl = pathLocation + "admin/set-admin";
        this.deleteUserUrl = pathLocation + "admin/delete-user";
        this.changePasswordForUserUrl = pathLocation + "admin/change-password";
    }
}