import {IAuthenticationService} from "./IAuthenticationService";
import {IHttpExecute} from "./IHttpExecute";
import ProtoBufBuilder = org.roylance.yaas.ProtoBufBuilder;

export class AuthenticationService implements IAuthenticationService {
    httpExecute:IHttpExecute;
    modelFactory:ProtoBufBuilder;

    constructor(httpExecute:IHttpExecute,
                modelFactory:ProtoBufBuilder) {
        this.httpExecute = httpExecute;
        this.modelFactory = modelFactory;
    }
	exists(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/authentication/exists",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
	login(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/authentication/login",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
	authenticate(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/authentication/authenticate",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
	register(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/authentication/register",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
	change_password(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/authentication/change-password",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
	save(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/authentication/save",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
}