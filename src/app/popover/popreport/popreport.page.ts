import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {ServiceService} from '../../service.service';
import { Platform, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-popreport',
  templateUrl: './popreport.page.html',
  styleUrls: ['./popreport.page.scss'],
})

export class PopreportPage implements OnInit {
  @Input() issueData= { Issue_type:" ",description:" " ,student_no:" "}
  addProp: any;
  constructor(private popoverController: PopoverController, private _serviceService : ServiceService,
    public alertCtrl: AlertController,
    
    public alertController: AlertController) { }

  ngOnInit() {
    this.getnoti();
  }
  closePop(){
    this.popoverController.dismiss();
  }


  issue(){
    this._serviceService.Studentissue(this.issueData).subscribe(
      data =>
    {this.issueData=data;
    console.log(this.issueData);
    });
  }







  async AlertPrompt() {
    const alert = await this.alertController.create({
      header: 'issue sent successfully',
      // message: 'I cannot login',
    
  
      buttons: [
       , {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Submit');
           this.issue();
           this.closePop();
           this. getnoti();
          }
        }
      ]
    });
  
    await alert.present();
   
    
  }




  getnoti(){
    
    return  this._serviceService.getSpecifictissue().
    subscribe((apart:any)=>
     {this.addProp = apart;
       console.log(this.addProp
         );
      
     });
   }



}
