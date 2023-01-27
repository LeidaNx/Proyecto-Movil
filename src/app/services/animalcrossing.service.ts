import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalcrossingService {

  urlEndPoint: string = 'https://api-blue-archive.vercel.app/api/characters'

  constructor(private httpClient: HttpClient) { }

  getListadoSymbols(): Promise<any> { 
    return new Promise((resolve, reject) => {
			this.httpClient.get(`${this.urlEndPoint}`).subscribe(respuesta => { resolve(respuesta) }, (err) => { reject(err) });
		});
	}






  
}