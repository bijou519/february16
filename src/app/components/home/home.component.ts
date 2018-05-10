import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  endDate: moment.Moment = moment("20190216")
  today: moment.Moment = moment();

  countdown: number = this.endDate.diff(this.today, "days");

}
