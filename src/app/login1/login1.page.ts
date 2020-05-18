import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import {ServiceService} from './../service.service';
import { PopstdPage } from '../popover/popstd/popstd.page';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {
  value=0;
 


  
  constructor( private alertCtrl: AlertController, 
    private router: Router, private popoverController: PopoverController) { }

  ngOnInit() {
  }
  
  // login(){
  //   this.auth.login(this.credentials).subscribe(async res =>{
  //     if(res){
  //       this.router.navigateByUrl('/stud-profile');
  //     }
  //     else{
  //       const alert =await this.alertCtrl.create({
  //         header: 'Login failed',
  //         message: 'Wrong credentials.',
  //         buttons:['OK']
  //       });
  //       await alert.present();
  //     }
  //   });
  // }pop

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
