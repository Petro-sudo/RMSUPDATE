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


 
 userID: any;
 error: boolean = false;
 errorMessage: String = " ";
 dataLoading: boolean = false;
 private querySubscription;



  value = 0;
  _ServiceService: any;

  loginLordData = {email:" ", password:" "};
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

 async landlordlogin()
 {
   if(this.loginLordData.email=="charlse@gmail.com" && 
   this.loginLordData.password=="charlse1"){
     this.router.navigate(['/viewproperties']);
   }
   else{
     this.add();
     this.router.navigate(['/login']);
   }
 }

 async add()
 {
  if(this.loginLordData.email!="charlse@gmail.com" ||
  this.loginLordData.password!="charlse1"){

    const alert = await this.alertCtrl.create({
      header:'Incorrent Email or Password',
      message: 'please re-enter your details and try again ',
      buttons:['OK']
    });

    await alert.present();  
   const result = await alert.onDidDismiss();
     this.router.navigate(['/login']);
   }
 }


 





 
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
