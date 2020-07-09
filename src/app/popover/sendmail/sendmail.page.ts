import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.page.html',
  styleUrls: ['./sendmail.page.scss'],
})
export class SendmailPage implements OnInit {

  constructor( private popoverController: PopoverController) { }

  ngOnInit() {
    
  }
  closePop(){
    this.popoverController.dismiss();
  }


}
