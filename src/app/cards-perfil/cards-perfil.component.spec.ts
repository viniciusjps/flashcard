import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPerfilComponent } from './cards-perfil.component';

describe('CardsPerfilComponent', () => {
  let component: CardsPerfilComponent;
  let fixture: ComponentFixture<CardsPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
