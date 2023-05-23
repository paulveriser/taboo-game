import {Component, Input} from '@angular/core';
import {LifetimeWordStatistics} from "../statistic.component";

@Component({
  selector: 'app-statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.scss']
})
export class StatisticTableComponent {
  @Input()
  lifeTimeWordStats: LifetimeWordStatistics[];
  @Input()
  displayedColumns: string[];

}
