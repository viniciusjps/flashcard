import { Card } from './../models/card';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

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
export class CardsComponent implements OnInit {

  constructor(
    private controller: ControllerService,
    private http: HttpClient
  ) { }

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
   * Get all public card's
   */
  public getCards(): Card[] {
    return this.controller.getAllPublicCards();
  }

  public getImage(email: string) {
    this.getUrl(email)
      .then(data => {
        const url = data;
        return url;
      });
  }

  public getUrl(email: string) {
    return fetch('http://picasaweb.google.com/data/entry/api/user/' + email + '?alt=json')
      .then(response => response.json())
      .then(json => json['entry']['gphoto$thumbnail']['$t']);
  }
}
