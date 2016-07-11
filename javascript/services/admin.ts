import {IUserService, IHttpExecuteService, IUrlService, IRestAdminService} from "./all";
import ProtoBufBuilder = org.roylance.yaas.models.ProtoBufBuilder;

export class RestAdminService implements IRestAdminService {
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

    getAllUsers(requestModel:org.roylance.yaas.models.UIRequest,
                onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void,
                onError:(response:any)=>void) {
        const self = this;
        this.httpExecuteService.performPost(
            this.urlService.getUserInformationsUrl,
            requestModel.toBase64(),
            function(result:string) {
                onSuccess(self.modelFactory.UIResponse.decode64(result));
            },
            onError);
    }

    setAdmin(requestModel:org.roylance.yaas.models.UIRequest,
             onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void,
             onError:(response:any)=>void) {
        const self = this;
        this.httpExecuteService.performPost(
            this.urlService.setAdminUrl,
            requestModel.toBase64(),
            function(result:string) {
                onSuccess(self.modelFactory.UIResponse.decode64(result));
            },
            onError);
    }

    deleteUser(requestModel:org.roylance.yaas.models.UIRequest,
               onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void,
               onError:(response:any)=>void) {
        const self = this;
        this.httpExecuteService.performPost(
            this.urlService.deleteUserUrl,
            requestModel.toBase64(),
            function(result:string) {
                onSuccess(self.modelFactory.UIResponse.decode64(result));
            },
            onError);
    }

    changePasswordForUser(requestModel:org.roylance.yaas.models.UIRequest,
                          onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void,
                          onError:(response:any)=>void) {
        const self = this;
        this.httpExecuteService.performPost(
            this.urlService.changePasswordForUserUrl,
            requestModel.toBase64(),
            function(result:string) {
                onSuccess(self.modelFactory.UIResponse.decode64(result));
            },
            onError);
    }
}