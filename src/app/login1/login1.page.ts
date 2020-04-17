import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {
  
  // credentials = { 
  //   email: 'petro,malele@gmail.com',
  //   pwd: '123'
  // };


  
  constructor( private alertCtrl: AlertController, 
    private router: Router) { }

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
  // }
}
