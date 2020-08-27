import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  display: any;
  public addProp: any=[];
  _url: string;
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


  stud_url='http://192.168.1.105:9000/stud';
  stat_urlmale = 'http://192.168.43.142:9000/male';
  stat_urlfemale = 'http://192.168.43.142:9000/female';







//for landlord app
// application_url ='http://192.168.43.92:9000/pendingprop';
application_url ='http://192.168.1.105:9000/pendingprop';
public getLandlordApp()
  {
    return this.http.get<any>(this.application_url);
  }

//manage approved prop
// approvedapp_url ='http://192.168.43.92:9000/acceptedprop';
// approvedapp_url ='http://192.168.43.142:9000/acceptedprop';
approvedapp_url ='http://192.168.1.105:9000/acceptedprop';
public getApprovedApp()
{
  return this.http.get<any>(this.approvedapp_url);
}

//get property near certain campus
propNearCamp_url = 'http://192.168.43.142:9000/acceptedprop'

public propertyNearCampus()
{
  return this.http.get<any>(this.propNearCamp_url)
}

//select campus
// campus_url ='http://192.168.43.92:9000/addproperty';
campus_url ='http://192.168.43.142:9000/addproperty';
public selectCampuses(campusesData)
{
  return this.http.post<any>(this.campus_url, campusesData, {})
}


//delete 
//delete_url ='http://192.168.43.92:9000/dlt';
  delete_url ='http://192.168.43.142:9000/dlt';

public deleteLord(landlord_email)
{
  return this.http.delete<any>(this.delete_url +"/"+ landlord_email)
}


//delete 
//delete_url ='http://192.168.43.92:9000/dlt';
fixissueStu_url ='http://192.168.1.105:9000/fixissue';

public stufixIssue(description)
{
  return this.http.post<any>(this.fixissueStu_url +"/"+ description,description,description)
}

fixissueStu1_url ='http://192.168.1.105:9000/fixissue1';

public stufixIssue1(description)
{
  return this.http.post<any>(this.fixissueStu1_url +"/"+ description,description,description)
}


stuNotice_url ='http://192.168.1.105:9000/postnotice';

public postNotice()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
{
  return this.http.post<any>(this.stuNotice_url ,{})
}
//decline landlord
//decline_url ='http://192.168.43.92:9000/rejectapp';
decline_url ='http://192.168.43.142:9000/rejectapp';

public declineLord(landlord_email )
{
  return this.http.post<any>(this.decline_url +"/"+ landlord_email,landlord_email,landlord_email)
}

//accept landlord
//accept_url ='http://192.168.43.92:9000/acceptapp';
// accept_url ='http://192.168.43.142:9000/acceptapp';
accept_url ='http://192.168.1.105:9000/acceptapp';
public acceptLord(landlord_email)
{
  return this.http.post<any>(this.accept_url +"/"+ landlord_email,landlord_email)
}


//issues
issues_url ='http://192.168.1.105:9000/issues';
// issues_url ='http://192.168.43.92:9000/issues';
// issues_url ='http://192.168.43.142:9000/issues';
public issuesLord(){
  return this.http.get<any>(this.issues_url)
}

//editproperty
editP_url = 'http://192.168.1.105:9000/edit';
//editP_url = 'http://192.168.43.92:9000/edit';
// editP_url = 'http://192.168.43.142:9000/edit';

public editProp(edit:any)
{
  return this.http.post<any>(this.editP_url, edit, {})
}

//get students pending
// appl_url ='http://192.168.43.142:9000/pendingstud';
//appl_url ='http://192.168.43.92:9000/pendingstud/';
appl_url ='http://192.168.1.105:9000/pendingstud';
public getStudentsApp()
  {
    return this.http.get<any>(this.appl_url);
  }

  //get student accepted
  // Actappl_url ='http://192.168.43.142:9000/acceptedstud';
 // Actappl_url ='http://192.168.43.92:9000/acceptedstud/';
 Actappl_url ='http://192.168.1.105:9000/acceptedstud';

public getStudentsAcptd()
  {
    return this.http.get<any>(this.Actappl_url);
  }

  //student application

//studApp_url = 'http://192.168.43.92:9000/updateStu';
// studApp_url = 'http://192.168.43.142:9000/updateStu/';
studApp_url = 'http://192.168.1.105:9000/updateStu/';
public studApplicationForm(studData)
{
  return this.http.post<any>(this.studApp_url,studData ,{});
}

//accept student

//acceptStd_url ='http://192.168.43.92:9000/InsertStuIssues/';

