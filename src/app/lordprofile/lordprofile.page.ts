// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-lordprofile',
//   templateUrl: './lordprofile.page.html',
//   styleUrls: ['./lordprofile.page.scss'],
// })
// export class LordprofilePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ServiceService} from './../service.service';


@Component({
  selector: 'app-lordprofile',
  templateUrl: './lordprofile.page.html',
  styleUrls: ['./lordprofile.page.scss'],
})
export class LordprofilePage implements OnInit{
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

