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


const routes: Routes = [
  {
    path:'',
    component: AdminOutletComponent,
    children: [
      { path: '',component: AdminProductoComponent, pathMatch: 'full'},
      { path: 'nuevo-producto',component: NuevoProductoComponent},
      { path: 'editar-producto/:id', component: EditarProductoComponent},
      { path: 'categorias',component: AdminCategoriasComponent},
      { path:'banner',component:AdminBannerComponent},
      { path:'nuevo-banner',component:NuevoBannerComponent},
      { path:'editar-banner/:id',component:EditarBannerComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
