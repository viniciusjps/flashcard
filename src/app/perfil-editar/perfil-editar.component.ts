import { Component, OnInit } from '@angular/core';


import { ControllerService } from './../shared/controller.service';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.css']
})
export class PerfilEditarComponent implements OnInit {

  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
  }

  /**
   * Get username
   */
  public getUsername(): string {
    return this.controller.getUserLogado().getUsername();
  }

  /**
   * Clear tag value
   * @param tag Html tag
   */
  public clearValue(tag) {
    tag.value = '';
  }

}
