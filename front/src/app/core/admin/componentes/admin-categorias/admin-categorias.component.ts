import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../admin/servicios/categoria.service'

declare var $: any;

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.css']
})


export class AdminCategoriasComponent implements OnInit {


  categorias = []

  form = {
    id:'',
    nombre:'',
    nombre_edit:''
  }



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
    this.catgService.nuevaCategoria(this.form)
      .subscribe(
        res => {
          this.form.nombre = '',
          this.listCategorias();
        },
        err => console.log(err)
      )
  }

  verModal(nombre_edit,id) {
    $("#editModal").modal("show");
    $(function () {
      $('#editModal').on('shown.bs.modal', function () {
        $('#edit').focus()
      });
    });
    this.form.nombre_edit = nombre_edit;
    this.form.id = id;
  }

  editarCategoria(id) {
    this.catgService.editarCategoria(id,this.form)
      .subscribe(
        res => {
          $("#editModal .close").click()
          this.listCategorias();
        },
        err => console.log(err)
      )
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
