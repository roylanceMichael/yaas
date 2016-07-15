//
//  Services.swift
//  yaas
//
//  Created by Mike Roylance on 7/13/16.
//  Copyright © 2016 Mike Roylance. All rights reserved.
//

protocol IUserService{
    func isLoggedIn()->Bool
    func isAdmin()->Bool
    func getUserName()->String
    
    func clearUserToken()
    func saveUserToken(userToken:String, userName:String, isAdmin:Bool)
    func getUserToken()->String
    
    func logout()
}

protocol IHttpExecuteService {
    func performGet(url:String, onSuccess:(response:String)->Void, onError:(response:String)->Void)
    func performPost(url:String, data:AnyObject, onSuccess:(response:String)->Void, onError:(response:String)->Void)
}

protocol IGuidService {
    func generate()->String
}

protocol IRestAuthenticationService {
    func save(request:Org.Roylance.Yaas.Models.Uirequest,
              onSuccess:(response:Org.Roylance.Yaas.Models.Uiresponse) -> Void,
              onError:(response:Any) -> Void)
    func login(user:Org.Roylance.Yaas.Models.User,
               onSuccess:(response:Org.Roylance.Yaas.Models.Uiresponse) -> Void,
               onError:(response:Any) -> Void)
    func exists(userName:String,
                onSuccess:(response: Org.Roylance.Yaas.Models.Uiresponse) -> Void,
                onError:(response: Any) -> Void)
    func register(user:Org.Roylance.Yaas.Models.User,
                  onSuccess:(response: Org.Roylance.Yaas.Models.Uiresponse) -> Void,
                  onError:(response:Any) -> Void)
}

protocol IRestAdminService {
    func getAllUsers(request:Org.Roylance.Yaas.Models.Uirequest,
              onSuccess:(response:Org.Roylance.Yaas.Models.Uiresponse) -> Void,
              onError:(response:Any) -> Void)
    func setAdmin(request:Org.Roylance.Yaas.Models.Uirequest,
               onSuccess:(response:Org.Roylance.Yaas.Models.Uiresponse) -> Void,
               onError:(response:Any) -> Void)
    func deleteUser(request:Org.Roylance.Yaas.Models.Uirequest,
                onSuccess:(response:Org.Roylance.Yaas.Models.Uiresponse) -> Void,
                onError:(response:Any) -> Void)
    func changePasswordForUser(request:Org.Roylance.Yaas.Models.Uirequest,
                  onSuccess:(response:Org.Roylance.Yaas.Models.Uiresponse) -> Void,
                  onError:(response:Any) -> Void)
}

protocol IUrlService {
    func getLoginUrl()->String
    func getRegisterUrl()->String
    func getUpdateProfileUrl()->String
    func getUserExistsUrl()->String
    func getGetUserInformationsUrl()->String
    func getSetAdminUrl()->String
    func getDeleteUserUrl()->String
    func getChangePasswordForUserUrl()->String
}