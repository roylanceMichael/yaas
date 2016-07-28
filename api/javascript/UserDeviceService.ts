import {IUserDeviceService} from "./IUserDeviceService";
import {IHttpExecuteService} from "./IHttpExecute";
import ProtoBufBuilder = org.roylance.yaas.ProtoBufBuilder;

export class UserDeviceService implements IUserDeviceService {
    httpExecuteService:IHttpExecuteService;
    modelFactory:ProtoBufBuilder;

    constructor(httpExecuteService:IHttpExecuteService,
                modelFactory:ProtoBufBuilder) {
        this.httpExecuteService = httpExecuteService;
        this.modelFactory = modelFactory;
    }
	save(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecuteService.performPost("/rest/userdevice/save",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
	all(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecuteService.performPost("/rest/userdevice/all",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
}