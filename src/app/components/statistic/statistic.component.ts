import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend/backend.service";
import {GuessTracking, PlayerStat, RatedPrompt} from "../../app.model";
import {ALL_WORD_DESCRIPIONS} from "../../constants/taboo-words.constant";
import {HighlightValue} from "./statistic-card/statistic-card.component";

export interface LifetimeWordStatistics  {
  wordID: string;
  timesGuessedRight: number;
  timesGuessedWrong: number;
  timesGuessedTotal: number;
  totalAttempts: number;
  averageAttempts: number;
  minimumAttempts: number;
  maximumAttempts: number;
  totalTimeToSuccess: number;
  averageTimeToSuccess: number;
  minimumTimeToSuccess: number;
  maximumTimeToSuccess: number;
  totalRatings: any[];
  averageRatings: RatedPrompt[];
}

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  averageGamePoints = 0;
  totalAttendences = 0;
  lifeTimeWordStats: LifetimeWordStatistics[] = [
    {
      wordID: ''
    } as LifetimeWordStatistics
  ];

  displayedColumns: string[] = [
    'wordID',
    'timesGuessedRight',
    'timesGuessedWrong',
    'averageAttempts',
    'minimumAttempts',
    'maximumAttempts',
    'averageTimeToSuccess',
    'minimumTimeToSuccess',
    'maximumTimeToSuccess'
  ];

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.backendService.getPlayerStats()
      .subscribe((response) => {
        this.calculateStatistics(response);
      });
  }

  getFastestGuess() {
    let fastestGuess: HighlightValue = {value: 999, wordID: ''};
    for (let lifetimeWordStat of this.lifeTimeWordStats) {
      if (lifetimeWordStat.minimumTimeToSuccess < fastestGuess.value) {
        fastestGuess = {
          value: lifetimeWordStat.minimumTimeToSuccess,
          wordID: lifetimeWordStat.wordID
        }
      }
    }
    return fastestGuess;
  }

  getSlowestGuess() {
    let slowestGuess: HighlightValue = {value: 0, wordID: ''};
    for (let lifetimeWordStat of this.lifeTimeWordStats) {
      if (lifetimeWordStat.maximumTimeToSuccess > slowestGuess.value) {
        slowestGuess = {
          value: lifetimeWordStat.maximumTimeToSuccess,
          wordID: lifetimeWordStat.wordID
        }
      }
    }
    return slowestGuess;
  }

  getMostAttempts() {
    let mostAttempts: HighlightValue = {value: 0, wordID: ''};
    for (let lifetimeWordStat of this.lifeTimeWordStats) {
      if (lifetimeWordStat.maximumAttempts > mostAttempts.value) {
        mostAttempts = {
          value: lifetimeWordStat.maximumAttempts,
          wordID: lifetimeWordStat.wordID
        }
      }
    }
    return mostAttempts;
  }

  getMostUnsolved() {
    let mostUnsolved: HighlightValue = {value: 0, wordID: ''};
    for (let lifetimeWordStat of this.lifeTimeWordStats) {
      if (lifetimeWordStat.timesGuessedWrong > mostUnsolved.value) {
        mostUnsolved = {
          value: lifetimeWordStat.timesGuessedWrong,
          wordID: lifetimeWordStat.wordID
        }
      }
    }
    return mostUnsolved;
  }

  getBestPromptRating() {
    let bestPromptRating: HighlightValue = {value: 0, wordID: ''};
    for (let lifetimeWordStat of this.lifeTimeWordStats) {
      if(lifetimeWordStat.averageRatings){
        for (let rating of lifetimeWordStat.averageRatings) {
          if (rating.rating > bestPromptRating.value) {
            bestPromptRating = {
              value: rating.rating,
              wordID: lifetimeWordStat.wordID,
              wordDescription: rating.prompt
            }
          }
        }
      }
    }
    return bestPromptRating;
  }

  getTotalAttendences(): HighlightValue {
    return {value: this.totalAttendences, wordID: ''};
  }

  private calculateStatistics(playerStats: PlayerStat[]) {
    this.totalAttendences = playerStats.length;
    this.lifeTimeWordStats = [];
    for (let word of ALL_WORD_DESCRIPIONS) {
      let totalRatings = [];
      for(let wordDescription of word.wordDescriptions) {
        totalRatings.push({
          prompt: wordDescription,
          rating: 0,
          count: 0
        })
      }
      this.lifeTimeWordStats.push({
        wordID: word.wordID,
        timesGuessedRight: 0,
        timesGuessedWrong: 0,
        timesGuessedTotal: 0,
        totalAttempts: 0,
        averageAttempts: 0,
        minimumAttempts: 999,
        maximumAttempts: 0,
        totalTimeToSuccess: 0,
        averageTimeToSuccess: 0,
        minimumTimeToSuccess: 999,
        maximumTimeToSuccess: 0,
        totalRatings: totalRatings,
        averageRatings: []
      })
    }

    for (let playerStat of playerStats) {
      this.averageGamePoints += playerStat.gamePoints;
      this.updateLifetimeWordStats(playerStat.guessTrackings);
    }

    // Calculate Averages
    this.averageGamePoints = this.averageGamePoints/playerStats.length;
    this.averageGamePoints = Math.round(this.averageGamePoints * 1000) / 1000;
    for (let lifetimeWordStat of this.lifeTimeWordStats) {
      lifetimeWordStat.averageTimeToSuccess = lifetimeWordStat.totalTimeToSuccess/playerStats.length;
      lifetimeWordStat.averageTimeToSuccess = Math.round(lifetimeWordStat.averageTimeToSuccess * 1000) / 1000;
      lifetimeWordStat.averageAttempts = lifetimeWordStat.totalAttempts/playerStats.length;
      lifetimeWordStat.averageAttempts = Math.round(lifetimeWordStat.averageAttempts * 1000) / 1000;
      for(let rating of lifetimeWordStat.totalRatings) {
        lifetimeWordStat.averageRatings.push({
          prompt: rating.prompt,
          rating: (rating.rating/rating.count)
        })
      }
    }
  }

  private updateLifetimeWordStats(guessTrackings: GuessTracking[]) {
    for (let lifetimeWordStat of this.lifeTimeWordStats) {
      for (let guessTracking of guessTrackings) {
        if (guessTracking.wordID === lifetimeWordStat.wordID) {
          // Guess Statistics
          lifetimeWordStat.timesGuessedTotal += 1;
          if (guessTracking.guessed) {
            lifetimeWordStat.timesGuessedRight += 1;
          } else {
            lifetimeWordStat.timesGuessedWrong += 1;
          }

          // Attempt Statistics
          if(guessTracking.attempts) {
            lifetimeWordStat.totalAttempts += guessTracking.attempts;
            if (guessTracking.attempts > lifetimeWordStat.maximumAttempts) {
              lifetimeWordStat.maximumAttempts = guessTracking.attempts;
            }
            if (guessTracking.attempts < lifetimeWordStat.minimumAttempts) {
              lifetimeWordStat.minimumAttempts = guessTracking.attempts;
            }
          }

          // Time to success Statistics
          if(guessTracking.timeToSuccess) {
            lifetimeWordStat.totalTimeToSuccess += guessTracking.timeToSuccess;
            if (guessTracking.timeToSuccess > lifetimeWordStat.maximumTimeToSuccess) {
              lifetimeWordStat.maximumTimeToSuccess = guessTracking.timeToSuccess;
            }
            if (guessTracking.timeToSuccess < lifetimeWordStat.minimumTimeToSuccess) {
              lifetimeWordStat.minimumTimeToSuccess = guessTracking.timeToSuccess;
            }
          }

          // PromptRating Statistics
          if(guessTracking.promptRating) {
            for(let rating of lifetimeWordStat.totalRatings) {
              if(rating.prompt === guessTracking.promptRating.prompt) {
                rating.rating += guessTracking.promptRating.rating;
                rating.count++;
              }
            }
          }
        }
      }
    }
  }

  protected readonly screen = screen;
}
