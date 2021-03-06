import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AdminObraComponent } from './components/admin-obra/admin-obra.component';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { AdminDetalleObraComponent } from './components/admin-detalle-obra/admin-detalle-obra.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { InicioComponent } from './components/inicio/inicio.component';
import { ObrasComponent } from './components/obras/obras.component';
import { ObrasDetalleComponent } from './components/obras-detalle/obras-detalle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ConfiguracionObraComponent } from './components/configuracion-obra/configuracion-obra.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';


import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { AdminContactoComponent } from './components/admin-contacto/admin-contacto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';

import { AuthGuard } from "./auth.guard";

import { TokenInterceptorService } from "./services/token-interceptor.service";
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { QuienessomosPublicoComponent } from './components/quienessomos-publico/quienessomos-publico.component';
import { DonacionPublicoComponent } from './components/donacion-publico/donacion-publico.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminObraComponent,
    AdminDetalleObraComponent,
    InicioComponent,
    ObrasComponent,
    ObrasDetalleComponent,
    ConfiguracionObraComponent,
    DonacionesComponent,
    AdminContactoComponent,
    ContactoComponent,
    RegistroComponent,
    IngresoComponent,
    QuienessomosComponent,
    QuienessomosPublicoComponent,
    DonacionPublicoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularEditorModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
