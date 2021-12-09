import { WeatherForecast } from './../WeatherForecast';
import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {

  forecasts: WeatherForecast[] = [];

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
    let localForeCasts = this.forecasts;
    this.weather.getCurrentWeather().subscribe(
      (value) => {
        value.forEach((forecast) => {
          this.forecasts.push(forecast);
          console.log("ngOnInit:  next forecastValue " + forecast.summary);
        });
      },
      (msg) => {
        console.log("ngOnInit: Error: " + msg);
      },
      () =>{
        console.log("ngOnInit: get current weather completed!");
        console.log("2 forecast count: ", localForeCasts.length);
      }
      // value.forEach((forecastValue) => {
      //     console.log("ngOnInit:  next forecastValue " + forecastValue.summary);
      //     localForeCasts.push(forecastValue);
      //     console.log("1 forecast count: ", localForeCasts.length);
      // }
      // },
      // error(msg){
      //   console.log("ngOnInit: Error: " + msg);
      // },
      // complete(){

      // }
    );
    console.log("3 forecast count: ", this.forecasts.length);
    this.forecasts.forEach((forecast) => console.log(forecast.summary));
  }
}
