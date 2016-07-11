import {IRestAuthenticationService, IUserService, IHttpExecuteService, IUrlService} from "./all";
import ProtoBufBuilder = org.roylance.yaas.models.ProtoBufBuilder;

export class RestAuthenticationService implements IRestAuthenticationService {
    httpExecuteService:IHttpExecuteService;
    userService:IUserService;
    urlService:IUrlService;
    modelFactory:ProtoBufBuilder;

    constructor(httpExecuteService:IHttpExecuteService,
                userService:IUserService,
                urlService:IUrlService,
                modelFactory:ProtoBufBuilder) {
        this.httpExecuteService = httpExecuteService;
        this.userService = userService;
        this.urlService = urlService;
        this.modelFactory = modelFactory;
    }

    save(requestModel:org.roylance.yaas.models.UIRequest,
         onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void,
         onError:(response:any)=>void) {
        this.httpExecuteService.performPost(
            this.urlService.updateProfileUrl,
            requestModel.toBase64(),
            onSuccess,
            onError);
    }

    login(userModel:org.roylance.yaas.models.User,
          onSuccess:(response:org.roylance.yaas.models.UIAuthentication)=>void,
          onError:(response:any)=>void) {
        const self = this;
        this.httpExecuteService.performPost(
            this.urlService.loginUrl,
            userModel.toBase64(),
            function(result:string) {
                onSuccess(self.modelFactory.UIAuthentication.decode64(result));
            },
            onError);
    }

    exists(userName:string,
           onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void,
           onError:(response:any)=>void) {
        const self = this;
        this.httpExecuteService.performGet(
            this.urlService.userExistsUrl + userName,
            function(result:string) {
                onSuccess(self.modelFactory.UIResponse.decode64(result));
            },
            onError);
    }

    register(userModel:org.roylance.yaas.models.User,
             onSuccess:(response:org.roylance.yaas.models.UIAuthentication)=>void,
             onError:(response:any)=>void) {
        const self = this;
        this.httpExecuteService.performPost(
            this.urlService.registerUrl,
            userModel.toBase64(),
            function(result:string) {
                onSuccess(self.modelFactory.UIAuthentication.decode64(result));
            },
            onError);
    }
}