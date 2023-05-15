import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDescriptionComponent } from './word-description.component';

describe('WordDescriptionComponent', () => {
  let component: WordDescriptionComponent;
  let fixture: ComponentFixture<WordDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordDescriptionComponent]
    });
    fixture = TestBed.createComponent(WordDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
