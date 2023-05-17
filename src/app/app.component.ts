import {Component, OnInit} from '@angular/core';
import {
  CHATGPT_WORD_DESCRIPTIONS,
  HUMAN_WORD_DESCRIPTIONS,
  TabooWordDescription
} from "./constants/taboo-words.constant";
import {GameSetup, GuessTracking} from "./app.model";
import {ngxCsv} from "ngx-csv";
import {BackendService} from "./services/backend/backend.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  protected readonly location = location;
}
