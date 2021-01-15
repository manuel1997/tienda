import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from "../../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  api = environment.Url_api;

  constructor(private http:HttpClient) { }

  listAdmin(){
    return this.http.get<any>(this.api+'listAdmin');
  }

  insertAdmin(admin){
    return this.http.post<any>(this.api+'insertAdmin',admin);
  }

  actualizarAdmin(id,admin){
    return this.http.put<any>(this.api+`actualizarAdmin/${id}`,admin);
  }


  eliminarAdmin(id){
    return this.http.delete<any>(this.api+'eliminarAdmin/'+id);
  }


}
