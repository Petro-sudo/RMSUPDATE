import { Component, OnInit, Input } from '@angular/core';
import { NavController, MenuController, ActionSheetController, LoadingController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.page.html',
  styleUrls: ['./edit-prof.page.scss'],
})
export class EditProfPage implements OnInit {
  
@Input() lordData = {Full_name:" ", last_name:" ",ID_type:" ", ID_number:" ", company_name:" ",registration_no:" ",
                     landlord_email:" ", telephone:" ", home_number:" ", fax_number:" ", cell_number:" ", house_number:" ",
                      suburb:" ", province:" ",zip_code:" ",street_name:" ", city:" ",
                      country:" ", property_name:" "};
                    
@Input() popData= {landlord_email:" ",campus:" ", num_rooms:" ", num_floors:" ",  bedsPerRoom:" " ,bedSharing:" ",
                    bedSingle:" ", blocks:" ",numFemale_beds:" ", numMale_beds:" "}         
                      
  navigate: { title: string; url: string; icon: string; }[];
  constructor(public navCtrl: NavController, public http: HttpClient, private _serviceService : ServiceService,
    public menuCtrl: MenuController, private router: Router, public actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    
    
    private platform  : Platform,
              private splashScreen: SplashScreen,
              private statusBar   : StatusBar
    
    
    ) {}

   

  ngOnInit() { 
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
       title : "Profile",
       url   : "/landlord-dash",
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

 //post details
 addLord(){
   this._serviceService.lordApplicationFormD(this.lordData).subscribe(
     data=>console.log(data)
   );
   console.log(this.lordData)
 }

 //post property

 addProperty(){
   this._serviceService.lordApplicationFormProp(this.popData).subscribe(
     data=>console.log(data)
   )
   console.log(this.popData)
   
 }



}
