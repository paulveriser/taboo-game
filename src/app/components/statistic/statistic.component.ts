import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend/backend.service";
import {GuessTracking, PlayerStat} from "../../app.model";
import {ALL_WORD_DESCRIPIONS} from "../../constants/taboo-words.constant";

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
}

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  averageGamePoints = 0;
  lifeTimeWordStats: LifetimeWordStatistics[] = [
    {
      wordID: ''
    } as LifetimeWordStatistics
  ];

  displayedColumns: string[] = [
    'wordID',
    'timesGuessedRight',
    'timesGuessedWrong',
    'timesGuessedTotal',
    'totalAttempts',
    'averageAttempts',
    'minimumAttempts',
    'maximumAttempts',
    'totalTimeToSuccess',
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

  private calculateStatistics(playerStats: PlayerStat[]) {
    this.lifeTimeWordStats = [];
    for (let word of ALL_WORD_DESCRIPIONS) {
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
        maximumTimeToSuccess: 0
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
          lifetimeWordStat.totalAttempts += guessTracking.attempts;
          if (guessTracking.attempts > lifetimeWordStat.maximumAttempts) {
            lifetimeWordStat.maximumAttempts = guessTracking.attempts;
          }
          if (guessTracking.attempts < lifetimeWordStat.minimumAttempts) {
            lifetimeWordStat.minimumAttempts = guessTracking.attempts;
          }

          // Time to success Statistics
          lifetimeWordStat.totalTimeToSuccess += guessTracking.timeToSuccess;
          if (guessTracking.timeToSuccess > lifetimeWordStat.maximumTimeToSuccess) {
            lifetimeWordStat.maximumTimeToSuccess = guessTracking.timeToSuccess;
          }
          if (guessTracking.timeToSuccess < lifetimeWordStat.minimumTimeToSuccess) {
            lifetimeWordStat.minimumTimeToSuccess = guessTracking.timeToSuccess;
          }
        }
      }
    }
  }
}
