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

  private status: boolean;

  constructor(
    private controller: ControllerService
  ) {
    this.status = false;
  }

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
   */
  public delete() {
    const user = this.controller.getUserLogado();
    if (user != null) {
      this.status = true;
      this.deleteCards(user.getEmail())
      .then(a => {
        this.deleteUser(user.getEmail());
      })
      .then(b => {
        this.controller.navigate('/');
        this.controller.logOut();
      });
    }
  }

  private deleteCards(email: string): Promise<any> {
    let request = [];
    return this.controller.getPublicCards()
    .then(data => {
      request = data;
    })
    .then(a => {
      request.forEach(e => {
        const card = new Card(e.id, e.discipline, e.question, e.answer, e.privacy, e.author, e.image);
        card.setResult(e.result);
        if (card.getAuthor() === email) {
          this.controller.deleteCard(card.getId());
        }
      });
    });
  }

  public deleteUser(email: string): Promise<any> {
    return fetch('https://api-flashcard.herokuapp.com/api/user/' + email, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    });
  }
}
