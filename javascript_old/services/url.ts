import {IUrlService} from "./all";

export class UrlService implements IUrlService {
    loginUrl:string;
    registerUrl:string;
    updateProfileUrl:string;
    userExistsUrl:string;
    changePasswordUrl:string;

    getUserInformationsUrl:string;
    setAdminUrl:string;
    deleteUserUrl:string;
    changePasswordForUserUrl:string;
    removeUserAsAdminUrl:string;
    isAdminUrl:string;

    saveUserDeviceUrl:string;
    allUserDevicesUrl:string;

    constructor(window:any) {
        var pathLocation = window.location.pathname + "rest/";

        this.loginUrl = pathLocation + "auth/login";
        this.registerUrl = pathLocation + "auth/register";
        this.updateProfileUrl = pathLocation + "auth/save";
        this.userExistsUrl = pathLocation + "auth/exists/";
        this.changePasswordUrl = pathLocation + "auth/change-password";

        this.getUserInformationsUrl = pathLocation + "admin/all-users";
        this.setAdminUrl = pathLocation + "admin/set-admin";
        this.deleteUserUrl = pathLocation + "admin/delete-user";
        this.changePasswordForUserUrl = pathLocation + "admin/change-password";
        this.removeUserAsAdminUrl = pathLocation + "admin/remove-admin";
        this.isAdminUrl = pathLocation + "admin/is-admin";

        this.saveUserDeviceUrl = pathLocation + "user-device/save";
        this.allUserDevicesUrl = pathLocation + "user-device/all";
    }
}