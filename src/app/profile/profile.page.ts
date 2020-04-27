import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  navigate: ({ title: string; url: string; icon?: undefined; } | { title: string; url: string; icon: string; })[];

  constructor(
    private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar,

  ) { }

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
        title : "Overview",
        url   : "/Home",
       
       
      },
      {
        title : "My rooms",
        url   : "#properties",
        icon  : "chatboxes"
      },
      {
        title : "Issues",
        url   : "/contacts",
        icon  : "contacts"
      },


      
    ]
  }





}
