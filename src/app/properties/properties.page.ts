
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServiceService} from './../service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform, AlertController, NavController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera,CameraOptions,PictureSourceType, MediaType } from '@ionic-native/camera/ngx';
import { Component, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from "@angular/forms";
import { Chart } from 'chart.js';
import { ReactiveFormsModule } from '@angular/forms';
import { LordpostissuesPage } from '../popover/lordpostissues/lordpostissues.page';
import { LordpostqueryPage } from '../popover/lordpostquery/lordpostquery.page';

 @Component({
   selector: 'app-properties',
  templateUrl: './properties.page.html',
   styleUrls: ['./properties.page.scss'],
})
 export class PropertiesPage  {
  @ViewChild('barChart' ,{ static: true }) barChart;
  @ViewChild('label' ,{ static: true }) label;

  @Input() noticeData = {notice_title:" ", notice_description:" "}
  @Input() queryData = {query_type:" ", query_description:" "}

  @Input() postImage = {pic_name:" "}
  @Input() notice = {message:" "}
  form: FormGroup;
  bars: any;
  colorArray: any;
  value =0;
  //  alertController: any;
  constructor(
    private platform    : Platform,
        private splashScreen: SplashScreen,
        private statusBar   : StatusBar,
        private _serviceService: ServiceService,
        public alertCtrl: AlertController,
        private router: Router,
        private http: HttpClient,
        public alertController: AlertController,
        public fb: FormBuilder,
        private popoverController: PopoverController
  ) {



    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })


   }

   uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()
  }

  submitForm() {
    console.log(this.form.value)


    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("avatar", this.form.get('avatar').value);
    
    //my url
    this.http.post('http://192.168.43.142:9000/landlodImage', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  

   
//nnnnnn
  public studApp: any=[];
  public studAcpt: any= [];
  public items: any;

  navigate : any;
  ionViewDidEnter() {
    this.createBarChart();
    this. createlabelChart();
    this.initializeApp();
this.sideMenu();
  }
////nnn
public approved: any=[];
public issueData: any=[];
base64Image:string;
  ngOnInit() {
    this.getApproved();
    this.getStudApplication();
    this.initializeApp();
    this.sideMenu();
    this.calc();
    this.calc1();
    this.getissues();
  }

//upload img
upload(event: any) {
  let files = event.target.files;
  let fData: FormData = new FormData;

  for (var i = 0; i < files.length; i++) {
      fData.append("file[]", files[i]);
  }
  var _data = {
      filename: 'Sample File',
      id: '0001'
  }

  fData.append("data", JSON.stringify(_data));

  this._serviceService.uploadFile(fData).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
  )
}
handleResponse(response: any) {
  console.log(response);
}
handleError(error: string) {
  console.log(error);
}


  //post  image
postnotice(){
  this._serviceService. postNotice().subscribe(
    data=>console.log(data)
  )
  console.log(this.notice)
  }

 
  


//end img
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

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Male','Female'],
        datasets: [{
         
          data: [71, 29],
          backgroundColor: [
            
            'rgb(5, 238, 64)',
            'rgb(3, 18, 83)'
            
          ], // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
     
    });
  }




   openCity(evt,cityName) {
    var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
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
        title : "Profile",
        url   : "/landlord-dash",
        icon :"person-outline"
       
       
      },
      {
        title : "Overview",
        url   : "/viewproperties",
        icon :"eye-outline"
       
       
      },
      {
        title : "My Proparties",
        url   : "/propertyinfo",
        icon  : "business"
      },
      {
        title : "Accreditation",
        url   : "/landloard-app",
        icon  : "clipboard"
      }


      
    ]
  }



  



  // async presentAlertPrompt() {
  //   const alert = await this.alertController.create({
  //     header: 'Notice Dialog',
  //     inputs: [
  //       {
  //         name: 'notice_title',
  //         type: 'text',
  //         placeholder: 'Notice title'
  //       },
      
  //       // multiline input.
  //       {
  //         name: 'notice_description',
  //         id: 'paragraph',
  //         type: 'textarea',
  //         placeholder: 'Notice Discription'
  //       },
       
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, 
  //       {
  //         text: 'Submit',
  //         handler: data =>{this.PostNotice(this.noticeData)
  //         console.log('Notice Posted')

  //         }
          //or

          // handler: () =>{
          //   console.log('Notice Posted');
          //   this.PostNotice(this.noticeData);
  
          //   }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }




  
  async presentAlertPrompt2() {
    const alert = await this.alertController.create({
      header: 'Query Dialog',
      message: 'Send quiries to TUTEH Properties.',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Isuue description'
        },
      
       
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Query type'
        },
       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Submit',
          handler: () => {
            console.log('Confirm Submit');
          }
        }
      ]
    });

    await alert.present();
  }
//neeeeew

//get pending student
getStudApplication(){
  var searchTerm= "";
   return  this._serviceService.getStudentsApp().
   subscribe((apart:any)=>
    {this.studApp = apart;
      console.log(this.studApp
        );
       
      var num =this.studApp.length;
      
    });
  }

calc()
{

console.log(this.studApp.length);
}

getissues(){
  
   return  this._serviceService.getStudentissue().
   subscribe((apart:any)=>
    {this.issueData = apart;
      console.log(this.issueData
        );
      
    });
  }






//get accepted student

getApproved(){
  var searchTerm= "";
   return  this._serviceService.getStudentsAcptd().
   subscribe((apart:any)=>
    {this.approved = apart;
      console.log(this.approved
        );
      //  this.filterItems(searchTerm); 
    });
  }
calc1()
{

console.log(this.studAcpt.length);

}


//decline stud btn
async declinePrompt(i) {
  const alert = await this.alertController.create({
    header: 'Are you sure You want to Decline this Application?',
    inputs: [
      {
        type: 'text',
        placeholder: 'reason for declining'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Confirm',
        handler: () => {
          console.log('Confirm Submit');
          this.declinestudent(i);
        }
      }
    ]
  });

  await alert.present();
}

//decline student
declinestudent(i){
  this._serviceService.declineStudent(i).subscribe(data=>
  {this.getStudApplication()
  })
  this.getStudApplication();
}


//accept stud
async acceptAlertPrompt(j) {
  const alert = await this.alertController.create({
    header: 'Are you sure You want to Accept this Application?',
    

    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Confirm',
        handler: () => {
          console.log('Confirm Submit');
           this.acceptstudent(j);
        }
      }
    ]
  });

  await alert.present();
}
 
//accept student
acceptstudent(j){
  this._serviceService.acceptStudent(j).subscribe(data =>
    {this.getStudApplication()
    })
   this.getStudApplication();
}

//post issues
async postIssues(ev: Event)  {
  const postisseu = await this.popoverController.create({
   component: LordpostissuesPage,
   componentProps:{
     custom_id: this.value
   },
   
  });
  postisseu.present();
  this.PostNotice(this.noticeData);
}

PostNotice(noticeData)
{
  this._serviceService.postingNotice(this.noticeData).subscribe(
    data=>console.log(data)
  );
  console.log(this.noticeData);
}


//posting quary
async postQuery(ev: Event)  {
  const postquery = await this.popoverController.create({
   component: LordpostqueryPage,
   componentProps:{
     custom_id: this.value
   },
   
  });
  postquery.present();
  this.PostQuery(this.queryData);
}


PostQuery(queryData)
{
  this._serviceService.postingQuery(this.queryData).subscribe(
    data=>console.log(data)
  );
  console.log(this.queryData);
}




}




