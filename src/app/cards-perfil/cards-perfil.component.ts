import { User } from './../models/user';
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

  constructor(
    private controller: ControllerService
  ) {
    this.view = 'default';
    this.cards = [];
  }

  ngOnInit() {
    this.getCards();
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
  private getSpecificCards(value: string): Card[] {
    const user = this.controller.getUserLogado();
    const cards: Card [] = this.cards;
    const result: Card [] = [];
    if (user != null) {
      cards.forEach(card => {
        if (card.getResult() === value) {
          result.push(card);
        }
      });
      return result;
    }
    return [];
  }

  /**
   * Get color's card
   * @param value Result card
   */
  public getColor(value: string): string {
    if (value === 'default') {
      return '';
    } else if (value === 'hit') {
      return 'green';
    } else {
      return 'red';
    }
  }

  public setCardResult(value: string, card: Card) {
    const user = this.controller.getUserLogado();
    if (user != null) {
      this.setResult(
        card.getId(),
        card.getDiscipline(),
        card.getQuestion(),
        card.getAnswer(),
        card.getPrivacy(),
        value,
        card.getAuthor(),
        card.getImage())
      .then(a => {
        const updateCard = new Card(
          card.getId(),
          card.getDiscipline(),
          card.getQuestion(),
          card.getAnswer(),
          card.getPrivacy(),
          card.getAnswer(),
          card.getImage());
        card = updateCard;
      });
    }
  }

  private setResult(
    id: number,
    discipline: string,
    question: string,
    answer: string,
    privacy: boolean,
    result: string,
    email: string,
    image: string
  ) {
    return fetch('http://api-flashcard.herokuapp.com/api/cards/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        id: id,
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
}
