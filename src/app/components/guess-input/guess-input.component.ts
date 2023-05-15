import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-guess-input',
  templateUrl: './guess-input.component.html',
  styleUrls: ['./guess-input.component.scss']
})
export class GuessInputComponent {
  @Output()


  value: string = '';
  onGuessSubmit () {
    this.value = '';
  }

}
