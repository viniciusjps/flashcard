import { Card } from './../models/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private card: Card;
  private cards: Card[] = [];
  private colors: string[] = [
      'red', 'orange', 'yellow', 'olive', 'green',
      'teal', 'blue', 'violet', 'purple', 'pink',
      'brown', 'grey', 'black'
  ];

  constructor() { }

  ngOnInit() {
  }

  public addCard(disciplina: string, pergunta: string, resposta: string) {
    this.card = new Card(disciplina, pergunta, resposta, false, this.cards.length + 1);
    this.cards.push(this.card);
  }

  public getColor(): string {
    const index = Math.floor(Math.random() * (this.cards.length - 1));
    return this.colors[index];
  }

}
