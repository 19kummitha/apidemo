import { Component } from '@angular/core';
import { WeatherForecast } from './Models/WeatherForecast';
import { WeatherforecastService } from './service/weatherforecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apidemo';
  weatherData:WeatherForecast[]=[];
  constructor(private weatherService:WeatherforecastService)
  {

  }
  ngOnInit(){
    this.weatherService.getWeatherForecast()
      .subscribe({
        next:(data:WeatherForecast[])=>{
          this.weatherData=data;
        },
        error:(error)=>{
          console.error("Error while fetching",error);
        },
        complete:()=>{
          console.log("Data fetching completed");
        }

      })
  }
}
