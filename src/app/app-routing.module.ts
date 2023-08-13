import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InazumaUnoComponent } from './inazuma-uno/inazuma-uno.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'ie1', component: InazumaUnoComponent },
  { path: 'ie2', component: InazumaDosComponent },
  { path: 'ie3', component: InazumaTresComponent },
  { path: 'iego1', component: InazumagoUnoComponent },
  { path: 'iego2', component: InazumagoDosComponent },
  { path: 'iego3', component: InazumagoTresComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'alternativa', component: AlternativaComponent },
  { path: 'iereloaded', component: InazumaReloadedComponent },
  { path: 'ieouter', component: InazumaOuterComponent },
  { path: 'ieares', component: InazumaAresComponent },
  { path: 'ieorion', component: InazumaOrionComponent },
  { path: 'original', component: OriginalComponent },
  { path: 'peliculas', component: PeliculasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
