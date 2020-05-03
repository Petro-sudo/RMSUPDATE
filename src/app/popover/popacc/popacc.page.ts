import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popacc',
  templateUrl: './popacc.page.html',
  styleUrls: ['./popacc.page.scss'],
})
export class PopaccPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }
 closePop(){
    this.popoverController.dismiss();
  }
}
