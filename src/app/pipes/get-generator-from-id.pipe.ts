import { Pipe, PipeTransform } from '@angular/core';
import {
  CHATGPT_WORD_DESCRIPTIONS,
  HUMAN_WORD_DESCRIPTIONS
} from "../constants/taboo-words.constant";

@Pipe({
  name: 'getGeneratorFromId'
})
export class GetGeneratorFromIdPipe implements PipeTransform {

  transform(wordID: string): string {
    for (let word of HUMAN_WORD_DESCRIPTIONS) {
      if (word.wordID === wordID) {
        return 'Generator: Human'
      }
    }
    for (let word of CHATGPT_WORD_DESCRIPTIONS) {
      if (word.wordID === wordID) {
        return 'Generator: Chat-GPT'
      }
    }
    return '';
  }

}
