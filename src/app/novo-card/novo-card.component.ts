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

}
