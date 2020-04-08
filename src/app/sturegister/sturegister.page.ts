import { Component, OnInit, Input } from '@angular/core';
import {ServiceService} from './../service.service';
import { AlertController } from '@ionic/angular';  
import { Observable, of, throwError } from 'rxjs';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms'

import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { RouterLink } from '@angular/router';






@Component({
  selector: 'app-sturegister',
  templateUrl: './sturegister.page.html',
  styleUrls: ['./sturegister.page.scss'],
})
export class SturegisterPage implements OnInit {
  @Input() stuData= {firstName:" ", lastName:" ",email:" ", password:" ",campus_loc:" ",studno:" " ,id_no:" ",cell_no:" ", gender:" "}
 // name = new FormControl('');
  constructor(public alertCtrl: AlertController, private _serviceService : ServiceService ) { }
  addstu: any = [];

  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  gender: FormControl;
  email: FormControl;
  password: FormControl;
  campus_loc= new FormControl;
  studno= new FormControl;
  id_no=new FormControl;
  cell_no= new FormControl;


  ngOnInit() {

    this.createFormControls();
    this.createForm();
    this.getstu();
  }


  getstu(){
    this._serviceService.postLandlord(this.addstu).subscribe((data: any)=>
    {this.addstu=data;
    console.log(this.addstu);
    });
  }




  async add() {

     if(this.myform.invalid){

      const alert = await this.alertCtrl.create({  
        header: 'Registration',  
        message: ' please fill in all the fields ',  
        buttons: ['OK'] 
         
      }
     
      
  
  
      
      );  
  
      await alert.present();  
      const result = await alert.onDidDismiss();  
      console.log(result);
  
  
  
     } 
       






    

     
  
 


else{


    this._serviceService.poststu(this.stuData).subscribe(
data =>
console.log(data));

console.log(this.stuData.firstName);
console.log(this.stuData.lastName);
console.log(this.stuData.email);
console.log(this.stuData.gender)
console.log(this.stuData.password);
console.log(this.stuData.campus_loc);
console.log(this.stuData.studno);
console.log(this.stuData.id_no);
console.log(this.stuData.cell_no);


  

const alert = await this.alertCtrl.create({  
  header: 'Registration',  
  message: ' you have successfully registered ',  
  buttons: ['OK'] 
   
}





);  

await alert.present();  
const result = await alert.onDidDismiss();  
console.log(result);





RouterLink['/login'];




}






  }




















  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);

//validate cell number
  /*  this.cell_no = new FormControl('', [
      Validators.required,
      Validators.minLength(13),
      Validators.pattern(" ")
    ]);

*/




//"/^\+27[0-9]{9}$/"


  

    
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
       


    
      }),
    //code was here
    email: this.email,
        password: this.password,
        campus_loc:this.campus_loc,
        studno: this.studno,
        id_no: this.id_no,
        cell_no: this.cell_no
     
   
    });
  }









/*

  async doSomething() {  
    

    this.stuData= {firstName:" ", lastName:" ",email:" ", password:" ",campus_loc:" ",studno:" " ,id_no:" ",cell_no:" "}
    

    const alert = await this.alertCtrl.create({  
      header: 'Registration',  
      message: 'you are successfully registered',  
      buttons: ['OK'] 
       
    }
   
    


    
    );  





    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);



   


}


*/
}
