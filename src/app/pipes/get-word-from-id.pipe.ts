import { Pipe, PipeTransform } from '@angular/core';
import {ALL_WORD_DESCRIPIONS} from "../constants/taboo-words.constant";

@Pipe({
  name: 'getWordFromId'
})
export class GetWordFromIdPipe implements PipeTransform {

  transform(wordID: string): string {
    for (let word of ALL_WORD_DESCRIPIONS) {
      if (word.wordID === wordID) {
        return 'Word: ' + word.word
      }
    }
    return '';
  }

}
