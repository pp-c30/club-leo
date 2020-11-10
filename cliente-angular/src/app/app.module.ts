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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminObraComponent,
    AdminDetalleObraComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
