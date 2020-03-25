import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-editlordprof',
  templateUrl: './editlordprof.page.html',
  styleUrls: ['./editlordprof.page.scss'],
})
export class EditlordprofPage implements OnInit {

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

  //  myFunction() {
  //   var x = document.getElementById("myInput");
  //   if (x.type === "password") {
  //       x.type = "text";
  //   } else {
  //       x.type = "password";
  //   }
  //   }
}

