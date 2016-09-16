// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
import {IAdminService} from "./IAdminService";
import {IHttpExecute} from "./IHttpExecute";
import ProtoBufBuilder = org.roylance.yaas.ProtoBufBuilder;

export class AdminService implements IAdminService {
    httpExecute:IHttpExecute;
    modelFactory:ProtoBufBuilder;

    constructor(httpExecute:IHttpExecute,
                modelFactory:ProtoBufBuilder) {
        this.httpExecute = httpExecute;
        this.modelFactory = modelFactory;
    }
	change_password_for_user(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/admin/change-password-for-user",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
                    },
                    onError);
        }
	get_all_users(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/admin/get-all-users",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
                    },
                    onError);
        }
	is_user_admin(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/admin/is-user-admin",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
                    },
                    onError);
        }
	set_user_as_admin(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/admin/set-user-as-admin",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
                    },
                    onError);
        }
	remove_user_as_admin(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/admin/remove-user-as-admin",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
                    },
                    onError);
        }
	delete_user(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/admin/delete-user",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIYaasResponse.decode64(result));
                    },
                    onError);
        }
}