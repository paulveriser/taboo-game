import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss']
})
export class GameDisplayComponent implements OnInit, OnChanges {
  @Input()
  displayType: 'timer' | 'score';
  @Input()
  points: number;
  @Input()
  timePerWord: number;
  @Input()
  gameStarted? = false;
  @Output()
  timeOver = new EventEmitter<void>;

  title: string;
  interval: any;
  timeLeft: number;

  ngOnInit() {
    this.title = this.displayType === 'timer'?'Remaining time': 'Score';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.displayType === 'timer' && this.gameStarted && changes['points']) {
      clearInterval(this.interval);
      this.startTimer();
    } else if (this.displayType === 'timer' && changes['gameStarted'].currentValue === true) {
      this.startTimer();
    } else if (this.displayType === 'timer' && changes['gameStarted'].currentValue === false) {
      this.endTimer();
    }
  }

  getDisplayedValue(): string {
    if (this.displayType === 'timer') {
      return this.timeLeft + ' seconds';
    } else {
      return this.points + ' point' + (this.points !== 1? 's': '');
    }
  }

  startTimer() {
    this.timeLeft = this.timePerWord
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.timeLeft = this.timePerWord;
        this.startTimer()
        this.timeOver.emit();
      }
    },1000)
  }

  endTimer() {
    clearInterval(this.interval);
    this.timeLeft = this.timePerWord;
    this.timeOver.emit();
  }
}
