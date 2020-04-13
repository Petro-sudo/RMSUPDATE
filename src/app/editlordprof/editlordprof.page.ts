import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController, ActionSheetController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editlordprof',
  templateUrl: './editlordprof.page.html',
  styleUrls: ['./editlordprof.page.scss'],
})
export class EditlordprofPage implements OnInit {

  edit: any = [];
  data: Observable<any>;
  
  
 
   constructor(public navCtrl: NavController, public http: HttpClient, private _serviceService : ServiceService,
    private router: Router, public actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController) { }
   async presentMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      header:'Land-Lord Menu',
      buttons:[{
        text: 'Profile',
        role: 'destrustctive',
        icon: 'person-circle-outline',
        handler:()=>{
          
          this.router.navigateByUrl('landlord-dash');
        }
      },{
        text: 'Register Resident',
        icon: 'add',
        handler: () =>{
        this.router.navigateByUrl('/landloard-app'); 
        }
      },{
      text: 'Manage Student',
      icon: 'people',
      handler: () =>{
        this.router.navigateByUrl('managestud');
      }
      },
      {
        text: 'Manage Properties',
        icon: 'business',
        handler: () =>{
          this.router.navigateByUrl('manageprop');
        }
      },
      {
        text:'Edit Your Profile',
        icon:'person-add',
        handler: () =>{
          this.router.navigateByUrl('editlordprof');
        }
      },
      {
        text: 'Logout ',
        icon: 'log-out',
        handler: () =>{
          this.router.navigateByUrl('/folder/folder');
        }
      }
     ]
    });
    await actionSheet.present();
  }
   ngOnInit() {
 
     this.getData();
   }
 
   getData(){
 
 
    this. _serviceService.lordprofile().subscribe(data=>{
     this.edit = data;
     });
     
   }

  //  myFunction() {
  //   var x = document.getElementById("myInput");
  //   if (x.type === "password") {
  //       x.type = "text";
  //   } else {
  //       x.type = "password";
  //   }
  //   }
}

