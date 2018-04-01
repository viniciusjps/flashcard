import { Component, OnInit } from '@angular/core';


import { ControllerService } from './../shared/controller.service';
import { CardsComponent } from './../cards/cards.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
  }

  public logout() {
    this.controller.logOut();
    this.controller.navigate('');
  }

  public addNewCard() {
    this.controller.navigate('/perfil/novo-card');
  }

  public getUsername(): string {
    return this.controller.getUserLogado().getUsername();
  }

}
