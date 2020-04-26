import { Component, OnInit} from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ServiceService} from './../service.service';
import { PopratePage } from '../popover/poprate/poprate.page';


@Component({
  selector: 'app-studstatus',
  templateUrl: './studstatus.page.html',
  styleUrls: ['./studstatus.page.scss'],
})
export class StudstatusPage implements OnInit{
  result: any = [];
 data: Observable<any>;
 value=0;

  constructor(public navCtrl: NavController, public http: HttpClient, 
    private popoverController: PopoverController, private _serviceService : ServiceService) { }

  ngOnInit() {

    this.getData();
  }

  getData(){


   this. _serviceService.status().subscribe(data=>{
    this.result = data;
    });
    
  }

  
//pop
async popOver(ev: Event)  {
  const poprate = await this.popoverController.create({
   component: PopratePage,
   componentProps:{
     custom_id: this.value
   },
   
  });
poprate.present();
}

}
