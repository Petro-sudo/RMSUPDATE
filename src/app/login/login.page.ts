import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ServiceService} from './../service.service';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { UserserviceService } from '../userservice.service';
import { LoaderService } from '../loader.service';
import { PopemailPage } from '../popover/popemail/popemail.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;
  @Output('change') change = new EventEmitter();

  //@Input() postData= {email:" ", password:" "}
 loginUserData = {};
 userID: any;
 error: boolean = false;
 errorMessage: String = " ";
 dataLoading: boolean = false;
 private querySubscription;
 loginuser: any;
 email: any;

 CheckArrary = "this.loginuser"


  value = 0;
  _ServiceService: any;
  constructor(public alertCtrl: AlertController,private router: Router,
    private _serviceService : ServiceService, private userserviceService: UserserviceService,
    private _loaderservice: LoaderService, private popoverController: PopoverController) { }
addprofile: any=[];
myform: FormGroup;
//email: FormControl;
//password: FormControl;
password: any;
 ngOnInit() {
  
  //this.getstu();
  this._loaderservice.display(true);
 }
 loginUser()
 {
this._loaderservice.display(false);
this.userserviceService.userLogin(this.loginUserData).subscribe(
  res=>{
    if (res["errorCode"]!= 0){
      this.loginuser = res.email[0];
      this.email = this.loginuser;
      console.log(this.loginuser);
      this.error=false;
      this.errorMessage =" ";
      this._loaderservice.display(false);

      if(this.email=this.loginUser){
        this.router.navigate(['/landlord-dash']);
        localStorage.setItem('token', res.token)
      }else{
        this.router.navigate(['/login']);
      }
    }

    }
    // ,
    //  err=>{console.log(err)
    //  this.error  = true;
    //  this.errorMessage = err.message;
    //  this._loaderservice.display(false);
     
    //  }
    //  ,
    //  ()=>{

    //   this._loaderservice.display(false);
    //  } 
     );
 }
//  getUserType(e){
//    this.userID = e;
//    console.log(e);

//  }




//  getstu(){
//   this._serviceService.postLogin(this.addprofile).subscribe((data: any)=>
//   {this.addprofile=data;
//   console.log(this.addprofile);
//   });
// }
//  loginAction(){
   
//   this._serviceService.postLogin(this.postData).subscribe(
//     data =>
//     console.log(data));
//   console.log(this.postData);
//    }
   
//  popover

async popover(ev: Event)  {
  const popo = await this.popoverController.create({
   component: PopemailPage,
   componentProps:{
     custom_id: this.value
   },
   
  });
popo.present();
}


};
  
 

