import { Component, OnInit, Input } from '@angular/core';
import {ServiceService} from './../service.service';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @Input() postData= {email:" ", password:" "}
  navCtrl: any;
  _ServiceService: any;
  constructor(public alertCtrl: AlertController,private router: Router,
    private _serviceService : ServiceService) { }
addprofile: any=[];
myform: FormGroup;
email: FormControl;
password: FormControl;

 ngOnInit() {
  
  this.getstu();
 }

 getstu(){
  this._serviceService.postLogin(this.addprofile).subscribe((data: any)=>
  {this.addprofile=data;
  console.log(this.addprofile);
  });
}
 loginAction(){
   
  this._serviceService.postLogin(this.postData).subscribe(
    data =>
    console.log(data));
  console.log(this.postData);
   }
 


};
  
 

