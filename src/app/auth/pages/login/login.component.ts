/*import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .login{
      width: 300px;
      height: 320px;
      border-radius: 5%;
    }
  `]
})
export class LoginComponent {


  constructor( private router: Router,
               private authService: AuthService ) { }

  login() {
    // verificar en la base que el usuario existe.
    // guardar usuario en un servicio.
    this.authService.login().subscribe( auth => {
      console.log(auth)

      if( auth.id ){
        this.router.navigate(["./gatos/bienvenida"])
      }
    }) 
    
  }

  noLogIn() {
    this.authService.logout();
    this.router.navigate(["./gatos/bienvenida"])
  }

}*/
