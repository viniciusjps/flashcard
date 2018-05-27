import { Component, OnInit } from '@angular/core';


import { ControllerService } from './../shared/controller.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {


  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
  }

  /**
   * Add a new user
   * @param username Username
   * @param pswd Password
   * @param pswd2 Password 2
   */
  public addNewUser(username: string, pswd: string, pswd2: string): void {
    if (this.validaEntrada(username) && this.validaEntrada(pswd) && this.verificaSenha(pswd, pswd2)) {
      const user = this.controller.getUser(username);
      if (user == null) {
        this.controller.addNewUser(username, pswd);
        this.controller.logIn(username);
        this.controller.navigate('/perfil');
        swal({
          title: 'Bem-vindo, ' + username,
          text: 'Aqui, você será capaz de gerênciar sua conta e os seus cartões!',
          icon: 'success'
        });
      } else {
        swal({
          title: 'Username inválido',
          text: 'Já existe usuário cadastrado',
          icon: 'warning',
          buttons: [false],
          timer: 2000
        });
      }
    } else {
      if (!this.verificaSenha(pswd, pswd2)) {
        swal({
          title: 'Dados inválidos',
          text: 'Senhas diferentes',
          icon: 'error',
          buttons: [false],
          timer: 2000
        });
      } else {
        swal({
          title: 'Dados inválidos',
          text: 'Os campos nao podem ser vazios',
          icon: 'error',
          buttons: [false],
          timer: 2000
        });
      }
    }
  }

  public validaEntrada(value: string): boolean {
    return value.trim().length !== 0;
  }

  public verificaSenha(pswd: string, pswd2: string): boolean {
    return pswd.trim() === pswd2.trim();
  }

}
