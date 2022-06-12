import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `
    mat-card {
      border-radius: 10px;
      width: 500px;
      background: none;
      border: 1px solid #494949;
    }
    `
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
