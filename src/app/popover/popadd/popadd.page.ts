import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popadd',
  templateUrl: './popadd.page.html',
  styleUrls: ['./popadd.page.scss'],
})
export class PopaddPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }
  closePop(){
    this.popoverController.dismiss();
  }

}
