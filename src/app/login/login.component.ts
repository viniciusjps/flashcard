import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
  ) { }

  ngOnInit() {
  }

  public newUser(username: string, pswd: string, email: string) {
    this.controller.addNewUser(username, pswd, email);
  }

  public getUser(email: string) {
    return this.controller.getUser(email);
  }

  public logar(email: string, pswd: string) {
    const user = this.controller.getUser(email);
    if (user == null) {
      alert('Usuário não cadastrado');
    } else {
      if (user.getPassword() !== pswd) {
        alert('Senha incorreta');
      } else {
        this.controller.logIn(email);
        this.controller.navigate('/perfil');
      }
    }
  }

  public deslogar(email: string) {
    this.controller.logOut();
  }

}
