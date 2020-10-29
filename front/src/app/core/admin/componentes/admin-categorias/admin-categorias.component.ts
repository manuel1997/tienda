import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../../../admin/servicios/categoria.service'

declare var $: any;

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.css']
})


export class AdminCategoriasComponent implements OnInit {

  id:number;
  submit = false;

  categorias = []

  formCateg = new FormGroup({
    nombre: new FormControl('',Validators.required),
  })

  formCategEdit = new FormGroup({
    nombre_edit: new FormControl('',Validators.required)
  })

  constructor(private catgService: CategoriaService) { }

  ngOnInit() {
    this.listCategorias();
  }

  listCategorias() {
    this.catgService.listCategoria(this.categorias)
      .subscribe(
        res => {
          this.categorias = res;
        },
        err => console.log(err)
      )
  }

  nuevaCategoria() {
    this.submit = true;
    if(!this.formCateg.invalid){
      this.catgService.nuevaCategoria(this.formCateg.value)
      .subscribe(
        res => {
          this.formCateg.reset();
          this.listCategorias();
          this.submit = false;
        },
        err => console.log(err)
      ) 

    }
  }

  verModal(nombre_edit,id) {
    $("#editModal").modal("show");
    $(function () {
      $('#editModal').on('shown.bs.modal', function () {
        $('#edit').focus()
      });
    });
    this.id = id;
    this.formCategEdit.patchValue({
      nombre_edit:nombre_edit,
    })
  }

  editarCategoria() {
    this.submit = true;
    if(!this.formCategEdit.invalid){
     this.catgService.editarCategoria(this.id,this.formCategEdit.value)
      .subscribe(
        res => {
          $("#editModal .close").click()
          this.listCategorias();
        },
        err => console.log(err)
      ) 
    }
  }

  eliminarCategoria(id){
    this.catgService.eliminarCategoria(id)
    .subscribe(
      res => {
        this.listCategorias();
      }
    )
  }



}
