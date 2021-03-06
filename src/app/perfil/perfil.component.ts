import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { ControllerService } from './../shared/controller.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private subscription: Subscription;
  private mode: String;

  constructor(
    private controller: ControllerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(
      queryParams => this.mode = queryParams['command']
    );
    this.mode = 'cards';
    this.controller.reloadPage();
    if (this.controller.getUserLogado() == null) {
      this.controller.navigate('/login');
    }
  }

  public logout() {
    this.controller.logOut();
    this.controller.navigate('/login');
  }

  public addNewCard() {
    if (this.controller.getUserLogado() != null) {
      this.controller.navigate('/perfil/novo-card');
    } else {
      this.controller.navigate('/login');
    }
  }

  public getUsername(): string {
    return this.controller.getUserLogado().getUsername();
  }

  public getImage(): string {
    const user = this.controller.getUserLogado();
    if (user != null) {
      return user.getImage();
    }
    return '';
  }

  /**
   * Set command mode
   * @param mode New mode value
   */
  public setCommand(mode: String) {
    this.controller.getRouter().navigate(['/perfil'], { queryParams: { command: mode } });
  }

}
