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

public getLandlordApp()
  {
    return this.http.get<any>(this.application_url);
  }

//manage approved prop
approvedapp_url ='http://192.168.43.92:9000/acceptedprop';

public getApprovedApp()
{return this.http.get<any>(this.approvedapp_url);
}

//delete 
delete_url ='http://192.168.43.92:9000/dlt';

//delete_url ='http://192.168.1.101:9000/dlt';
public deleteLord(landlord_email)
{
  return this.http.delete<any>(this.delete_url +"/"+ landlord_email)
}

//decline landlord
decline_url ='http://192.168.43.92:9000/rejectapp';

public declineLord(landlord_email )
{
  return this.http.post<any>(this.decline_url +"/"+ landlord_email,landlord_email,landlord_email)
}

//accept landlord
accept_url ='http://192.168.43.92:9000/acceptapp';

public acceptLord(landlord_email)
{
  return this.http.post<any>(this.accept_url +"/"+ landlord_email,landlord_email)
}


//issues
issues_url ='http://192.168.1.101:9000/issues';

public issuesLord(){
  return this.http.get<any>(this.issues_url)
}

//editproperty
editP_url = 'http://192.168.43.92:9000/edit';

public editProp(edit:any)
{
  return this.http.post<any>(this.editP_url, edit, {})
}

//get students pending
appl_url ='http://192.168.43.92:9000/pendingstud/';

public getStudentsApp()
  {
    return this.http.get<any>(this.appl_url);
  }

  //get student accepted
  Actappl_url ='http://192.168.43.92:9000/acceptedstud/';

public getStudentsAcptd()
  {
    return this.http.get<any>(this.Actappl_url);
  }

  //student application

studApp_url = 'http://192.168.43.92:9000/updateStu/';

public studApplicationForm(studData)
{
  return this.http.post<any>(this.studApp_url,studData ,{});
}

//accept student
acceptStd_url ='http://192.168.43.92:9000/acceptStud';

public acceptStudent(student_no)
{
  return this.http.post<any>(this.acceptStd_url +"/"+ student_no,{})
}


//decline student
declineStd_url ='http://192.168.43.92:9000/rejectStud';

public declineStudent(student_no)
{
  return this.http.post<any>(this.declineStd_url +"/"+student_no,{})
}



//search properties
search_url ='http://192.168.43.92:9000/searchprop';

public searchprop(campus)
{
  return this.http.get<any>(this.search_url +"/"+campus)
}




  //-------------
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

  public getAppliedstu()
  {
    return this.http.get<any>(this.Aplystutest);
  }

  public getimages()
  {
    return this.http.get<any>(this.image_url);
  }

 

  

 

}
