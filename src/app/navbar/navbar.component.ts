import { Component, OnInit } from '@angular/core';
import { LoginService } from './../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private login:LoginService) { }

  isLoggedIn() {
    return this.login.getIsLoggedIn();
  }
  getSigninButtonName() {
    return (this.login.getIsLoggedIn() === true) ? this.login.getLoginName().toUpperCase() : 'Signin';
  }
  ngOnInit(): void {
  }
  onLogout() {
    this.login.resetLoginObj();
  }
}
