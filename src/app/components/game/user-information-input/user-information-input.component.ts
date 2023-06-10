import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export class UserInformation {
  gender: 'female' | 'male' | 'diverse' | 'prefer not to say';
  age: number;
  itKnowledge: number
}

@Component({
  selector: 'app-user-information-input',
  templateUrl: './user-information-input.component.html',
  styleUrls: ['./user-information-input.component.scss']
})
export class UserInformationInputComponent implements OnInit {
  @Output()
  userInformationSubmit = new EventEmitter<UserInformation>;

  userInformation: UserInformation = new UserInformation();
  ages: number[] = [];

  ngOnInit() {
    // populating age array with 18 to 99
    for(let i = 18; i<100; i++) {
      this.ages.push(i);
    }
  }

  onSubmit() {
    if(this.userInformation.age && this.userInformation.gender && this.userInformation.itKnowledge) {
      this.userInformationSubmit.emit(this.userInformation);
    }
  }

}
