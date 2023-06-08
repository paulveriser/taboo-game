import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationInputComponent } from './user-information-input.component';

describe('UserInformationInputComponent', () => {
  let component: UserInformationInputComponent;
  let fixture: ComponentFixture<UserInformationInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInformationInputComponent]
    });
    fixture = TestBed.createComponent(UserInformationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
