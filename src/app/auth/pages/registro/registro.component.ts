import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(3)]],
  })

  constructor( private fb: FormBuilder ) { }


  registrar() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }

}
