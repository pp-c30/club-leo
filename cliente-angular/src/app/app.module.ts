import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminObraComponent } from './components/admin-obra/admin-obra.component';
import { ReactiveFormsModule} from "@angular/forms";
import { AdminDetalleObraComponent } from './components/admin-detalle-obra/admin-detalle-obra.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { InicioComponent } from './components/inicio/inicio.component';
<<<<<<< HEAD
import { ObrasComponent } from './components/obras/obras.component';
import { ObrasDetalleComponent } from './components/obras-detalle/obras-detalle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ConfiguracionObraComponent } from './components/configuracion-obra/configuracion-obra.component';


=======
import { DonacionesComponent } from './components/donaciones/donaciones.component';
>>>>>>> a2c43995a628504d4002a6fc727c324aad464133

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminObraComponent,
    AdminDetalleObraComponent,
    InicioComponent,
<<<<<<< HEAD
    ObrasComponent,
    ObrasDetalleComponent,
    ConfiguracionObraComponent,
=======
    DonacionesComponent
>>>>>>> a2c43995a628504d4002a6fc727c324aad464133
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
