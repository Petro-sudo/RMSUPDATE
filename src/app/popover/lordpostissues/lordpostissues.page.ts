import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {ServiceService} from '../../service.service';
import { Platform, AlertController } from '@ionic/angular';
import {  Input } from '@angular/core';
@Component({
  selector: 'app-lordpostissues',
  templateUrl: './lordpostissues.page.html',
  styleUrls: ['./lordpostissues.page.scss'],
})
export class LordpostissuesPage implements OnInit {
  @Input() noticeData = {message:" "}
  constructor( private popoverController: PopoverController,
     private _serviceService: ServiceService,public alertController: AlertController) { }

  ngOnInit() {
    
  }
  closePop(){
    this.popoverController.dismiss();
  }



  async AlertPrompt1() {
    const alert = await this.alertController.create({
      header: 'Are you sure you want to post this notice?',
      // message: 'I cannot login',
     
  
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Submit');
            this. postnotice();
            this.closePop();
          }
        }
      ]
    });
  
    await alert.present();
   
    
  }



  //post  notice fot students
  postnotice(){
    this._serviceService.Snotice(this.noticeData).subscribe(
      data =>
    {this.noticeData=data;
    console.log(this.noticeData);
    });
  }

}



