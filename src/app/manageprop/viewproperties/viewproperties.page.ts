import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-viewproperties',
  templateUrl: './viewproperties.page.html',
  styleUrls: ['./viewproperties.page.scss'],
})
export class ViewpropertiesPage implements OnInit {

  edit: any = [];
  data: Observable<any>;
 
   constructor(public navCtrl: NavController, public http: HttpClient, private _serviceService : ServiceService) { }
 
   ngOnInit() {
 
     this.getData();
   }
 
   getData(){
 
 
    this. _serviceService.lordprofile().subscribe(data=>{
     this.edit = data;
     });
    }

}
