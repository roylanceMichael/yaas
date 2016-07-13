/// <reference path="../model" />
export interface IUserService {
    isLoggedIn:boolean;
    isAdmin:boolean;
    userName:string;

    clearUserToken();
    saveUserToken(userToken:string, userName:string, isAdmin:boolean);
    getUserToken():string;

    logout();
}

export interface IHttpExecuteService {
    performGet(url:string, onSuccess:(data) => void, onError:(data) => void)
    performPost(url:string, data:any, onSuccess:(data) => void, onError:(data) => void)
}

export interface IGuidService {
    generate():string
}

export interface IRestAuthenticationService {
    save(requestModel:org.roylance.yaas.models.UIRequest, onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void, onError:(response:any)=>void)
    login(userModel:org.roylance.yaas.models.UserModel, onSuccess:(response:org.roylance.yaas.models.UIAuthentication)=>void, onError:(response:any)=>void)
    exists(userName:string, onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void, onError:(response:any)=>void)
    register(userModel:org.roylance.yaas.models.UserModel, onSuccess:(response:org.roylance.yaas.models.UIAuthentication)=>void, onError:(response:any)=>void)
}

export interface IRestAdminService {
    getAllUsers(requestModel:org.roylance.yaas.models.UIRequest, onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void, onError:(response:any)=>void)
    setAdmin(requestModel:org.roylance.yaas.models.UIRequest, onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void, onError:(response:any)=>void)
    deleteUser(requestModel:org.roylance.yaas.models.UIRequest, onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void, onError:(response:any)=>void)
    changePasswordForUser(requestModel:org.roylance.yaas.models.UIRequest, onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void, onError:(response:any)=>void)
}

export interface ILocationService {
    path(url:string);
}

export interface IUrlService {
    loginUrl:string
    registerUrl:string
    updateProfileUrl:string
    userExistsUrl:string

    getUserInformationsUrl:string
    setAdminUrl:string
    deleteUserUrl:string,
    changePasswordForUserUrl:string
}

export interface ILocalUrlService {
    login:string
    register:string
    admin:string
    home:string
}