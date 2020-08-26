import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import {ServiceService} from './../service.service';
import { PopstdPage } from '../popover/popstd/popstd.page';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {
  value=0;
 


  loginStdData = {studno:" ", pwd:" "};
  constructor( private alertCtrl: AlertController, 
    private router: Router, private popoverController: PopoverController) { }

  myform: FormGroup;
  ngOnInit() {
  }
  
  async loginStud()
  {
    if(this.loginStdData.studno=="2020202020" && this.loginStdData.pwd=="123456789"){
      this.router.navigate(['/resproof'])
    }
    else{

      const alert = await this.alertCtrl.create({
        header:'Invalid Student No or Password',
        message: 'please re-enter your details and try again ',
        buttons:['OK']
      });
  
      await alert.present();  
     const result = await alert.onDidDismiss(); 
    
      this.router.navigate(['/login1']);
    }

  }


  // async add1()
  // {
  //   if(this.loginStdData.studno!="202020202" && this.loginStdData.pwd!="123456789"){
   
  //     const alert = await this.alertCtrl.create({
  //       header:'Invalid Student No or Password',
  //       message: 'please try again ',
  //       buttons:['OK']
  //     });
  
  //     await alert.present();  
  //    const result = await alert.onDidDismiss(); 
  //   }
  // }
  

  // pop

  async popOver(ev: Event)  {
    const pop = await this.popoverController.create({
     component: PopstdPage,
     componentProps:{
       custom_id: this.value
     },
     
    });
  pop.present();
  }
}
