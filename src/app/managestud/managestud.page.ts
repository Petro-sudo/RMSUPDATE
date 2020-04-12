import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms'
import {ServiceService} from './../service.service';

import { AlertController, ActionSheetController, LoadingController } from '@ionic/angular'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-managestud',
  templateUrl: './managestud.page.html',
  styleUrls: ['./managestud.page.scss'],
})
export class ManagestudPage implements OnInit {
  constructor(public alertCtrl: AlertController, private _serviceService : ServiceService, 
    private router: Router, public actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController) { }
  addProp: any=[];
  addimg: any=[];
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

    this.applidstu();
    
    
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
 

 
   async delete() {

    

     const alert = await this.alertCtrl.create({  
      
       message: 'Are you sure you want to decline this Application?  ',  
       buttons: ['OK', 'cancel'] 
       
     }
    
     
 
 
     
     );  
 
     await alert.present();  
     const result = await alert.onDidDismiss();  
     console.log(result);
 
 
 
    }
      







 
    async accept() {

    

      const alert = await this.alertCtrl.create({  
       
        message: 'Are you sure you want to Accept this Application?  ',  
        buttons: ['OK', 'cancel'] 
        
      }
     
      
  
  
      
      );  
  
      await alert.present();  
      const result = await alert.onDidDismiss();  
      console.log(result);
  
  
  
     }




 



}
