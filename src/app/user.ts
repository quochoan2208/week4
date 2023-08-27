export class User {
   
    username:string;
    email:string;
    pwd:string;
    valid:boolean;
    avatar?:string;
    constructor(username:string='',email:string='',pwd:string='',valid=false,avatar:string=""){
       
        this.username = username;
        this.email = email;
        this.pwd=pwd;
        this.valid = valid;
        this.avatar = avatar
    }
}
