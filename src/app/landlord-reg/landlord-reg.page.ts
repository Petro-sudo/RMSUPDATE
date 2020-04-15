// tslint:disable-next-line: comment-format
//step 2

import { Component, OnInit, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {ServiceService} from './../service.service';
import { NgModule, Pipe} from '@angular/core';
import { Router } from  "@angular/router";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http } from '@angular/http';


@Component({
  selector: 'app-landlord-reg',
  templateUrl: './landlord-reg.page.html',
  styleUrls: ['./landlord-reg.page.scss'],
})
export class LandlordRegPage implements OnInit {

  @Input() lordData= {email:" " ,pwd:" ", confirmPwd:" " }
  navCtrl: any;

  
  constructor( private _serviceService : ServiceService, public formBuilder: FormBuilder,
    private router: Router,
    public http:Http ) {}
    addLords: any = [];

    // public registerForm = this.formBuilder.group({
    //   email:['',Validators.compose([Validators.required])],
    //   pwd:["",Validators.compose([Validators.required,Validators.minLength(8)])],
    //   confirmPwd:["",Validators.compose([Validators.required,Validators.minLength(8)])]
    // })

  ngOnInit() {
    this.getlandLords();
    
  }
  getlandLords(){
    this._serviceService.postLandlord(this.addLords).subscribe((data: any)=>
    {this.addLords=data;
    console.log(this.addLords);
    });
  }
  
register(form){
  this._serviceService.postLandlord(form.value).subscribe((res) =>{
    this.router.navigateByUrl('folder/home');
  }
  );
  this._serviceService.postLandlord(this.lordData).subscribe(data =>
    console.log(data));
    console.log(this.lordData.email);
    console.log(this.lordData.pwd);
    console.log(this.lordData.confirmPwd)
}

//   addreg() {
//     this._serviceService.postLandlord(this.lordData).subscribe(
// data =>
// console.log(data));

// // console.log(this.lordData.fname);
// // console.log(this.lordData.lname);
// // console.log(this.lordData.id_no);
// console.log(this.lordData.email);
// console.log(this.lordData.confirmPwd);
// // console.log(this.lordData.cell);
// // console.log(this.lordData.title);
// // console.log(this.lordData.campus_loc);
// console.log(this.lordData.pwd)
// // console.log(this.lordData.gender)
    
  //}

}


