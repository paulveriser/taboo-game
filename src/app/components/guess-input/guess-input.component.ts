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

  value: string = '';
  onGuessSubmit () {
    this.guessSubmition.emit(this.value)
    this.value = '';
  }

}
