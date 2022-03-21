import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GatosService } from '../../services/gatos.service';
import { Gato, Weight } from '../../interfaces/gato.interface';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styles: [
    `
    .image_resolution{
      width:620px;
      height:480px;
      border-radius: 20%;
    }

    .cat_description{
      width: 620px;
      font-size: 20px
    }

    mat-chip{
      font-size: 20px
    }

    h1{
      font-family: 'Dancing Script', cursive;
      font-size: 40px
    }
    `
  ]
})
export class GatoComponent implements OnInit {

  loading: boolean = true;
  gatoImage!: string;
  gatoSelected!: Gato;

  constructor( private activatedRouter: ActivatedRoute, 
               private gatosService: GatosService,
               private router: Router ) { }

  ngOnInit(): void{

      this.activatedRouter.params.pipe(
        switchMap( ({ id }) => this.gatosService.getCatImageById( id ))
      ).subscribe( gatoImg => {
        gatoImg.forEach( el => {
          let gato = Object.values(el)[0];
          this.gatoImage = Object.values(el)[2];
          this.gatoSelected = gato[0];
          this.loading = false;
        })
      })    

  }

}
