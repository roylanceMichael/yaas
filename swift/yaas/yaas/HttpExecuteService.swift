//
//  HttpExecuteService.swift
//  yaas
//
//  Created by Mike Roylance on 7/13/16.
//  Copyright © 2016 Mike Roylance. All rights reserved.
//

import Foundation
import Alamofire

class HttpExecuteService:IHttpExecuteService {
    func performGet(url:String, onSuccess:(response:String)->Void, onError:(response:String)->Void) {
        Alamofire.request(.GET,
                          url)
            .validate()
            .responseString(completionHandler: {(response) -> Void in
                // get stuff
                if (response.result.error != nil) {
                    onSuccess(response:response.result.value!)
                }
                else {
                    onError(response: response.result.error!.localizedDescription)
                }
            })
    }
    
    func performPost(url:String, data:AnyObject, onSuccess:(response:String)->Void, onError:(response:String)->Void) {
        let request = NSMutableURLRequest(URL: NSURL(string:url)!)
        request.HTTPMethod = "POST"
        request.HTTPBody = NSData(contentsOfFile: data.string!)
        Alamofire.request(request)
            .validate()
            .responseString(completionHandler: {(response) -> Void in
                // get stuff
                if (response.result.error != nil) {
                    onSuccess(response:response.result.value!)
                }
                else {
                    onError(response: response.result.error!.localizedDescription)
                }
            })
    }
}
