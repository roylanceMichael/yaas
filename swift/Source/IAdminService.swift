// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
import Foundation

public protocol IAdminService {
	func change_password_for_user(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void)
	func get_all_users(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void)
	func is_user_admin(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void)
	func set_user_as_admin(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void)
	func remove_user_as_admin(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void)
	func delete_user(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void)
}