import { Component, OnInit } from '@angular/core';


import { User } from './../models/user';
import { ControllerService } from './../shared/controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private controller: ControllerService
  ) {}

  ngOnInit() {
  }

  public newUser(username: string, pswd: string) {
    this.controller.addNewUser(username, pswd);
  }

  public getUser(username: string) {
    return this.controller.getUser(username);
  }

  public logar(username: string) {
    this.controller.getUser(username).logar();
  }

  public deslogar(username: string) {
    this.controller.getUser(username).deslogar();
  }

}
