/*import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor ( private authService: AuthService,
                private router: Router ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      /*if ( this.authService.auth.id ){
        return true;
      } else {
        console.log("bloqueado por el canActivate")
        return false;
      }*/

/*      return this.authService.verificarAuth()
                             .pipe(
                               tap( isAuth => {
                                 if ( !isAuth ){
                                   this.router.navigate(["./auth/login"])

                                 }
                               })
                             )
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificarAuth()
      .pipe(
        tap( isAuth => {
          if ( !isAuth ){
            this.router.navigate(["./auth/login"])

          }
        })
      )
      /*if ( this.authService.auth.id ){
        return true;
      } else {
        console.log("bloqueado por el canLoad")
        return false;
      }*/
  /*}
}*/
