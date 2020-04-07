import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController} from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-manageprop',
  templateUrl: './manageprop.page.html',
  styleUrls: ['./manageprop.page.scss'],
})
export class ManagepropPage implements OnInit {
  taskName: any;
  taskList: any;

  constructor(public alertCtrl: AlertController, private _serviceService : ServiceService) { }
  addProp: any=[];
  addimg: any=[];

  
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
