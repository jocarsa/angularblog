import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog/blog.component';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component'; 

import { HttpClientModule } from '@angular/common/http';
import { BlogeninicioComponent } from './blogeninicio/blogeninicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BlogComponent,
    QuiensoyComponent,
    ContactoComponent,
    CabeceraComponent,
    PiedepaginaComponent,
    BlogeninicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
