import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { LoginService } from '../app/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor ( private loginService: LoginService, private router: Router ) {
    this.isLoggedIn();
    if (this.loginService.isLoggedIn === false) {
      router.navigate(['login']);
    }
  }

  isLoggedIn () {
    console.log(this.loginService.isLoggedIn);
    return this.loginService.isLoggedIn;
  }

}
