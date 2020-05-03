import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController, Platform, AlertController, MenuController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/service.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Chart } from 'chart.js';
import * as moment from 'moment';
//import { type } from 'os';

// import { async } from 'rxjs/internal/scheduler/async';
// import { profile } from 'console';

@Component({
  selector: 'app-viewproperties',
  templateUrl: './viewproperties.page.html',
  styleUrls: ['./viewproperties.page.scss'],
})
export class ViewpropertiesPage implements OnInit {
  momentjs: any = moment;
  
  @ViewChild('doughnutCanvas',  { static: true }) doughnutCanvas: ElementRef;
  @ViewChild('doughnutCanvas1',  { static: true }) doughnutCanvas1: ElementRef;
 

  private barChart: Chart;
  private doughnutChart: Chart;
  private issueChart: Chart;
  private lineChart: Chart;
  


  edit: any = [];
  data: Observable<any>;
 
   constructor(private menu: MenuController, private modalCtrl: ModalController,
    public navCtrl: NavController, public http: HttpClient, 
    private _serviceService : ServiceService,
    private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar,
    public alertCtrl: AlertController,
    private router: Router ) { }
    navigate : any;
   ngOnInit() {
    this.getData();
    this.profile();
    this.initializeApp();
    this.sideMenu();

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Male','Female'],
        datasets: [
          {
            label: ['71%', '21%'],
            data: [71, 29],
            backgroundColor: [
              
              'rgb(5, 238, 64)',
              'rgb(3, 18, 83)'
              
            ]
            //  ,
            //  title:['71%', '21%']
            //  hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      }
    });

    this.issueChart = new Chart(this.doughnutCanvas1.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Resolved', 'In progress', 'Pending', 'Rejected'],
        datasets: [
          {
            label: '# of Votes',
            data: [0,0,100,0],
            backgroundColor: [
              'rgb(5, 238, 64)',
              'rgb(3, 18, 83)',
              'rgb(146, 61, 243)',
              'rgb(69, 200, 240)'
            ]
          
          }
        ]
      }
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
      // {
      //   title : "Profile",
      //   url   : "/landlord-dash",
      //   icon :"person-outline"
       
       
      // },
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
            this.router.navigate(['/landlord-dash']);
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
 
 
    this. _serviceService.lordprofile().subscribe(data=>{
     this.edit = data;
     });
    }

}
