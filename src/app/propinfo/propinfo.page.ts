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
  selector: 'app-propinfo',
  templateUrl: './propinfo.page.html',
  styleUrls: ['./propinfo.page.scss'],
})
export class PropinfoPage implements OnInit {

  constructor(
    private platform    : Platform,
    private _serviceService: ServiceService,
        private splashScreen: SplashScreen,
        private statusBar   : StatusBar,
        public alertCtrl: AlertController,
        private router: Router,
        public alertController: AlertController
  ) { }
  public addProp: any=[];
  public addProps: any=[];
  addimg: any=[];
  public searchTerm: string = "";
  public items: any;
  navigate : any;

  ngOnInit() {
    this.getProperty();
    this.initializeApp();
    this.sideMenu();
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




async AlertPrompt() {
  const alert = await this.alertController.create({
    header: 'Are you sure You want to remove this user from a database?',
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
        }
      }
    ]
  });

  await alert.present();
}












async presentAlertPrompt() {
  const alert = await this.alertController.create({
    header: 'Landlord issues',
    message: 'I cannot login',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'suggestion'
      },
    
      // multiline input.
      {
        name: 'paragraph',
        id: 'paragraph',
        type: 'textarea',
        placeholder: 'Feedback Discription'
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
        text: 'Send',
        handler: () => {
          console.log('Confirm Submit');
        }
      }
    ]
  });

  await alert.present();
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
        text: 'Send',
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
        title : "Approve Properties",
        url   : "/resproof",
        icon :"eye-outline"
       
       
      },
      {
        title : "Manage Students",
        url   : "/studstatus",
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



























  getProperty(){
    var searchTerm= "";
     return  this._serviceService.getApartment().
     subscribe((apart:any)=>
      {this.addProp = apart;
        console.log(this.addProp
          );
        //  this.filterItems(searchTerm); 
      });
    }
}
