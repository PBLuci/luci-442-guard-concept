import { ComponentFixture, TestBed } from '@angular/core/testing';

import { State3Component } from './state3.component';

describe('State3Component', () => {
  let component: State3Component;
  let fixture: ComponentFixture<State3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ State3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(State3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
