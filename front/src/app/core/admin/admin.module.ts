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
import { AdminBannerComponent } from './componentes/admin-banner/admin-banner.component';
import { NuevoBannerComponent } from './componentes/nuevo-banner/nuevo-banner.component';
import { EditarBannerComponent } from './componentes/editar-banner/editar-banner.component';
import { AdminCategoriaPrincipalComponent } from './componentes/admin-categoria-principal/admin-categoria-principal.component';
import { AdminUserComponent } from './componentes/admin-user/admin-user.component';
import { AdminLoginComponent } from './componentes/admin-login/admin-login.component';

import { AuthGuard } from './auth.guard';




@NgModule({
  declarations: [
    AdminNabvarComponent,
     AdminOutletComponent,
      AdminProductoComponent,
       NuevoProductoComponent,
        EditarProductoComponent,
         AdminCategoriasComponent,
          AdminBannerComponent,
           NuevoBannerComponent,
            EditarBannerComponent,
             AdminCategoriaPrincipalComponent,
             AdminUserComponent,
             AdminLoginComponent
             ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ],
  providers:[
    AuthGuard,
  ]
})
export class AdminModule { }
