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
    `The feeling, when you really really really like someone very much.`,
    `The strong feeling people often have towards their family or towards a life partner.`,
    `Its 4 letters and what pretty much everyone is looking for. You would feel this way for your partner.`,
    `When you like someone so much that you want to get married you probably fell in ___`,
    `Every mother ___ her child.`
    ]
  },
  {
    wordID: 'h2-truth',
    category: 'abstract',
    word: 'truth',
    wordDescriptions: [
      `Fill in the blank. I got a bad grade but I told my mom exactly what happened. I was telling her the ___ `,
      `When you tell someone exactly what happened, you are telling the ___`,
      `When you tell somebody about something that happened and do not leave out any details you are telling the __.`,
      `Fill in the blank. When you think someone is not telling you what actually happened, you would ask them to tell you the ...`,
      `If you tell something which is exactly correct you tell the ___`,
      `If you tell the reality to someone, the you tell the ___.`
    ]
  },
  {
    wordID: 'h3-prejudice',
    category: 'abstract',
    word: 'prejudice',
    wordDescriptions: [
      `This is a famous work by Jane Austen. Pride & ___`,
      `When you rate or think something about somebody before you get to know him/her.`,
      `When you have certain - often negative - opinions of a person or a group of people before you even meet them.`,
      `This word is kinda negative. It means when you don't really know about someone or something but you still have an idea about them. And the idea you have isn't really based on anything.`,
      `(Negative) assumptions; mostly about people.`,
      `If you have strong opinion to a specific group of people, that is not true and unfair.`
    ]
  },
  {
    wordID: 'h4-imagination',
    category: 'abstract',
    word: 'imagination',
    wordDescriptions: [
      `The ability to make things up in your head.`,
      `When you make something up in your mind, you use your ___`,
      `Something that only lives in your head. When you think about something vividly and make up a scenario you are using your __.`,
      `When someone doesn't make or say something original, you would ask them to use it. Children has quite a powerful way of using it. They can think of many different and cool or scary things`,
      `You see something in front of your eyes. (Noun)`,
      `"Animals can talk". This is just an ___`
    ]
  },
  {
    wordID: 'h5-happiness',
    category: 'abstract',
    word: 'happiness',
    wordDescriptions: [
      `When the movie ends well, you say it has a ___ ending. Tell me the noun of this word.`,
      `For example when you win the lottery, you are very ___. Now use the noun of this word`,
      `When you are really content with your life you are ___. Now convert the verb into a noun.`,
      `It's in a Lana Del Ray song. Fill in blank, ..... is a butterfly.`,
      `If you do something you really like to do you feel (Noun)`,
      `When you have no worries and have everything you desire, then you feel ___ (noun).`
    ]
  },
  {
    wordID: 'h6-freedom',
    category: 'abstract',
    word: 'freedom',
    wordDescriptions: [
      `You can say what you want. You have ___ of speech.`,
      `When you are allowed to do everything you want. It is a very important right for humans, for example the ___ of speech. `,
      `When you do not have the ability to do what you want to do and are heavily restricted you have lost your __.`,
      `It's something that  people in prison have very limited.`,
      `A famous song by David Hasselhoff is called "Looking for__"`,
      `The right to act and speak your opinion is called ___`
    ]
  },
  {
    wordID: 'h7-reason',
    category: 'abstract',
    word: 'reason',
    wordDescriptions: [
      `You do something that is hard for people to understand. You need to come up with a ___  for what you've done.`,
      `When you do something on intention, you have a ___ for your actions.`,
      `When someone does not understand why you did something they want to know what the __ for your behavior. `,
      `When you want to convince me to do something you give me a __ for it.`,
      `It's a pink song. Just give me a __ just a little bit is enough.`,
      `Give your __ to me for your assertion.`
    ]
  },
  {
    wordID: 'h8-forgiveness',
    category: 'abstract',
    word: 'forgiveness',
    wordDescriptions: [
      `You did something wrong to someone, so you want to ask them for ___.`,
      `When you hurt somebody and you are sorry, you can ask him/her for his/her ___`,
      `Somebody did something wrong to you but you still decide to __ them. Now use the noun.`,
      `A religious person asks god for __ of their sins.`,
      `It's a noun that desribes when you pardon someone after they do something bad to you.`,
      `I ask ___ for things that have hurt you.`
    ]
  },
  {
    wordID: 'h9-empathy',
    category: 'abstract',
    word: 'empathy',
    wordDescriptions: [
      `A person is said to have ___ when they know what other people have in mind.`,
      `the ability to sense other people's emotions, coupled with the ability to imagine what someone else might be thinking`,
      `When a person is able to recognize the state of mind of others they probably have high levels of ___.`,
      `When you can relate to the emotions of someone you show__.`,
      `If you can put yourself in someone else's shoes, you have this character trait. `,
      `If you can put yourself in the situation of others, then you have __ for others.`
    ]
  },
  {
    wordID: 'h10-pleasure',
    category: 'abstract',
    word: 'pleasure',
    wordDescriptions: [
      `This is something people usually say at first meeting. "It is a ___ to meet you." `,
      `When you like someone, you say It was a ___ to meet you`,
      `A saying goes: It was a real ___ to meet you.`,
      `After having a nice conversation with someone you say: "It was a ___ to meet you!"`,
      `The feeling of fullfillment one can get  from any type of  interaction. `,
      `It was a ___ to meet you.`
    ]
  },
  {
    wordID: 'h11-bag',
    category: 'simple',
    word: 'bag',
    wordDescriptions: [
      `This is a container made of soft materials that holds your groceries.`,
      `You can put things in there and hold it with one hand. The searched word is for example used for groceries`,
      `A often transparent container that people use in grocery stores to temporarily store their items in.`,
      `A useful thing where you can put in small things you just bought. It is available in different materials.`,
      `For example backpacks are a type of this object.`,
      `An object where you can put things inside.`
    ]
  },
  {
    wordID: 'h12-desk',
    category: 'simple',
    word: 'desk',
    wordDescriptions: [
      `When you study, you put your things on a ____.`,
      `It is another word for table. In school, every student has one`,
      `When you do your homework you probably do that on a __. Its a spot where you can put things down.`,
      `A table you use as an employee.`,
      `In schools tables are usually called with this name`,
      `Usually at home you write your homework on a ___`
    ]
  },
  {
    wordID: 'h13-nature',
    category: 'simple',
    word: 'nature',
    wordDescriptions: [
      `The physical world without artificial creations. You have respect for her. You call her "Mother ___" `,
      `It is shown in shows like Our Planet. Mother ___`,
      `Apart from creatures that are held domestically or in a zoo, most species live outside in __.`,
      `When you look out of the window you can see only a small part of the whole ___. Forests or sees are part of it.`,
      `Its the common name for all livings and their habitats.`,
      `Living thing like tiger should live in the __, not in zoo.`
    ]
  },
  {
    wordID: 'h14-portrait',
    category: 'simple',
    word: 'portrait',
    wordDescriptions: [
      `What kind of drawing is Mona Lisa?`,
      `It is the name for a special type of drawing, where you only draw the head of someone`,
      `An artistic depiction of the head of a person is called a ___.`,
      `A drawing where you mostly only see the upper part of the body.`,
      `With this mode of photography, you usually see the head and shoulders where the background is often blurry.`,
      `A piece of art which shows a single person`
    ]
  },
  {
    wordID: 'h15-container',
    category: 'simple',
    word: 'container',
    wordDescriptions: [
      `A hollow object, such as a box or bottle, which is used to hold something. Try to think of a general concept. `,
      `There are many of them in a port and they get moved by big boats.`,
      `Inside of a harbor a lot of XYZ go in and out daily. On those XYZ are often a lot of ___ that store products from all around the world. `,
      `A big thing where you can store goods. Often found in ports.`,
      `Its an object where you can store any kind of items. People usually refer it to store their waste. Can be found in streets.`,
      `On Ships are many big ___ with items, which are send from one country to another.`
    ]
  },
  {
    wordID: 'h16-chair',
    category: 'simple',
    word: 'chair',
    wordDescriptions: [
      `When you walk into an office, people would point to this object to signal that you can rest there. What is it?`,
      `You use this object, when you want to do the opposite of standing, for example at a desk`,
      `A table is almost always paired with one or multiple ___. Take the singular form of the word.`,
      `An object you use to comfortably rest your body on, for example while eating.`,
      `A common way to execute people in the USA is electric ___`,
      `You can take place on the __ `
    ]
  },
  {
    wordID: 'h17-lamp',
    category: 'simple',
    word: 'lamp',
    wordDescriptions: [
      `This is an object placed on your table that you can turn on when you want to read something when it's dark.`,
      `Sometimes it stands on a table and is used to make it brighter.`,
      `In order to make a dark place go bright again you can use a ___.`,
      `If it is dark you use a __ to see something again.`,
      `Alaaddin has a magical version of it.`,
      `When it is dark you turn on ___ on your table.`
    ]
  },
  {
    wordID: 'h18-pencil',
    category: 'simple',
    word: 'pencil',
    wordDescriptions: [
      `We can't use normal stationery utensil on the moon, but we can use ___ `,
      `When you have to sign a document, you use this object. The counterpart is from rubber`,
      `Most of the time in school all you need is a ___ and a paper.`,
      `You can use it for drawing on a piece of paper.`,
      `Its an object one can use to draw something on a paper.`,
      `For the exam you need a __ to put your answer on the paper`
    ]
  },
  {
    wordID: 'h19-spoon',
    category: 'simple',
    word: 'spoon',
    wordDescriptions: [
      `What do you use to scoop things out of the bowl?`,
      `You use this object when you consume something liquid`,
      `Apart from a knife one basic utensial used during and after cooking has a rounded area to consume often liquid things.`,
      `To eat a muesli you need a __`,
      `While you are cuddling with someone you can be the big or the small  ___ `,
      `You should give the guest a __ when eating liquid stuff.`
    ]
  },
  {
    wordID: 'h20-tv',
    category: 'simple',
    word: 'tv',
    wordDescriptions: [
      `It's Saturday night. You turn on your ___ while holding the  remote in your hand.`,
      `It is commonly in living rooms. When turned off it has a black screen (the short form of the word is searched)`,
      `Apart from smartphones, tablets and newspapers there are different media nowadays. One of the older ones that uses a screen and is often inside of a living room (short form).`,
      `A famous telecommunication medium is__ (Abbreviation)`,
      `You could see your favorite cartoons on this device.`,
      `An electronic device that usually stands in the living room in front of the sofa.`
    ]
  },
  {
    wordID: 'h21-server',
    category: 'it',
    word: 'server',
    wordDescriptions: [
      `a program or a device that provides service to another device or its users`,
      `Online games need this device to run a multiplayer game. When this device is not fast, user have a high ping.`,
      `When you try to load up a site in your browser and it does not work you sometimes get an error message saying: Could not establish a connection to the ___.`,
      `A device where multiple computers can connect to for a specific purpose.`,
      `A device which responsible for managing access in a computer system`,
      `An electronic device that you need to store data so that other users can retrieve it.`
    ]
  },
  {
    wordID: 'h22-download',
    category: 'it',
    word: 'download',
    wordDescriptions: [
      `you watch a youtube video and you want to have this video on your phone, you need to ___ this video to your phone.`,
      `When you want a software on your computer, you have to ___ it from the internet`,
      `The opposite of upload.`,
      `If you want to use or store certain software or documents, available on the internet, on your computer, you __ them.`,
      `When you want to hear a song offline, you need to get it from spotify. What do we call that process?`,
      `If you want to get an app on your phone, first you need to __ it from App Store.`
    ]
  },
  {
    wordID: 'h23-hardware',
    category: 'it',
    word: 'hardware',
    wordDescriptions: [
      `All physical components of a computer can be called ___`,
      `The searched word describes the category for items like screen, mouse, keyboard, microphone. Everything touchable at a computer`,
      `The physical parts of a computer are often categorized as ___.`,
      `It is the general name of single pieces that makes of a computer`,
      `The physical parts of a computer, for example the keyboard.`,
      `Electronic devices like smartphones and laptops are __`
    ]
  },
  {
    wordID: 'h24-array',
    category: 'it',
    word: 'array',
    wordDescriptions: [
      `How do you call something like [1,2,3,4] in python?`,
      `In programming languages for example [1,2,3] is a ___ of numbers`,
      `What is this called in programming: [1,2,3,4,5,6]`,
      `In programming languages you can save series of variables in an order. What does one need to use in order to achieve that?`,
      `When you have a set number of values of the same form in programming, you call it an __`,
      `A container in programming languages, that contains a fixed number of values of a single kind. `
    ]
  },
  {
    wordID: 'h25-decryption',
    category: 'it',
    word: 'decryption',
    wordDescriptions: [
      `Alice sends Bob a secret message, now Bob has to __ the message. Please use the noun!`,
      `The opposite of encryption`,
      `The opposite of encryption.`,
      `The process of accesing information in a computer system, which is protected by some method. `,
      `If you want to have access to a protected message on your computer you have to have the ability to __ the message. (Noun)`,
      `If you want to read the message of a ciphertext, a ___ is necessary.`
    ]
  },
  {
    wordID: 'h26-firewall',
    category: 'it',
    word: 'firewall',
    wordDescriptions: [
      `This is something that protects your computer from potentially harmful contact by other computers. You can manually turn it off. `,
      `This type of software is used to prevent hacking on servers`,
      `If you want to protect your device (often computer) from a virus or a hacker you can use a ___. `,
      `It is a software that gives cyber protection to your computer.`,
      `A __ tries to protect your computer from outside attacks.`,
      `If you want to block unauthorized connection you need a __ `
    ]
  },
  {
    wordID: 'h27-framework',
    category: 'it',
    word: 'framework',
    wordDescriptions: [
      `What's the word you use to call architectures like Java Spring, Angular, Vue etc.?`,
      `Kind of architectures used for programming. For example Angular or React `,
      `If you want to build on top of the basic functionality of a programming language to do cool things you can use a ___. Examples for this are Vue.js or React Native.`,
      `It is a set of supporting functions for a program`,
      `Programmers use it as a kind of a template for building applications.`,
      `Programmers today do not program from scratch, but use ___ to be more efficient`
    ]
  },
  {
    wordID: 'h28-database',
    category: 'it',
    word: 'database',
    wordDescriptions: [
      `DBMS is the abbreviation of ___ management system.`,
      `A virtual place where you can digitally store arrays, integer or strings. `,
      `An external place software developers use to store all kinds of information that is needed for the functionality of a product, for example about the user (age, name, ..). `,
      `It is where the materials and knowledge saved in a computer.`,
      `A place where you can electronically store everything you want. `,
      `A computer that store data is called ___`
    ]
  },
  {
    wordID: 'h29-cache',
    category: 'it',
    word: 'cache',
    wordDescriptions: [
      `Sometimes when your browser lags, you can fix this by clear cookies and ____`,
      `This is used in the front end of applications to save information in the short term`,
      `It is used to save information temporarily (often on the users device).`,
      `It is where information is temporarily saved in a computer while you are working with it.`,
      `A place on a computer where the information that is likely to be used again is saved temporarily.`,
      `Digital information is saved only for a short time on a __ and disappears after you close the laptop.`
    ]
  },
  {
    wordID: 'h30-compiler',
    category: 'it',
    word: 'compiler',
    wordDescriptions: [
      `This is the layer between high-level and machine commands.`,
      `It converts the human generated source text to machine text`,
      `The construct used to transfer human-readable words you write inside of a editor like Visual Studio or Atom into machine-readable words that the computer uses to create an application you wrote.`,
      `It is an interpreter like software to make apps readable by the computer.`,
      `It is a tool that converts the human-written commands into machine commands, so that you see on screen what you wanted.`,
      `You need a __ so a machine can read and run the algorthm`
    ]
  },
  {
    wordID: 'h31-sad',
    category: 'emotions',
    word: 'sad',
    wordDescriptions: [
      `This is a common NEGATIVE emotional state. You feel ___ when your favorite character in a movie dies.`,
      `When someone you liked dies, you are ___`,
      `If somebody cries because a family member died they are __.`,
      `what emotion does a crying person feel?`,
      `The feeling of loosing someone makes you __.`,
      `If you failed an exam, then you are___`
    ]
  },
  {
    wordID: 'h32-excited',
    category: 'emotions',
    word: 'excited',
    wordDescriptions: [
      `You are a kid and your parents are going to take you to the zoo or any place you like tomorrow! How do you feel?`,
      `When you really look forward to something, you are ___ `,
      `When you were a kid, its Christmas and in half an hour you get to open your presents you are ___. `,
      `Being hectic.`,
      `If you tell kids that today we are going to disneyland they are __. It is an emotion.`,
      `You go to a concert of your favorite band tomorrow, then you are ___`
    ]
  },
  {
    wordID: 'h33-shock',
    category: 'emotions',
    word: 'shock',
    wordDescriptions: [
      `When someone informs you of a sudden news, you feel a ____`,
      `After a jump scare you are in this emotional state`,
      `When something happens that you thought would absolutely not happen you are in ___. This emotion is often portrayed with a widely opened mouth and raised eyebrows.`,
      `An unforeseen event.`,
      `If you are completely stunned by something that you did not foresee you are in __.`,
      `It was a __ to me to see my grandma so sick.`
    ]
  },
  {
    wordID: 'h34-relaxed',
    category: 'emotions',
    word: 'relaxed',
    wordDescriptions: [
      `When you're not anxious at all, you're just at home doing your things, you feel ____`,
      `After a good massage, you are in this emotional state.`,
      `When you get a massage you feel ___.`,
      `When you are chill you feel ___ .`,
      `You are lying on a sofa, looking out of the window and drinking tea. How do you feel?`,
      `When you are on vacation at the beach after a busy week, then you feel___`
    ]
  },
  {
    wordID: 'h35-fear',
    category: 'emotions',
    word: 'fear',
    wordDescriptions: [
      `This is a primitive emotion which warns you of bad things`,
      `There are many different types. Claustrophobia is the ___ of small rooms.`,
      `People are ___ of many things such as spiders, snakes, deep oceans or death. Now use the noun instead of the adjective.`,
      `If you are afraid of something, the you feel ___`,
      `If some people intimidate you, then you __ them.`,
      `Is a feeling you have when you walk home alone at night and someone is following behind you.`
    ]
  },
  {
    wordID: 'h36-angry',
    category: 'emotions',
    word: 'angry',
    wordDescriptions: [
      `When people insult you, you feel___`,
      `When you rage or you are fury, then you are ___`,
      `When you are annoyed or aggrieved by somebody you could also simply say that you are __.`,
      `Feeling mad, annoyance, displeasure.`,
      `If you are constantly getting annoyed by someone you are __ at them.`,
      `A famous game: ___ birds.`
    ]
  },
  {
    wordID: 'h37-jealous',
    category: 'emotions',
    word: 'jealous',
    wordDescriptions: [
      `A husband is ____ when his wife goes out with another man.`,
      `It's an emotion. If you want something that somebody else has, you are ___`,
      `It is a negative emotion that people sometimes have when they are afraid to loose a partner or if someone has something they dont have.`,
      `When someone shows envy of someone else, then this person is ___.`,
      `If your partner cheats on you you are __.`,
      `When someone is better than you at everything, then you are ___`
    ]
  },
  {
    wordID: 'h38-joy',
    category: 'emotions',
    word: 'joy',
    wordDescriptions: [
      `A depressed person might find it hard to find ___ in everything they do. `,
      `When you do something, you really like, then you en___ it.`,
      `Another word for fun that also has three letters.`,
      `Opposition of sadness, grief`,
      `If you won a sports competition you have the feeling of __.`,
      `Did you have any __ finding the job you wanted?`
    ]
  },
  {
    wordID: 'h39-gratitude',
    category: 'emotions',
    word: 'gratitude',
    wordDescriptions: [
      `You express ___ to someone who did you a favor.`,
      `It is one of many positive emotions. You feel this, if you are happy for what you have.`,
      `When you have a look at your life and acknowledge the blessings you have you are ___. Now use the noun for this.`,
      `It is a word, which describes the emotion of being much obliged.`,
      `To appreciate someone who just helped you can also be called as __. (Noun)`,
      `She showed ___ after you helped her.`
    ]
  },
  {
    wordID: 'h40-satisfied',
    category: 'emotions',
    word: 'satisfied',
    wordDescriptions: [
      `You feel ___ when you've got what you wanted. You don't want anything else.`,
      `It's an emotional state. When you achieved everything you wanted, and there is nothing else you look for, you are ___`,
      `An emotional state similar to that of feeling happy but this one has a longer-lasting character. You can turn the word into a negative one by putting a dis- in front of it.`,
      `Feeling and being content.`,
      `You write a good exam and you are __ with the result. `,
      `The customer is ___ with the product.`
    ]
  }
]
export const CHATGPT_WORD_DESCRIPTIONS: TabooWordDescription[] = [
  {
    wordID: 'a1-love',
    category: 'emotions',
    word: 'love',
    wordDescriptions: [`A deep connection that brings joy, passion, and a sense of completeness between individuals.`]
  },
  {
    wordID: 'a2-truth',
    category: 'abstract',
    word: 'truth',
    wordDescriptions: [`The unwavering reality that unveils itself, serving as an unwavering beacon of certainty and understanding, transcending subjective perspectives and perceptions.`]
  },
  {
    wordID: 'a3-prejudice',
    category: 'abstract',
    word: 'prejudice',
    wordDescriptions: [`It refers to the act of preconceiving negative judgments or attitudes towards individuals or groups, based on preexisting beliefs or assumptions, leading to unfair treatment or biased perceptions without considering their unique qualities or circumstances.`]
  },
  {
    wordID: 'a4-imagination',
    category: 'abstract',
    word: 'imagination',
    wordDescriptions: [`It is the realm where thoughts transcend the present, unlocking a boundless realm of possibilities and envisioning scenarios beyond the constraints of reality.`]
  },
  {
    wordID: 'a5-happiness',
    category: 'abstract',
    word: 'happiness',
    wordDescriptions: [`It is a state of profound contentment and inner fulfillment, characterized by a deep sense of well-being and harmony with one's surroundings and experiences.`]
  },
  {
    wordID: 'a6-freedom',
    category: 'abstract',
    word: 'freedom',
    wordDescriptions: [`It is  the state of being unburdened by restrictions or limitations. It embodies the ability to make choices and pursue one's desires and dreams without hindrance.`]
  },
  {
    wordID: 'a7-reason',
    category: 'abstract',
    word: 'reason',
    wordDescriptions: [`It refers to the faculty of the human mind that enables logical and coherent thinking. It is the cognitive ability to analyze, deduce, and draw conclusions based on evidence, observations, and facts.`]
  },
  {
    wordID: 'a8-forgiveness',
    category: 'abstract',
    word: 'forgiveness',
    wordDescriptions: [`It is the act of releasing negative emotions and resentment towards someone or something that has caused harm or offense. It involves a willingness to let go of anger, bitterness, and the desire for revenge.`]
  },
  {
    wordID: 'a9-empathy',
    category: 'abstract',
    word: 'empathy',
    wordDescriptions: [`It is the ability to connect with and relate to the experiences of others without directly experiencing them ourselves.`]
  },
  {
    wordID: 'a10-pleasure',
    category: 'abstract',
    word: 'pleasure',
    wordDescriptions: [`It is a positive response to stimuli that brings about a sense of gratification or fulfillment. It is an experience that brings a sense of reward or positive reinforcement, creating a momentary escape from negative emotions or mundane routines.`]
  },
  {
    wordID: 'a11-bag',
    category: 'simple',
    word: 'bag',
    wordDescriptions: [`This object is designed to hold and carry personal belongings, typically characterized by its enclosed shape and often featuring handles or straps for easy transportation.`]
  },
  {
    wordID: 'a12-desk',
    category: 'simple',
    word: 'desk',
    wordDescriptions: [`A furniture piece designed for productive activities, typically featuring a flat surface and storage compartments, providing a dedicated space for tasks and organization in various settings.`]
  },
  {
    wordID: 'a13-nature',
    category: 'simple',
    word: 'nature',
    wordDescriptions: [`It encompasses the intricate tapestry of our surroundings, encompassing the vast ecosystem of Earth, the intricate interplay of elements, and the rhythmic patterns that govern the world around us.`]
  },
  {
    wordID: 'a14-portrait',
    category: 'simple',
    word: 'portrait',
    wordDescriptions: [`A visual depiction that captures the essence and individuality of a subject, preserving their distinctive attributes and presence through artistic representation.`]
  },
  {
    wordID: 'a15-container',
    category: 'simple',
    word: 'container',
    wordDescriptions: [`An object designed to hold and enclose items or substances, often possessing a specific shape or structure for efficient storage and convenient handling.`]
  },
  {
    wordID: 'a16-chair',
    category: 'simple',
    word: 'chair',
    wordDescriptions: [`An object designed for people to rest upon. It consists of a flat surface elevated above the ground, supported by legs or other structures.`]
  },
  {
    wordID: 'a17-lamp',
    category: 'simple',
    word: 'lamp',
    wordDescriptions: [`An object that provides illumination in indoor spaces. It consists of a structure that holds and supports a source of brightness.`]
  },
  {
    wordID: 'a18-pencil',
    category: 'simple',
    word: 'pencil',
    wordDescriptions: [`It is a slender instrument used for making marks on surfaces. It consists of a cylindrical shaft made of a combination of graphite and clay, encased in a thin layer of wood. `]
  },
  {
    wordID: 'a19-spoon',
    category: 'simple',
    word: 'spoon',
    wordDescriptions: [`It is a handheld utensil with a concave shape and a long handle. It is commonly used for scooping and transferring substances from one place to another.`]
  },
  {
    wordID: 'a20-tv',
    category: 'simple',
    word: 'tv',
    wordDescriptions: [`It is an electronic device that displays visual content and transmits audio. It typically consists of a rectangular screen, which serves as the primary interface for viewing. `]
  },
  {
    wordID: 'a21-server',
    category: 'it',
    word: 'server',
    wordDescriptions: [`A device or system that processes and responds to requests, providing resources or delivering information to other connected devices within a network, facilitating communication and data exchange between various components.`]
  },
  {
    wordID: 'a22-download',
    category: 'it',
    word: 'download',
    wordDescriptions: [`The action of acquiring or obtaining digital content or files from a remote source to a local device, enabling the retrieval and availability of specific data or resources for offline use or further manipulation.`]
  },
  {
    wordID: 'a23-hardware',
    category: 'it',
    word: 'hardware',
    wordDescriptions: [`It refers to the tangible components and physical devices that constitute a computer system, encompassing elements such as storage devices, input/output peripherals, and circuitry, playing a vital role in the functionality and operation of the overall system.`]
  },
  {
    wordID: 'a24-array',
    category: 'it',
    word: 'array',
    wordDescriptions: [`An orderly arrangement or grouping of objects or values, organized in a systematic manner to enable efficient organization and easy access, allowing for effective handling and manipulation of the represented entities.`]
  },
  {
    wordID: 'a25-decryption',
    category: 'it',
    word: 'decryption',
    wordDescriptions: [`The process of deciphering obscured or scrambled information, utilizing specific techniques or methods to convert the unintelligible content back to its original, understandable form, enabling access to concealed or protected data.`]
  },
  {
    wordID: 'a26-firewall',
    category: 'it',
    word: 'firewall',
    wordDescriptions: [`A protective barrier or system that establishes boundaries and regulates the flow of information, safeguarding against unauthorized access and potential threats, acting as a filter or barrier between different entities or environments.`]
  },
  {
    wordID: 'a27-framework',
    category: 'it',
    word: 'framework',
    wordDescriptions: [`A systematic system or model that provides guidance for organizing and comprehending complex concepts or systems, offering a logical and methodical approach to analysis and comprehension without depending on specific instruments or technological applications.`]
  },
  {
    wordID: 'a28-database',
    category: 'it',
    word: 'database',
    wordDescriptions: [`A centralized repository or system that stores and manages a substantial volume of interconnected content or records, enabling efficient retrieval, manipulation, and analysis, without relying on specific organization methods or querying languages.`]
  },
  {
    wordID: 'a29-cache',
    category: 'it',
    word: 'cache',
    wordDescriptions: [`A rapid-access mechanism that improves retrieval and processing efficiency by temporarily storing frequently used or recently accessed content, without relying on specific size limitations or emphasizing speed.`]
  },
  {
    wordID: 'a30-compiler',
    category: 'it',
    word: 'compiler',
    wordDescriptions: [`A tool that processes human-readable input to produce executable output, enabling the creation of functional software without direct manipulation of the original source material or reliance on predefined procedures.`]
  },
  {
    wordID: 'a31-sad',
    category: 'emotions',
    word: 'sad',
    wordDescriptions: [`A state of emotional heaviness or melancholy, where one's spirits are subdued and a sense of sorrow or longing lingers, often accompanied by a diminished sense of joy or vitality.`]
  },
  {
    wordID: 'a32-excited',
    category: 'emotions',
    word: 'excited',
    wordDescriptions: [`A state of heightened anticipation and lively anticipation, where a sense of eager energy and positive expectation permeates, often accompanying the prospect of something delightful or invigorating.`]
  },
  {
    wordID: 'a33-shock',
    category: 'emotions',
    word: 'shock',
    wordDescriptions: [`A sudden and jolting experience that leaves one profoundly stunned or taken aback, often characterized by an overwhelming sense of disbelief or profound impact on one's emotional or mental state.`]
  },
  {
    wordID: 'a34-relaxed',
    category: 'emotions',
    word: 'relaxed',
    wordDescriptions: [`A state of tranquility and ease, where one's mind and body find solace in a peaceful environment, fostering a sense of inner harmony and a release from tension or stress.`]
  },
  {
    wordID: 'a35-fear',
    category: 'emotions',
    word: 'fear',
    wordDescriptions: [`A profound sense of unease or apprehension that arises from the anticipation of undesirable or unsettling circumstances, often accompanied by a heightened state of alertness or caution.`]
  },
  {
    wordID: 'a36-angry',
    category: 'emotions',
    word: 'angry',
    wordDescriptions: [`This emotional state often arises when something doesn't go as expected or when there is a perceived injustice. It can manifest as a surge of energy or tension within the body, accompanied by an increased heart rate and rapid breathing.`]
  },
  {
    wordID: 'a37-jealous',
    category: 'emotions',
    word: 'jealous',
    wordDescriptions: [`When someone is _____, they may feel a sense of unease or insecurity in comparison to others. It can arise when they perceive that someone else possesses qualities, achievements, or relationships that they desire for themselves.`]
  },
  {
    wordID: 'a38-joy',
    category: 'emotions',
    word: 'joy',
    wordDescriptions: [`When experiencing ___, one may feel an overwhelming sense of inner delight and upliftment. It is a state of profound positivity and exuberance that radiates from within. `]
  },
  {
    wordID: 'a39-gratitude',
    category: 'emotions',
    word: 'gratitude',
    wordDescriptions: [`____  is a state of profound recognition and acknowledgment for the blessings and positive aspects of one's life. It involves a deep sense of awareness and mindfulness regarding the good that exists`]
  },
  {
    wordID: 'a40-satisfied',
    category: 'emotions',
    word: 'satisfied',
    wordDescriptions: [`____ individuals have a genuine sense of ease and equilibrium within themselves, appreciating what they have without longing for more. They experience a profound sense of wholeness and sufficiency, recognizing that external circumstances do not define their sense of self-worth. `]
  }
]

export const ALL_WORD_DESCRIPIONS: TabooWordDescription[] = HUMAN_WORD_DESCRIPTIONS.concat(CHATGPT_WORD_DESCRIPTIONS);
