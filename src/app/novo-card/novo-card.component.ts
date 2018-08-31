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
    this.controller.reloadPage();
    if (!localStorage.getItem('isLogged')) {
      this.controller.navigate('/login');
    }
  }

  public getDisciplines(): Disciplines[] {
    const disciplines = [];
    // tslint:disable-next-line:forin
    for (const subject in Disciplines) {
      disciplines.push(Disciplines[subject]);
    }
    return disciplines;
  }

  public addCard(discipline: string, question: string, answer: string, privacy) {
    const user = this.controller.getUserLogado();
    if (user != null) {
      if (this.validaEntrada(question) && this.validaEntrada(answer)) {
        this.controller.addNewCard(user.getEmail(), discipline, question, answer, privacy)
        .then(res => {
          this.controller.navigate('/perfil');
        });
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
