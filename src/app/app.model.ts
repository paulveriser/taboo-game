import {TabooWordDescription} from "./constants/taboo-words.constant";
import {UserInformation} from "./components/game/user-information-input/user-information-input.component";

export type Gamestatus = 'pregame' | 'running' | 'paused' | 'ended' | 'postgame'

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
  userInformation: UserInformation;
  guessTrackings: GuessTracking[];
}

export interface GuessTracking {
  wordID: string;
  guessed: boolean;
  wrongGuesses: string[];
  attempts: number;
  timeToSuccess: number;
  promptRating: RatedPrompt;
}

export interface RatedPrompt {
  rating: number;
  prompt: string;
}
