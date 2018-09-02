import { Component, OnInit } from '@angular/core';


import { ControllerService } from './../shared/controller.service';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  private serverStatus: boolean;

  constructor(
    private controller: ControllerService
  ) {
    this.serverStatus = false;
  }

  ngOnInit() {
    if (!this.serverStatus) {
      this.controller.turnOnServer()
      .then(a => {
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
