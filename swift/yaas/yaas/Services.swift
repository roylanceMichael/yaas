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
    func performGet(url:String, onSuccess:(String), onError:(String))
    func performPost(url:String, data:AnyObject, onSuccess:(String), onError:(String))
}

protocol IGuidService {
    func generate()->String
}

protocol IRestAuthenticationService {
    func save(request:Org.Roylance.Yaas.Models.Uirequest,
              onSuccess:(Org.Roylance.Yaas.Models.Uiresponse),
              onError:(Org.Roylance.Yaas.Models.Uiresponse))
    func login(user:Org.Roylance.Yaas.Models.User,
              onSuccess:(Org.Roylance.Yaas.Models.Uiresponse),
              onError:(Org.Roylance.Yaas.Models.Uiresponse))
    func exists(userName:String,
              onSuccess:(Org.Roylance.Yaas.Models.Uiresponse),
              onError:(Org.Roylance.Yaas.Models.User))
    func register(user:Org.Roylance.Yaas.Models.Uirequest,
              onSuccess:(Org.Roylance.Yaas.Models.Uiresponse),
              onError:(Org.Roylance.Yaas.Models.Uiresponse))
}

protocol IRestAdminService {
    func getAllUsers(request:Org.Roylance.Yaas.Models.Uirequest,
              onSuccess:(Org.Roylance.Yaas.Models.Uiresponse),
              onError:(Org.Roylance.Yaas.Models.Uiresponse))
    func setAdmin(request:Org.Roylance.Yaas.Models.Uirequest,
               onSuccess:(Org.Roylance.Yaas.Models.Uiresponse),
               onError:(Org.Roylance.Yaas.Models.Uiresponse))
    func deleteUser(request:Org.Roylance.Yaas.Models.Uirequest,
                onSuccess:(Org.Roylance.Yaas.Models.Uiresponse),
                onError:(Org.Roylance.Yaas.Models.User))
    func changePasswordForUser(request:Org.Roylance.Yaas.Models.Uirequest,
                  onSuccess:(Org.Roylance.Yaas.Models.Uiresponse),
                  onError:(Org.Roylance.Yaas.Models.Uiresponse))
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