import { Component, OnInit } from '@angular/core';
import { PopoverController, Platform } from '@ionic/angular';
import { PopreportPage } from '../popover/popreport/popreport.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import {ServiceService} from './../service.service';
import {  AlertController } from '@ionic/angular';
@Component({
  selector: 'app-stud-app',
  templateUrl: './stud-app.page.html',
  styleUrls: ['./stud-app.page.scss'],
})

export class StudAppPage implements OnInit {
 value = 0;
 public addProp: any=[];
  constructor(private popoverController: PopoverController,private platform    : Platform,
    private splashScreen: SplashScreen,
     private _serviceService : ServiceService,
     public alertCtrl: AlertController,
    
     public alertController: AlertController,
    private statusBar   : StatusBar) { }
    navigate : any;
  ngOnInit() {
    this.initializeApp();
    this. sideMenu();
    this.getSissue();
      }
    
    



async AlertPrompt1(i) {
  const alert = await this.alertController.create({
    header: 'Are you sure this issue has been fixed?',
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
          this.delete1(i);
          this.getSissue();
        }
      }
    ]
  });

  await alert.present();
 
  
}


delete1(i){
  this._serviceService.stufixIssue(i).subscribe(data =>
    {this.getSissue()
    })
    this.getSissue();
}




      
  getSissue(){
    
    return  this._serviceService.getSpecifictissue().
    subscribe((apart:any)=>
     {this.addProp = apart;
       console.log(this.addProp
         );
      
     });
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
    
    


  async popOver(ev: Event)  {
    const poprate = await this.popoverController.create({
     component: PopreportPage,
     componentProps:{
       custom_id: this.value
     },
     
    });
  poprate.present();
  }

}
