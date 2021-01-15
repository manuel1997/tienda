import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {BannerService} from '../../servicios/banner.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-banner',
  templateUrl: './editar-banner.component.html',
  styleUrls: ['./editar-banner.component.css']
})
export class EditarBannerComponent implements OnInit {

  id: number
  image:string;

  file:File;
  photoSelected: string | ArrayBuffer;

  formEditBanner = new FormGroup({
    titulo: new FormControl(''),
    descripcion: new FormControl(''),
    btn: new FormControl(''),
    images: new FormControl('', Validators.required)
  });

  constructor(
    private bannnerService:BannerService,
    private activateRoute: ActivatedRoute,
    ) { }


  ngOnInit() {
    this.verBanner();
  }

  verBanner(){
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.bannnerService.verbanner(this.id)
      .subscribe(
        res =>{
          this.formEditBanner.patchValue({
            titulo: res[0].titulo,
            descripcion: res[0].descripcion,
            btn:res[0].btn
          });
          this.image = res[0].img
        }
      )
    })
  }

  onPhotoselected(event): void{
    if (event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //Image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  actualizarBanner(){
    this.bannnerService.actualizarBanner(this.id,this.formEditBanner.value,this.file)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

}
