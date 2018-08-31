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
      this.cards = this.getSpecificCards(this.view);
    }
  }

  /**
   * Get specific cards
   * @param value Value type
   */
  private getSpecificCards(value: string): Card[] {
    const user = this.controller.getUserLogado();
    const result = [];
    if (user != null) {
      const array = this.controller.getCards(user.getEmail());
      array.forEach(element => {
        if (element.getResult() === value) {
          result.push(element);
        }
      });
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
    user.getCard(id).setResult('hit');
  }

  /**
   * Missed the question
   * @param id Card id
   */
  public missed(id: number) {
    const user = this.controller.getUserLogado();
    user.getCard(id).setResult('missed');
  }

  /**
   * Set type view
   * @param value New value
   */
  public setTypeView(value: string): void {
    this.view = value;
  }
}
