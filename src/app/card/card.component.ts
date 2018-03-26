import { Card } from './../models/card';
import { Component, OnInit } from '@angular/core';


import {
  trigger,
  state,
  style,
  animate,
  transition
 } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('rotate', [
      state('left',   style({
        transform: 'rotateY(180deg)',
      })),
      state('right',   style({
        transform: 'rotateY(0deg)',
      })),
      transition('* => *', animate('300ms ease'))
    ])
  ]
})
export class CardComponent implements OnInit {

  private cards: Card[] = [];
  private colors: string[] = [
      'red', 'orange', 'yellow', 'olive', 'green',
      'teal', 'blue', 'violet', 'purple', 'pink',
      'brown', 'grey', 'black'
  ];

  constructor() { }

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
   * Add a new card
   * @param discipline Discipline
   * @param question Question
   * @param answer Answer
   */
  public addCard(discipline: string, question: string, answer: string): void {
    const id = this.cards.length + 1;
    const card = new Card(discipline, question, answer, id);
    this.cards.push(card);
  }

  /**
   * Get card by id
   * @param id Id
   */
  public getCard(id: number): Card {
    return this.cards[id - 1];
  }

  /**
   * Get card rating
   * @param id Id
   */
  public getCardRating(id: number): number {
    const card = this.getCard(id - 1);
    return card.getRating();
  }

  /**
   * Get color name
   */
  public getColor(): string {
    const index = Math.floor(Math.random() * (this.colors.length - 1));
    return this.colors[index];
  }

}
