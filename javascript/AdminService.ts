// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
import {IAdminService} from "./IAdminService";
import {IHttpExecute} from "./IHttpExecute";
import {org} from "./YaasModel";

export class AdminService implements IAdminService {
    httpExecute:IHttpExecute;

    constructor(httpExecute:IHttpExecute) {
        this.httpExecute = httpExecute;
    }
	change_password_for_user(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/admin/change-password-for-user",
                    request,
                    onSuccess,
                    onError);
        }
	get_all_users(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/admin/get-all-users",
                    request,
                    onSuccess,
                    onError);
        }
	is_user_admin(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/admin/is-user-admin",
                    request,
                    onSuccess,
                    onError);
        }
	set_user_as_admin(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/admin/set-user-as-admin",
                    request,
                    onSuccess,
                    onError);
        }
	remove_user_as_admin(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/admin/remove-user-as-admin",
                    request,
                    onSuccess,
                    onError);
        }
	delete_user(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/admin/delete-user",
                    request,
                    onSuccess,
                    onError);
        }
}