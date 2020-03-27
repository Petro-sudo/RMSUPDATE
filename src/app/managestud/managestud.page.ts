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

import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-managestud',
  templateUrl: './managestud.page.html',
  styleUrls: ['./managestud.page.scss'],
})
export class ManagestudPage implements OnInit {
  constructor(public alertCtrl: AlertController, private _serviceService : ServiceService) { }
  addProp: any=[];
  addimg: any=[];

  
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
