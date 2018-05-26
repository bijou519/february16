import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pwd1 = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.isLoggedIn === true) {
      this.router.navigate(['/']);
    }
  }


  clickGo () {
    this.loginService.sendPassword(this.pwd1)
      .subscribe(response => {
        if (response) {
          localStorage.setItem('validUser', 'true');
          this.router.navigate(['/']);
          this.loginService.isLoggedIn = true;
        }
      });
  }
}
