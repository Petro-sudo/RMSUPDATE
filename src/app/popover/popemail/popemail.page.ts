import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popemail',
  templateUrl: './popemail.page.html',
  styleUrls: ['./popemail.page.scss'],
})
export class PopemailPage implements OnInit {

  constructor(private navParams: NavParams, private popoverController: PopoverController) { }

  ngOnInit() {
    
  }
  closePop(){
    this.popoverController.dismiss();
  }


}
