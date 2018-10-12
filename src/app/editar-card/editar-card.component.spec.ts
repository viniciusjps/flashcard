import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCardComponent } from './editar-card.component';

describe('EditarCardComponent', () => {
  let component: EditarCardComponent;
  let fixture: ComponentFixture<EditarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
