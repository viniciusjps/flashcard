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

}