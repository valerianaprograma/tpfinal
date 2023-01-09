import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    BannerComponent,
    LogoApComponent,
    ProyectosComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
