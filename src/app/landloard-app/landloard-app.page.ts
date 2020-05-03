import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AlertController, ActionSheetController, LoadingController, Platform } from '@ionic/angular';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServiceService } from '../service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';


@Component({
  selector: 'app-landloard-app',
  templateUrl: './landloard-app.page.html',
  styleUrls: ['./landloard-app.page.scss'],
})
export class LandloardAppPage implements OnInit {
  // loading: boolean = false;
  // @Input() lordApply= {propName:" ",add1:" ",add2:" ",
  //  city:" ",code:" ",distance:" " ,feesSingle:" ",feeSharing:" "
  //  ,numSingle:" ",numSharing:" " ,totalBed:" ",docs:" "}
  momentjs: any = moment;
  
  @ViewChild('doughnutCanvas',  { static: true }) doughnutCanvas: ElementRef;
  private doughnutChart: Chart;
  
  navigate: { title: string; url: string; icon: string; }[];

  constructor(public alertCtrl: AlertController,private router: Router, private _serviceService : ServiceService,
    public actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar, ) { }

    
  // addlord: any = [];


  // propName: FormControl;
  // add1: FormControl;
  // add2: FormControl;
  // city: FormControl;
  // code=new FormControl;
  //  distance= new FormControl;
  //  feeSingle= new FormControl;
  //  feeSharing=new FormControl;
  //  numSingle= new FormControl;
  //  numSharing= new FormControl;
  //  totalBed= new FormControl;
  // docs= new FormControl;
  // async presentMenu() {
  //   const actionSheet = await this.actionSheetCtrl.create({
  //     header:'Land-Lord Menu',
  //     buttons:[{
  //       text: 'Profile',
  //       role: 'destrustctive',
  //       icon: 'person-circle-outline',
  //       handler:()=>{
          
  //         this.router.navigateByUrl('landlord-dash');
  //       }
  //     },{
  //       text: 'Register Resident',
  //       icon: 'add',
  //       handler: () =>{
  //       this.router.navigateByUrl('/landloard-app'); 
  //       }
  //     },{
  //     text: 'Manage Student',
  //     icon: 'people',
  //     handler: () =>{
  //       this.router.navigateByUrl('managestud');
  //     }
  //     },
  //     {
  //       text: 'Manage Properties',
  //       icon: 'business',
  //       handler: () =>{
  //         this.router.navigateByUrl('manageprop');
  //       }
  //     },
  //     {
  //       text:'Edit Your Profile',
  //       icon:'person-add',
  //       handler: () =>{
  //         this.router.navigateByUrl('editlordprof');
  //       }
  //     },
  //     {
  //       text: 'Logout ',
  //       icon: 'log-out',
  //       handler: () =>{
  //         this.router.navigateByUrl('/folder/folder');
  //       }
  //     }
  //    ]
  //   });
  //   await actionSheet.present();
  // }

  

  ngOnInit() {
    this.initializeApp();
    this.sideMenu();
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Accepted','Pending','Rejected',],
        datasets: [
          {
            label: ['0%', '100%','0'],
            data: [0, 100, 0],
            backgroundColor: [
              
              'rgb(5, 238, 64)',
              'rgb(3, 18, 83)',
              'rgb(243, 7, 7)'
               
              
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

 
  // async registerProp() {
  //   if(this.lordApply.propName.length==1||this.lordApply.add1.length==1||this.lordApply.add2.length==1||
  //     this.lordApply.city.length==1||this.lordApply.code.length==1||this.lordApply.distance.length==1||
  //     this.lordApply.feeSharing.length==1){
  //     const alert =await this.alertCtrl.create({
  //       message:'please fill in all the fields',
  //       buttons: ['Ok']
  //     }
  //     );
  //     await alert.present();
  //     const result = await alert.onDidDismiss();
  //     console.log(result);
    
  //   }
  //   else if(this.lordApply.docs.length<2){
  //     const alert = await this.alertCtrl.create({
  //       message: ' You did not upload your documents ',  
  //       buttons: ['OK'] 
         
  //     });
  //     await alert.present();
  //     const result = await alert.onDidDismiss();
  //     console.log(result);
  //   }
  //   else{
  //     this._serviceService.postLandlord(this.lordApply).subscribe(
  //       data =>
  //       console.log(data));

  //       console.log(this.lordApply.docs.length);
  //       console.log(this.lordApply.add1);
  //       console.log(this.lordApply.add2);
  //       console.log(this.lordApply.city);
  //       console.log(this.lordApply.code);
  //       console.log(this.lordApply.distance);
  //       console.log(this.lordApply.feeSharing);
  //       console.log(this.lordApply.feesSingle);
  //       console.log(this.lordApply.numSharing);
  //       console.log(this.lordApply.numSingle);
  //       console.log(this.lordApply.propName);
  //       console.log(this.lordApply.totalBed);

  //       const alert = await this.alertCtrl.create({
  //         message: ' Your Application was successfully Sent, you will receive feetback in 2 days ',  
  //         buttons: ['OK'] 
  //       });

  //       await alert.present();  
  //       const result = await alert.onDidDismiss();  
  //       console.log(result);

        
  //       this.lordApply.add1 = " ";
  //       this.lordApply.add2 = " ";
  //       this.lordApply.propName= " ";
  //       this.lordApply.city= " ";
  //       this.lordApply.code = " ";
  //       this.lordApply.numSharing = " ";
  //       this.lordApply.numSingle = " ";
  //       this.lordApply.feeSharing= " ";
  //       this.lordApply.feesSingle = " ";
  //       this.lordApply.distance = " ";
  //       this.lordApply.totalBed = " ";
  //       this.lordApply.docs = " ";


  //   }

  // } 

}
