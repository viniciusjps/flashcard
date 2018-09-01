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
    fetch('http://api-flashcard.herokuapp.com/api/card')
    .then(data => {
      this.getCards();
    })
    .then(data => {
      this.splitCards();
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
      this.cards = this.controller.getCards(user.getEmail());
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

  public splitCards(): void {
    const hit: Card[] = [];
    const missed: Card[] = [];
    this.cards.forEach(card => {
      if (card.getResult() === 'hit') {
        hit.push(card);
      } else {
        missed.push(card);
      }
    });
    this.hitCards = hit;
    this.missedCards = missed;
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
      .then(a => {
        this.getCards();
      })
      .then(a => {
        this.splitCards();
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
      .then(a => {
        this.getCards();
      })
      .then(a => {
        this.splitCards();
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
    return fetch('http://api-flashcard.herokuapp.com/api/card/' + idCard, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
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
}
