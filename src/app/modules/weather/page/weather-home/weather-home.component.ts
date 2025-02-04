import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from '../../../../models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit{
  initialCityName = 'São Paulo';
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherService){}
  ngOnInit(): void {
    this.getWheaterDatas(this.initialCityName);
  }
    getWheaterDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName)
    .subscribe({
      next:(response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas);
      },
      error:(error) => console.log(error)
    }

    )
    }
  }

