import { ControllerService } from './../shared/controller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

}
