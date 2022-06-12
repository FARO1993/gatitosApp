import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .title{
      font-size: 40px;
      margin-left: 3%
    };

  `]
})
export class HomeComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {

  }

  logout() {
    this.router.navigate(["./auth/login"])
  }

}
