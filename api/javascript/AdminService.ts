import {IAdminService} from "./IAdminService";
import {IHttpExecuteService} from "./IHttpExecute";
import ProtoBufBuilder = org.roylance.yaas.ProtoBufBuilder;

export class AdminService implements IAdminService {
    httpExecuteService:IHttpExecuteService;
    modelFactory:ProtoBufBuilder;

    constructor(httpExecuteService:IHttpExecuteService,
                modelFactory:ProtoBufBuilder) {
        this.httpExecuteService = httpExecuteService;
        this.modelFactory = modelFactory;
    }
	change_password_for_user(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecuteService.performPost("/rest/admin/change-password-for-user",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
	get_all_users(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecuteService.performPost("/rest/admin/get-all-users",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
	is_user_admin(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecuteService.performPost("/rest/admin/is-user-admin",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
	set_user_as_admin(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecuteService.performPost("/rest/admin/set-user-as-admin",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
	remove_user_as_admin(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecuteService.performPost("/rest/admin/remove-user-as-admin",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
	delete_user(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecuteService.performPost("/rest/admin/delete-user",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
}