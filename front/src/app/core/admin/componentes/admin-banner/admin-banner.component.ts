import { Component, OnInit } from '@angular/core';
import {BannerService} from '../../servicios/banner.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-banner',
  templateUrl: './admin-banner.component.html',
  styleUrls: ['./admin-banner.component.css']
})
export class AdminBannerComponent implements OnInit {

  banners = [];

  constructor(
    private bannerService:BannerService,
    private router:Router
    ) { }

  ngOnInit() {
    this.listBanners();
  }

  listBanners(){
    this.bannerService.listarBanners(this.banners)
    .subscribe(
      res => {
        this.banners = res;
      },
      err => console.log(err)
    )
  }

  verBanner(id){
    this.router.navigate(['/admin/editar-banner/'+id]);
  }

  eliminarBanner(id){
    this.bannerService.eliminarBanner(id)
    .subscribe(
      res => {
        this.listBanners();
      },
      err => console.log(err)
    )
  }




}
