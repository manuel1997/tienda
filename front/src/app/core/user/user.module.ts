import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { OutletComponent } from './componentes/outlet/outlet.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { VistaPricipalComponent } from './componentes/vista-pricipal/vista-pricipal.component';
import { VistaProductoComponent } from './componentes/vista-producto/vista-producto.component';



@NgModule({
  declarations: [OutletComponent,NavbarComponent,BannerComponent, ProductosComponent, FooterComponent, VistaPricipalComponent, VistaProductoComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
