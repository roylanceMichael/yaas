//
//  HttpExecuteService.swift
//  yaas
//
//  Created by Mike Roylance on 7/13/16.
//  Copyright © 2016 Mike Roylance. All rights reserved.
//

import Foundation
import Alamofire

class HttpExecuteService:IHttpExecute {
    func performGet(url:String, onSuccess:(String), onError:(String)) {
        Alamofire.request(.GET,
                          url)
            .validate()
            .responseString(completionHandler: <#T##Response<String, NSError> -> Void#>)
    }
    
    func performPost(url:String, data:AnyObject, onSuccess:(String), onError:(String)) {
        
    }
}
