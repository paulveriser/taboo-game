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
  gameStarted? = false;
  @Output()
  timeOver = new EventEmitter<void>;

  title: string;
  timeLeft: number = 90;
  points: number = 0;
  interval: any;

  ngOnInit() {
    this.title = this.displayType === 'timer'?'Remaining time': 'Score';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.displayType === 'timer' && changes['gameStarted'].currentValue === true) {
      this.startTimer();
    } else if (this.displayType === 'timer' && changes['gameStarted'].currentValue === false) {
      this.endTimer();
    }
  }

  getDisplayedValue(): string {
    if (this.displayType === 'timer') {
      return this.timeLeft + ' seconds';
    } else {
      return this.points + ' points';
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.endTimer();
      }
    },1000)
  }

  endTimer() {
    clearInterval(this.interval);
    this.timeLeft = 90;
    this.timeOver.emit();
  }
}
