// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
import Foundation
import Alamofire
import SwiftProtobuf

public class AuthenticationService: IAuthenticationService {
    let baseUrl: String
    public init(baseUrl: String) {
        self.baseUrl = baseUrl
    }
	public func exists(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/authentication/exists")!)
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
	public func login(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/authentication/login")!)
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
	public func authenticate(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/authentication/authenticate")!)
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
	public func register(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/authentication/register")!)
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
	public func change_password(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/authentication/change-password")!)
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
	public func save(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/authentication/save")!)
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