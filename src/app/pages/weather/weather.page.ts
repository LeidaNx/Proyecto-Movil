import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { WeatherService } from '../../services/weather.service';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  image = 'sol.png';
  pageIcon = `../../../assets/img/${this.image}`;

  pageTitle = 'Weather';
  isNotHome = false;


  lat:any;
  lon:any;
  weather:any;


  constructor(
    private weatherService: WeatherService, 

    ){ 
  
  }


  ngOnInit() {
    this.getLocation()

  }


  getLocation(){
    navigator.geolocation.getCurrentPosition((position)=>{
      this.lat=position.coords.latitude;
      this.lon=position.coords.longitude;
      
      this.weatherService.getWeather(this.lat, this.lon).subscribe(data=>{
        this.weather=data;
      })
    })
  }


}
