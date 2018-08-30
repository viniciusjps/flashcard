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
    this.view = 'default';
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
  public getCard(email: string, id: number): Card {
    return this.controller.getCard(email, id);
  }

  /**
   * Get all cards
   */
  public getCards(): Card[] {
    const user = this.controller.getUserLogado();
    if (user != null) {
      return this.getSpecificCards(this.view);
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
      if (value == null) {
        return this.controller.getCards(user.getEmail());
    } else {
      const array = this.controller.getCards(user.getEmail());
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
