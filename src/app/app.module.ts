import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GuessInputComponent } from './components/game/guess-input/guess-input.component';
import { WordDescriptionComponent } from './components/game/word-description/word-description.component';
import { GameDisplayComponent } from './components/game/game-display/game-display.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { GameComponent } from './components/game/game.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatTableModule} from "@angular/material/table";
import { WelcomeComponent } from './components/welcome/welcome.component';
import { StatisticCardComponent } from './components/statistic/statistic-card/statistic-card.component';
import {MatCardModule} from "@angular/material/card";
import { GetWordFromIdPipe } from './pipes/get-word-from-id.pipe';
import { GetGeneratorFromIdPipe } from './pipes/get-generator-from-id.pipe';
import { StatisticTableComponent } from './components/statistic/statistic-table/statistic-table.component';

const appRoute: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'game', component: GameComponent},
  {path: 'statistics', component: StatisticComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GuessInputComponent,
    WordDescriptionComponent,
    GameDisplayComponent,
    GameComponent,
    StatisticComponent,
    WelcomeComponent,
    StatisticCardComponent,
    GetWordFromIdPipe,
    GetGeneratorFromIdPipe,
    StatisticTableComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
