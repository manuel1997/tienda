import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";


import { AdminRoutingModule } from './admin-routing.module';
import { AdminNabvarComponent } from './componentes/admin-nabvar/admin-nabvar.component';
import { AdminOutletComponent } from './componentes/admin-outlet/admin-outlet.component';
import { AdminProductoComponent } from './componentes/admin-producto/admin-producto.component';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { AdminCategoriasComponent } from './componentes/admin-categorias/admin-categorias.component';


@NgModule({
  declarations: [AdminNabvarComponent, AdminOutletComponent, AdminProductoComponent, NuevoProductoComponent, AdminCategoriasComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModule { }
