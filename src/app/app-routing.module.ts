import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";
import { BlogComponent } from "./blog/blog.component";
import { QuiensoyComponent } from "./quiensoy/quiensoy.component";
import { ContactoComponent } from "./contacto/contacto.component";

const routes: Routes = [
    {path:"inicio",component:InicioComponent},
    {path:"blog",component:BlogComponent},
    {path:"quiensoy",component:QuiensoyComponent},
    {path:"contacto",component:ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
