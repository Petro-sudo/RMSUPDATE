import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-manageprovider',
  templateUrl: './manageprovider.page.html',
  styleUrls: ['./manageprovider.page.scss'],
})
export class ManageproviderPage implements OnInit {
  data=[];
  page=0;
  resultsCount=10;
  totalPages=10;

  constructor(private http: HttpClient ) {
    this.loadData();
  }

    loadData(){
      this.http.get(`https://randomuser.me/api/?page=${this.page}&results=${this.resultsCount}`).subscribe(res =>{
        console.log('res_', res);
        this.data=res['results'];
      });
    }
//https://jsonplaceholder.typicode.com/posts/1
    removeRow(index){
      this.data.splice(index,1)
    } 

  ngOnInit() {
  }

}
