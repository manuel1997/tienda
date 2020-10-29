import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../servicios/producto.service'
import { CategoriaService } from "../../servicios/categoria.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  id: number
  categorias = []
  images: any = [];

  submit = false;

  formProduct = new FormGroup({
    titulo: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    especificaciones: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
  });

  constructor(
    private productService: ProductoService,
    private catgService: CategoriaService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.verProduct();
    this.listCategoria();
  }

  verProduct() {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.productService.verProducto(this.id)
        .subscribe(
          res => {
            this.formProduct.patchValue({
              titulo: res.result[0].titulo,
              categoria: res.result[0].categoria,
              especificaciones: res.result[0].especificaciones,
              precio: res.result[0].precio,
              stock: res.result[0].stock,
              descripcion: res.result[0].descripcion
            });
            this.images = res.result2
          }
        )
    })
  }

  listCategoria() {
    this.catgService.listCategoria(this.categorias)
      .subscribe(
        res => {
          this.categorias = res
        },
        err => console.log(err)
      )
  }

  actualizarProduct() {
    this.submit = true;
    if (!this.formProduct.invalid) {
      this.productService.actualizarProduct(this.id, this.formProduct.value)
        .subscribe(
          res => {
            console.log(res)
          },
          err => console.log(err)
        )
    }
  }

}
