import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../../servicios/producto.service";
import { CategoriaService } from "../../servicios/categoria.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  fileList: File[] = [];
  urls = [];

  submit = false;

  formProduct = new FormGroup({
    titulo: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    especificaciones: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    images: new FormControl('', Validators.required)
  });

  categorias = [];

  constructor(
    private productService: ProductoService,
    private categService: CategoriaService
  ) { }

  ngOnInit() {
    this.listCategoria();
  }

  listCategoria() {
    this.categService.listCategoria(this.categorias)
      .subscribe(
        res => {
          this.categorias = res;
        },
        err => console.log(err)
      )
  }

  selectImg(event): void {

    let file = <FileList>event.target.files;

    for (let i = 0; i < file.length; i++) {
      let reader = new FileReader();
      let selectedFile = event.target.files[i];

      reader.onload = (event: any) => {
        this.urls.push(event.target.result);
      }
      reader.readAsDataURL(event.target.files[i]);

      this.fileList.push(selectedFile);

    }

  }



  agregar() {
    this.submit = true;
    if (!this.formProduct.invalid) {
      this.productService.nuevoProducto(this.fileList, this.formProduct.value)
        .subscribe(
          res => {
            this.urls = [];
            this.submit = false;
            this.formProduct.reset()
            console.log(res)
          },
          err => console.log(err)
        )
    }
  }



}
