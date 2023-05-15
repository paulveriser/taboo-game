import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-word-description',
  templateUrl: './word-description.component.html',
  styleUrls: ['./word-description.component.scss']
})
export class WordDescriptionComponent {
  @Input()
  wordDescriptionPrompt: string;
}
