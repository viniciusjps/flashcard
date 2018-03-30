import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCardComponent } from './novo-card.component';

describe('NovoCardComponent', () => {
  let component: NovoCardComponent;
  let fixture: ComponentFixture<NovoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
