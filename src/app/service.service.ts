import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  display: any;
  public addProp: any=[];

  constructor(private http: HttpClient) { }

  login_url = 'http://168.172.185.101:5000/login';

  reg_url = 'http://168.172.185.106:5000/lord';
  regstu_url = 'http://168.172.185.106:5000/reg';
  //  apart_url = 'http://192.168.43.75:700/viewPropety';
  //get property API

  apart_url =  'https://jsonplaceholder.typicode.com/users';
  Aplystutest='https://jsonplaceholder.typicode.com/users';//test api

  getstu_url='http://168.172.185.106:5000/getstudent';
  getstud1_url='http://168.172.185.106:5000/getstud/40';
  image_url = 'http://168.172.185.106:5000/getimage';
  status_url = 'https://jsonplaceholder.typicode.com/posts/2';
  proof_url = 'https://jsonplaceholder.typicode.com/users/1';
  lordapp_url = 'https://168.172.185.106:5000/lord';


  stud_url='http://192.168.43.92:9000/stud';
  stat_urlmale = 'http://192.168.1.103:9000/male';
  stat_urlfemale = 'http://192.168.43.92:9000/female';

//for landlord app
application_url ='http://192.168.43.92:9000/pendingprop';

approvedapp_url ='http://192.168.43.92:9000/acceptedprop';
//manage approve

//delete api
delete_url ='http://192.168.1.103:9000/dlt';

//delete function
public deleteLord(landlord_email)
{
  return this.http.delete<any>(this.delete_url + landlord_email)
}

public status()
{
  return this.http.get<any>(this.status_url)
}

public getstats(){
  return this.http.get<any>(this.stat_urlmale)
}

public getstatsf(){
  return this.http.get<any>(this.stat_urlfemale)
}


public getAllStud()
{
  // get all students
  return this.http.get<any>(this.stud_url);
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
    // return this.http.get<any>(this.apart_url);
    return this.http.get<any>(this.apart_url);
  }

 

  public getApprovedApp()
  {return this.http.get<any>(this.approvedapp_url);
  }

  public getAppliedstu()
  {
    return this.http.get<any>(this.Aplystutest);
  }

  public getLandlordApp()
  {
    return this.http.get<any>(this.application_url);
  }

  public getimages()
  {
    return this.http.get<any>(this.image_url);
  }

 

  

 

}
