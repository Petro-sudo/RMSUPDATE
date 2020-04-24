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

}
