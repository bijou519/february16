import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  endDate: moment.Moment = moment('20190216');
  today: moment.Moment = moment();

  countdown: number = this.endDate.diff(this.today, 'days');

  weatherDataAvailable: Boolean = false;

  weatherData: any;

  cloudCover: Number;

    conditionsAsOf: string;

    weatherIcon = '../../assets/weather/SVG/Sun.svg';


  constructor(private weatherService: WeatherService ) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather () {
    this.weatherService.getCurrentWeather()
      .subscribe(response => {
        if (response) {
          console.log(response);
          this.weatherData = response;
          this.weatherDataAvailable = true;
          this.conditionsAsOf = moment.unix(this.weatherData.currently.time).format('h:mm A');

          this.cloudCover = this.weatherData.currently.cloudCover * 100;
        }
      });
  }

}
