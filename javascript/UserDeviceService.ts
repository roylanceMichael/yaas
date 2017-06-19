// THIS FILE WAS AUTO-GENERATED. DO NOT ALTER!
import {IUserDeviceService} from "./IUserDeviceService";
import {IHttpExecute} from "./IHttpExecute";
import {org} from "./YaasModel";

export class UserDeviceService implements IUserDeviceService {
    httpExecute:IHttpExecute;

    constructor(httpExecute:IHttpExecute) {
        this.httpExecute = httpExecute;
    }
	save(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/userdevice/save",
                    request,
                    onSuccess,
                    onError);
        }
	all(request: org.roylance.yaas.UIYaasRequest, onSuccess:(response: org.roylance.yaas.UIYaasResponse)=>void, onError:(response:any)=>void) {
            const self = this;
            this.httpExecute.performPost("/rest/userdevice/all",
                    request,
                    onSuccess,
                    onError);
        }
}