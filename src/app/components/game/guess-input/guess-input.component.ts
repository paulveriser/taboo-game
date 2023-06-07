import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Gamestatus} from "../../../app.model";

@Component({
  selector: 'app-guess-input',
  templateUrl: './guess-input.component.html',
  styleUrls: ['./guess-input.component.scss']
})
export class GuessInputComponent {
  @Output()
  guessSubmition = new EventEmitter<string>;
  @Input()
  gameStatus: Gamestatus = 'ended';
  @Input()
  lastWordRight: boolean;

  value: string = '';
  onGuessSubmit () {
    this.guessSubmition.emit(this.value)
    this.value = '';
  }

  getTitle() {
    if (this.gameStatus === 'running' && this.lastWordRight === undefined) {
      return 'What is your guess?';
    } else if (this.gameStatus === 'paused' && this.lastWordRight) {
      return 'Correct. Great Job! Please give a rating for the description prompt on the categories shown above to succeed';
    } else if (this.gameStatus === 'running' && !this.lastWordRight) {
      return 'That\'s incorrect. What is your new guess?';
    }  else if (this.gameStatus === 'paused' && !this.lastWordRight) {
      return 'Time\'s up. Please rate the description prompt on the categories shown above.';
    }  else {
      return 'Start the game to guess'
    }
  }

}
