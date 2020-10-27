import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../../servicios/producto.service";
import {CategoriaService} from "../../servicios/categoria.service";

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  file:FileList;
  filelist:any;
  urls = [];

  product:any = {
    categoria:'0'
  }
  categorias = [];

  constructor(
    private productService:ProductoService,
    private categService:CategoriaService
    ) { }

  ngOnInit() {
    this.listCategoria();
  }

  listCategoria(){
    this.categService.listCategoria(this.categorias)
    .subscribe(
      res =>{
        this.categorias = res;
      },
      err => console.log(err)
    )
  }

  selectImg(event):void {
    this.file = <FileList> event.target.files;
       
        let datos = []
        for (let i = 0; i < this.file.length; i++) {
                let reader = new FileReader();

                reader.onload = (event:any) => {
                   this.urls.push(event.target.result); 
                }
                datos.push(event.target.files[i]);
                reader.readAsDataURL(event.target.files[i]);
        }
        this.filelist = datos
  }


  
    agregar(){  
     this.productService.nuevoProducto(this.filelist,this.product)
       .subscribe(
        res =>{
          this.product = {};
          this.urls = [];
        },
        err => console.log(err)
      )   
    }

    

}
