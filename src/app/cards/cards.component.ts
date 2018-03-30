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
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
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
export class CardsComponent implements OnInit {

  private colors: string[] = [
      'red', 'orange', 'yellow', 'olive', 'green',
      'teal', 'blue', 'violet', 'purple', 'pink',
      'brown', 'grey', 'black'
  ];


  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
    // const perg = 'Como criar um novo componente utilizando angular/cli?';
    // const resp = 'Basta ir no terminal e executar o comando: ng g c nome-componente';
    this.controller.addNewUser('vini', '123');
    // this.cards = this.controller.getAllCards();
    // this.controller.addNewCard('vini', 'PSOFT', perg, resp);
    // console.log(this.cards);
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
   * Add a new card
   * @param discipline Discipline
   * @param question Question
   * @param answer Answer
   */
  public addCard(discipline: string, question: string, answer: string): void {
    this.controller.addNewCard('vini', discipline, question, answer);
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
   * Get color name
   */
  public getColor(): string {
    const index = Math.floor(Math.random() * (this.colors.length - 1));
    return this.colors[index];
  }

  /**
   * Get all cards
   */
  public getCards(): Card[] {
    return this.controller.getAllCards();
  }

}
