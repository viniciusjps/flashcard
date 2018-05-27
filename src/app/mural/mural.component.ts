import { Component, OnInit } from '@angular/core';


import { CardsComponent } from './../cards/cards.component';
import { ControllerService } from './../shared/controller.service';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
  }

  public addNewCard() {
    const user = this.controller.getUserLogado();
    if (user == null) {
      this.controller.navigate('login');
    } else {
      this.controller.navigate('/perfil/novo-card');
    }
  }

  public search(value: string) {
    this.controller.getRouter().navigate(['/pesquisar'], { queryParams: {search: value}});
  }

}
