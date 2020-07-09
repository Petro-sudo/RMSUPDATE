import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { ServiceService } from 'src/app/service.service';
import { UserserviceService } from 'src/app/userservice.service';
import { LoaderService } from 'src/app/loader.service';
import { HelpadminPage } from 'src/app/popover/helpadmin/helpadmin.page';



@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.page.html',
  styleUrls: ['./loginadmin.page.scss'],
})

export class LoginadminPage implements OnInit {
  [x: string]: any;
  @Output('change') change = new EventEmitter();

  //@Input() postData= {email:" ", password:" "}

 userID: any;
 error: boolean = false;
 errorMessage: String = " ";
 dataLoading: boolean = false;
 private querySubscription;

 

 


  value = 0;
  _ServiceService: any;
  @Input()  loginUserData= { password:" ",email:" " }
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
 loginNow(){


  if(this.loginUserData.email=="admin101@tres.com"&& this.loginUserData.password=="admin101"){
    
    this.router.navigate(['/admindash']);
  }
  else{
   this.add();
   this.router.navigate(['/loginadmin']);

  }
 }







 
 async add() {

  if(this.loginUserData.email!="admin101@tres.com"&& this.loginUserData.password!="admin101"){

   const alert = await this.alertCtrl.create({  
     header: 'Incorrect Email or Password',  
     message: ' please try again ',  
     buttons: ['OK'] 
      
   });  

   await alert.present();  
   const result = await alert.onDidDismiss();  
  // console.log(result);
  } 

}


//  loginUser()
//  {
// this._loaderservice.display(false);
// this.userserviceService.userLogin(this.loginUserData).subscribe(
//   res=>{
//     if (res["errorCode"]!= 0){
//       this.loginuser = res.email[0];
//       this.email = this.loginuser;
//       console.log(this.loginuser);
//       this.error=false;
//       this.errorMessage =" ";
//       this._loaderservice.display(false);

//       if(this.email=this.loginUser){
//         this.router.navigate(['/admindash']);
//         localStorage.setItem('token', res.token)
//       }else{
//         this.router.navigate(['/login']);
//       }
//     }

//     }
  
//      );
//  }


//  }





   
//  popover

async popover(ev: Event)  {
  const popo = await this.popoverController.create({
   component: HelpadminPage,
   componentProps:{
     custom_id: this.value
   },
   
  });
popo.present();
}


};
  
 


