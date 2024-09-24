import { Injectable } from '@angular/core';
import { WeatherForecast } from '../Models/WeatherForecast';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {
  baseApiUrl:string='http://localhost:5001';

  constructor(private http:HttpClient) { }
  getWeatherForecast():Observable<WeatherForecast[]>{
    return this.http.get<WeatherForecast[]>(`${this.baseApiUrl}/WeatherForecast`);
  }
}
