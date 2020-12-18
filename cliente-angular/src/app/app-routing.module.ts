import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminObraComponent } from './components/admin-obra/admin-obra.component';
import { AdminDetalleObraComponent } from './components/admin-detalle-obra/admin-detalle-obra.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ObrasComponent } from './components/obras/obras.component';
import { ObrasDetalleComponent } from './components/obras-detalle/obras-detalle.component';
import { ConfiguracionObraComponent } from './components/configuracion-obra/configuracion-obra.component';
import { AdminContactoComponent } from './components/admin-contacto/admin-contacto.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { DonacionesComponent } from "./components/donaciones/donaciones.component";
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path:'inicio',component:InicioComponent
  },
  {
    path:'admin-obra',component:AdminObraComponent,canActivate:[AuthGuard]
  },
  {
    path:'admin-detalle-obra/:id_obra',component:AdminDetalleObraComponent
  },
  {
    path:'obras',component:ObrasComponent
  },
  {
    path:'obras-detalle',component:ObrasDetalleComponent
  },
  {
    path:'configuracion-obra',component:ConfiguracionObraComponent
  },
  {
    path:'admin-contacto',component:AdminContactoComponent
  },
  {
    path:'contacto',component:ContactoComponent 
  },
  {
    path:'registro',component:RegistroComponent
  },
  {
    path:'ingreso',component:IngresoComponent
  },
  {
    path:'**',redirectTo:'inicio', pathMatch:'full'
  },
  {
    path:'donaciones',component:DonacionesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
