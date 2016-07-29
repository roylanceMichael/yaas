import {IUserDeviceService} from "./IUserDeviceService";
import {IHttpExecute} from "./IHttpExecute";
import ProtoBufBuilder = org.roylance.yaas.ProtoBufBuilder;

export class UserDeviceService implements IUserDeviceService {
    httpExecute:IHttpExecute;
    modelFactory:ProtoBufBuilder;

    constructor(httpExecute:IHttpExecute,
                modelFactory:ProtoBufBuilder) {
        this.httpExecute = httpExecute;
        this.modelFactory = modelFactory;
    }
	save(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/userdevice/save",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
	all(request: org.roylance.yaas.UIRequest, onSuccess:(response: org.roylance.yaas.UIResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/userdevice/all",
                    request.toBase64(),
                    function(result:string) {
                        onSuccess(self.modelFactory.UIResponse.decode64(result));
                    },
                    onError);
        }
}