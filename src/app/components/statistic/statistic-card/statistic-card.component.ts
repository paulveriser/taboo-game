import {Component, Input} from '@angular/core';

export interface HighlightValue {
  value: number,
  wordID: string,
  wordDescription?: string
}

@Component({
  selector: 'app-statistic-card',
  templateUrl: './statistic-card.component.html',
  styleUrls: ['./statistic-card.component.scss']
})
export class StatisticCardComponent {
  @Input()
  title: string;
  @Input()
  value: HighlightValue;
  @Input()
  unit: 'sec' | 'attempts' | 'guesses' | 'attendences' | 'times' | 'stars';
}
