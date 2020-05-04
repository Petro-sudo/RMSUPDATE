import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import {  ViewChild } from '@angular/core';

@Component({
  selector: 'app-propertyinfo',
  templateUrl: './propertyinfo.page.html',
  styleUrls: ['./propertyinfo.page.scss'],
})
export class PropertyinfoPage implements OnInit {

  constructor(
    private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar,
    public alertCtrl: AlertController,
    private router: Router
) { }
navigate : any;

  ngOnInit() {
    this.initializeApp();
    this.sideMenu();
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
        url   : "/landlord-dash",
        icon :"person-outline"
       
       
      },
      {
        title : "Overview",
        url   : "/viewproperties",
        icon :"eye-outline"
       
       
      },
      {
        title : "My Proparties",
        url   : "/propertyinfo",
        icon  : "business"
      },
      {
        title : "Accreditation",
        url   : "/landloard-app",
        icon  : "clipboard"
      }


      
    ]
  }




}
