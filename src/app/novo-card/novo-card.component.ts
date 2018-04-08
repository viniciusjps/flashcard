import { Component, OnInit } from '@angular/core';


import { ControllerService } from './../shared/controller.service';
import { Disciplines } from './../models/disciplines.enum';

@Component({
  selector: 'app-novo-card',
  templateUrl: './novo-card.component.html',
  styleUrls: ['./novo-card.component.css']
})
export class NovoCardComponent implements OnInit {

  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
  }

  public addCard(discipline: string, question: string, answer: string, privacy) {
    const user = this.controller.getUserLogado();
    if (user != null) {
      if (this.validaEntrada(question) && this.validaEntrada(answer)) {
        this.controller.addNewCard(user.getUsername(), discipline, question, answer, privacy);
        this.controller.navigate('/perfil');
      } else {
        alert('Os campos não podem ser vazios!');
      }
    } else {
      alert('Não existe usuário logado');
      this.controller.navigate('/login');
    }
  }

  public validaEntrada(value: string): boolean {
    return value.trim().length !== 0;
  }

}
