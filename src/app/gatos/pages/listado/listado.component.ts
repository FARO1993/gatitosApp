import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Gato } from '../../interfaces/gato.interface';
import { GatosService } from '../../services/gatos.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`

    h1 {
      font-size: 60px !important;
      margin-bottom: 30px
    }

    .img{
      height: 200px
    }

    .welcome_title{
      text-align: center;
      font-family: 'Dancing Script', cursive;
      font-size: 40px;
      margin-top: 50px
    }

    mat-card {
      margin-top: 20px; 
      background: black;
      border: 1px solid #ff4082;
    }

    mat-card:hover {
      box-shadow: 0 0 20px #ff4082;
    }

    mat-card-title {
      font-size: 17px !important;
      font-weight: 700
    }

    ::ng-deep .mat-card-header-text {
    margin: 0px !important;
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
    this.findCats()
  }

  async findCats() {
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
