// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
import Foundation
import Alamofire
import SwiftProtobuf

public class UserDeviceService: IUserDeviceService {
    let baseUrl: String
    init(baseUrl: String) {
        self.baseUrl = baseUrl
    }
	public func save(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/userdevice/save")!)
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
	public func all(request: Org_Roylance_Yaas_UIYaasRequest, onSuccess: @escaping (_ response: Org_Roylance_Yaas_UIYaasResponse) -> Void, onError: @escaping (_ response: String) -> Void) {

            do {
                let serializedRequest = try request.serializeProtobuf()
                var urlRequest = URLRequest(url: URL(string: self.baseUrl + "/rest/userdevice/all")!)
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