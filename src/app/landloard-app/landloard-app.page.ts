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
  loading: boolean = false;
  @Input() lordApply= {propName:" ",add1:" ",add2:" ",
   city:" ",code:" ",distance:" " ,feesSingle:" ",feeSharing:" "
   ,numSingle:" ",numSharing:" " ,totalBed:" ",docs:" "}
  constructor(public alertCtrl: AlertController, private _serviceService : ServiceService ) { }
  addlord: any = [];


  // propName: FormControl;
  // add1: FormControl;
  // add2: FormControl;
  // city: FormControl;
  // code=new FormControl;
  //  distance= new FormControl;
  //  feeSingle= new FormControl;
  //  feeSharing=new FormControl;
  //  numSingle= new FormControl;
  //  numSharing= new FormControl;
  //  totalBed= new FormControl;
  // docs= new FormControl;

  ngOnInit() {
  
  }

 
  async registerProp() {
    if(this.lordApply.propName.length==1||this.lordApply.add1.length==1||this.lordApply.add2.length==1||
      this.lordApply.city.length==1||this.lordApply.code.length==1||this.lordApply.distance.length==1||
      this.lordApply.feeSharing.length==1){
      const alert =await this.alertCtrl.create({
        message:'please fill in all the fields',
        buttons: ['Ok']
      }
      );
      await alert.present();
      const result = await alert.onDidDismiss();
      console.log(result);
    
    }
    else if(this.lordApply.docs.length<2){
      const alert = await this.alertCtrl.create({
        message: ' You did not upload your documents ',  
        buttons: ['OK'] 
         
      });
      await alert.present();
      const result = await alert.onDidDismiss();
      console.log(result);
    }
    else{
      this._serviceService.postLandlord(this.lordApply).subscribe(
        data =>
        console.log(data));

        console.log(this.lordApply.docs.length);
        console.log(this.lordApply.add1);
        console.log(this.lordApply.add2);
        console.log(this.lordApply.city);
        console.log(this.lordApply.code);
        console.log(this.lordApply.distance);
        console.log(this.lordApply.feeSharing);
        console.log(this.lordApply.feesSingle);
        console.log(this.lordApply.numSharing);
        console.log(this.lordApply.numSingle);
        console.log(this.lordApply.propName);
        console.log(this.lordApply.totalBed);

        const alert = await this.alertCtrl.create({
          message: ' Your Application was successfully Sent, you will receive feetback in 2 days ',  
          buttons: ['OK'] 
        });

        await alert.present();  
        const result = await alert.onDidDismiss();  
        console.log(result);

        
        this.lordApply.add1 = " ";
        this.lordApply.add2 = " ";
        this.lordApply.propName= " ";
        this.lordApply.city= " ";
        this.lordApply.code = " ";
        this.lordApply.numSharing = " ";
        this.lordApply.numSingle = " ";
        this.lordApply.feeSharing= " ";
        this.lordApply.feesSingle = " ";
        this.lordApply.distance = " ";
        this.lordApply.totalBed = " ";
        this.lordApply.docs = " ";


    }

  } 

}
