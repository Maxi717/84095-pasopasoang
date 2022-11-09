import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { EjemploCompComponent } from './components/ejemplo-comp/ejemplo-comp.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent },
    ]),
    NgbPaginationModule,
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    ListaArticulosComponent,
    EjemploCompComponent,
    ArticulosComponent,
    ArticulosFamiliasComponent,
    InicioComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
