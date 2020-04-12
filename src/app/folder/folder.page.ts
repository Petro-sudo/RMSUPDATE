import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import {FormsModule } from '@angular/forms';

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
  filterData: any;
 
  //added 
 
 

  constructor(private activatedRoute: ActivatedRoute,private _serviceService: ServiceService) { }
  public addProp: any=[];
  public addProps: any=[];
  addimg: any=[];
  public searchTerm: string = "";
  public items: any;

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    
    this.getProperty();
    // this.setFilteredItems();
  }



  filterItems(searchTerm) {
    return this.addProp.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

 
  setFilteredItems() {
    this.items = this.filterItems(this.searchTerm);
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
    // this.getProperty();
   
  

  }











  getProperty(){
   var searchTerm= "";
    return  this._serviceService.getApartment().
    subscribe((apart:any)=>
     {this.addProp = apart;
       console.log(this.addProp
         );
        this.filterItems(searchTerm); 
     });
   }
 
 

 
  
 










}
