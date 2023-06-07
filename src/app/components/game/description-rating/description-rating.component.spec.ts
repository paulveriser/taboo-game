import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionRatingComponent } from './description-rating.component';

describe('DescriptionRatingComponent', () => {
  let component: DescriptionRatingComponent;
  let fixture: ComponentFixture<DescriptionRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionRatingComponent]
    });
    fixture = TestBed.createComponent(DescriptionRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
