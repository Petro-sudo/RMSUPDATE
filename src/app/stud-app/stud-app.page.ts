import { Component, OnInit } from '@angular/core';
import { PopoverController, Platform } from '@ionic/angular';
import { PopreportPage } from '../popover/popreport/popreport.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-stud-app',
  templateUrl: './stud-app.page.html',
  styleUrls: ['./stud-app.page.scss'],
})
export class StudAppPage implements OnInit {
 value = 0;
  constructor(private popoverController: PopoverController,private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar) { }
    navigate : any;
  ngOnInit() {
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
