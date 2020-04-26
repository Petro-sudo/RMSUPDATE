import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopreportPage } from '../popover/popreport/popreport.page';

@Component({
  selector: 'app-stud-app',
  templateUrl: './stud-app.page.html',
  styleUrls: ['./stud-app.page.scss'],
})
export class StudAppPage implements OnInit {
 value = 0;
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }


  async popOver(ev: Event)  {
    const poprate = await this.popoverController.create({
     component: PopreportPage,
     componentProps:{
       custom_id: this.value
     },
     
    });
  poprate.present();
  }

}
