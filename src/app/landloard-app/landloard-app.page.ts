import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-landloard-app',
  templateUrl: './landloard-app.page.html',
  styleUrls: ['./landloard-app.page.scss'],
})
export class LandloardAppPage implements OnInit {
  

  constructor(public avtivateR: ActivatedRoute,private router: Router,
    private _serviceService : ServiceService
   ) { }

  ngOnInit() {
  
  }

}
