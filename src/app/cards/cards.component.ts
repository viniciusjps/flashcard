import { Card } from './../models/card';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('250ms', style({ opacity: 0 }))
      ])
    ]),
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
export class CardsComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('cardsList') cards: Card[];

  constructor(
    private controller: ControllerService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.cards = [];
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

  public comments(value: string) {
    this.controller.getRouter().navigate(['/mural/comentarios'], { queryParams: { id: value } });
  }

}
