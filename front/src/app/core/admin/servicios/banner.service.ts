import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  api = environment.Url_api; 

  constructor(private http:HttpClient) { }

  listarBanners(banners){
    return this.http.get<any>(this.api+'listBanner');
  }

  agregarBanner(banner,file){
    const fd =  new FormData();
    fd.append('titulo',banner.titulo);
    fd.append('descripcion',banner.descripcion);
    fd.append('btn',banner.btn);
    fd.append('images',file);
    return this.http.post<any>(this.api+'insertBanner',fd)
  }

  verbanner(id){
    return this.http.get(this.api+'verBanner/'+id)
  }

  actualizarBanner(id,banner,file){
    const fd =  new FormData();
    fd.append('titulo',banner.titulo);
    fd.append('descripcion',banner.descripcion);
    fd.append('btn',banner.btn);
    fd.append('images',file);
    return this.http.put(this.api+'actualizarBanner/'+id,fd)
  }

  eliminarBanner(id){
    return this.http.delete(this.api+'eliminarBanner/'+id)
  }
}
