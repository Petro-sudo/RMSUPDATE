import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ServiceService} from './../service.service';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-resproof',
  templateUrl: './resproof.page.html',
  styleUrls: ['./resproof.page.scss'],
})
export class ResproofPage implements OnInit{
  result: any = [];
 data: Observable<any>;
 navigate : any;
 public addProp: any=[];

  constructor(public navCtrl: NavController, public http: HttpClient, private _serviceService : ServiceService,
    private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar,
    public alertCtrl: AlertController,
    private router: Router ) { }

  ngOnInit() {
    
    this.profile();
    this.initializeApp();
    this.sideMenu();
    this.getnoti();
  }







  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Profile",
        url   : "/stud-profile",
        icon :"person-outline"
       
       
      },
      {
        title : "Overview",
        url   : "/resproof",
        icon :"eye-outline"
       
       
      },
      {
        title : "My rooms",
        url   : "/studstatus",
        icon  : "bed-outline"
      },
      {
        title : "Issues",
        url   : "/stud-app",
        icon  : "add"
      },


      
    ]
  }






  getnoti(){
    
    return  this._serviceService.noti().
    subscribe((apart:any)=>
     {this.addProp = apart;
       console.log(this.addProp
         );
      
     });
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

 

  


}