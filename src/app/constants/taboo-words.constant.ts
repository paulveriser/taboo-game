export interface TabooWordDescription {
  wordID: string,
  word: string,
  wordDescription: string
}

export const HUMAN_WORD_DESCRIPTIONS: TabooWordDescription[] = [
  {
    wordID: 'h1',
    word: 'elephant',
    wordDescription: 'A human generated prompt to guess the word elephant'
  },
  {
    wordID: 'h2',
    word: 'tiger',
    wordDescription: 'A human generated prompt to guess the word tiger'
  },
  {
    wordID: 'h3',
    word: 'zebra',
    wordDescription: 'A human generated prompt to guess the word zebra'
  },
  {
    wordID: 'h4',
    word: 'lion',
    wordDescription: 'A human generated prompt to guess the word lion'
  },
  {
    wordID: 'h5',
    word: 'giraffe',
    wordDescription: 'A human generated prompt to guess the word giraffe'
  },
]
export const CHATGPT_WORD_DESCRIPTIONS: TabooWordDescription[] = [
  {
    wordID: 'a1',
    word: 'elephant',
    wordDescription: 'An AI generated prompt to guess the word elephant'
  },
  {
    wordID: 'a2',
    word: 'tiger',
    wordDescription: 'An AI generated prompt to guess the word tiger'
  },
  {
    wordID: 'a3',
    word: 'zebra',
    wordDescription: 'An AI generated prompt to guess the word zebra'
  },
  {
    wordID: 'a4',
    word: 'lion',
    wordDescription: 'An AI generated prompt to guess the word lion'
  },
  {
    wordID: 'a5',
    word: 'giraffe',
    wordDescription: 'An AI generated prompt to guess the word giraffe'
  },
]

export const ALL_WORD_DESCRIPIONS: TabooWordDescription[] = HUMAN_WORD_DESCRIPTIONS.concat(CHATGPT_WORD_DESCRIPTIONS);
