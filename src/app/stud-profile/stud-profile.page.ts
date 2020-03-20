import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
/*import {NavController} from '@ionic/angular';*/
import {Observable} from 'rxjs';

@Component({
  selector: 'app-stud-profile',
  templateUrl: './stud-profile.page.html',
  styleUrls: ['./stud-profile.page.scss'],
})
export class StudProfilePage implements OnInit {

  result: any=[];
  data: Observable<any>;
  constructor(/*public navCtrl: NavController,*/ public http: HttpClient) { }

  ngOnInit() {

    this.getData();

  }
  getData(){
    var url='http://168.172.185.106:5000/getstud/40';
    this.data= this.http.get(url);
    //this.data.subscribe(data =>{
        //this.result=data;
        console.log("clicked");

      
    //});
    
  }

}
