import {IHttpExecute} from "../node_modules/org.roylance.yaas.api/IHttpExecute"

export class HttpExecute implements IHttpExecute {
    httpPost:string = "POST";
    httpService:any;

    constructor(httpService:any) {
        this.httpService = httpService;
    }

    performPost(url:string, data:any, onSuccess:(data)=>void, onError:(data)=>void) {
        this.httpService({
            url: url,
            method: this.httpPost,
            data: data
        }).success(onSuccess)
          .error(onError);
    }
}