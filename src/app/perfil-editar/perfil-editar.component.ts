import { Component, OnInit } from '@angular/core';


import { ControllerService } from './../shared/controller.service';
import { Card } from '../models/card';
import { User } from './../models/user';

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
   * Clear tag value
   * @param tag Html tag
   */
  public clearValue(tag) {
    tag.value = '';
  }

  /**
   * Delete user
   * @param email User email
   */
  public delete(email: string) {
    const user = this.controller.getUserLogado();
    if (user != null) {
      fetch('http://api-flashcard.herokuapp.com/api/user/' + email, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'DELETE'
      }).then(a => {
        this.deleteCards(user);
      })
      .then(b => {
        this.controller.logOut();
      });
    }
  }

  private deleteCards(user: User) {
    let request = [];
    this.controller.getAllCards()
    .then(data => {
      request = data;
    })
    .then(a => {
      request.forEach(e => {
        const card = new Card(e.id, e.discipline, e.question, e.answer, e.privacy, e.author, e.image);
        card.setResult(e.result);
        if (card.getAuthor() === user.getEmail()) {
          this.controller.deleteCard(card.getId());
        }
      });
    });
  }
}
