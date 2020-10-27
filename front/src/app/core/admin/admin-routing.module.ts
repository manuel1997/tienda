import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminOutletComponent } from './componentes/admin-outlet/admin-outlet.component';
import { AdminProductoComponent } from './componentes/admin-producto/admin-producto.component';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { AdminCategoriasComponent } from './componentes/admin-categorias/admin-categorias.component';


const routes: Routes = [
  {
    path:'',
    component: AdminOutletComponent,
    children: [
      { path: '',component: AdminProductoComponent, pathMatch: 'full'},
      { path: 'nuevo-producto',component: NuevoProductoComponent},
      { path: 'editar-producto/:id', component: EditarProductoComponent},
      { path: 'categorias',component: AdminCategoriasComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
