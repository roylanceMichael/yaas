import {ILocalUrlService} from "./all";

export class LocalUrlService implements ILocalUrlService{
    login:string;
    register:string;
    admin:string;
    home:string;
    constructor() {
        this.login = "/login";
        this.register = "/register";
        this.admin = "/admin";
        this.home = "/home";
    }
}