import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminOutletComponent } from './componentes/admin-outlet/admin-outlet.component';
import { AdminProductoComponent } from './componentes/admin-producto/admin-producto.component';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { AdminCategoriasComponent } from './componentes/admin-categorias/admin-categorias.component';
import { AdminBannerComponent } from './componentes/admin-banner/admin-banner.component';
import { NuevoBannerComponent } from './componentes/nuevo-banner/nuevo-banner.component';
import { EditarBannerComponent } from './componentes/editar-banner/editar-banner.component';
import { AdminUserComponent } from './componentes/admin-user/admin-user.component';
import { AdminLoginComponent } from './componentes/admin-login/admin-login.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path:'adminlogin',component: AdminLoginComponent
  },

  {
    path:'',
    component: AdminOutletComponent, canActivate:[AuthGuard],
    children: [
      { path: '',component: AdminBannerComponent, pathMatch: 'full'},
      { path: 'productos/:page',component: AdminProductoComponent},
      { path: 'nuevo-producto',component: NuevoProductoComponent},
      { path: 'editar-producto/:id', component: EditarProductoComponent},
      { path: 'categorias',component: AdminCategoriasComponent},
      { path:'banner',component:AdminBannerComponent},
      { path:'nuevo-banner',component:NuevoBannerComponent},
      { path:'editar-banner/:id',component:EditarBannerComponent},
      {path:'administradores', component:AdminUserComponent}
    ]
  },

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
