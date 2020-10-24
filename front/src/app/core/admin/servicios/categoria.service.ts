import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

 api = environment.Url_api;

  constructor(private http:HttpClient) { }

  listCategoria(categoria){
    return this.http.get<any>(this.api+'listarCategorias')
  }

  nuevaCategoria(categoria){
    return this.http.post<any>(this.api+'insertCategoria',categoria);
  }

  editarCategoria(id,categoria){
    return this.http.put<any>(this.api+'editCategoria/'+id,categoria)
  }

  eliminarCategoria(id){
    return this.http.delete<any>(this.api+'eliminarCategoria/'+id)
  }

}
