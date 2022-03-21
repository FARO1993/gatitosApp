import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Gato } from '../../interfaces/gato.interface';
import { GatosService } from '../../services/gatos.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    .img{
      height: 200px
    }
    h1{
      font-size: 60px !important;
      font-family: 'Dancing Script', cursive;
      margin: 2% !important;
      text-align: center;
    }

    @media (max-width: 600px) {
    h1 {
      font-size: 40px !important;
      margin: 3% !important;
    }
}
  `]
})
export class ListadoComponent implements OnInit{

  pageSize: number = 5;
  pageNUmber: number = 1;
  gatosList: Gato[] = [];
  loading: boolean = true;
  pageSizeOptions: number[] = [5,10,25]
  isActive: boolean = false;

  constructor( private gatosService: GatosService,
               private router: Router ) { }

  ngOnInit(): void{
    this.gatosService.getAllBreeds().subscribe( gatos => {
    this.gatosList = gatos;
    this.loading = false;
    })
  }

  onPageActivated(event: PageEvent){
    this.pageSize = event.pageSize;
    this.pageNUmber = event.pageIndex + 1
  }

}
