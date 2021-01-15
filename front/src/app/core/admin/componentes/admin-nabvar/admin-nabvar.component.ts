import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-admin-nabvar',
  templateUrl: './admin-nabvar.component.html',
  styleUrls: ['./admin-nabvar.component.css']
})
export class AdminNabvarComponent implements OnInit {

  admin_usuario:string
  admin_nombre:string;
  admin_apellido:string

  constructor(private loginService:LoginService) {
    this.verAdmin();
   }

  ngOnInit() {
  }

  verAdmin(){
  let admin = this.loginService.obteneradmin()
  this.admin_usuario = admin[0].usuario;
  this.admin_nombre = admin[0].nombre;
  this.admin_apellido = admin[0].apellido;
  }

  salir(){
    this.loginService.salirLocal();
  }

}
