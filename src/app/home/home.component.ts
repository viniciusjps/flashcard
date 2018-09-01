import { ControllerService } from './../shared/controller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
    this.controller.reloadPage();
  }

}
