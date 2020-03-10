
import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ServiceService} from './../service.service';


@Component({
  selector: 'app-resproof',
  templateUrl: './resproof.page.html',
  styleUrls: ['./resproof.page.scss'],
})
export class ResproofPage implements OnInit{
  result: any = [];
 data: Observable<any>;

  constructor(public navCtrl: NavController, public http: HttpClient, private _serviceService : ServiceService) { }

  ngOnInit() {

    this.getData();
  }

  getData(){


   this. _serviceService.proof().subscribe(data=>{
    this.result = data;
    });
    
  }

  


}
