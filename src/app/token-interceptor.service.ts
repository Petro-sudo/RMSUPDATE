import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserserviceService } from './userservice.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private Injector: Injector) { }

intercept(req, next){
  let userService = this.Injector.get(UserserviceService)
  let tokenizedReq = req.clone({
    setHeaders:{
      Authorization: 'Bearer $ {UserserviceService.getToken}'
    }
  })
  return next.handle(tokenizedReq)
}

}
