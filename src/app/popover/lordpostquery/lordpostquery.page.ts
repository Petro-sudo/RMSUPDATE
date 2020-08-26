import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-lordpostquery',
  templateUrl: './lordpostquery.page.html',
  styleUrls: ['./lordpostquery.page.scss'],
})
export class LordpostqueryPage implements OnInit {

  constructor( private popoverController: PopoverController) { }

  ngOnInit() {
    
  }
  closePop(){
    this.popoverController.dismiss();
  }

}
