import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Observable, BehaviorSubject, from, of } from 'rxjs';
import { switchMap, map, take} from 'rxjs/operators';

const helper = new JwtHelperService();
const TOKEN_KEY = 'jwt-token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<any>;
  private userData = new BehaviorSubject(null);

  constructor(private storage: Storage, private http: HttpClient,
    private plt: Platform, private router: Router) {
      this.loadStoredtoken();

     }

     loadStoredtoken(){
       let platformObs = from(this.plt.ready());

       this.user = platformObs.pipe(

        switchMap(()=>{
          return from(this.storage.get(TOKEN_KEY))

        }),
        map(token =>{
          console.log('Token from storage: ', token);
          if(token){
          let decoded = helper.decodeToken();
          console.log('decoded: ', decoded)
          this.userData.next(decoded)
          return true;
          }else
          {
            return null;
          }
        })
       );
     }

     login(credentials: {email: string, pwd:string}){
       if(credentials.email != 'petro.malele@gmail.com' || credentials.pwd !='123'){
        return of(null);
       }

       return this.http.get('https://randomuser.me/api/').pipe(
         take(1),
         map(res =>{

          return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

         }),
         switchMap( token =>{
           let decoded = helper.decodeToken(token);
           console.log('login decode: ', decoded);
           this.userData.next(decoded);

           let storageObs = from(this.storage.set(TOKEN_KEY, token))
           return storageObs;

         })

       );
         
     }

     getUser(){
       return this.userData.getValue();

     }

     logout(){
       this.storage.remove(TOKEN_KEY).then(()=>{
         this.router.navigateByUrl('/folder/home');
         this.userData.next(null);
       });
     }
}
