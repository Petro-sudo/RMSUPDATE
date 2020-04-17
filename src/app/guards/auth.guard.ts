import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { AlertController } from '@ionic/angular';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private auth: AuthService, private router:Router, 
    private alertctrl: AlertController){}
  canActivate(router: ActivatedRouteSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => {
        console.log('in can activate:', user)
        if(!user){
          this.alertctrl.create({
            header:'Unauthorized',
            message:'Your not allowed to access that page.',
            buttons:['OK']
          }).then(alert=> alert.present());
          this.router.navigateByUrl('/folder/home')
          return false;
        }else{
          return true;
        }
      })
    );
    
  }
  
}
