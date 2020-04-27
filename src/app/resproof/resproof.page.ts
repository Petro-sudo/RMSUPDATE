
import { Component, OnInit} from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ServiceService} from './../service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';


@Component({
  selector: 'app-resproof',
  templateUrl: './resproof.page.html',
  styleUrls: ['./resproof.page.scss'],
})
export class ResproofPage implements OnInit{
  result: any = [];
 data: Observable<any>;

  constructor(public navCtrl: NavController, public http: HttpClient, private _serviceService : ServiceService,
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


   this. _serviceService.proof().subscribe(data=>{
    this.result = data;
    });
    
  }

  


}
