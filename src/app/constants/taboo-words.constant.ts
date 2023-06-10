export interface TabooWordDescription {
  wordID: string,
  word: string,
  wordDescriptions: string[]
}

export const HUMAN_WORD_DESCRIPTIONS: TabooWordDescription[] = [
  {
    wordID: 'h1-love',
    word: 'love',
    wordDescriptions: [
    `Fill in the blank. Romeo & Juliet __ each other.`, 
    `Its 4 letters and what pretty much everyone is looking for. You would feel this way for your partner.`,
    `When you like someone so much that you want to get married you probably fell in ___`,
    `Every mother ___ her child.`]
  },
  {
    wordID: 'h2-truth',
    word: 'truth',
    wordDescriptions: [
    `Fill in the blank. I got a bad grade but I told my mom exactly what happened. I was telling her the ___ `, 
    `Fill in the blank. When you think someone is not telling you what actually happened, you would ask them to tell you the ...`,
    `If you tell something which is exactly correct you tell the ___`,
    `If you tell the reality to someone, the you tell the ___.`]
  },
  {
    wordID: 'h3-imagination',
    word: 'imagination',
    wordDescriptions: [
    `The ability to make things up in your head.`, 
    `When someone doesn't make or say something original, you would ask them to use it. Children has quite a powerful way of using it. They can think of many different and cool or scary things`,
    `You see something in front of your eyes. (Noun)`,
    `"Animals can talk". This is just an ___`]
  },
  {
    wordID: 'h4-happiness',
    word: 'happiness',
    wordDescriptions: [
    `When everything goes well with your life, what do you feel? It's a noun.`, 
    `It's in a Lana Del Ray song. Fill in blank, ..... is a butterfly.`,
    `If you do something you really like to do you feel (Noun)`,
    `When you have no worries and have everything you desire, then you feel ___ (noun).`]
  },
  {
    wordID: 'h5-religion',
    word: 'religion',
    wordDescriptions: [
    `It is some kind of belief system. This word is related to church or mosque. `, 
    `a devotion to some higher being, such as a God.`,
    `there are many forms of it, in every form a lot of people believe in one or more gods`,
    `if you have belief in a higher power like God, then you have a ___`]
  },
  {
    wordID: 'h6-bag',
    word: 'bag',
    wordDescriptions: [
    `This is a container made of soft materials that holds your groceries`, 
    `A useful thing where you can put in small things you just bought. It is available in different materials.`,
    `For example backpacks are a type of this object.`,
    `An object where you can put things inside.`]
  },
  {
    wordID: 'h7-desk',
    word: 'desk',
    wordDescriptions: [
    `When you study, you put your things on a ____`, 
    `A table you use as an employee.`,
    `In schools tables are usually called with this name`,
    `Usually at home you write your homework on a ___`]
  },
  {
    wordID: 'h8-nature',
    word: 'nature',
    wordDescriptions: [
    `The physical world without artificial creations. You have respect for her. You call her "Mother ___" `, 
    `When you look out of the window you can see only a small part of the whole ___. Forests or sees are part of it.`,
    `Its the common name for all livings and their habitats.`,
    `Living thing like tiger should live in the __, not in zoo.`]
  },
  {
    wordID: 'h9-portrait',
    word: 'portrait',
    wordDescriptions: [
    `What kind of drawing is Mona Lisa?`, 
    `A drawing where you mostly only see the upper part of the body.`,
    `With this mode of photography, you usually see the head and shoulders where the background is often blurry.`,
    `A piece of art which shows a single person`]
  },
  {
    wordID: 'h10-container',
    word: 'container',
    wordDescriptions: [
    `A hollow object, such as a box or bottle, which is used to hold something. `, 
    `A big thing where you can store goods. Often found in ports.`,
    `Its an object where you can store any kind of items. People usually refer it to store their waste. Can be found in streets.`,
    `On Ships are many ___ for the transport.`]
  }
]
export const CHATGPT_WORD_DESCRIPTIONS: TabooWordDescription[] = [
  {
    wordID: 'a1-love',
    word: 'love',
    wordDescriptions: ['An AI generated prompt to guess the word love']
  },
  {
    wordID: 'a2-truth',
    word: 'truth',
    wordDescriptions: ['An AI generated prompt to guess the word truth']
  },
  {
    wordID: 'a3-imagination',
    word: 'imagination',
    wordDescriptions: ['An AI generated prompt to guess the word imagination']
  },
  {
    wordID: 'a4-happiness',
    word: 'happiness',
    wordDescriptions: ['An AI generated prompt to guess the word happiness']
  },
  {
    wordID: 'a5-religion',
    word: 'religion',
    wordDescriptions: ['An AI generated prompt to guess the word religion']
  },
  {
    wordID: 'a6-bag',
    word: 'bag',
    wordDescriptions: ['An AI generated prompt to guess the word bag']
  },
  {
    wordID: 'a7-desk',
    word: 'desk',
    wordDescriptions: ['An AI generated prompt to guess the word desk']
  },
  {
    wordID: 'a8-nature',
    word: 'nature',
    wordDescriptions: ['An AI generated prompt to guess the word nature']
  },
  {
    wordID: 'a9-portrait',
    word: 'portrait',
    wordDescriptions: ['An AI generated prompt to guess the word portrait']
  },
  {
    wordID: 'a10-container',
    word: 'container',
    wordDescriptions: ['An AI generated prompt to guess the word container']
  }
]

export const ALL_WORD_DESCRIPIONS: TabooWordDescription[] = HUMAN_WORD_DESCRIPTIONS.concat(CHATGPT_WORD_DESCRIPTIONS);
