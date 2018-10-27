import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { ControllerService } from './../shared/controller.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css'],
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate('150ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MuralComponent implements OnInit {

  private serverStatus: boolean;
  private cards: Card[];

  constructor(
    private controller: ControllerService
  ) {
    this.serverStatus = false;
  }

  ngOnInit() {
    if (!this.serverStatus) {
      this.controller.turnOnServer()
      .then(a => {
        this.cards = this.controller.getAllPublicCards();
        this.serverStatus = true;
      });
    }
  }

  public addNewCard() {
    const user = this.controller.getUserLogado();
    if (user == null) {
      this.controller.navigate('login');
    } else {
      this.controller.navigate('/perfil/novo-card');
    }
  }

  public search(newValue: string) {
    this.controller.getRouter().navigate(['/pesquisar'], { queryParams: {value: newValue}});
  }

}
