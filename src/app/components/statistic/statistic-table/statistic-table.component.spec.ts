import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticTableComponent } from './statistic-table.component';

describe('StatisticTableComponent', () => {
  let component: StatisticTableComponent;
  let fixture: ComponentFixture<StatisticTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticTableComponent]
    });
    fixture = TestBed.createComponent(StatisticTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
