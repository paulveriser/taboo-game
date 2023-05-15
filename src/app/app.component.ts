import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taboo-game';
  infoText = 'Your guesses as well as your score and the values of the timer at different points during the game are stored anonymously in a database for scientific purposes.';

  gameStarted = false;

  onStartGame() {
    this.gameStarted = true;
  }

  onTimeOver() {
    this.gameStarted = false;
  }
}
