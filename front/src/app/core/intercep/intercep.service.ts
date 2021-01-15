import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntercepService implements HttpInterceptor{

  intercept(req,next){
    let token = localStorage.getItem('token');

    if(!token){
      return next.handle(req);
    }
    const tokenizeReq = req.clone({
      setHeaders: {
        authorization:`Bearer ${token}`
      }
    })
    return next.handle(tokenizeReq);
  }
}
