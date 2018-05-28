import { Component, OnInit, OnDestroy } from '@angular/core';


import { ControllerService } from './../shared/controller.service';
import { Card } from './../models/card';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
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
export class PesquisaComponent implements OnInit, OnDestroy {

  private search: string;
  private subscription: Subscription;

  constructor(
    private controller: ControllerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(
      queryParams => this.search = queryParams['search']
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Get search list by queryParams
   */
  public getSearchList(): Card[] {
    const cards = this.controller.getAllPublicCards();
    const search = cards.filter(card =>
      card.getQuestion().toLowerCase().indexOf(this.search.toLowerCase()) !== -1 ||
      card.getAnswer().toLowerCase().indexOf(this.search.toLowerCase()) !== -1 ||
      card.getDiscipline().toLowerCase().indexOf(this.search.toLowerCase()) !== -1
    );
    return search;
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
