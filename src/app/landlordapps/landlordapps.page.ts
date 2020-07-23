import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
/*import {NavController} from '@ionic/angular';*/
import {Observable} from 'rxjs';
import {ServiceService} from './../service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import {  ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-landlordapps',
  templateUrl: './landlordapps.page.html',
  styleUrls: ['./landlordapps.page.scss'],
})
export class LandlordappsPage implements OnInit {

  constructor(

    private platform    : Platform,
    private _serviceService: ServiceService,
        private splashScreen: SplashScreen,
        private statusBar   : StatusBar,
        public alertCtrl: AlertController,
        private router: Router,
        public alertController: AlertController
  ) { }


  public lookApp: any=[];
  public addProps: any=[];
  addimg: any=[];
  public searchTerm: string = "";
  public items: any;
  navigate : any;
  accept: any;
  decline: any;
  ngOnInit() {

    this.getLordApplication();
    this.initializeApp();
    this.sideMenu();
    this.calc();
  }





  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


propinfo(){
  this.router.navigate(['/propadmin']);

}




async AlertPrompt(i) {
  const alert = await this.alertController.create({
    header: 'Are you sure You want to Decline this Application?',
    // message: 'I cannot login',

    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Confirm',
        handler: () => {
          console.log('Confirm Submit');
          this.declineProvider(i);
        }
      }
    ]
  });

  await alert.present();
}


 declineProvider(i){
   this._serviceService.declineLord(this.decline).subscribe((data: any)=>
   {this.decline=data;
  console.log(this.decline)})
 }




async presentAlertPrompt(j) {
  const alert = await this.alertController.create({
    header: 'Are you sure You want to Accept this Application?',
    // message: 'I cannot login',

    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Confirm',
        handler: () => {
          console.log('Confirm Submit');
          this.acceptProvider(j)
        }
      }
    ]
  });

  await alert.present();
}

acceptProvider(j){
  this._serviceService.acceptLord(this.accept).subscribe((data: any)=>
  {this.accept=data;
    console.log(this.accept);
  })
}





async edit() {
  const alert = await this.alertController.create({
    header: 'Edit Landlord info',
    // message: 'I cannot login',
    inputs: [
      {
        name: 'name1',
        type: 'number',
        placeholder: 'Number of rooms'
      },
      {
        name: 'name2',
        type: 'text',
        placeholder: 'Property Name'
      },
    
      {
        name: 'name3',
        type: 'text',
        placeholder: 'Owner name'
      },
      {
        name: 'name5',
        type: 'text',
        placeholder: 'Street Address'
      },
      // multiline input.
      {
        name: 'paragraph',
        id: 'paragraph',
        type: 'textarea',
        placeholder: 'Property Name'
      },
     
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'confirm',
        handler: () => {
          console.log('Confirm Submit');
        }
      }
    ]
  });

  await alert.present();
}









  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Dashboard",
        url   : "/admindash",
        icon :"person-outline"
       
       
      },
    
      {
        title : "Manage Students",
        url   : "/managestud",
        icon  : "book"
      },
      {
        title : " Landlord Application",
        url   : "/landlordapps",
        icon  : "key"
      },

      {
        title : " Manage approved properties",
        url   : "/propinfo",
        icon  : "home"
      },
      
    ]
  }





  getLordApplication(){
    var searchTerm= "";
     return  this._serviceService.getLandlordApp().
     subscribe((apart:any)=>
      {this.lookApp = apart;
        console.log(this.lookApp
          );
        //  this.filterItems(searchTerm); 
        var num =this.lookApp.length;
        
      });
    }

calc()
{

  console.log(this.lookApp.length);
}














}
