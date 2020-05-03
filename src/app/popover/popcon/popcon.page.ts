import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popcon',
  templateUrl: './popcon.page.html',
  styleUrls: ['./popcon.page.scss'],
})
export class PopconPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  closePop(){
    this.popoverController.dismiss();
  }

}
