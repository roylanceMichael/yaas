export interface ICommonUIPatternsService {
    deleteChildFromParent(controller:any,
                          parent:any,
                          child:any,
                          selectedChildNameInController:string,
                          childArrayNameInParent:string);
}

export interface IGuidService {
    generate():string
}

export interface ILocationService {
    path(url:string);
}

export interface IUserService {
    isLoggedIn:boolean;
    isAdmin:boolean;
    userName:string;
    isLoggingIn:boolean;

    clearUserToken();
    saveUserToken(userToken:string, userName:string, isAdmin:boolean);
    getUserToken():string;

    logout();
}