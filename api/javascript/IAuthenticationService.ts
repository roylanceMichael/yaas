/// <reference path="./model" />
export interface IAuthenticationService {
	exists(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void)
	login(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void)
	authenticate(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void)
	register(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void)
	change_password(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void)
	save(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void)
}