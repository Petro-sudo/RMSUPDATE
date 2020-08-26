import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-lordpostissues',
  templateUrl: './lordpostissues.page.html',
  styleUrls: ['./lordpostissues.page.scss'],
})
export class LordpostissuesPage implements OnInit {

  constructor( private popoverController: PopoverController) { }

  ngOnInit() {
    
  }
  closePop(){
    this.popoverController.dismiss();
  }


}
