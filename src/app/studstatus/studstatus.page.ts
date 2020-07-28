import { Component, OnInit} from '@angular/core';
import { NavController, PopoverController, Platform, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {ServiceService} from './../service.service';
import { PopratePage } from '../popover/poprate/poprate.page';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';


@Component({
  selector: 'app-studstatus',
  templateUrl: './studstatus.page.html',
  styleUrls: ['./studstatus.page.scss'],
})
export class StudstatusPage implements OnInit{
  result: any = [];
 data: Observable<any>;
 value=0;

  constructor(public navCtrl: NavController, public http: HttpClient, 
    private popoverController: PopoverController,
     private _serviceService : ServiceService,
    private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar,public alertController: AlertController) { }
    navigate : any;

  ngOnInit() {

    this.getData();
    this.initializeApp();
    this. sideMenu();
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
            icon  :"eye-outline"
           
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



  getData(){


   this. _serviceService.status().subscribe(data=>{
    this.result = data;
    });
    
  }

  
//pop
async popOver(ev: Event)  {
  const poprate = await this.popoverController.create({
   component: PopratePage,
   componentProps:{
     custom_id: this.value
   },
   
  });
poprate.present();
}


async moveDiffResi() {
  const alert = await this.alertController.create({
    header: 'Change Residence',
    message: 'I wanna move to a different resident',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'reason for moving'
      },
    
      // multiline input.
     
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

async transDiffRoom() {
  const alert = await this.alertController.create({
    header: 'Change Room',
    message: 'I wanna be transferred to a different room',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'reason '
      },
    
      // multiline input.
     
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

async reserveRoom() {
  const alert = await this.alertController.create({
    header: 'Reserve The Room',
    message: 'Are you sure you want to reserve this room for next year',
    inputs: [
      {
        type: 'radio',
        label: 'Yes',
        value: 'Yes',
        checked: true
      },
      {
        type: 'radio',
        label: 'No',
        value: 'No',
        checked: false
      },
    
      // multiline input.
     
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


}

































// async reserveRoom() {
//   const alert = await this.alertController.create({
//     header: 'Reserve Room',
//     message: 'Are sure you wanna reserve this room for next year',
// alert.addInput({
//   type: 'radio',
//   label: 'Male',
//   value: 'Male',
//   checked: true
// });

// alert.addInput({
//   type: 'radio',
//   label: 'Female',
//   value: 'Female',
//   checked: false
// });

// alert.addButton('Cancel');
// alert.addButton({
//   text: 'OK',
//   handler: data => {
//     this.radioResult = data;
//     console.log("data", this.radioResult);
//     this.gender = this.radioResult;
   
//   }
// });
// alert.present();
// }


