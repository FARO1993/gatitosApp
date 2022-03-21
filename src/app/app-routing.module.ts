import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*import { AuthGuard } from './auth/guards/auth.guard';*/
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
/*  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    
  },*/
  {
    path: 'gatos',
    loadChildren: () => import('./gatos/gatos.module').then( m => m.GatosModule),
    /*canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]*/
  },
  {
    path:'404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    //component: ErrorPageComponent
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
