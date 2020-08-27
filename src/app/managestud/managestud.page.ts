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

import { AlertController, ActionSheetController, LoadingController, PopoverController } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { SendmailPage } from '../popover/sendmail/sendmail.page';

@Component({
  selector: 'app-managestud',
  templateUrl: './managestud.page.html',
  styleUrls: ['./managestud.page.scss'],
})
export class ManagestudPage implements OnInit {
  constructor(public alertCtrl: AlertController, private _serviceService : ServiceService, 
    private router: Router, public actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,  private popoverController: PopoverController) { }
    viewStud: any=[];
  addimg: any=[];
  public items: any;
  public approved: any=[];
  public addProp: any=[];
  ngOnInit() {
    this.getStudents();
    //this.applidstu();
    this. getApproved();
    this.getProperty();
  }




  getApproved(){
    var searchTerm= "";
     return  this._serviceService.getStudentsAcptd().
     subscribe((apart:any)=>
      {this.approved = apart;
        console.log(this.approved
          );
        //  this.filterItems(searchTerm); 
      });
    }

    getProperty(){
      var searchTerm= "";
       return  this._serviceService.getApprovedApp().
       subscribe((apart:any)=>
        {this.addProp = apart;
          console.log(this.addProp
            );
          //  this.filterItems(searchTerm); 
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

  value =0;

  async send(ev: Event)  {
    const popo = await this.popoverController.create({
     component: SendmailPage,
     componentProps:{
       custom_id: this.value
     },
     
    });
  popo.present();
  }

  
  getStudents(){
    var searchTerm= "";
     return  this._serviceService.getAllStud().subscribe((apart:any)=>
      {this.viewStud = apart;
        console.log(this.viewStud
          );
        //  this.filterItems(searchTerm); 
        var num =this.viewStud.length;
        
      });

      
    }



  // applidstu(){
  //   return  this._serviceService.getAppliedstu().
  //   subscribe((apart:any)=>
  //    {this.addProp = apart;
  //      console.log(this.addProp);
  //      console.log(this.addProp.length);
  //      this.addimg = this.addProp.length;
       
  //    });
  //  }
 
  //  async delete() {

  //    const alert = await this.alertCtrl.create({  
      
  //      message: 'Are you sure you want to decline this Application?  ',  
  //      buttons: ['OK', 'cancel'] 
       
  //    }
    
     
 
 
     
  //    );  
 
  //    await alert.present();  
  //    const result = await alert.onDidDismiss();  
  //    console.log(result);
 
 
 
  //   }
      







 
  //   async accept() {

    

  //     const alert = await this.alertCtrl.create({  
       
  //       message: 'Are you sure you want to Accept this Application?  ',  
  //       buttons: ['OK', 'cancel'] 
        
  //     }
     
      
  
  
      
  //     );  
  
  //     await alert.present();  
  //     const result = await alert.onDidDismiss();  
  //     console.log(result);
  
  
  
  //    }


  navi()
  {
    this.router.navigate(['/folder/Home']);
  }

 



}
