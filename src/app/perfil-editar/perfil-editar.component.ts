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

  /**
   * Get username
   */
  public getUsername(): string {
    return this.controller.getUserLogado().getUsername();
  }

  /**
   * Get user's password
   */
  public getPassword(): string {
    return this.controller.getUserLogado().getPassword();
  }

  /**
   * Set new password
   * @param old Old pswd
   * @param newpass New value
   */
  public setPassword(old: string, newpass: string): void {
    const user = this.controller.getUserLogado();
    if (user.getPassword() === newpass) {
      alert('Digite uma nova senha!');
    } else {
      if (newpass.length > 0 && user.getPassword() === old) {
        user.setPassword(newpass);
        alert('Senha alterada!');
      } else {
        alert('Senha inválida');
      }
    }
  }

  /**
   * Clear tag value
   * @param tag Html tag
   */
  public clearValue(tag) {
    tag.value = '';
  }

}
