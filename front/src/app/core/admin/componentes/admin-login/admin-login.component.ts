import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from "../../servicios/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

 
  formLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    clave: new FormControl('',Validators.required)
  })

  submit = false;

  constructor(
    private loginService:LoginService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  login(){
    this.submit = true;
    if(!this.formLogin.invalid){
    this.loginService.login(this.formLogin.value)
    .subscribe(
     res => {
      this.submit = false;
       localStorage.setItem('token',res.token);
       localStorage.setItem('admin',JSON.stringify(res.admin))
       this.router.navigate(['/admin']);
     },
     err => console.log(err)
    )
    }
  }

}
