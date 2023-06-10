import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-word-description',
  templateUrl: './word-description.component.html',
  styleUrls: ['./word-description.component.scss']
})
export class WordDescriptionComponent implements OnInit {
  @Input()
  wordDescriptionPrompts: string[] = [];

  wordDescriptionPrompt: string;

  ngOnInit(): void {
    this.wordDescriptionPrompt = this.wordDescriptionPrompts[Math.floor(Math.random() * this.wordDescriptionPrompts.length)];
  }
}
