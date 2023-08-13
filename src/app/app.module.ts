import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './inicio/inicio.component';
import { InazumaUnoComponent } from './inazuma-uno/inazuma-uno.component';
import { HttpClientModule } from '@angular/common/http';
import { InazumaDosComponent } from './inazuma-dos/inazuma-dos.component';
import { InazumaTresComponent } from './inazuma-tres/inazuma-tres.component';
import { InazumagoUnoComponent } from './inazumago-uno/inazumago-uno.component';
import { InazumagoDosComponent } from './inazumago-dos/inazumago-dos.component';
import { InazumagoTresComponent } from './inazumago-tres/inazumago-tres.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { AlternativaComponent } from './alternativa/alternativa.component';
import { InazumaReloadedComponent } from './inazuma-reloaded/inazuma-reloaded.component';
import { InazumaOuterComponent } from './inazuma-outer/inazuma-outer.component';
import { InazumaAresComponent } from './inazuma-ares/inazuma-ares.component';
import { InazumaOrionComponent } from './inazuma-orion/inazuma-orion.component';
import { OriginalComponent } from './original/original.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    InazumaUnoComponent,
    InazumaDosComponent,
    InazumaTresComponent,
    InazumagoUnoComponent,
    InazumagoDosComponent,
    InazumagoTresComponent,
    SobreMiComponent,
    AlternativaComponent,
    InazumaReloadedComponent,
    InazumaOuterComponent,
    InazumaAresComponent,
    InazumaOrionComponent,
    OriginalComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
