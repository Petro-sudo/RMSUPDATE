import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, LoadingController, ActionSheetController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-landlord-dash',
  templateUrl: './landlord-dash.page.html',
  styleUrls: ['./landlord-dash.page.scss'],
})
export class LandlordDashPage implements OnInit {

  result: any = [];
  data: Observable<any>;
  public folder: string;
    
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  filterData: any;
 
 
   constructor(public navCtrl: NavController, public http: HttpClient, private _serviceService : ServiceService,
    public menuCtrl: MenuController, private router: Router, public actionSheetCtrl: ActionSheetController,
    private activatedRoute: ActivatedRoute, private platform:Platform,
    private loadingCtrl: LoadingController, private splashScreen: SplashScreen,
    private statusBar   : StatusBar) {}

     

   addProp: any=[];
   addimg: any=[];
   navigate: any;
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
     this.folder = this.activatedRoute.snapshot.paramMap.get('id');
     this.lordMenu();
     this.initializeApp();
     this.getData();
     this.applidstu();

     
     
   }
   initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  lordMenu() {
    this.navigate = [
      {
        title : "PROFILE",
        url   : "landlord-dash",
        icon  : "person-circle-outline"
      },

      {
        title : "REGISTER PROPERTIES",
        url   : "landloard-app",
        icon  : "add"
      },

      {
        title : "MANAGE STUDENT",
        url   : "managestud",
        icon  : "people"
      },


      {
        title : "MANAGE PROPERTIES",
        url   : "manageprop",
        icon  : "business"
      },

      {
        title : "EDIT PROFILE",
        url   : "editlordprof",
        icon  : "person-add"
      },

      {
        title : "MANAGE PROPERTIES",
        url   : "folder/home",
        icon  : "log-out"
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

  //  openMenu(){
  //    this.menuCtrl.open();
  //  }
  //  toggleLeftMenu() {
  //   this.menuCtrl.toggle();
  // }


   
}
