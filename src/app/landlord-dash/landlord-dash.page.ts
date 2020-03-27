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
   addProp: any=[];
   addimg: any=[];
   ngOnInit() {
 
     this.getData();
     this.applidstu();
   }
 

   applidstu(){
    return  this._serviceService.getAppliedstu().
    subscribe((apart:any)=>
     {this.addProp = apart;
       console.log(this.addProp);
       console.log(this.addProp.length);
       this.addimg = this.addProp.length;
       
     });
   }

   getData(){
 
 
    this. _serviceService.lordprofile().subscribe(data=>{
     this.result = data;
     });
     
   }
}
