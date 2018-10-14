import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


import { Card } from '../models/card';
import { Comment } from './../models/comment';
import { ControllerService } from '../shared/controller.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
  animations: [
    trigger('rotate', [
      state('left', style({
        transform: 'rotateY(180deg)',
      })),
      state('right', style({
        transform: 'rotateY(0deg)',
      })),
      transition('* => *', animate('500ms ease'))
    ])
  ]
})
export class ComentariosComponent implements OnInit {

  private card: Card;
  private comments: Comment[];

  constructor(
    private controller: ControllerService
  ) {
    this.comments = [];
  }

  ngOnInit() {
    this.checkCard();
    this.getComments();
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

  private getCard(id: String): Promise<any> {
    return this.controller.getCardById(id);
  }

  private checkCard() {
    const id = localStorage.getItem('card');
    if (id != null) {
      this.getCard(id).then(data => {
        const card = new Card(data.id, data.discipline, data.question, data.answer, data.privacy, data.author, data.image);
        this.card = card;
      });
    } else {
      this.controller.navigate('/mural');
    }
  }

  public getComments() {
    let request = [];
    this.controller.getComments(localStorage.getItem('card'))
      .then(data => {
        request = data;
      })
      .then(a => {
        request.forEach(c => {
          // const com = new Comment();
        });
      })
      .then(b => {
        localStorage.removeItem('card');
      });
  }

}
