import {Component, OnInit} from '@angular/core';
import {GameSetup, GuessTracking} from "../../app.model";
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
  lastShownPrompt: string;

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
      this.trackPlayersStats(this.gameSetup.wordsToGuess[this.gameSetup.wordCount].wordID, false, true, guess.toLowerCase());
      this.lastWordRight = false;
    }
  }

  setLastShownPrompt(prompt: string) {
    this.lastShownPrompt = prompt;
  }

  onRatingSubmitted(rating: number) {
    this.gameSetup.playerStat.guessTrackings.map(guessTracking => {
      if(guessTracking.wordID === this.gameSetup.wordsToGuess[this.gameSetup.wordCount].wordID) {
        return {
          promptRating: guessTracking.promptRating = {
            rating: rating,
            prompt: this.lastShownPrompt
          }
        }
      } else {
        return guessTracking;
      }
    });
    console.log(rating);
    this.getNextGameStatus();
    this.lastWordRight = undefined;
  }

  onUserInformationSubmitted(userInformation: UserInformation) {
    this.gameSetup.playerStat.userInformation = userInformation;
    this.backendService.uploadPlayerStats(this.gameSetup.playerStat);
    this.gameSetup.gameStatus = 'postgame';
  }

  private getNextGameStatus() {
    // End game when all words shown & rating was shown
    if (this.gameSetup.wordCount === this.gameSetup.wordsToGuess.length-1 && this.gameSetup.gameStatus === 'paused') {
      this.gameSetup.gameStatus = 'ended';
    } else if (this.gameSetup.gameStatus === 'paused') {
      this.gameSetup.gameStatus = 'running';
      this.gameSetup.wordCount++;
      this.setStartGuessTime();
    } else {
      this.gameSetup.gameStatus = 'paused';
    }
  }

  private trackPlayersStats(wordID: string, guessed: boolean, newAttempt: boolean, wrongGuess?: string) {
    this.gameSetup.playerStat.guessTrackings.map(guessTracking => {
      if(guessTracking.wordID === wordID) {
        return {
          guessed: guessTracking.guessed = guessed,
          attempts: newAttempt? guessTracking.attempts++: guessTracking.attempts,
          wrongGuesses: wrongGuess? guessTracking.wrongGuesses.push(wrongGuess): guessTracking.wrongGuesses,
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
    const numberOfWords = 8;
    const words = this.chooseWords();
    let guessTrackings: GuessTracking[] = []
    words.forEach((word) => {
      guessTrackings.push({
        wordID: word.wordID,
        guessed: false,
        wrongGuesses: [],
        attempts: 0,
        timeToSuccess: 0,
        promptRating: {
          rating: 0,
          prompt: ''
        }
      })
    });
    this.gameSetup = {
      gameStatus: 'pregame',
      timePerWord: 30,
      numberOfWords: numberOfWords,
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

  private chooseWords(): TabooWordDescription[] {
    // shuffle description list
    const shuffledHuman = HUMAN_WORD_DESCRIPTIONS.sort(() => 0.5 - Math.random());
    let shuffledChatGPT = CHATGPT_WORD_DESCRIPTIONS.sort(() => 0.5 - Math.random());

    // Choose one from each category human
    let humanDescriptions: TabooWordDescription[] = [];
    let categoriesHuman: string[] = [];
    for (let word of shuffledHuman) {
      if (!categoriesHuman.includes(word.category)) {
        humanDescriptions.push(word);
        categoriesHuman.push(word.category);
      }
    }

    // prevent same words
    for (let humanDescription of humanDescriptions) {
      shuffledChatGPT = shuffledChatGPT.filter(chatGPTDescription => chatGPTDescription.word !== humanDescription.word);
    }

    // Choose one from each category chatGPT
    let chatGPTDescriptions: TabooWordDescription[] = [];
    let categoriesChatGPT: string[] = [];
    for (let word of shuffledChatGPT) {
      if (!categoriesChatGPT.includes(word.category)) {
        chatGPTDescriptions.push(word);
        categoriesChatGPT.push(word.category);
      }
    }

    // Get the other half of desired number of words from filtered chatGPT list
    console.log(humanDescriptions.concat(chatGPTDescriptions).sort(() => 0.5 - Math.random()));
    return humanDescriptions.concat(chatGPTDescriptions).sort(() => 0.5 - Math.random());
  }
}
