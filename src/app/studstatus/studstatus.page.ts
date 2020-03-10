import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ServiceService} from './../service.service';


@Component({
  selector: 'app-studstatus',
  templateUrl: './studstatus.page.html',
  styleUrls: ['./studstatus.page.scss'],
})
export class StudstatusPage implements OnInit{
  result: any = [];
 data: Observable<any>;

  constructor(public navCtrl: NavController, public http: HttpClient, private _serviceService : ServiceService) { }

  ngOnInit() {

    this.getData();
  }

  getData(){


   this. _serviceService.status().subscribe(data=>{
    this.result = data;
    });
    
  }

  


}
