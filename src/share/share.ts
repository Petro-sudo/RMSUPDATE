import{Injectable}from '@angular/core';
import {  Http,Headers, RequestOptions, RequestMethod} from '@angular/http';

import { map } from 'rxjs/operators';



@Injectable()
export class ShareService{
    constructor(private http:Http){}

    login(email: any,password: any){
        var login_url = 'https://jsonplaceholder.typicode.com/posts';
        var body = {"email":email,"password":password}
        var _header = new Headers ({'Content-type':'Application/json'});
        var option= new RequestOptions({method:RequestMethod.Post, headers:_header});
        return this.http.post(login_url,body,option).pipe(map(res=>res.json()));
    }
}