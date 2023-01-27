import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalcrossingService } from 'src/app/services/animalcrossing.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  pageTitle:string = '';
  pageIcon:string = '';
  personaje:any = null;


  constructor(private activatedRoute: ActivatedRoute, private animeService: AnimalcrossingService) {
    this.getPersonaje();

  } 

  ngOnInit() {
    console.log(this.personaje);
    this.pageTitle = this.personaje.name;
    this.pageIcon = this.personaje.photoUrl;


  }
  getPersonaje(): void{
    this.activatedRoute.queryParams.subscribe(params => {
      this.personaje = JSON.parse(params['personaje']);
    });
  }

}
