import { Component, OnInit } from '@angular/core';
import {BannerService} from '../../servicios/banner.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-banner',
  templateUrl: './nuevo-banner.component.html',
  styleUrls: ['./nuevo-banner.component.css']
})
export class NuevoBannerComponent implements OnInit {

  file:File;
  photoSelected: string | ArrayBuffer;

  formBanner = new FormGroup({
    titulo: new FormControl(''),
    descripcion: new FormControl(''),
    btn: new FormControl(''),
    images: new FormControl('', Validators.required)
  });

  constructor(private bannnerService:BannerService) { }

  ngOnInit() {
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

  agregar(){
    this.bannnerService.agregarBanner(this.formBanner.value,this.file)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

}
