import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popreport',
  templateUrl: './popreport.page.html',
  styleUrls: ['./popreport.page.scss'],
})
export class PopreportPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }
  closePop(){
    this.popoverController.dismiss();
  }

}
