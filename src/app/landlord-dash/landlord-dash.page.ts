import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, LoadingController, ActionSheetController, Platform, PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';
import { Router, RouterEvent } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { async } from 'rxjs/internal/scheduler/async';
import { PopaccPage } from '../popover/popacc/popacc.page';
import { PopconPage } from '../popover/popcon/popcon.page';
import { PopaddPage } from '../popover/popadd/popadd.page';

@Component({
  selector: 'app-landlord-dash',
  templateUrl: './landlord-dash.page.html',
  styleUrls: ['./landlord-dash.page.scss'],
})
export class LandlordDashPage implements OnInit {

  result: any = [];
  data: Observable<any>;
 
  navigate: { title: string; url: string; icon: string; }[];

  value=0;
  value1=0;
  value2=0;

 
   constructor(public navCtrl: NavController, public http: HttpClient, private _serviceService : ServiceService,
    public menuCtrl: MenuController, private router: Router, public actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    
    private popoverController: PopoverController,
    
    private platform  : Platform,
              private splashScreen: SplashScreen,
              private statusBar   : StatusBar
    
    
    ) {}

     

   addProp: any=[];
   addimg: any=[];

  //  async presentMenu() {
  //    const actionSheet = await this.actionSheetCtrl.create({
  //      header:'Land-Lord Menu',
  //      buttons:[{
  //        text: 'Profile',
  //        role: 'destrustctive',
  //        icon: 'person-circle-outline',
  //        handler:()=>{
           
  //          this.router.navigateByUrl('landlord-dash');
  //        }
  //      },{
  //        text: 'Register Resident',
  //        icon: 'add',
  //        handler: () =>{
  //        this.router.navigateByUrl('/landloard-app'); 
  //        }
  //      },{
  //      text: 'Manage Student',
  //      icon: 'people',
  //      handler: () =>{
  //        this.router.navigateByUrl('managestud');
  //      }
  //      },
  //      {
  //        text: 'Manage Properties',
  //        icon: 'business',
  //        handler: () =>{
  //          this.router.navigateByUrl('manageprop');
  //        }
  //      },
  //      {
  //        text:'Edit Your Profile',
  //        icon:'person-add',
  //        handler: () =>{
  //          this.router.navigateByUrl('editlordprof');
  //        }
  //      },
  //      {
  //        text: 'Logout ',
  //        icon: 'log-out',
  //        handler: () =>{
  //          this.router.navigateByUrl('/folder/folder');
  //        }
  //      }
  //     ]
  //    });
  //    await actionSheet.present();
  //  }
   ngOnInit() {
 
     this.getData();
     this.applidstu();
     
    this.sideMenu();
    this.initializeApp();
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
        title : "PROFILE",
        url   : "landlord-dash",
        icon  : "person-circle-outline"
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




   applidstu(){
    return  this._serviceService.getAppliedstu().
    subscribe((apart:any)=>
     {this.addProp = apart;
       console.log(this.addProp);
       console.log(this.addProp.length);
       this.addimg = this.addProp.length;
       
     });
   }

   getData(){
    this. _serviceService.lordprofile().subscribe(data=>{
     this.result = data;
     });
    }

     async accOver(ev: Event)  {
      const popacc = await this.popoverController.create({
       component: PopaccPage,
       componentProps:{
         custom_id: this.value
       },
       
      });
    popacc.present();
    }


    async conOver(ev: Event)  {
      const popcon = await this.popoverController.create({
       component: PopconPage,
       componentProps:{
         custom_id: this.value1
       },
       
      });
    popcon.present();
    }


    async addOver(ev: Event)  {
      const popadd = await this.popoverController.create({
       component: PopaddPage,
       componentProps:{
         custom_id: this.value2
       },
       
      });
    popadd.present();
    }
    
     
   }

  //  openMenu(){
  //    this.menuCtrl.open();
  //  }
  //  toggleLeftMenu() {
  //   this.menuCtrl.toggle();
  // }