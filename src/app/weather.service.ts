import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeather(city:string,units:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=675062d58ee5e7c9d2ff32477b0b4763&units='+units)
  }
}
