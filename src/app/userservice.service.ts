import { Injectable, EventEmitter } from '@angular/core';
import { LoginPage } from './login/login.page';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  login_url = 'http://168.172.185.106:7000/login';
  

  $isLoggedIn = new EventEmitter();
  user: LoginPage;
  constructor(private http: HttpClient, private _router:Router) { }

  userLogin(user){
    this.$isLoggedIn.emit(user);
    return this.http.post<any>(this.login_url + '_login', user);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }

logoutUser(){
  localStorage.removeItem('token')
  this._router.navigate(['/login'])
}

artProfile(){
  this._router.navigate(['/student-dash'])
}

getToken(){
  return localStorage.getItem('token')
}






}
