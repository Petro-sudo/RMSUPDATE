import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import {FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {ServiceService} from './../service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

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
 
 

  constructor(private activatedRoute: ActivatedRoute,private _serviceService: ServiceService,
    
    private platform    : Platform,
              private splashScreen: SplashScreen,
              private statusBar   : StatusBar,
               private sanitizer: DomSanitizer
      
    ) { }
  public addProp: any=[];
  public addProps: any=[];
  // public searchProps: any=[];
  public imgProps: any=[];
  addimg: any=[];
  public searchTerm: string = "";
  public items: any;
  navigate : any;
  //public url: string = "http://192.168.43.92:9000/";
  public url: string = "http://192.168.43.142:9000/";
  @Input() searchProps= {campus:" "}




 



  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.sideMenu();
    this.initializeApp();
    this.getProperty();
     this.getPimg();
   
  }


  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      
      {
        title : "HOME",
        url   : "/Home",
       
       
      },
      {
        title : "RESIDENCES",
        url   : "#properties",
        icon  : "chatboxes"
      },
      {
        title : "WHO WE ARE",
        url   : "/contacts",
        icon  : "contacts"
      },


      {
        title : "TALK TO US",
        url   : "/contacts",
        icon  : "contacts"
      },
    ]
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
    return  this._serviceService.getApprovedApp().
    subscribe((apart:any)=>
     {this.addProp = apart;
       console.log(this.addProp
         );
        this.filterItems(searchTerm); 
     });
   }



   getPimg(){
    
     return  this._serviceService.imgView().
     subscribe((apart:any)=>
      {this.imgProps = apart;
        console.log(this.imgProps
          );
       
      });
    }

  // //get the property of one campus
  // public propNear: any=[];
  // getProperty(){
  //   var searchTerm= "";
  //   return this._serviceService.propertyNearCampus().subscribe((apart:any)=>
  //   {this.propNear =apart;
  //   console.log(this.propNear);
  //   this.setFilteredItems();})
  // }
 
 


   searchProperty(){
    
     return  this._serviceService.searchprop().
     subscribe((apart:any)=>
      {this.searchProps = apart;
        console.log(this.searchProps
          );
         
      });
    }

}
