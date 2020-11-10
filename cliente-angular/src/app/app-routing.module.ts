import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminObraComponent } from './components/admin-obra/admin-obra.component';
import { AdminDetalleObraComponent } from './components/admin-detalle-obra/admin-detalle-obra.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path:'inicio',component:InicioComponent
  },
  {
    path:'admin-obra',component:AdminObraComponent
  },
  {
    path:'admin-detalle-obra/:id_obra',component:AdminDetalleObraComponent
  },
  {
    path:'**',redirectTo:'admin-obra', pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