// acceptStd_url ='http://192.168.43.92:9000/acceptStud';
// acceptStd_url ='http://192.168.43.142:9000/acceptStud';
acceptStd_url ='http://192.168.1.105:9000/acceptStud';
public acceptStudent(student_no)
{
  return this.http.post<any>(this.acceptStd_url +"/"+ student_no,{})
}



//accept student
//Stdissues_url ='http://192.168.43.92:9000/InsertStuIssues';
// Stdissues_url ='http://192.168.43.142:9000/InsertStuIssues';
Stdissues_url ='http://192.168.1.105:9000/InsertStuIssues';
public Studentissue(issueData)
{
  return this.http.post<any>(this.Stdissues_url,issueData ,{})
}

Snoti_url ='http://192.168.1.105:9000/postnotice';
public Snotice(noticeData)
{
  return this.http.post<any>(this.Snoti_url,noticeData ,{})
}




//posting notification as a landlord
postNotice1_url='http://192.168.1.105.9000/postnotice';
public postingNotice1(noticeData)
{
  return this.http.post<any>(this.postNotice1_url, noticeData, {})
}



//view issues
// getStdissues_url ='http://192.168.43.142:9000/viewStuIssues';
//getStdissues_url ='http://192.168.43.92:9000/viewStuIssues';
getStdissues_url ='http://192.168.1.105:9000/viewStuIssues';
public getStudentissue()
{
  return this.http.get<any>(this.getStdissues_url)
}



//get a specific issue for a certain student
// getStdissues_url ='http://192.168.43.142:9000/';
//getStdissues_url ='http://192.168.43.92:9000/';
getSpecificissue1_url ='http://192.168.1.105:9000/specificissue1';
public getSpecifictissue1()
{
  return this.http.get<any>(this.getSpecificissue1_url)
}


//get a specific issue for a certain student
// getStdissues_url ='http://192.168.43.142:9000/';
//getStdissues_url ='http://192.168.43.92:9000/';
getSpecificissue_url ='http://192.168.1.105:9000/specificissue';
public getSpecifictissue()
{
  return this.http.get<any>(this.getSpecificissue_url)
}




//decline student
// declineStd_url ='http://192.168.43.92:9000/rejectStud';
// declineStd_url ='http://192.168.43.142:9000/rejectStud';
declineStd_url ='http://192.168.1.105:9000/rejectStud';
public declineStudent(student_no)
{
  return this.http.post<any>(this.declineStd_url +"/"+student_no,{})
}

//lord update personal D
//lordApp_url ='http://192.168.43.92:9000/updateLand';
// lordApp_url ='http://192.168.43.142:9000/updateLand';
lordApp_url ='http://192.168.1.105:9000/updateLand';

//search properties
search_url ='http://192.168.43.142:9000/searchprop';
//search_url ='http://192.168.43.92:9000/searchprop';

public searchprop()
{
  return this.http.get<any>(this.search_url)
}
public lordApplicationFormD(lordData)
{
  return this.http.post<any>(this.lordApp_url, lordData, {})

}

//lord update property
// lordApp1_url ='http://192.168.43.92:9000/insertprop';
// lordApp1_url ='http://192.168.43.142:9000/insertprop';
lordApp1_url ='http://192.168.1.105:9000/insertprop';
public lordApplicationFormProp(popData)
{
  return this.http.post<any>(this.lordApp1_url, popData, {})
}




uploadFile(data: any): Observable<{}> {
  // this._url = 'http://192.168.43.92:9000/landlodImage';
  this._url = 'http://192.168.43.142:9000/landlodImage';
  return this.http.post(this._url, data)
      // .map(this.handleData)
      // .catch(this.handleError);
}

private handleData(res: Response) {
  let data = res.json();
  return data;
}
private handleError(error: Response | any) {
  return Observable.throw('API failed');
}

//posting img to DB
//imgv_url = 'http://192.168.43.92:9000/getlimages';
// imgv_url = 'http://192.168.43.142:9000/getlimages';
imgv_url = 'http://192.168.1.105:9000/getlimages';
public imgView()
{
  return this.http.get<any>(this.imgv_url)
}




noti_url = 'http://192.168.1.105:9000/noti';
public noti()
{
  return this.http.get<any>(this.noti_url)
}



//posting img to DB
//postImg_url = 'http://192.168.43.92:9000/landlodImage';
// postImg_url = 'http://192.168.43.142:9000/landlodImage';
postImg_url = 'http://192.168.1.105:9000/landlodImage';
public postImg(postImage)
{
 return this.http.post<any>(this.postImg_url, postImage,{})
}



//posting queries as a landlord
postQuery_url='http://192.168.43.142.900/postquery';
public postingQuery(queryData)
{
  return this.http.post<any>(this.postQuery_url, queryData, {})
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
