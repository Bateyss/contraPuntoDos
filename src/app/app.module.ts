import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { InicioComponent } from './inicio/inicio.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { BrandingComponent } from './branding/branding.component';
import { WebDesingComponent } from './web-desing/web-desing.component';
import { ContactoComponent } from './contacto/contacto.component'
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatDialogModule,
  MatTableModule,
  MatGridListModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTabsModule,
  MatMenuModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatRadioModule
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    InicioComponent,
    MultimediaComponent,
    BrandingComponent,
    WebDesingComponent,
    ContactoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    NgbModule,
    materialModules,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
