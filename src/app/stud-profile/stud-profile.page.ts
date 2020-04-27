import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
/*import {NavController} from '@ionic/angular';*/
import {Observable} from 'rxjs';
import {ServiceService} from './../service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stud-profile',
  templateUrl: './stud-profile.page.html',
  styleUrls: ['./stud-profile.page.scss'],
})
export class StudProfilePage implements OnInit {

  result: any=[];
  data: Observable<any>;
  
  constructor(/*public navCtrl: NavController,*/ public http: HttpClient,
    private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar,
    public alertCtrl: AlertController,
    private router: Router
    ) { }
    navigate : any;
  ngOnInit() {

    this.getData();
this.initializeApp();
this.sideMenu();
// this.profile();
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
        icon :"eye-outline"
       
       
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








  async profile() {

    

    const alert = await this.alertCtrl.create({  
     header:'Profile Dialog',
      message:'Please complete your profile' ,
      buttons: [
        {
          text: 'Update',
          role: 'update',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm update: blah');
            this.router.navigate(['/profile']);
          }
        }, {
          text: 'Later',
          handler: () => {
            console.log('Confirm later');
          }
        }
      ]
      
    }
   
    


    
    );  

    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);



   }













  getData(){
    var url='http://168.172.185.106:5000/getstud/40';
    this.data= this.http.get(url);
    //this.data.subscribe(data =>{
        //this.result=data;
        console.log("clicked");

      
    //});
    
  }

}
