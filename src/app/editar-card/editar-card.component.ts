import { Component, OnInit, OnDestroy } from '@angular/core';


import { Disciplines } from '../models/disciplines.enum';
import { ControllerService } from './../shared/controller.service';

@Component({
  selector: 'app-editar-card',
  templateUrl: './editar-card.component.html',
  styleUrls: ['./editar-card.component.css']
})
export class EditarCardComponent implements OnInit, OnDestroy {

  private questionCard: String;
  private answerCard: String;
  private id: String;

  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
    this.controller.reloadPage();
    if (!localStorage.getItem('isLogged')) {
      this.controller.navigate('/login');
    }
    this.loadData();
    this.getCard(this.id);
  }

  ngOnDestroy() {
    localStorage.removeItem('id');
  }

  public getDisciplines(): Disciplines[] {
    const disciplines = [];
    // tslint:disable-next-line:forin
    for (const subject in Disciplines) {
      disciplines.push(Disciplines[subject]);
    }
    return disciplines;
  }

  public validaEntrada(value: string): boolean {
    return value.trim().length !== 0;
  }

  private loadData() {
    const id = localStorage.getItem('id');
    if (id != null) {
      this.id = id;
    } else {
      this.controller.navigate('/perfil');
    }
  }

  private getCard(id: String): Promise<any> {
    return fetch('http://api-flashcard.herokuapp.com/api/card/' + id)
      .then(res => res.json())
      .then(card => {
        this.questionCard = card.question;
        this.answerCard = card.answer;
      });
  }

  public update(discipline: String, question: String, answer: String, privacy: boolean) {
    this.editCard(discipline, question, answer, privacy)
      .then(a => {
        localStorage.removeItem('id');
        this.controller.navigate('/perfil');
      });
  }

  private editCard(discipline, question, answer, privacy): Promise<any> {
    return fetch('http://api-flashcard.herokuapp.com/api/card', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        id: this.id,
        discipline: discipline,
        question: question,
        answer: answer,
        privacy: privacy,
        author: this.controller.getUserLogado().getEmail(),
        image: this.controller.getUserLogado().getImage()
      })
    });
  }

}
