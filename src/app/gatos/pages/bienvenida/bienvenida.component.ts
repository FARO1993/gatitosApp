import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styles: [`
    .mat-raised-button {
      font-size: 16px;
      text-transform: uppercase;
      width: 300px;
      height: 50px;
    }

    img{
      border-radius: 5%;
      height: 900px;
    }

    h1 {
      font-size: 60px !important;
      margin-bottom: 30px
    }

    p {
      font-size: 20px;
      text-align: center;
    }

    .welcome_title{
      text-align: center;
      font-family: 'Dancing Script', cursive;
      font-size: 40px;
      margin-top: 50px
    }

  `]
})
export class BienvenidaComponent implements OnInit {

  //Variable que voy a usar para determinar que debo mostrar
  isBetty: boolean = true;
  //Variable que voy a usar para activar elevation en el button
  isClick: boolean = false;
  scrollPosition: any;

  constructor(){}

  ngOnInit(): void {
  }

  catChange(){
    this.scrollPosition = document.getElementById("top-position")?.scrollIntoView();;
    this.isBetty = !this.isBetty
  }

  viewMore() {
    //to-do
  }


}
