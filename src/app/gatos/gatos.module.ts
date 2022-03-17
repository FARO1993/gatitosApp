import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GatoComponent } from './pages/gato/gato.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { GatosRoutingModule } from './gatos-routing.module';
import { MaterialModule } from '../material/material.module';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorPipe } from './pipes/paginator.pipe';


@NgModule({
  declarations: [
    BuscarComponent,
    GatoComponent,
    HomeComponent,
    ListadoComponent,
    BienvenidaComponent,
    PaginatorPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    GatosRoutingModule,
    MaterialModule,
    NgbModule
  ]
})
export class GatosModule { }
