import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutletComponent } from './componentes/outlet/outlet.component';
import { VistaPricipalComponent } from './componentes/vista-pricipal/vista-pricipal.component';
import { VistaProductoComponent } from './componentes/vista-producto/vista-producto.component';



const routes: Routes = [
  {
    path:'',
    component: OutletComponent,
    children: [
      { path: '',component: VistaPricipalComponent, pathMatch: 'full'},
      { path: 'producto', component: VistaProductoComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
