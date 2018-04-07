import { Component, OnInit } from '@angular/core';


import { ControllerService } from './../shared/controller.service';

@Component({
  selector: 'app-novo-card',
  templateUrl: './novo-card.component.html',
  styleUrls: ['./novo-card.component.css']
})
export class NovoCardComponent implements OnInit {

  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
  }

  public addCard(discipline: string, question: string, answer: string, privacy) {
    console.log(privacy);
    const user = this.controller.getUserLogado();
    if (user != null) {
      this.controller.addNewCard(user.getUsername(), discipline, question, answer, privacy);
      this.controller.navigate('/perfil');
    } else {
      alert('Não existe usuário logado');
      this.controller.navigate('/login');
    }
  }

}
