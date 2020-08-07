import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {ServiceService} from '../../service.service';

@Component({
  selector: 'app-popreport',
  templateUrl: './popreport.page.html',
  styleUrls: ['./popreport.page.scss'],
})

export class PopreportPage implements OnInit {
  @Input() issueData= { Issue_type:" ",description:" " ,student_no:" "}
  constructor(private popoverController: PopoverController, private _serviceService : ServiceService) { }

  ngOnInit() {
  }
  closePop(){
    this.popoverController.dismiss();
  }


  issue(){
    this._serviceService.Studentissue(this.issueData).subscribe(
      data =>
    {this.issueData=data;
    console.log(this.issueData);
    });
  }







}
