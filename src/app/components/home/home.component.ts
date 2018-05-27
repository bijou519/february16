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
  conditionsAsOf: string;
  weatherIcon: string;


  constructor(private weatherService: WeatherService ) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather () {
    this.weatherService.getCurrentWeather()
      .subscribe(response => {
        if (response) {
          this.weatherData = response;
          this.weatherDataAvailable = true;
          this.conditionsAsOf = moment.unix(this.weatherData.currently.time).format('h:mm A');
          this.weatherIcon = '../../assets/weather/PNG/' + this.weatherData.currently.icon + '.png';
        }
      });
  }

}
