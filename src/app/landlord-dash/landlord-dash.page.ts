import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-landlord-dash',
  templateUrl: './landlord-dash.page.html',
  styleUrls: ['./landlord-dash.page.scss'],
})
export class LandlordDashPage implements OnInit {

  result: any = [];
  data: Observable<any>;
 
   constructor(public navCtrl: NavController, public http: HttpClient, private _serviceService : ServiceService) { }
 
   ngOnInit() {
 
     this.getData();
   }
 
   getData(){
 
 
    this. _serviceService.lordprofile().subscribe(data=>{
     this.result = data;
     });
     
   }
}
