import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment"
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = environment.Url_api;

  constructor(private http:HttpClient,private router:Router) { }


  login(admin){
     return this.http.post<any>(this.api+'loginAdmin',admin)
  }

  estaLogeado():Boolean{
    if(localStorage.getItem('token')){
      return true
    }else{
      return false
    }
  }

  obtenertoken(){
    return localStorage.getItem('token');
  }

  obteneradmin(){
    let admin_string = localStorage.getItem('admin');
    let admin = JSON.parse(admin_string)
    return admin;
  }


  salirLocal(){
    localStorage.clear();
    this.router.navigate(['/admin/adminlogin'])
  }


}
