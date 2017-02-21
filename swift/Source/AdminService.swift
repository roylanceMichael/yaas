// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
import Foundation
import Alamofire
import SwiftProtobuf

public class AdminService: IAdminService {
    let baseUrl: String
    init(baseUrl: String) {
        self.baseUrl = baseUrl
    }
	public func change_password_for_user(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/admin/change-password-for-user")!)
                urlRequest.httpMethod = HTTPMethod.post.rawValue
                urlRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
                urlRequest.httpBody = serializedRequest.base64EncodedData()

                Alamofire.request(urlRequest)
                    .response { alamoResponse in
                        let base64String = String(data: alamoResponse.data!, encoding: String.Encoding.utf8)
                        let decodedData = Data(base64Encoded: base64String!)!
                        do {
                            let actualResponse = try Org_Roylance_Yaas_UIYaasResponse(protobuf: decodedData)
                            onSuccess(actualResponse)
                        }
                        catch {
                            onError("\(error)")
                        }
                    }
                }
            catch {
                onError("\(error)")
            }
	}
	public func get_all_users(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/admin/get-all-users")!)
                urlRequest.httpMethod = HTTPMethod.post.rawValue
                urlRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
                urlRequest.httpBody = serializedRequest.base64EncodedData()

                Alamofire.request(urlRequest)
                    .response { alamoResponse in
                        let base64String = String(data: alamoResponse.data!, encoding: String.Encoding.utf8)
                        let decodedData = Data(base64Encoded: base64String!)!
                        do {
                            let actualResponse = try Org_Roylance_Yaas_UIYaasResponse(protobuf: decodedData)
                            onSuccess(actualResponse)
                        }
                        catch {
                            onError("\(error)")
                        }
                    }
                }
            catch {
                onError("\(error)")
            }
	}
	public func is_user_admin(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/admin/is-user-admin")!)
                urlRequest.httpMethod = HTTPMethod.post.rawValue
                urlRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
                urlRequest.httpBody = serializedRequest.base64EncodedData()

                Alamofire.request(urlRequest)
                    .response { alamoResponse in
                        let base64String = String(data: alamoResponse.data!, encoding: String.Encoding.utf8)
                        let decodedData = Data(base64Encoded: base64String!)!
                        do {
                            let actualResponse = try Org_Roylance_Yaas_UIYaasResponse(protobuf: decodedData)
                            onSuccess(actualResponse)
                        }
                        catch {
                            onError("\(error)")
                        }
                    }
                }
            catch {
                onError("\(error)")
            }
	}
	public func set_user_as_admin(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/admin/set-user-as-admin")!)
                urlRequest.httpMethod = HTTPMethod.post.rawValue
                urlRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
                urlRequest.httpBody = serializedRequest.base64EncodedData()

                Alamofire.request(urlRequest)
                    .response { alamoResponse in
                        let base64String = String(data: alamoResponse.data!, encoding: String.Encoding.utf8)
                        let decodedData = Data(base64Encoded: base64String!)!
                        do {
                            let actualResponse = try Org_Roylance_Yaas_UIYaasResponse(protobuf: decodedData)
                            onSuccess(actualResponse)
                        }
                        catch {
                            onError("\(error)")
                        }
                    }
                }
            catch {
                onError("\(error)")
            }
	}
	public func remove_user_as_admin(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/admin/remove-user-as-admin")!)
                urlRequest.httpMethod = HTTPMethod.post.rawValue
                urlRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
                urlRequest.httpBody = serializedRequest.base64EncodedData()

                Alamofire.request(urlRequest)
                    .response { alamoResponse in
                        let base64String = String(data: alamoResponse.data!, encoding: String.Encoding.utf8)
                        let decodedData = Data(base64Encoded: base64String!)!
                        do {
                            let actualResponse = try Org_Roylance_Yaas_UIYaasResponse(protobuf: decodedData)
                            onSuccess(actualResponse)
                        }
                        catch {
                            onError("\(error)")
                        }
                    }
                }
            catch {
                onError("\(error)")
            }
	}
	public func delete_user(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/admin/delete-user")!)
                urlRequest.httpMethod = HTTPMethod.post.rawValue
                urlRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
                urlRequest.httpBody = serializedRequest.base64EncodedData()

                Alamofire.request(urlRequest)
                    .response { alamoResponse in
                        let base64String = String(data: alamoResponse.data!, encoding: String.Encoding.utf8)
                        let decodedData = Data(base64Encoded: base64String!)!
                        do {
                            let actualResponse = try Org_Roylance_Yaas_UIYaasResponse(protobuf: decodedData)
                            onSuccess(actualResponse)
                        }
                        catch {
                            onError("\(error)")
                        }
                    }
                }
            catch {
                onError("\(error)")
            }
	}
}