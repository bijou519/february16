import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'header';

  currentPage: String = "Home";

  myFunction () {
    var x = document.getElementById("navigation");
    if (x.className === "custom-nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "custom-nav-bar";
    }
  }
}
