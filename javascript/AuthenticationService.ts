// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
import {IAuthenticationService} from "./IAuthenticationService";
import {IHttpExecute} from "./IHttpExecute";
import {org} from "./YaasModel";

export class AuthenticationService implements IAuthenticationService {
    httpExecute:IHttpExecute;

    constructor(httpExecute:IHttpExecute) {
        this.httpExecute = httpExecute;
    }
	exists(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/authentication/exists",
                    request,
                    onSuccess,
                    onError);
        }
	login(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/authentication/login",
                    request,
                    onSuccess,
                    onError);
        }
	authenticate(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/authentication/authenticate",
                    request,
                    onSuccess,
                    onError);
        }
	register(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/authentication/register",
                    request,
                    onSuccess,
                    onError);
        }
	change_password(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/authentication/change-password",
                    request,
                    onSuccess,
                    onError);
        }
	save(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/authentication/save",
                    request,
                    onSuccess,
                    onError);
        }
}