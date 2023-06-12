import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-prompt-rating',
  templateUrl: './prompt-rating.component.html',
  styleUrls: ['./prompt-rating.component.scss']
})
export class PromptRatingComponent {
  @Output()
  ratingSubmitted = new EventEmitter<number>;

  promptRating: number;

  setPromptRating(rating: number) {
    this.promptRating = rating;
  }

  onSubmitRatings() {
    if(this.promptRating) {
      this.ratingSubmitted.emit(this.promptRating)
    }
  }

}
