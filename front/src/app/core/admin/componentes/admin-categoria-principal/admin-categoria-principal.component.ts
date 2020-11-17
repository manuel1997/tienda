import { Component, OnInit } from '@angular/core';
import {CategoriaService} from "../../servicios/categoria.service";
import { CategoriaPrincipalService } from "../../servicios/categoria-principal.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-categoria-principal',
  templateUrl: './admin-categoria-principal.component.html',
  styleUrls: ['./admin-categoria-principal.component.css']
})
export class AdminCategoriaPrincipalComponent implements OnInit {

  categorias = [];
  ctgPrincipal:any = [];

  catgFormPrincipal = new FormGroup({
    id_categoria1: new FormControl(''),
    id_categoria2: new FormControl(''),
    id_categoria3: new FormControl(''),
  });

  constructor(
    private categoriaService:CategoriaService,
    private catgPrincipal:CategoriaPrincipalService
  ) { }

  ngOnInit() {
    this.listaCategorias();
    this.categPrincipal();
   

  }

  listaCategorias(){
    this.categoriaService.listCategoria(this.categorias)
    .subscribe(
      res => {
        this.categorias = res;
      },
      err => console.log(err)
    )
  }

  categPrincipal(){
    this.catgPrincipal.categPrincipal()
    .subscribe(
      res => {
        this.ctgPrincipal = res
        this.catgFormPrincipal.patchValue({
          id_categoria1:res[0].id_categoria,
          id_categoria2:res[1].id_categoria,
          id_categoria3:res[2].id_categoria,
        });
        
      },
      err => console.log(err)
    )
  }

  editarCatgPrincipal(id:number){
  
  let form;

   if(id == 1){
    form = {id_categoria: this.catgFormPrincipal.value.id_categoria1}
   }else if(id == 2){
    form = {id_categoria: this.catgFormPrincipal.value.id_categoria2}
   }else if(id == 3){
    form = {id_categoria: this.catgFormPrincipal.value.id_categoria3}
   }
     this.catgPrincipal.editarCatgPrincipal(id,form)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    ) 
  }
  

}
