import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from "@angular/forms";


import { AdminRoutingModule } from './admin-routing.module';
import { AdminNabvarComponent } from './componentes/admin-nabvar/admin-nabvar.component';
import { AdminOutletComponent } from './componentes/admin-outlet/admin-outlet.component';
import { AdminProductoComponent } from './componentes/admin-producto/admin-producto.component';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { AdminCategoriasComponent } from './componentes/admin-categorias/admin-categorias.component';



@NgModule({
  declarations: [AdminNabvarComponent, AdminOutletComponent, AdminProductoComponent, NuevoProductoComponent, EditarProductoComponent, AdminCategoriasComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
