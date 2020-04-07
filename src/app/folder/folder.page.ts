import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import {ServiceService} from './../service.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
 
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };
 
  //added 
 
 

  constructor(private activatedRoute: ActivatedRoute,private _serviceService: ServiceService) { }
  addProp: any=[];
  addimg: any=[];
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.getProperty();
    this.img();

 
  }


  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
    this.getProperty();
   this.img();

  }




  getProperty(){
    return  this._serviceService.getApartment().
    subscribe((apart:any)=>
     {this.addProp = apart;
       console.log(this.addProp
         );
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
