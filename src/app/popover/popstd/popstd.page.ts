import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popstd',
  templateUrl: './popstd.page.html',
  styleUrls: ['./popstd.page.scss'],
})
export class PopstdPage implements OnInit {

  constructor(private navParams: NavParams, private popoverController: PopoverController) { }

  ngOnInit() {
  }
  closePop(){
    this.popoverController.dismiss();
  }

}
