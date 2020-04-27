import { Component, OnInit} from '@angular/core';
import { NavController, PopoverController, Platform } from '@ionic/angular';
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
    private statusBar   : StatusBar) { }
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

}
