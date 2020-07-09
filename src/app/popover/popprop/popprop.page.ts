import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popprop',
  templateUrl: './popprop.page.html',
  styleUrls: ['./popprop.page.scss'],
})
export class PoppropPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  closePop(){
    this.popoverController.dismiss();
  }

}
