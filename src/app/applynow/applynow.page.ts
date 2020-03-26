import { Component, OnInit, Input } from '@angular/core';
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
  selector: 'app-applynow',
  templateUrl: './applynow.page.html',
  styleUrls: ['./applynow.page.scss'],
})
export class ApplynowPage implements OnInit {
 
  loading: boolean = false;
  @Input() stuApply= {id:" " , studno:" " ,stuapplication:" " }
  constructor(public alertCtrl: AlertController, private _serviceService : ServiceService) { }
  addstu: any = [];

  myform:FormGroup;
  studno= new FormControl;
  // id=new FormControl;
  ngOnInit() {
  }















  async add() {

    if(this.stuApply.id.length==1||this.stuApply.studno.length==1){

     const alert = await this.alertCtrl.create({  
      
       message: ' please fill in all the fields ',  
       buttons: ['OK'] 
        
     }
    
     
 
 
     
     );  
 
     await alert.present();  
     const result = await alert.onDidDismiss();  
     console.log(result);
 
 
 
    } 
      






    else if(this.stuApply.stuapplication.length<2){

      const alert = await this.alertCtrl.create({  
       
        message: ' please  Upload Your Documents ',  
        buttons: ['OK'] 
         
      }
     
      
  
  
      
      );  
  
      await alert.present();  
      const result = await alert.onDidDismiss();  
      console.log(result);
  
  
  
     } 
       


















   

    
 



else {


   this._serviceService.poststu(this.stuApply).subscribe(
data =>
console.log(data));

console.log(this.stuApply.stuapplication.length);
console.log(this.stuApply.studno);
console.log(this.stuApply.id);



const alert = await this.alertCtrl.create({  
 
 message: ' Application Sent successfully  ',  
 buttons: ['OK'] 
  
}





);  

await alert.present();  
const result = await alert.onDidDismiss();  
console.log(result);

this.stuApply.stuapplication=" ";
this.stuApply.studno=" ";
this.stuApply.id=" ";








}






 }


















}
