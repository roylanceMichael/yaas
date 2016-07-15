//
//  RestAdminService.swift
//  yaas
//
//  Created by Mike Roylance on 7/14/16.
//  Copyright © 2016 Mike Roylance. All rights reserved.
//

import Foundation

class RestAdminService:IRestAdminService {
    let httpExecuteService:IHttpExecuteService
    let urlService:IUrlService
    
    init(httpExecuteService:IHttpExecuteService,
         urlService:IUrlService) {
        self.httpExecuteService = httpExecuteService
        self.urlService = urlService
    }
    
    func getAllUsers(request:Org.Roylance.Yaas.Models.Uirequest,
                     onSuccess:(response:Org.Roylance.Yaas.Models.Uiresponse) -> Void,
                     onError:(response:Any) -> Void) {
        let base64Str = request.data().base64EncodedStringWithOptions(.Encoding64CharacterLineLength)
        self.httpExecuteService.performPost(
            self.urlService.getGetUserInformationsUrl(),
            data: base64Str,
            onSuccess: {(response) -> Void in
                let base64Response = NSData(base64EncodedString: response, options: NSDataBase64DecodingOptions.IgnoreUnknownCharacters)!
                let convertedResponse = try! Org.Roylance.Yaas.Models.Uiresponse.parseFromData(base64Response)
                onSuccess(response: convertedResponse)
            }
            , onError: {(response) -> Void in
                onError(response: response)
        })
    }
    
    func setAdmin(request:Org.Roylance.Yaas.Models.Uirequest,
                  onSuccess:(response:Org.Roylance.Yaas.Models.Uiresponse) -> Void,
                  onError:(response:Any) -> Void) {
        let base64Str = request.data().base64EncodedStringWithOptions(.Encoding64CharacterLineLength)
        self.httpExecuteService.performPost(
            self.urlService.getSetAdminUrl(),
            data: base64Str,
            onSuccess: {(response) -> Void in
                let base64Response = NSData(base64EncodedString: response, options: NSDataBase64DecodingOptions.IgnoreUnknownCharacters)!
                let convertedResponse = try! Org.Roylance.Yaas.Models.Uiresponse.parseFromData(base64Response)
                onSuccess(response: convertedResponse)
            }
            , onError: {(response) -> Void in
                onError(response: response)
        })
        
    }
    
    func deleteUser(request:Org.Roylance.Yaas.Models.Uirequest,
                    onSuccess:(response:Org.Roylance.Yaas.Models.Uiresponse) -> Void,
                    onError:(response:Any) -> Void) {
        let base64Str = request.data().base64EncodedStringWithOptions(.Encoding64CharacterLineLength)
        self.httpExecuteService.performPost(
            self.urlService.getDeleteUserUrl(),
            data: base64Str,
            onSuccess: {(response) -> Void in
                let base64Response = NSData(base64EncodedString: response, options: NSDataBase64DecodingOptions.IgnoreUnknownCharacters)!
                let convertedResponse = try! Org.Roylance.Yaas.Models.Uiresponse.parseFromData(base64Response)
                onSuccess(response: convertedResponse)
            }
            , onError: {(response) -> Void in
                onError(response: response)
        })
    }
    
    func changePasswordForUser(request:Org.Roylance.Yaas.Models.Uirequest,
                               onSuccess:(response:Org.Roylance.Yaas.Models.Uiresponse) -> Void,
                               onError:(response:Any) -> Void) {
        let base64Str = request.data().base64EncodedStringWithOptions(.Encoding64CharacterLineLength)
        self.httpExecuteService.performPost(
            self.urlService.getChangePasswordForUserUrl(),
            data: base64Str,
            onSuccess: {(response) -> Void in
                let base64Response = NSData(base64EncodedString: response, options: NSDataBase64DecodingOptions.IgnoreUnknownCharacters)!
                let convertedResponse = try! Org.Roylance.Yaas.Models.Uiresponse.parseFromData(base64Response)
                onSuccess(response: convertedResponse)
            }
            , onError: {(response) -> Void in
                onError(response: response)
        })
    }
}