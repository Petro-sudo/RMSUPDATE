import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  display: any;

  constructor(private http: HttpClient) { }

  login_url = 'http://168.172.185.101:5000/login';

  reg_url = 'http://168.172.185.106:5000/lord';
  regstu_url = 'http://168.172.185.106:5000/reg';
  //apart_url = 'http://168.172.185.106:5000/getproperty';get property API

  apart_url =  'https://jsonplaceholder.typicode.com/posts';
  Aplystutest='https://jsonplaceholder.typicode.com/users';//test api

  getstu_url='http://168.172.185.106:5000/getstudent';
  getstud1_url='http://168.172.185.106:5000/getstud/40';
  image_url = 'http://168.172.185.106:5000/getimage';
  status_url = 'https://jsonplaceholder.typicode.com/posts/2';
  proof_url = 'https://jsonplaceholder.typicode.com/posts/1';
  lordapp_url = 'https://168.172.185.106:5000/lord';



public status()
{
  return this.http.get<any>(this.status_url)
}

public proof()
{
  return this.http.get<any>(this.proof_url)
}

public lordprofile()
{
  return this.http.get<any>(this.proof_url)
}
public lordapp(lord:any)
{
  return this.http.post<any>(this.lordapp_url, lord, {})
}

public postLogin(loglord:any)
{
    return this.http.post<any>(this.login_url, loglord, {})
}
  public postLandlord(addlord:any)
  {
    return this.http.post<any>(this.reg_url, addlord, {});
  }



  public poststu(reg:any)
  {
    return this.http.post<any>(this.regstu_url, reg, {});
  }

  public getApartment()
  {
    return this.http.get<any>(this.apart_url);
  }


  public getAppliedstu()
  {
    return this.http.get<any>(this.Aplystutest);
  }

  public getimages()
  {
    return this.http.get<any>(this.image_url);
  }

  

}
