import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userserviceService: UserserviceService, private router: Router){}
  canActivate(): boolean{
    if (this.userserviceService.loggedIn()){
      this.router.navigate(['/student-dash'])
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false;
    }
  }
    
  
}
