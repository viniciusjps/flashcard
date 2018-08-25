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
  ) { }

  ngOnInit() {
  }

  public getInfoNavbar(): string {
    const user = this.controller.getUserLogado();
    if (user != null) {
      return 'Perfil';
    } else {
      return 'Login';
    }
  }

}
