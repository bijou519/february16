import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

import { Login } from '../../services/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  pwd1 = '';
  loginError = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.isLoggedIn === true) {
      this.router.navigate(['/']);
    }
  }


  clickGo () {
    this.loginService.sendPassword(this.pwd1)
      .subscribe((response: Login) => {
        if (response.login !== undefined && response.login === true) {
          localStorage.setItem('validUser', 'true');
          this.router.navigate(['/']);
          this.loginService.isLoggedIn = true;
          this.loginError = false;
        } else {
          localStorage.setItem('validUser', 'false');
          this.loginService.isLoggedIn = false;
          this.loginError = true;
          this.pwd1 = '';
        }
      });
  }
}
