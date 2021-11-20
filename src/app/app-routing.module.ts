import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandingComponent } from './branding/branding.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebDesingComponent } from './web-desing/web-desing.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, },
  { path: 'multimedia', component: MultimediaComponent, },
  { path: 'branding', component: BrandingComponent, },
  { path: 'webdesing', component: WebDesingComponent, },
  { path: 'contacto', component: ContactoComponent, },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
