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

  private cards: Card[];

  constructor(
    private controller: ControllerService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.cards = this.controller.getAllPublicCards();
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

}
