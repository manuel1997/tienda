import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import {LoginService} from './servicios/login.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginService:LoginService,
    private router:Router
    ){

    }

  canActivate(){

    if(this.loginService.estaLogeado()){
      return true
    }

    this.router.navigate(['/admin/adminlogin']);
    return false;

  }
  
}
