import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptRatingComponent } from './prompt-rating.component';

describe('PromptRatingComponent', () => {
  let component: PromptRatingComponent;
  let fixture: ComponentFixture<PromptRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromptRatingComponent]
    });
    fixture = TestBed.createComponent(PromptRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
