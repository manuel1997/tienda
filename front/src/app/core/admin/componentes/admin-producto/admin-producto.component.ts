import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../../servicios/producto.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.component.html',
  styleUrls: ['./admin-producto.component.css']
})
export class AdminProductoComponent implements OnInit {

  products = []
  categorias = []

  constructor(
    private productService:ProductoService,
    private router:Router
    ) { }

  ngOnInit() {
    this.listProduct();
  }

  listProduct(){
    this.productService.listProducto(this.products)
    .subscribe(
      res =>{
        this.products = res;
      },
      err => console.log(err)
    )
  }

  editProduct(id){
    this.router.navigate(['/admin/editar-producto/'+id]);
  }

  eliminarProduct(id){
    this.productService.eliminarProduct(id)
    .subscribe(
      res =>{
        this.listProduct();
      },
      err => console.log(err)
    )
  }

}
