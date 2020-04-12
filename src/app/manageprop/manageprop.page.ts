import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController, LoadingController} from '@ionic/angular';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageprop',
  templateUrl: './manageprop.page.html',
  styleUrls: ['./manageprop.page.scss'],
})
export class ManagepropPage implements OnInit {
  taskName: any;
  taskList: any;

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

    this.manageprop();
    
    
  }




  manageprop(){
    return  this._serviceService.getAppliedstu().
    subscribe((apart:any)=>
     {this.addProp = apart;
       console.log(this.addProp);
       console.log(this.addProp.length);
       var number =this.addProp.length;
       
     });
   }
 
   
 
   async delete() {

    

     const alert = await this.alertCtrl.create({  
      
       message: 'Are you sure you want to delete this property?  ',  
       buttons: ['OK', 'cancel'] 
       
     }
    
     
 
 
     
     );  
 
     await alert.present();  
     const result = await alert.onDidDismiss();  
     console.log(result);
 
 
 
    }
      
    // update() {
    //   let alert = this.alertCtrl.create({
          
    //       message: 'Type in your new task to update.',
    //       inputs: [{ name: 'editTask', placeholder: 'Task' }],
    //       buttons: [{ text: 'Cancel', role: 'cancel' },
    //                 { text: 'Update', handler: data => {
    //                     this.taskList = data.editTask; }
    //                 }
    //                ]
    //   });
      
    //} 







 
    

}
