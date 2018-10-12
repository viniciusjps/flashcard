import { Card } from './../models/card';
import { Component, OnInit } from '@angular/core';


import {
  trigger,
  state,
  style,
  animate,
  transition
 } from '@angular/animations';
import { ControllerService } from '../shared/controller.service';

@Component({
  selector: 'app-cards-perfil',
  templateUrl: './cards-perfil.component.html',
  styleUrls: ['./cards-perfil.component.css'],
  animations: [
    trigger('rotate', [
      state('left',   style({
        transform: 'rotateY(180deg)',
      })),
      state('right',   style({
        transform: 'rotateY(0deg)',
      })),
      transition('* => *', animate('500ms ease'))
    ])
  ]
})
export class CardsPerfilComponent implements OnInit {

  private view: string;
  private cards: Card[];
  private hitCards: Card[];
  private missedCards: Card[];

  constructor(
    private controller: ControllerService
  ) {
    this.view = 'default';
    this.cards = [];
    this.hitCards = [];
    this.missedCards = [];
  }

  ngOnInit() {
    this.controller.turnOnServer()
    .then(data => {
      this.getCards();
    });
  }

  /**
   * Get animation type
   * @param value Value
   */
  public getAnimation(value: boolean): string {
    return value ? 'left' : 'right';
  }

  /**
   * Get side type
   * @param value Value
   */
  public getSideType(value: boolean): string {
    return value ? '' : 'active';
  }

  /**
   * Get all cards
   */
  public getCards(): void {
    const user = this.controller.getUserLogado();
    if (user != null) {
      const cards: Card[] = [];
      let request = [];
      this.controller.getUserCards(user.getEmail())
      .then(data => {
        request = data;
      })
      .then(a => {
        request.forEach(e => {
          const card = new Card(e.id, e.discipline, e.question, e.answer, e.privacy, e.author, e.image);
          card.setResult(e.result);
          cards.push(card);
        });
        this.cards = cards.sort((c, b) => b.getId() - c.getId());
        this.hitCards = [];
        this.missedCards = [];
      })
      .then(a => {
        this.cards.forEach(card => {
          if (card.getResult() === 'hit') {
            this.hitCards.push(card);
          } else if (card.getResult() === 'missed') {
            this.missedCards.push(card);
          }
        });
      });
    }
  }

  /**
   * Get specific cards
   * @param value Value type
   */
  public getSpecificCards(value: string): Card[] {
    const user = this.controller.getUserLogado();
    if (user != null) {
      if (value === 'default') {
        return this.cards;
      } else if (value === 'hit') {
        return this.hitCards;
      } else {
        return this.missedCards;
      }
    }
    return [];
  }

  public setCardResult(result: string, card: Card) {
    const user = this.controller.getUserLogado();
    if (user != null) {
      this.setCard(
        card.getId(),
        card.getDiscipline(),
        card.getQuestion(),
        card.getAnswer(),
        card.getPrivacy(),
        result,
        card.getAuthor(),
        card.getImage())
      .then(data => {
        this.getCards();
      });
    }
  }

  public setCardPrivacy(privacy: boolean, card: Card) {
    const user = this.controller.getUserLogado();
    if (user != null) {
      this.setCard(
        card.getId(),
        card.getDiscipline(),
        card.getQuestion(),
        card.getAnswer(),
        privacy,
        card.getResult(),
        card.getAuthor(),
        card.getImage())
      .then(data => {
        this.getCards();
      });
    }
  }

  private setCard(
    idCard: number,
    discipline: string,
    question: string,
    answer: string,
    privacy: boolean,
    result: string,
    email: string,
    image: string
  ) {
    return fetch('http://api-flashcard.herokuapp.com/api/card', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        id: idCard,
        discipline: discipline,
        question: question,
        answer: answer,
        privacy: privacy,
        result: result,
        author: email,
        image: image
      })
    });
  }

  /**
   * Delete card
   * @param id Card id
   */
  public delete(id: number) {
    this.controller.deleteCard(id)
    .then(a => {
      this.getCards();
    });
  }

  /**
   * Set type view
   * @param value New value
   */
  public setTypeView(value: string): void {
    this.view = value;
  }

  public getColor(card: Card): string {
    if (card.getResult() === 'hit') {
      return 'green';
    } else if (card.getResult() === 'missed') {
      return 'red';
    } else {
      return '';
    }
  }

  public editCard(id: string) {
    localStorage.setItem('id', id);
    this.controller.navigate('/perfil/editar-card');
  }
}
