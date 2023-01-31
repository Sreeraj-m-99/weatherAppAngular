import { Component ,OnInit} from '@angular/core';

import{WeatherService} from './../weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  myWeather:any;
  temparature:number=0;
  feelLikeTemparature:number=0;
  pressure:number=0;
  humidity:number=0;
  summary:string="";
  city:string="";
  units:string="metric"
  IconUrl:string=""
  // cityName:string="";

  constructor(private weatherservice:WeatherService){

  }

  ngOnInit(){

   this.getWeather(this.city)
   this.city=""

   

  }

  onSubmit(){

    this.getWeather(this.city)
    this.city=""

  }



  private getWeather(city:string){

    this.weatherservice.getWeather(this.city,this.units).subscribe({
      next:(result)=>{
        console.log(result);
        this.myWeather=result;
        this.temparature=this.myWeather.main.temp;
        this.feelLikeTemparature=this.myWeather.main.feels_like;
        this.humidity=this.myWeather.main.humidity;
        this.pressure=this.myWeather.main.pressure;
        this.summary=this.myWeather.weather[0].main;
        this.city=this.myWeather.name

        this.IconUrl='http://openweathermap.org/img/wn/'+this.myWeather.weather[0].icon+'@2x.png'
        
  
  
  
  
  
        
      },
  
      error:(error)=>console.log(error.message),
  
      complete:()=>console.info("API CALL COMPLETED")
      
    })
  }
  

   
}


