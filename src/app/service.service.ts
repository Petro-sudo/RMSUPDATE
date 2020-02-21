import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  login_url = 'http://168.172.185.101:7000/st';
  reg_url = 'http://168.172.185.106:7000/addlord';
  regstu_url = 'http://168.172.185.106:5000/reg';

  public getLogin()
  {
    return this.http.get<any>(this.login_url);
  }
 
  
  public postLandlord(addlord:any)
  {
    return this.http.post<any>(this. reg_url, addlord, {});
  }



  public poststu(reg:any)
  {
    return this.http.post<any>(this. regstu_url, reg, {});
  }





}
