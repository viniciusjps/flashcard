import { Component, OnInit, OnDestroy } from '@angular/core';


import { ControllerService } from './../shared/controller.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit, OnDestroy {

  private search: string;
  private subscription: Subscription;

  constructor(
    private controller: ControllerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(
      queryParams => this.search = queryParams['search']
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
