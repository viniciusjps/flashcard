import { Component, OnInit } from '@angular/core';


import { User } from './../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private users: User[];
  private userLogado: User;

  constructor() {
    this.users = null;
    this.userLogado = null;
  }

  ngOnInit() {
  }

  public newUser(username: string, pswd: string) {
    this.users.push(new User(username, pswd));
  }

  public getUser(username: string) {
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].getUsername() === username) {
        return this.users[index];
      }
    }
    return null;
  }

  public logar(username: string, pswd: string) {
    if (this.userLogado === null) {
      this.userLogado = this.getUser(username);
    }
  }

  public deslogar() {
    if (this.userLogado !== null) {
      this.userLogado = null;
    }
  }


}
