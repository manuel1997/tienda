import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from "../../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

 api = environment.Url_api;

  constructor(private http:HttpClient) { }

  nuevoProducto(file,product){ 
    const fd = new FormData();
    file.forEach(files => {fd.append('images',files);});
    fd.append('titulo',product.titulo)
    fd.append('categoria',product.categoria)
    fd.append('especificaciones',product.especificaciones)
    fd.append('precio',product.precio)
    fd.append('stock',product.stock)
    fd.append('descripcion',product.descripcion)
    return this.http.post<any>(this.api+'insertProduct',fd);
  }

  listProducto(page,product){
    return this.http.get<any>(this.api+`listProduct/${page}`);
  }

  verProducto(id){
    return this.http.get<any>(this.api+'editProduct/'+id);
  }

  actualizarProduct(id,product){
    return this.http.put<any>(this.api+'actualizarProduct/'+id,product)
  }

  eliminarProduct(id){
    return this.http.delete<any>(this.api+'deleteProduct/'+id)
  }

}
