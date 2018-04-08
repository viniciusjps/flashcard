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

  constructor(
    private controller: ControllerService
  ) {
    this.view = 'all';
  }

  ngOnInit() {
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
   * Get card by id
   * @param id Id
   */
  public getCard(username: string, id: number): Card {
    return this.controller.getCard(username, id);
  }

  /**
   * Get card rating
   * @param id Id
   */
  public getCardRating(username: string, id: number): number {
    const card = this.getCard(username, id);
    return card.getRating();
  }

  /**
   * Get all cards
   */
  public getCards(): Card[] {
    const user = this.controller.getUserLogado();
    if (user != null) {
      if (this.view === 'all') {
        return this.getSpecificCards(null);
      }
      if (this.view === 'hit') {
        return this.getSpecificCards(true);
      }
      if (this.view === 'missed') {
        return this.getSpecificCards(false);
      }
    }
  }

  /**
   * Get specific cards
   * @param value Value type
   */
  private getSpecificCards(value: boolean): Card[] {
    const user = this.controller.getUserLogado();
    const result = [];
    if (user != null) {
      if (value == null) {
        return this.controller.getCards(user.getUsername());
    } else {
      const array = this.controller.getCards(user.getUsername());
      for (let i = 0; i < array.length; i++) {
        if (array[i].getResult() === value) {
          result.push(array[i]);
          }
        }
      }
    }
    return result;
  }

  /**
   * Get color's card
   * @param value Result card
   */
  public getColor(value: boolean): string {
    if (value == null) {
      return '';
    }
    return value ? 'green' : 'red';
  }

  /**
   * Hit the question
   * @param id Card id
   */
  public hit(id: number) {
    const user = this.controller.getUserLogado();
    user.getCard(id).setResult(true);
  }

  /**
   * Missed the question
   * @param id Card id
   */
  public missed(id: number) {
    const user = this.controller.getUserLogado();
    user.getCard(id).setResult(false);
  }

  /**
   * Set type view
   * @param value New value
   */
  public setTypeView(value: string): void {
    this.view = value;
  }
}
