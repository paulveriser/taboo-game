import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-word-description',
  templateUrl: './word-description.component.html',
  styleUrls: ['./word-description.component.scss']
})
export class WordDescriptionComponent implements OnInit {
  @Input()
  wordDescriptionPrompts: string[] = [];
  @Output()
  shownPrompt = new EventEmitter<string>;

  wordDescriptionPrompt: string;

  ngOnInit(): void {
    this.wordDescriptionPrompt = this.wordDescriptionPrompts[Math.floor(Math.random() * this.wordDescriptionPrompts.length)];
    this.shownPrompt.emit(this.wordDescriptionPrompt);
  }
}
