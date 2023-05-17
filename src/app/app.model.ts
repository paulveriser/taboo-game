import {TabooWordDescription} from "./constants/taboo-words.constant";

export interface GameSetup {
  gameStarted: boolean;
  timePerWord: number;
  numberOfWords: number;
  wordsToGuess: TabooWordDescription[];
  wordCount: number;
  playerStat: PlayerStat;
}

export interface PlayerStat {
  gamePoints: number;
  guessTrackings: GuessTracking[];
}

export interface GuessTracking {
  wordID: string;
  guessed: boolean;
  attempts: number;
  timeToSuccess: number;
}
