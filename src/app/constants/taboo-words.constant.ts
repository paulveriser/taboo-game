export interface TabooWordDescription {
  wordID: string,
  word: string,
  wordDescription: string
}

export const HUMAN_WORD_DESCRIPTIONS: TabooWordDescription[] = [
  {
    wordID: 'h1',
    word: 'Elephant',
    wordDescription: 'A human generated prompt to guess the word elephant'
  },
  {
    wordID: 'h2',
    word: 'Tiger',
    wordDescription: 'A human generated prompt to guess the word tiger'
  },
  {
    wordID: 'h3',
    word: 'Zebra',
    wordDescription: 'A human generated prompt to guess the word zebra'
  },
  {
    wordID: 'h4',
    word: 'Lion',
    wordDescription: 'A human generated prompt to guess the word lion'
  },
  {
    wordID: 'h5',
    word: 'Giraffe',
    wordDescription: 'A human generated prompt to guess the word giraffe'
  },
]
export const CHATGPT_WORD_DESCRIPTIONS: TabooWordDescription[] = [
  {
    wordID: 'a1',
    word: 'Elephant',
    wordDescription: 'An AI generated prompt to guess the word elephant'
  },
  {
    wordID: 'a2',
    word: 'Tiger',
    wordDescription: 'An AI generated prompt to guess the word tiger'
  },
  {
    wordID: 'a3',
    word: 'Zebra',
    wordDescription: 'An AI generated prompt to guess the word zebra'
  },
  {
    wordID: 'a4',
    word: 'Lion',
    wordDescription: 'An AI generated prompt to guess the word lion'
  },
  {
    wordID: 'a5',
    word: 'Giraffe',
    wordDescription: 'An AI generated prompt to guess the word giraffe'
  },
]

export const ALL_WORD_DESCRIPIONS: TabooWordDescription[] = HUMAN_WORD_DESCRIPTIONS.concat(CHATGPT_WORD_DESCRIPTIONS);
