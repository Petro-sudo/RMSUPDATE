import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import {ServiceService} from '../../service.service';



@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.page.html',
  styleUrls: ['./admindash.page.scss'],
})
export class AdmindashPage implements OnInit {
  navigate : any;
  bars: any;
  bars1: any;
  bars2: any;
  @ViewChild('barChart' ,{ static: true }) barChart;
  @ViewChild('label' ,{ static: true }) label;
  @ViewChild('barChart1' ,{ static: true }) barChart1;
  @ViewChild('barChart2' ,{ static: true })barChart2;
  viewStud: any;

  constructor(
    public navCtrl: NavController, public http: HttpClient, 
    private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar,
    public alertCtrl: AlertController,
    private router: Router ,
    private _serviceService : ServiceService
  ) { }

  ngOnInit() {
    this.initializeApp();
    this.sideMenu();
    this.createBarChart();
    
    this. createBarChart2();
    this.getStats();
   
  }



 


  getStats(){
   
     return  this._serviceService.getstats().subscribe((apart:any)=>
      {this.viewStud = apart;
        console.log(this.viewStud
          );
       





        
          this.bars1 = new Chart(this.barChart1.nativeElement, {
            type: 'doughnut',
            data: {
              labels: ['Male','Female'],
              datasets: [{
               
                data: [this.viewStud.length, 29],
                backgroundColor: [
                  
                  'rgb(22, 138, 8)',
                  'rgb(22, 80, 83)'
                  
                ], // array should have same number of elements as number of dataset
                borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
                borderWidth: 1
              }]
            },
           
          });
        





        
      });
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
        title : "Dashboard",
        url   : "/admindash",
        icon :"person-outline"
      },
    
      {
        title : "Manage Students",
        url   : "/managestud",
        icon  : "book"
      },
      {
        title : " Landlord Application",
        url   : "/landlordapps",
        icon  : "key"
      },

      {
        title : " Manage approved properties",
        url   : "/propinfo",
        icon  : "home"
      },
      
    ]
  }



navi()
{
  this.router.navigate(['/folder/Home']);
}
  

  createlabelChart(){

    this.bars = new Chart(this.label.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['very_satisfied','satisfied','okay','disappointed','very_disappointed'],
        datasets: [{
         
           data: [0,100,0,0,0],
          backgroundColor: [
            
            'rgb(5, 238, 64)',
            'rgb(3, 18, 83)',
            'rgb(198,77,255)',
            'rgb(173,216,230)',
            'rgb(114,188,212)'
            
          ], // array should have same number of elements as number of dataset
          // borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          // borderWidth: 1
        }]
      },
     
    });

  }
















  createBarChart2() {
    this.bars2 = new Chart(this.barChart2.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Normal','Disable'],
        datasets: [{
         
          data: [85, 15],
          backgroundColor: [
            
            'rgb(220, 138,18)',
            'rgb(202, 180, 183)'
            
          ], // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
     
    });
  }












  
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['apartment1', 'apartment2', 'apartment3', 'apartment4', 'apartment5', 'apartment6', 'apartment7', 'apartment8'],
        datasets: [{
          label: 'Rooms occupied per Apartment',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(0, 0, 0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }












}
