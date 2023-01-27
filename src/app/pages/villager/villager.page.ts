import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { AnimalcrossingService } from 'src/app/services/animalcrossing.service';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-villager',
  templateUrl: './villager.page.html',
  styleUrls: ['./villager.page.scss'],
})
export class VillagerPage implements OnInit {

  characters?:any= [];

  pageTitle = 'Personajes';
  image = 'totakeke.png';
  pageIcon = `../../../assets/img/${this.image}`;

  @ViewChild(IonInfiniteScroll) infinite!: IonInfiniteScroll;

  constructor(
    private animalService: AnimalcrossingService,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.getListadoAnimalCrossing();
  }

  getListadoAnimalCrossing(){
    this.animalService.getListadoSymbols().then(
      respuesta => {
        this.characters = respuesta.data;
        console.log(this.characters);
    })
  }
  goToDetallePersonaje(personaje:any): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        personaje : JSON.stringify(personaje)
      }      
    };
    this.navController.navigateForward(['detalle/'],navigationExtras);
  }

}
