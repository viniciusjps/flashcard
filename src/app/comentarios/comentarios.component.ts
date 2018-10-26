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
  private hasComments: boolean;

  constructor(
    private controller: ControllerService
  ) {
    this.card = new Card(0, '', '', '', true, '', '');
    this.comments = [];
    this.showData = false;
    this.hasComments = false;
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
            c.image,
            c.email
          );
          comments.push(com);
        });
        if (comments.length > 0) { this.hasComments = true; }
        return comments.sort((b, c) => b.getId() - c.getId());
      })
      .then(b => {
        this.showData = true;
      });
    return comments;
  }

  public getTime(value: string): string {
    const date = value.split('-');
    const day = parseInt(date[0], 10);
    const month = parseInt(date[1], 10);
    const year = parseInt(date[2].split(' ')[0], 10);

    const time = value.split(' ');
    const hour = parseInt(time[1].split(':')[0], 10);
    const minutes = parseInt(time[1].split(':')[1], 10);
    const seconds = parseInt(time[1].split(':')[2], 10);
    const commentDate = new Date(year, month, day, hour, minutes, seconds, 0);
    return 'Publicado em ' + commentDate.toLocaleDateString() + ' às ' + commentDate.toLocaleTimeString();
  }

  public getDisplayName(value: string): string {
    const names = value.split(' ');
    return names[0] + ' ' + names[1];
  }

  public edit(value: string): boolean {
    return value === this.controller.getUserLogado().getEmail();
  }

  public publishComment(value: string): void {
    fetch('http://api-flashcard.herokuapp.com/api/msg/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        cardId: this.card.getId(),
        message: value,
        email: this.controller.getUserLogado().getEmail(),
        author: this.controller.getUserLogado().getUsername(),
        image: this.controller.getUserLogado().getImage()
      })
    })
      .then(a => {
        this.comments = this.getComments();
      });
  }

  public editComment(comment: Comment, value: string): void {
    fetch('http://api-flashcard.herokuapp.com/api/msg/' + comment.getId(), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
        id: comment.getId(),
        cardId: comment.getCardId(),
        message: value,
        edit: true,
        email: comment.getEmail(),
        author: comment.getAuthor(),
        image: comment.getImage()
      })
    })
      .then(a => {
        this.comments = this.getComments();
      });
  }

  public deleteComment(id: string): void {
    fetch('http://api-flashcard.herokuapp.com/api/msg/' + id, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    }).then(a => {
      this.comments = this.getComments();
    });
  }

}
