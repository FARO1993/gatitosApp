import { AfterViewInit, Component, OnInit } from '@angular/core';
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

    .point_container{
      display: flex !important;
      flex-direction: row !important;
    }

    .cat_description{
      width: 620px;
      font-size: 20px
    }

    .image_point{
      width: 30px;
      height: 40px;
      margin: 5px
    }

    .welcome_title{
      text-align: center;
      font-family: 'Dancing Script', cursive;
      font-size: 40px;
      margin-top: 50px
    }

    h4{
      margin-right: 10px;
      font-size: 25px
    }

    mat-chip{
      font-size: 20px !important;
      background: none !important;
      border: 1px solid #ff4082 !important;
      color: #ff4082 !important
    }

    h1{
      font-size: 60px !important;
      margin-bottom: 30px
    }
    `
  ]
})
export class GatoComponent implements OnInit {

  loading: boolean = true;
  gatoImage!: string;
  gatoSelected!: Gato;
  image: string = "assets/puntaje.png";
  affectionLevel: string[] = [];
  adaptabilityLevel: string[] = [];
  childFriendlyLevel: string[] = [];
  dogFriendlyLevel: string[] = [];
  energyLevel: string[] = [];
  groomingLevel: string[] = [];
  healthIssuesLevel: string[] = [];
  intelligenceLevel: string[] = [];
  sheddingLevel: string[] = [];
  socialNeedsLevel: string[] = [];
  strangerFriendlyLevel: string[] = [];
  vocalisationLevel: string[] = [];

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
          this.affectionLevel = this.repeatImg(this.image, this.gatoSelected.affection_level);
          this.adaptabilityLevel = this.repeatImg(this.image, this.gatoSelected.adaptability); 
          this.childFriendlyLevel = this.repeatImg(this.image, this.gatoSelected.child_friendly); 
          this.dogFriendlyLevel = this.repeatImg(this.image, this.gatoSelected.dog_friendly); 
          this.energyLevel = this.repeatImg(this.image, this.gatoSelected.energy_level); 
          this.groomingLevel = this.repeatImg(this.image,   this.gatoSelected.grooming); 
          this.healthIssuesLevel = this.repeatImg(this.image,  this.gatoSelected.health_issues); 
          this.intelligenceLevel = this.repeatImg(this.image, this.gatoSelected.intelligence); 
          this.sheddingLevel = this.repeatImg(this.image, this.gatoSelected.shedding_level); 
          this.socialNeedsLevel = this.repeatImg(this.image,this.gatoSelected.social_needs); 
          this.strangerFriendlyLevel = this.repeatImg(this.image, this.gatoSelected.stranger_friendly); 
          this.vocalisationLevel = this.repeatImg(this.image, this.gatoSelected.vocalisation);           
        })
      })
  }

  repeatImg(img:string, iterator: number): string[] {
    const imagen = [];
    for (let i = 0; i < iterator; i++) {
      imagen.push(img);
    }
   
    return imagen;
  }

  irAWikipedia(){
    let url = this.gatoSelected.wikipedia_url;
    //this.router.navigateByUrl(url)
    window.open(url);
  }

  volver(){
    this.router.navigate(['gatos/listado'])
  }

  

}

