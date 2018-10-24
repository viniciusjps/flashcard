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
  private showData: boolean;

  constructor(
    private controller: ControllerService
  ) {
    this.card = new Card(0, '', '', '', true, '', '');
    this.comments = [];
    this.showData = false;
  }

  ngOnInit() {
    this.checkCard();
    this.comments = this.getComments();
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

  private setShowData(): void {
    this.showData = !this.showData;
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

  public getComments(): Comment[] {
    const comments: Comment[] = [];
    let request = [];
    this.controller.getComments(localStorage.getItem('card'))
      .then(data => {
        request = data;
      })
      .then(a => {
        request.forEach(c => {
          const com = new Comment(
            c.id,
            c.cardId,
            c.message,
            c.createdAt,
            c.edit,
            c.author,
            c.image
          );
          comments.push(com);
        });
        return comments.sort((b, c) => b.getId() - c.getId());
      })
      .then(b => {
        this.setShowData();
      });
    return comments;
  }

}
