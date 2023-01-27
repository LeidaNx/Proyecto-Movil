import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '3bb86f13e23f27364a3783110d10d059';
  URI= 'https://api.openweathermap.org/data/2.5/weather?';

  constructor(private httpClient: HttpClient) { }

  getWeather(lat:any,lon:any){
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon',lon)
    .set('units', 'metric')
    .set('appid',this.apiKey)
    .set('lang','sp')
    return this.httpClient.get(this.URI,{params });
  }
}
