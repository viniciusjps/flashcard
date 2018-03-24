import { Card } from './../models/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card;
  cards: Card[] = [];
  colors: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  public addCard(disciplina: string, pergunta: string, resposta: string) {
    this.card = new Card(disciplina, pergunta, resposta);
    this.cards.push(this.card);
  }

  public getColor(): string {
    return '';
  }


}
