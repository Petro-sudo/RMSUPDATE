import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-helpadmin',
  templateUrl: './helpadmin.page.html',
  styleUrls: ['./helpadmin.page.scss'],
})
export class HelpadminPage implements OnInit {

  constructor( private popoverController: PopoverController) { }

  ngOnInit() {
  }


closePop(){
  this.popoverController.dismiss();
}


}
