import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../servicios/producto.service'
import {CategoriaService} from "../../servicios/categoria.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  
  id:number
  product:any = {};
  categorias = []
  images:any =[];
  
  constructor(
    private productService:ProductoService,
    private catgService:CategoriaService,
    private activateRoute:ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.verProduct();
    this.listCategoria();
  }

  verProduct(){
    this.activateRoute.params.subscribe(params =>{
      this.id  = params['id'];
      this.productService.verProducto(this.id)
      .subscribe(
        res =>{
          this.product = res.result
          this.images = res.result2
        }
      )
    })
  }

listCategoria(){
  this.catgService.listCategoria(this.categorias)
  .subscribe(
    res =>{
      this.categorias = res
    },
    err => console.log(err)
  )
}

actualizarProduct(){
  this.productService.actualizarProduct(this.id,this.product[0])
  .subscribe(
    res =>{
      console.log(res)
    },
    err => console.log(err)
  )
}

}
