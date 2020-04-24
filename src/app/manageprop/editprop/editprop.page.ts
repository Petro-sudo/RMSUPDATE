import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editprop',
  templateUrl: './editprop.page.html',
  styleUrls: ['./editprop.page.scss'],
})
export class EditpropPage implements OnInit {
  selectedFile: File = null;

 
  constructor(private http: HttpClient) { }

    onUpload(){
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name)
      this.http.post('https://jsonplaceholder.typicode.com/posts',fd).subscribe
      (res => {
        console.log(res);
      });
    }
  ngOnInit() {
  }
  
  url1="/assets/pics/kit.jpg"
  onFileSelected(event){
    if(event.target.files){
      var reader =new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.url1=event.target.result;
      }
    }

 //  this.selectedFile =  <File>event.target.files[0];
 }
 url2="/assets/pics/bed.jpg"
 onBed(event){
   if(event.target.files){
     var reader =new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload=(event:any)=>{
       this.url2=event.target.result;
     }
   }

//  this.selectedFile =  <File>event.target.files[0];
}

url3="/assets/pics/bath.jpg"
 onBath(event){
   if(event.target.files){
     var reader =new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload=(event:any)=>{
       this.url3=event.target.result;
     }
   }

//  this.selectedFile =  <File>event.target.files[0];
}

url4="/assets/pics/study.jpg"
 onStudy(event){
   if(event.target.files){
     var reader =new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload=(event:any)=>{
       this.url4=event.target.result;
     }
   }

//  this.selectedFile =  <File>event.target.files[0];
}


}
