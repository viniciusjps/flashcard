import { Component, OnInit } from '@angular/core';


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
    this.controller.reloadPage();
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
