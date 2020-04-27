
import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ServiceService} from './../service.service';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resproof',
  templateUrl: './resproof.page.html',
  styleUrls: ['./resproof.page.scss'],
})
export class ResproofPage implements OnInit{
  result: any = [];
 data: Observable<any>;

  constructor(public navCtrl: NavController, public http: HttpClient, private _serviceService : ServiceService,
   
    public alertCtrl: AlertController,
    private router: Router ) { }

  ngOnInit() {

    this.getData();
    this.profile();
  }











  async profile() {

    

    const alert = await this.alertCtrl.create({  
     header:'Profile Dialog',
      message:'Please complete your profile' ,
      buttons: [
        {
          text: 'Update',
          role: 'update',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm update: blah');
            this.router.navigate(['/stud-profile']);
          }
        }, {
          text: 'Later',
          handler: () => {
            console.log('Confirm later');
          }
        }
      ]
      
    }
   
    


    
    );  

    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);



   }

















  getData(){


   this. _serviceService.proof().subscribe(data=>{
    this.result = data;
    });
    
  }

  


}
