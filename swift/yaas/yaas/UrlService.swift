//
//  UrlService.swift
//  yaas
//
//  Created by Mike Roylance on 7/14/16.
//  Copyright © 2016 Mike Roylance. All rights reserved.
//

import Foundation

class UrlService:IUrlService {
    let baseUrl:String
    init(baseUrl:String) {
        self.baseUrl = baseUrl
    }
    func getLoginUrl()->String {
        return baseUrl + "auth/login"
    }
    func getRegisterUrl()->String{
        return baseUrl + "auth/register"
    }
    func getUpdateProfileUrl()->String{
        return baseUrl + "auth/save"
    }
    func getUserExistsUrl()->String{
        return baseUrl + "auth/exists"
    }
    func getGetUserInformationsUrl()->String{
        return baseUrl + "admin/all-users"
    }
    func getSetAdminUrl()->String{
        return baseUrl + "admin/set-admin"
    }
    func getDeleteUserUrl()->String{
        return baseUrl + "admin/delete-user"
    }
    func getChangePasswordForUserUrl()->String{
        return baseUrl + "admin/change-password"
    }
}