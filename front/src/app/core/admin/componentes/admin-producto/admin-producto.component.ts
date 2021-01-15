import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../../servicios/producto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PagintateService} from "../../servicios/paginate.service"


@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.component.html',
  styleUrls: ['./admin-producto.component.css']
})
export class AdminProductoComponent implements OnInit {

  pagina:number;
  numpage:number;
  pagSig:number;
  pager: any = {};

  products = []
  categorias = []

  constructor(
    private activateRoute:ActivatedRoute,
    private productService:ProductoService,
    private router:Router,
    private paginate:PagintateService
    ) {
     
     }

  ngOnInit() {
    this.listProduct();    
  }

  listProduct(){
    this.activateRoute.params.subscribe(params => {
      this.pagina = params['page'];
    this.productService.listProducto(this.pagina,this.products)
    .subscribe(
      res =>{
        this.numpage = res['numPages'];
        this.products = res['products'];
        this.paginado(this.pagina);
      },
      err => console.log(err)
    )
    })
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

  paginado(page: number) {    
    this.pagSig = Number(page) + 1;
    this.pager = this.paginate.getPager(this.numpage,page);
  }

}
