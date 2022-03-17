import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { GatoComponent } from './pages/gato/gato.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'bienvenida',
        component: BienvenidaComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'gato/:id',
        component: GatoComponent
      },
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      },
    ]
  }
]



@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ 
    RouterModule
  ]
})
export class GatosRoutingModule { }
