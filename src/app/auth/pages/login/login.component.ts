import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .mat-raised-button {
      font-size: 16px;
      text-transform: uppercase;
      width: 300px;
      height: 50px;
    }
    `
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    password: ["", [Validators.required, Validators.minLength(3)]]
  })

  constructor( private router: Router,
               private fb: FormBuilder ) {}


  login() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid)
  }

}