// import { Component, OnInit } from '@angular/core';
// import{HttpClient} from '@angular/common/http';
// /*import {NavController} from '@ionic/angular';*/
// import {Observable} from 'rxjs';
// import {ServiceService} from './../service.service';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { Platform, AlertController } from '@ionic/angular';
// import { Router } from '@angular/router';
// import {  ViewChild } from '@angular/core';
// import { Chart } from 'chart.js';

// @Component({
//   selector: 'app-properties',
//   templateUrl: './properties.page.html',
//   styleUrls: ['./properties.page.scss'],
// })
// export class PropertiesPage implements OnInit {
 
//   constructor(/*public navCtrl: NavController,*/ public http: HttpClient,
//     private platform    : Platform,
//     private splashScreen: SplashScreen,
//     private statusBar   : StatusBar,
//     public alertCtrl: AlertController,
//     private router: Router
//     ) { }
//     navigate : any;
//   ngOnInit() {

//     // this.getData();
// this.initializeApp();
// this.sideMenu();
// // this.profile();
//   }



//   initializeApp() {
//     this.platform.ready().then(() => {
//       this.statusBar.styleDefault();
//       this.splashScreen.hide();
//     });
//   }

//   sideMenu()
//   {
//     this.navigate =
//     [
//       {
//         title : "Profile",
//         url   : "/stud-profile",
//         icon :"person-outline"
       
       
//       },
//       {
//         title : "Overview",
//         url   : "/resproof",
//         icon :"eye-outline"
       
       
//       },
//       {
//         title : "My rooms",
//         url   : "/studstatus",
//         icon  : "bed-outline"
//       },
//       {
//         title : "Issues",
//         url   : "/stud-app",
//         icon  : "add"
//       },


      
//     ]
//   }








//   async profile() {

    

//     const alert = await this.alertCtrl.create({  
//      header:'Profile Dialog',
//       message:'Please complete your profile' ,
//       buttons: [
//         {
//           text: 'Update',
//           role: 'update',
//           cssClass: 'secondary',
//           handler: (blah) => {
//             console.log('Confirm update: blah');
//             this.router.navigate(['/profile']);
//           }
//         }, {
//           text: 'Later',
//           handler: () => {
//             console.log('Confirm later');
//           }
//         }
//       ]
      
//     }
   
    


    
//     );  

//     await alert.present();  
//     const result = await alert.onDidDismiss();  
//     console.log(result);



//    }



// public doughnutChartLabels:string[]=['me','myself','irene'];
// public doughnutChartData:number[]=[1200,1500,2000];
// public doughnutChartType:string='doughnut';











//   // getData(){
//   //   var url='http://168.172.185.106:5000/getstud/40';
//   //   this.data= this.http.get(url);
//   //   //this.data.subscribe(data =>{
//   //       //this.result=data;
//   //       console.log("clicked");

      
//   //   //});













  
    
//   }
import{HttpClient} from '@angular/common/http';
/*import {NavController} from '@ionic/angular';*/
import {Observable} from 'rxjs';
import {ServiceService} from './../service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

 @Component({
   selector: 'app-properties',
  templateUrl: './properties.page.html',
   styleUrls: ['./properties.page.scss'],
})
 export class PropertiesPage  {
  @ViewChild('barChart' ,{ static: true }) barChart;
  @ViewChild('label' ,{ static: true }) label;
  bars: any;
  colorArray: any;
  //  alertController: any;
  constructor(
    private platform    : Platform,
        private splashScreen: SplashScreen,
        private statusBar   : StatusBar,
        public alertCtrl: AlertController,
        private router: Router,
        public alertController: AlertController
  ) { }
  navigate : any;
  ionViewDidEnter() {
    this.createBarChart();
    this. createlabelChart();
    this.initializeApp();
this.sideMenu();
  }

  createlabelChart(){

    this.bars = new Chart(this.label.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['very_satisfied','satisfied','okay','disappointed','very_disappointed'],
        datasets: [{
         
           data: [0,100,0,0,0],
          backgroundColor: [
            
            'rgb(5, 238, 64)',
            'rgb(3, 18, 83)',
            'rgb(198,77,255)',
            'rgb(173,216,230)',
            'rgb(114,188,212)'
            
          ], // array should have same number of elements as number of dataset
          // borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          // borderWidth: 1
        }]
      },
     
    });

  }






  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Male','Female'],
        datasets: [{
         
          data: [71, 29],
          backgroundColor: [
            
            'rgb(5, 238, 64)',
            'rgb(3, 18, 83)'
            
          ], // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
     
    });
  }




   openCity(evt,cityName) {
    var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
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













  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Notice Dialog',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Notice title'
        },
      
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Notice Discription'
        },
       
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
          text: 'Submit',
          handler: () => {
            console.log('Confirm Submit');
          }
        }
      ]
    });

    await alert.present();
  }




  
  async presentAlertPrompt2() {
    const alert = await this.alertController.create({
      header: 'Query Dialog',
      message: 'Send quiries to TUTEH Properties.',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Isuue description'
        },
      
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Query type'
        },
       
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
          text: 'Submit',
          handler: () => {
            console.log('Confirm Submit');
          }
        }
      ]
    });

    await alert.present();
  }












}
