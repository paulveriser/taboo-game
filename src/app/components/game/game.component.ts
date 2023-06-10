import {Component, OnInit} from '@angular/core';
import { GameSetup, GuessTracking} from "../../app.model";
import {BackendService} from "../../services/backend/backend.service";
import {
  CHATGPT_WORD_DESCRIPTIONS,
  HUMAN_WORD_DESCRIPTIONS,
  TabooWordDescription
} from "../../constants/taboo-words.constant";
import {UserInformation} from "./user-information-input/user-information-input.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  infoText = 'Your guesses as well as your score and the values of the timer at different points during the game are stored anonymously in a database for scientific purposes.';

  gameSetup: GameSetup;
  startGuessTime: number;
  lastWordRight: boolean;

  constructor (private backendService: BackendService) {
  }

  ngOnInit() {
    this.resetGame();
  }

  onStartGame() {
    this.resetGame();
    this.gameSetup.gameStatus = 'running';
    this.setStartGuessTime()
  }

  onTimeOver() {
    this.trackPlayersStats(this.gameSetup.wordsToGuess[this.gameSetup.wordCount].wordID, false, false);
    this.gameSetup.gameStatus = 'paused';
  }

  onGuessSubmitted(guess: string) {
    // Word guessed
    if (this.gameSetup.wordsToGuess[this.gameSetup.wordCount].word.toLowerCase() === guess.toLowerCase()) {
      this.trackPlayersStats(this.gameSetup.wordsToGuess[this.gameSetup.wordCount].wordID, true, true);
      this.gameSetup.playerStat.gamePoints++;
      this.lastWordRight = true;
      // Get next game Status
      this.getNextGameStatus()
      // Wrong guess
    } else {
      this.trackPlayersStats(this.gameSetup.wordsToGuess[this.gameSetup.wordCount].wordID, false, true);
      this.lastWordRight = false;
    }
  }

  onNextWord() {
    this.getNextGameStatus();
    this.lastWordRight = undefined;
    this.gameSetup.gameStatus = 'running';
  }

  onUserInformationSubmitted(userInformation: UserInformation) {
    this.gameSetup.playerStat.userInformation = userInformation;
    this.backendService.uploadPlayerStats(this.gameSetup.playerStat);
    this.gameSetup.gameStatus = 'postgame';
  }

  private getNextGameStatus() {
    // End game when all words shown & rating was shown
    if (this.gameSetup.wordCount === this.gameSetup.wordsToGuess.length-1) {
      this.gameSetup.gameStatus = 'ended';
    } else if (this.gameSetup.gameStatus === 'paused') {
      this.gameSetup.gameStatus = 'running';
      this.gameSetup.wordCount++;
      this.setStartGuessTime();
    } else {
      this.gameSetup.gameStatus = 'paused';
    }
  }

  private trackPlayersStats(wordID: string, guessed: boolean, newAttempt: boolean) {
    this.gameSetup.playerStat.guessTrackings.map(guessTracking => {
      if(guessTracking.wordID === wordID) {
        return {
          guessed: guessTracking.guessed = guessed,
          attempts: newAttempt? guessTracking.attempts++: guessTracking.attempts,
          timeToSuccess: guessed? guessTracking.timeToSuccess = this.getCurrentGuessTime(): guessTracking.timeToSuccess = undefined
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
      gameStatus: 'pregame',
      timePerWord: 20,
      numberOfWords: 4,
      wordsToGuess: words,
      wordCount: 0,
      playerStat: {
        gamePoints: 0,
        userInformation: {
          age: 0,
          gender: 'prefer not to say',
          itKnowledge: 0
        },
        guessTrackings: guessTrackings
      }
    }
  }

  private chooseWords(numberOfWords: number): TabooWordDescription[] {
    // shuffle description list
    const shuffledHuman = HUMAN_WORD_DESCRIPTIONS.sort(() => 0.5 - Math.random());
    let shuffledChatGPT = CHATGPT_WORD_DESCRIPTIONS.sort(() => 0.5 - Math.random());

    // Choose half of desired words from human
    const humanDescriptions = shuffledHuman.slice(0, numberOfWords/2)

    // prevent same words
    for (let humanDescription of humanDescriptions) {
      shuffledChatGPT = shuffledChatGPT.filter(chatGPTDescription => chatGPTDescription.word !== humanDescription.word);
    }
    // Get the other half of desired number of words from filtered chatGPT list
    return humanDescriptions.concat(shuffledChatGPT.slice(0, numberOfWords/2)).sort(() => 0.5 - Math.random());
  }
}
