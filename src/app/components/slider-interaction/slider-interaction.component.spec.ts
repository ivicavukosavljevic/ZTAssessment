import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderInteractionComponent } from './slider-interaction.component';

describe('SliderInteractionComponent', () => {
  let component: SliderInteractionComponent;
  let fixture: ComponentFixture<SliderInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
