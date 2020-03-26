import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-landloard-app',
  templateUrl: './landloard-app.page.html',
  styleUrls: ['./landloard-app.page.scss'],
})
export class LandloardAppPage implements OnInit {
  
  @Input() lordData= {propName:" ", add1:" ",add2:" ",
   city:" ",code:" ",distance:" " ,feesSingle:" ",feeSharing:" "
   ,numSingle:" ",numSharing:" " ,totalBed:" ",docs:" "}
  constructor(public alertCtrl: AlertController, private _serviceService : ServiceService ) { }
  addlord: any = [];

  myform: FormGroup;
  propName: FormControl;
  add1: FormControl;
  add2: FormControl;
  city: FormControl;
  code=new FormControl;
  distance= new FormControl;
  feeSingle= new FormControl;
  feeSharing=new FormControl;
  numSingle= new FormControl;
  numSharing= new FormControl;
  totalBed= new FormControl;
  docs= new FormControl;

  ngOnInit() {
  this.createFormControls();
  this.createForm();
  this.getlord();
  }

  getlord(){
    this._serviceService.lordapp(this.addlord).subscribe((data: any)=>
    {
      this.addlord=data;
      console.log(this.addlord);
    });
  }
  async registerProp() {

    if(this.myform.invalid){

     const alert = await this.alertCtrl.create({  
       header: 'Registration',  
       message: ' your form is empty please fill in all the fields ',  
       buttons: ['OK'] 
        
     }
     );  
     await alert.present();  
     const result = await alert.onDidDismiss();  
     console.log(result);
    } 
    else{


      this._serviceService.lordapp(this.lordData).subscribe(
  data =>
  console.log(data));

  //console display
  const alert = await this.alertCtrl.create({  
    header: 'Registration',  
    message: ' you have applied for a proparty please wait for the feedback',  
    buttons: ['OK'] 
     
  }
  );  

await alert.present();  
const result = await alert.onDidDismiss();  
console.log(result);





RouterLink['/landlord-dash'];

}

}  
createFormControls() {
  this.propName = new FormControl('', Validators.required);
  this.add1 = new FormControl('', Validators.required);
  this.add2 = new FormControl('', Validators.required);
  this.city = new FormControl('', Validators.required);
  this.docs = new FormControl('', Validators.required);
  this.feeSingle = new FormControl('', Validators.required);
  this.feeSharing = new FormControl('', Validators.required);
  this.numSingle = new FormControl('', Validators.required);
  this.totalBed = new FormControl('', Validators.required);
  this.code= new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);
  this.distance= new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

}

createForm() {
  this.myform = new FormGroup({
    name: new FormGroup({
      propName: this.propName,
      add1: this.add1,
     


  
    }),
  //code was here
  add2: this.add2,
      city: this.city,
      code:this.code,
      feeSharing: this.feeSharing,
      feeSingle: this.feeSingle,
      numSharing: this.numSharing,
      numSingle:this.numSingle,
      distance: this.distance,
      totalBed: this.totalBed,
      docs: this.docs
   
 
  });
}


  

}
