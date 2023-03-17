import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Choiceintraction002Component } from './choiceintraction002.component';

describe('Choiceintraction002Component', () => {
  let component: Choiceintraction002Component;
  let fixture: ComponentFixture<Choiceintraction002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Choiceintraction002Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Choiceintraction002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
