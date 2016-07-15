//
//  RestAuthenticationService.swift
//  yaas
//
//  Created by Mike Roylance on 7/14/16.
//  Copyright © 2016 Mike Roylance. All rights reserved.
//

import Foundation

class RestAuthenticationService:IRestAuthenticationService {
    let httpExecuteService:IHttpExecuteService
    let urlService:IUrlService
    
    init(httpExecuteService:IHttpExecuteService,
         urlService:IUrlService) {
            self.httpExecuteService = httpExecuteService
            self.urlService = urlService
    }
    
    func save(request:Org.Roylance.Yaas.Models.Uirequest,
              onSuccess:(response:Org.Roylance.Yaas.Models.Uiresponse) -> Void,
              onError:(response:Any) -> Void) {
        let base64Str = request.data().base64EncodedStringWithOptions(.Encoding64CharacterLineLength)
        self.httpExecuteService.performPost(
            self.urlService.getUpdateProfileUrl(),
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
    
    func login(user:Org.Roylance.Yaas.Models.User,
               onSuccess:(response: Org.Roylance.Yaas.Models.Uiresponse) -> Void,
               onError:(response: Any) -> Void) {
        let base64Str = user.data().base64EncodedStringWithOptions(.Encoding64CharacterLineLength)
        self.httpExecuteService.performPost(
            self.urlService.getLoginUrl(),
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
    
    func exists(userName:String,
                onSuccess:(response: Org.Roylance.Yaas.Models.Uiresponse) -> Void,
                onError:(response: Any) -> Void) {
        self.httpExecuteService.performGet(
            self.urlService.getUserExistsUrl() + userName,
            onSuccess: {(response) -> Void in
                let base64Response = NSData(base64EncodedString: response, options: NSDataBase64DecodingOptions.IgnoreUnknownCharacters)!
                let convertedResponse = try! Org.Roylance.Yaas.Models.Uiresponse.parseFromData(base64Response)
                onSuccess(response: convertedResponse)
            }
            , onError: {(response) -> Void in
                onError(response: response)
        })
    }
    
    func register(user:Org.Roylance.Yaas.Models.User,
                  onSuccess:(response: Org.Roylance.Yaas.Models.Uiresponse) -> Void,
                  onError:(response: Any) -> Void) {
        let base64Str = user.data().base64EncodedStringWithOptions(.Encoding64CharacterLineLength)
        self.httpExecuteService.performPost(
            self.urlService.getRegisterUrl(),
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
