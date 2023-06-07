import {TabooWordDescription} from "./constants/taboo-words.constant";

export type Gamestatus = 'running' | 'paused' | 'ended';

export interface GameSetup {
  gameStatus: Gamestatus;
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
  ratings: DescriptionRatings;
}

export interface DescriptionRatings {
  creativity: number;
  bias: number;
}
