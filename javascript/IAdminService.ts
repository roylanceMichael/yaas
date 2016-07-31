/// <reference path="./YaasModel" />
export interface IAdminService {
	change_password_for_user(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void)
	get_all_users(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void)
	is_user_admin(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void)
	set_user_as_admin(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void)
	remove_user_as_admin(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void)
	delete_user(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void)
}