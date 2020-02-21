import { Component, OnInit, Input } from '@angular/core';
import {ServiceService} from './../service.service';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @Input() postData= {email:" ", password:" "}
  navCtrl: any;
  _ServiceService: any;
  constructor(private router: Router,
    private _serviceService : ServiceService) { }
login: any=[];

 ngOnInit() {
   //this.getData();
 }
 validateInputs(){
   let email = this.postData.email.trim();
   let password = this.postData.password.trim();
   return (this.postData.email && 
     this.postData.password && 
     email.length>0 
     && password.length>0)
 
 }

 loginAction(){
  console.log(this.postData);
   }
 


};
  
 

