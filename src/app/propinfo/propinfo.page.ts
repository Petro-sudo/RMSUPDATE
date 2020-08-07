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
  public approved: any=[];
  public addProps: any=[];
  addimg: any=[];
  public searchTerm: string = "";
  public items: any;
  navigate : any;

  ngOnInit() {
    this.getApproved();
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




async AlertPrompt(i) {
  const alert = await this.alertController.create({
    header: 'Are you sure You want to suspend this user from a database?',
    // message: 'I cannot login',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'send the user the reason for suspending him or her'
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
        text: 'Confirm',
        handler: () => {
          console.log('Confirm Submit');
          this.delete1(i);
        }
      }
    ]
  });

  await alert.present();
 
  
}


delete1(i){
  this._serviceService.deleteLord(i).subscribe(data =>
    {this.getApproved()
    })
    this.getApproved();
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
          this.issues0();
        }
      }
    ]
  });

  await alert.present();
}


issues0(){
  this._serviceService.issuesLord().subscribe(data =>
   this.items=data)
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
          this.getProperty();
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



  navi()
  {
    this.router.navigate(['/folder/Home']);
  }



  getProperty(){
    this._serviceService.editProp(this.edit).subscribe((data: any)=>
    this.edit=data)
  }









  getApproved(){
    var searchTerm= "";
     return  this._serviceService.getApprovedApp().
     subscribe((apart:any)=>
      {this.approved = apart;
        console.log(this.approved
          );
        //  this.filterItems(searchTerm); 
      });
    }
}
