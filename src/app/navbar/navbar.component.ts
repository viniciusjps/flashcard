import { Component, OnInit } from '@angular/core';


import { ControllerService } from './../shared/controller.service';
import { User } from './../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private controller: ControllerService
  ) {}

  ngOnInit() {
  }

  public logIn(username: string) {
    this.controller.logIn(username);
  }

  public logOut() {
    this.controller.logOut();
  }

  public getUsername(): string {
    return this.controller.getUserLogado().getUsername();
  }

  public getInfoNavbar(): string {
    const user = this.controller.getUserLogado();
    if (user != null) {
      return 'Olá, ' + user.getUsername().substr(0, 1).toUpperCase()  + user.getUsername().substr(1);
    } else {
      return 'Login';
    }
  }

}
