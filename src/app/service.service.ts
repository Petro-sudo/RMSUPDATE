import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  login_url = 'http://168.172.185.101:7000/loglord';
  reg_url = 'http://168.172.185.106:5000/lord';
  regstu_url = 'http://168.172.185.106:5000/reg';
  apart_url = 'http://168.172.185.106:7000/getproperty';
  getstu_url='http://168.172.185.106:5000/getstudent';
  getstud1_url='http://168.172.185.106:5000/getstud/40';
  image_url = 'http://168.172.185.106:5000/getimage';
  status_url = 'https://jsonplaceholder.typicode.com/posts/2';
  proof_url = 'https://jsonplaceholder.typicode.com/posts/1';


public status()
{
  return this.http.get<any>(this.status_url)
}

public proof()
{
  return this.http.get<any>(this.proof_url)
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

  public getimages()
  {
    return this.http.get<any>(this.image_url);
  }



}
