// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
import Foundation

public protocol IAuthenticationService {
	func exists(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void)
	func login(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void)
	func authenticate(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void)
	func register(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void)
	func change_password(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void)
	func save(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void)
}