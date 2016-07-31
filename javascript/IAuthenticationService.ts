/// <reference path="./YaasModel" />
export interface IAuthenticationService {
	exists(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void)
	login(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void)
	authenticate(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void)
	register(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void)
	change_password(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void)
	save(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void)
}