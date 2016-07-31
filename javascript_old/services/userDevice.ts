import {IUserService, IHttpExecuteService, IUrlService, IRestUserDeviceService} from "./all";
import ProtoBufBuilder = org.roylance.yaas.models.ProtoBufBuilder;

export class RestUserDeviceService implements IRestUserDeviceService {
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
        const self = this;
        this.httpExecuteService.performPost(
            this.urlService.saveUserDeviceUrl,
            requestModel.toBase64(),
            function(result:string) {
                onSuccess(self.modelFactory.UIResponse.decode64(result));
            },
            onError);
    }

    all(requestModel:org.roylance.yaas.models.UIRequest,
        onSuccess:(response:org.roylance.yaas.models.UIResponse)=>void,
        onError:(response:any)=>void) {
        const self = this;
        this.httpExecuteService.performPost(
            this.urlService.allUserDevicesUrl,
            requestModel.toBase64(),
            function(result:string) {
                onSuccess(self.modelFactory.UIResponse.decode64(result));
            },
            onError);
    }

}