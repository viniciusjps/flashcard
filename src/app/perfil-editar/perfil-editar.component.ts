import { Component, OnInit } from '@angular/core';


import { ControllerService } from './../shared/controller.service';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.css']
})
export class PerfilEditarComponent implements OnInit {

  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
  }

  public getUsername(): string {
    return this.controller.getUserLogado().getUsername();
  }

  public getPassword(): string {
    return this.controller.getUserLogado().getPassword();
  }

  public setPassword(old: string, newpass: string): void {
    const user = this.controller.getUserLogado();
    if (user.getPassword() === newpass) {
      alert('A senha informada é a mesma já cadastrada');
    } else {
      if (newpass.length > 0 && user.getPassword() === old) {
        user.setPassword(newpass);
        alert('Senha alterada!');
      } else {
        alert('Senha inválida');
      }
    }
  }

}
