import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-guess-input',
  templateUrl: './guess-input.component.html',
  styleUrls: ['./guess-input.component.scss']
})
export class GuessInputComponent {
  @Output()
  guessSubmition = new EventEmitter<string>;
  @Input()
  gameStarted = false;
  @Input()
  lastWordRight: boolean;

  value: string = '';
  onGuessSubmit () {
    this.guessSubmition.emit(this.value)
    this.value = '';
  }

  getTitle() {
    if (this.gameStarted && this.lastWordRight === undefined) {
      return 'What is your guess?';
    } else if (this.gameStarted && this.lastWordRight) {
      return 'Correct. Great Job! Next Guess:';
    } else if (this.gameStarted && !this.lastWordRight) {
      return 'That\'s incorrect. What is your new guess?';
    } else {
      return 'Start the game to guess'
    }
  }

}
