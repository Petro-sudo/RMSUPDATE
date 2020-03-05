import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage implements OnInit {

  constructor(private _serviceService: ServiceService) { }
  addProp: any=[];
  addimg: any=[];
  ngOnInit() {

    this.getProperty();
    this.img();
  }




  getProperty(){
    return  this._serviceService.getApartment().
    subscribe((apart:any)=>
     {this.addProp = apart;
       console.log(this.addProp);
     });
   }
 
 
 
   img(){
     return  this._serviceService.getApartment().
     subscribe((img:any)=>
      {this.addProp = img;
        console.log(this.addimg);
      });
    }
 



}




























