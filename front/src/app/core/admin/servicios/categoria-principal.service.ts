import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class CategoriaPrincipalService {

  api = environment.Url_api; 

  constructor(private http:HttpClient) { }

  categPrincipal(){
    return this.http.get<any>(this.api+'obtCategoria1')
  }

  editarCatgPrincipal(id:number,catg){
    return this.http.put<any>(this.api+'editCatgPrincipal/'+id,catg)
  }

}
