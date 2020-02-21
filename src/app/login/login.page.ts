import { Component, OnInit, Input } from '@angular/core';
import {ServiceService} from './../service.service';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @Input() loginData= {email:" ", password:" "}
  navCtrl: any;
  _ServiceService: any;

  constructor(private _serviceService : ServiceService) { }
login: any=[];

  ngOnInit() {
    this.getData();
  }
 public getData()
{
    this._serviceService.getLogin().subscribe((data: any)=>
{this.login=data;
console.log(this.login);
});

}

  

}
