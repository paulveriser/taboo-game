import {Component, OnInit} from '@angular/core';
import {
  CHATGPT_WORD_DESCRIPTIONS,
  HUMAN_WORD_DESCRIPTIONS,
  TabooWordDescription
} from "./constants/taboo-words.constant";
import {GameSetup, GuessTracking} from "./app.model";
import {ngxCsv} from "ngx-csv";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'taboo-game';
  infoText = 'Your guesses as well as your score and the values of the timer at different points during the game are stored anonymously in a database for scientific purposes.';

  gameSetup: GameSetup;
  startGuessTime: number;

  ngOnInit() {
    this.resetGame();
  }

  onStartGame() {
    this.resetGame();
    this.gameSetup.gameStarted = true;
    this.setStartGuessTime()
  }

  onTimeOver() {
    this.trackPlayersStats(this.gameSetup.wordsToGuess[this.gameSetup.wordCount].wordID, false, false);
    this.setStartGuessTime();
    // End game when all words shown
    if (this.gameSetup.wordCount === this.gameSetup.wordsToGuess.length-1) {
      this.gameSetup.gameStarted = false;
    } else {
      this.gameSetup.wordCount++;
    }
  }

  onGuessSubmitted(guess: string) {
    // Word guessed
    if (this.gameSetup.wordsToGuess[this.gameSetup.wordCount].word === guess.toLowerCase()) {
      this.trackPlayersStats(this.gameSetup.wordsToGuess[this.gameSetup.wordCount].wordID, true, true);
      this.gameSetup.playerStat.gamePoints++;
      // End game when all words guessed
      if (this.gameSetup.wordCount === this.gameSetup.wordsToGuess.length-1) {
        this.gameSetup.gameStarted = false;
        this.writeToCSV();
      } else {
        this.gameSetup.wordCount++;
        this.setStartGuessTime();
      }
    // Wrong guess
    } else {
      this.trackPlayersStats(this.gameSetup.wordsToGuess[this.gameSetup.wordCount].wordID, false, true);
    }
  }

  private resetGame() {
    const words = this.chooseWords(4);
    let guessTrackings: GuessTracking[] = []
    words.forEach((word) => {
      guessTrackings.push({
        wordID: word.wordID,
        guessed: false,
        attempts: 0,
        timeToSuccess: 0
      })
    });
    this.gameSetup = {
      gameStarted: false,
      timePerWord: 60,
      numberOfWords: 4,
      wordsToGuess: words,
      wordCount: 0,
      playerStat: {
        gamePoints: 0,
        guessTrackings: guessTrackings
      }
    }
  }

  private chooseWords(numberOfWords: number): TabooWordDescription[] {
    const shuffledHuman = HUMAN_WORD_DESCRIPTIONS.sort(() => 0.5 - Math.random());
    const shuffledChatGPT = CHATGPT_WORD_DESCRIPTIONS.sort(() => 0.5 - Math.random());
    return shuffledHuman.slice(0, numberOfWords/2).concat(shuffledChatGPT.slice(0, numberOfWords/2)).sort(() => 0.5 - Math.random());
  }

  private trackPlayersStats(wordID: string, guessed: boolean, newAttempt: boolean) {
    this.gameSetup.playerStat.guessTrackings.map(guessTracking => {
      if(guessTracking.wordID === wordID) {
        return {
          guessed: guessTracking.guessed = guessed,
          attempts: newAttempt? guessTracking.attempts++: guessTracking.attempts,
          timeToSuccess: guessed? guessTracking.timeToSuccess = this.getCurrentGuessTime(): guessTracking.timeToSuccess = -1,
        }
      } else {
        return guessTracking;
      }
    });
  }

  private setStartGuessTime() {
    this.startGuessTime = new Date().getTime();
  }

  private getCurrentGuessTime() {
    const endGuessTime = new Date().getTime();
    return (endGuessTime - this.startGuessTime)/1000;
  }

  private writeToCSV() {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Player Stats',
      useBom: true,
      noDownload: true,
      headers: ['WordID', 'guessed', 'attempts', 'time to success']
    };

    new ngxCsv(this.gameSetup.playerStat.guessTrackings, 'test', options)
  }
}
