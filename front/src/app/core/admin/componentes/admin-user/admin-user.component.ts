import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../servicios/admin.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  formAdmin = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    usuario: new FormControl('', Validators.required),
    clave: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  formAdminEdit = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    usuario: new FormControl('', Validators.required),
    clave: new FormControl('', [Validators.minLength(4)]),
  })

  admins: any = [];
  submit = false;
  id_edit: number;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.listAdmin();
  }

  listAdmin() {
    this.adminService.listAdmin()
      .subscribe(
        res => {
          this.admins = res;
        },
        err => console.log(err)
      )
  }

  insertAdmin() {
    this.submit = true;
    if (!this.formAdmin.invalid) {
      this.adminService.insertAdmin(this.formAdmin.value)
        .subscribe(
          res => {
            this.listAdmin();
            this.formAdmin.reset();
            this.submit = false
          },
          err => console.log(err)
        )
    }
  }

  verModal(id, nombre, apellido, usuario) {
    $("#editModal").modal("show");
    this.id_edit = id;
    this.formAdminEdit.patchValue({
      nombre: nombre,
      apellido: apellido,
      usuario: usuario
    })
  }

  actualizarAdmin(id) {
    this.submit = true;
    if (!this.formAdminEdit.invalid) {
      this.adminService.actualizarAdmin(id, this.formAdminEdit.value)
        .subscribe(
          res => {
            this.listAdmin();
            this.formAdminEdit.reset();
            $("#editModal .close").click()
            this.submit = false
          },
          err => console.log(err)
        )
    }
  }

  eliminarAdmin(id) {
    this.adminService.eliminarAdmin(id)
      .subscribe(
        res => {
          this.listAdmin();
        },
        err => console.log(err)
      )
  }

}
