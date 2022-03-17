import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styles: [`

    .welcome_title{
      text-align: center;
      font-family: 'Dancing Script', cursive;
      font-size: 40px
    }

    img{
      border: 4px solid;
      border-radius: 5%;
      border-style: inset white ;
    }

  `]
})
export class BienvenidaComponent implements OnInit{

  //Variable que voy a usar para determinar que debo mostrar
  isBetty: boolean = true;
  //Variable que voy a usar para activar elevation en el button
  isClick: boolean = false;

  constructor(){}

  ngOnInit(): void {
  }

  catChange(){
    this.isBetty = !this.isBetty
  }

  viewMore() {
    //to-do
  }


}
