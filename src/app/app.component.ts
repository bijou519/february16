import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedIn = false;

  userIsLoggedIn () {
    if (window.location.pathname !== '/login') {
      this.loggedIn = true;
    }
    console.log('user is logged in: ', this.loggedIn);
    return this.loggedIn;
  }
}
