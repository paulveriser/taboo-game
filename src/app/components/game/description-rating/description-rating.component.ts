import {Component, EventEmitter, Output} from '@angular/core';
import {DescriptionRatings} from "../../../app.model";

@Component({
  selector: 'app-description-rating',
  templateUrl: './description-rating.component.html',
  styleUrls: ['./description-rating.component.scss']
})
export class DescriptionRatingComponent {
  @Output()
  ratingSubmitted = new EventEmitter<DescriptionRatings>;

  descriptionRatings: DescriptionRatings = {
    creativity: 0,
    bias: 0
  }

  setCreativityRating(rating: number) {
    this.descriptionRatings.creativity = rating;
  }

  setBiasRating(rating: number) {
    this.descriptionRatings.bias = rating;
  }

  onSubmitRatings() {
    this.ratingSubmitted.emit(this.descriptionRatings)
  }

}
