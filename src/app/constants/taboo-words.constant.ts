export interface TabooWordDescription {
  wordID: string,
  word: string,
  category: 'emotions' | 'simple' | 'it' | 'abstract'
  wordDescriptions: string[]
}

export const HUMAN_WORD_DESCRIPTIONS: TabooWordDescription[] = [
  {
    wordID: 'h1-love',
    category: 'emotions',
    word: 'love',
    wordDescriptions: [
    `Fill in the blank. Romeo & Juliet __ each other.`,
    `Its 4 letters and what pretty much everyone is looking for. You would feel this way for your partner.`,
    `When you like someone so much that you want to get married you probably fell in ___`,
    `Every mother ___ her child.`]
  },
  {
    wordID: 'h2-truth',
    category: 'abstract',
    word: 'truth',
    wordDescriptions: [
    `Fill in the blank. I got a bad grade but I told my mom exactly what happened. I was telling her the ___ `,
    `Fill in the blank. When you think someone is not telling you what actually happened, you would ask them to tell you the ...`,
    `If you tell something which is exactly correct you tell the ___`,
    `If you tell the reality to someone, the you tell the ___.`]
  },
  {
    wordID: 'h3-imagination',
    category: 'abstract',
    word: 'imagination',
    wordDescriptions: [
    `The ability to make things up in your head.`,
    `When someone doesn't make or say something original, you would ask them to use it. Children has quite a powerful way of using it. They can think of many different and cool or scary things`,
    `You see something in front of your eyes. (Noun)`,
    `"Animals can talk". This is just an ___`]
  },
  {
    wordID: 'h4-happiness',
    category: 'emotions',
    word: 'happiness',
    wordDescriptions: [
    `When everything goes well with your life, what do you feel? It's a noun.`,
    `It's in a Lana Del Ray song. Fill in blank, ..... is a butterfly.`,
    `If you do something you really like to do you feel (Noun)`,
    `When you have no worries and have everything you desire, then you feel ___ (noun).`]
  },
  {
    wordID: 'h5-prejudice',
    category: 'abstract',
    word: 'prejudice',
    wordDescriptions: [
    `This is a famous work by Jane Austen. Pride & ___`,
    `This word is kinda negative. It means when you don't really know about someone or something but you still have an idea about them. And the idea you have isn't really based on anything.`,
    `(Negative) assumptions; mostly about people.`,
    `If you have strong opinion to a specific group of people, that is not true and unfair.`]
  },
  {
    wordID: 'h6-bag',
    category: 'simple',
    word: 'bag',
    wordDescriptions: [
    `This is a container made of soft materials that holds your groceries`,
    `A useful thing where you can put in small things you just bought. It is available in different materials.`,
    `For example backpacks are a type of this object.`,
    `An object where you can put things inside.`]
  },
  {
    wordID: 'h7-desk',
    category: 'simple',
    word: 'desk',
    wordDescriptions: [
    `When you study, you put your things on a ____`,
    `A table you use as an employee.`,
    `In schools tables are usually called with this name`,
    `Usually at home you write your homework on a ___`]
  },
  {
    wordID: 'h8-nature',
    category: 'simple',
    word: 'nature',
    wordDescriptions: [
    `The physical world without artificial creations. You have respect for her. You call her "Mother ___" `,
    `When you look out of the window you can see only a small part of the whole ___. Forests or sees are part of it.`,
    `Its the common name for all livings and their habitats.`,
    `Living thing like tiger should live in the __, not in zoo.`]
  },
  {
    wordID: 'h9-portrait',
    category: 'it',
    word: 'portrait',
    wordDescriptions: [
    `What kind of drawing is Mona Lisa?`,
    `A drawing where you mostly only see the upper part of the body.`,
    `With this mode of photography, you usually see the head and shoulders where the background is often blurry.`,
    `A piece of art which shows a single person`]
  },
  {
    wordID: 'h10-container',
    category: 'it',
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
    category: 'emotions',
    word: 'love',
    wordDescriptions: ['A deep connection that brings joy, passion, and a sense of completeness between individuals.']
  },
  {
    wordID: 'a2-truth',
    category: 'abstract',
    word: 'truth',
    wordDescriptions: ['The unwavering reality that unveils itself, serving as an unwavering beacon of certainty and understanding, transcending subjective perspectives and perceptions.']
  },
  {
    wordID: 'a3-imagination',
    category: 'abstract',
    word: 'imagination',
    wordDescriptions: [' It is the realm where thoughts transcend the present, unlocking a boundless realm of possibilities and envisioning scenarios beyond the constraints of reality.']
  },
  {
    wordID: 'a4-happiness',
    category: 'emotions',
    word: 'happiness',
    wordDescriptions: ["It is a state of profound contentment and inner fulfillment, characterized by a deep sense of well-being and harmony with one's surroundings and experiences."]
  },
  {
    wordID: 'a5-prejudice',
    category: 'abstract',
    word: 'prejudice',
    wordDescriptions: ['It refers to the act of preconceiving negative judgments or attitudes towards individuals or groups, based on preexisting beliefs or assumptions, leading to unfair treatment or biased perceptions without considering their unique qualities or circumstances.']
  },
  {
    wordID: 'a6-bag',
    category: 'simple',
    word: 'bag',
    wordDescriptions: ['A container designed to hold and carry personal belongings, typically characterized by its enclosed shape and often featuring handles or straps for easy transportation.']
  },
  {
    wordID: 'a7-desk',
    category: 'simple',
    word: 'desk',
    wordDescriptions: ['A furniture piece designed for productive activities, typically featuring a flat surface and storage compartments, providing a dedicated space for tasks and organization in various settings.']
  },
  {
    wordID: 'a8-nature',
    category: 'simple',
    word: 'nature',
    wordDescriptions: ['It encompasses the intricate tapestry of our surroundings, encompassing the vast ecosystem of Earth, the intricate interplay of elements, and the rhythmic patterns that govern the world around us.']
  },
  {
    wordID: 'a9-portrait',
    category: 'it',
    word: 'portrait',
    wordDescriptions: ['A visual depiction that captures the essence and individuality of a subject, preserving their distinctive attributes and presence through artistic representation.']
  },
  {
    wordID: 'a10-container',
    category: 'it',
    word: 'container',
    wordDescriptions: ['An object designed to hold and enclose items or substances, often possessing a specific shape or structure for efficient storage and convenient handling.']
  },
  {
    wordID: 'a11-server',
    category: 'emotions',
    word: 'server',
    wordDescriptions: ['A device or system that processes and responds to requests, providing resources or delivering information to other connected devices within a network, facilitating communication and data exchange between various components.']
  },
  {
    wordID: 'a12-download',
    category: 'emotions',
    word: 'download',
    wordDescriptions: ['The action of acquiring or obtaining digital content or files from a remote source to a local device, enabling the retrieval and availability of specific data or resources for offline use or further manipulation.']
  },
  {
    wordID: 'a13-hardware',
    category: 'emotions',
    word: 'hardware',
    wordDescriptions: ['It refers to the tangible components and physical devices that constitute a computer system, encompassing elements such as storage devices, input/output peripherals, and circuitry, playing a vital role in the functionality and operation of the overall system.']
  },
  {
    wordID: 'a14-array',
    category: 'emotions',
    word: 'array',
    wordDescriptions: ['An orderly arrangement or grouping of objects or values, organized in a systematic manner to enable efficient organization and easy access, allowing for effective handling and manipulation of the represented entities.']
  },
  {
    wordID: 'a15-decryption',
    category: 'emotions',
    word: 'decryption',
    wordDescriptions: ['It involves deciphering encrypted data, employing specific procedures or mechanisms to convert obscured information back to its original, understandable form, enabling access to previously encoded content.']
  },
  {
    wordID: 'a16-sad',
    category: 'emotions',
    word: 'sad',
    wordDescriptions: ["A state of emotional heaviness or melancholy, where one's spirits are subdued and a sense of sorrow or longing lingers, often accompanied by a diminished sense of joy or vitality."]
  },
  {
    wordID: 'a17-excited',
    category: 'emotions',
    word: 'excited',
    wordDescriptions: ['A state of heightened anticipation and lively anticipation, where a sense of eager energy and positive expectation permeates, often accompanying the prospect of something delightful or invigorating.']
  },
  {
    wordID: 'a18-shock',
    category: 'emotions',
    word: 'shock',
    wordDescriptions: ["A sudden and jolting experience that leaves one profoundly stunned or taken aback, often characterized by an overwhelming sense of disbelief or profound impact on one's emotional or mental state."]
  },
  {
    wordID: 'a19-relaxed',
    category: 'emotions',
    word: 'relaxed',
    wordDescriptions: ["A state of tranquility and ease, where one's mind and body find solace in a peaceful environment, fostering a sense of inner harmony and a release from tension or stress."]
  },
  {
    wordID: 'a20-fear',
    category: 'emotions',
    word: 'fear',
    wordDescriptions: ["A profound sense of unease or apprehension that arises from the anticipation of undesirable or unsettling circumstances, often accompanied by a heightened state of alertness or caution."]
  }
]

export const ALL_WORD_DESCRIPIONS: TabooWordDescription[] = HUMAN_WORD_DESCRIPTIONS.concat(CHATGPT_WORD_DESCRIPTIONS);
