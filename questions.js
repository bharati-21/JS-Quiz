const questions = [
  {
    qestion: `In the order they taught, who were the six Defence Against the Dark Arts professors who taught Harry at Hogwarts?\n
    a. Quirrell, Lockhart, Lupin, Moody, Umbridge, Snape\n
    b. Quirrell, Lockhart, Lupin, Moody, Umbridge, Slughorn
    c. Lockhart, Quirrell, Moody, Lupin, Snape, Slughorn\n`,
    answer: 'a'
  },

  {
    qestion: `Which creatures pull the carriage that take students from Hogwarts Express to the Castle?\n
    a. Hippogriffs\n
    b. Thestrals\n
    c. Manticores\n`,
    answer: 'b'
  },

  {
    qestion: `What is the name of the room Harry uses to teach the DA?\n
    a. Restricted section of the library\n
    b. Girls bathroom on the first floor\n
    c. The room of requirement\n`,
    answer: 'c'
  },

  {
    qestion: `Who was the Hogwarts headmaster when the Chamber of Secrets was opened for the first time?\n
    a. Armando Dippet\n
    b. Phineas Nigellus Black\n
    c. Brutus Scrimgeour\n`,
    answer: 'a'
  },

  {
    qestion: `What is the name of the book Hermione supposes Voldemort used to learn about Horcruxes?\n
    a. Magik Most Evil\n
    b. Secrets of the Darkest Art\n
    c. A Guide to Medival Sorcery\n`,
    answer: 'b'
  },

  {
    qestion: `Slughorn teaches his students that Amortentia smells different to each person. What food does Harry smell?\n
    a. Mrs. Weasley's Chocolate Fudge\n
    b. Treacle Tart\n
    c. Lemon Drops\n`,
    answer: 'b'
  },

  {
    qestion: `Who is Harry's Godfather?\n
    a. Remus Lupin\n
    b. Severus Snape\n
    c. Sirius Black\n`,
    answer: 'c'
  },

  {
    qestion: `What is Voldemort's real name?\n
    a. Tom Elvis Gaunt\n
    b. Tom Marvolo Riddle\n
    c. Tom Merope Black\n`,
    answer: 'c'
  },

  {
    qestion: `In which year do Hogwarts students take O.W.L.s?\n
    a. Fifth\n
    b. Sixth\n
    c. Seventh\n`,
    answer: 'b'
  },

  {
    qestion: `What magazine does Xenophilius Lovegood publish?\n
    a. The Fiddler\n
    b. The Riddler\n
    c. The Quibbler\n`,
    answer: 'c'
  },

  {
    qestion: `Who anonymously sends Harry his father's Invisibility Cloak?\n
    a. Hagrid\n
    b. Sirius Black\n
    c. Albus Dumbledore\n`,
    answer: 'c'
  },

  {
    qestion: `Which animal or bird is the symbol of Ravenclae?\n
    a. Raven\n
    b. Lion\n
    c. Eagle\n`,
    answer: 'c'
  },

  {
    qestion: `Which potion gives good luck to those who drink it?\n
    a. Felix Felicis\n
    b. Murtlap Essence\n
    c. Baneberry Potion\n`,
    answer: 'a'
  },

  {
    qestion: `Who does Bill Weasley marry?\n
    a. Fleur Delacour\n
    b. Nymphadora Tonks\n
    c. Penelope Clearwater\n`,
    answer: 'a'
  },

  {
    qestion: `Where is the entrance to the Chamber of Secrets hidden?\n
    a. The Room of Requirement\n
    b. The Girls' Bathroom on the First Floor\n
    c. The Slytherin Common Room\n`,
    answer: 'b'
  },

  {
    qestion: `What kind of wood is Harry's first wand made out of?\n
    a. Yew\n
    b. Holly\n
    c. Willow\n`,
    answer: 'b'
  },

  {
    qestion: `How many horcruxes did Voldemort create intentionally\n
    a. Five\n
    b. Six\n
    c. Seven\n`,
    answer: 'b'
  },

  {
    qestion: `Who wrote "A History of Magic"?\n
    a. Nicolas Flamel\n
    b. Newt Scamander\n
    c. Bathilda Bagshot\n`,
    answer: 'c'
  },

  {
    qestion: `Which of these is NOT located in Hogsmeade?\n
    a. Madam Puddifoot's Tea Shop\n
    b. Zonko's Joke Shop\n
    c. Florean Fortescue's Ice Cream Parlour\n`,
    answer: 'c'
  },

  {
    qestion: `Which children's book contains the story of "The Deathly Hallows"?\n
    a.The Tales of Beedle the Bard\n
    b. Newts of Bognor\n
    c. E. Nesbit's Fairy Tales\n`,
    answer: 'answer'
  },

  {
    qestion: `What is James Potter's Marauder nickname?\n
    a. Stag\n
    b. Padfoot\n
    c. Prongs\n`,
    answer: 'c'
  },

  {
    qestion: `What name does Buvkbeak take after avoiding execution?\n
    a. Flutterfeather\n
    b. Swiftfoot\n
    c. Witherwings\n`,
    answer: 'c'
  },

  {
    qestion: `What does Harry do with his winnings from the Triwizard Tournament?\n
    a. Gives it to the Weasley\n
    b. Leaves Hogwarts to start Defence Against the Dark Arts School\n
    c. Gives it to Amos Diggory\n`,
    answer: 'a'
  },

  {
    qestion: `What is Voldemort's mother's name?\n
    a. Marvola\n
    b. Morrigan\n
    c. Merope\n`,
    answer: 'c'
  },

  {
    qestion: `What year can Hogwarts students start taking Care of Magical Creatures?\n
    a. Second Year\n
    b. Third Year\n
    c. Fourth Year\n`,
    answer: 'b'
  },

  {
    qestion: `Who is the first person to ever successfully break into Gringotts?\n
    a. Griphook\n
    b. Quirinus Quirrell\n
    c. Hermione\n`,
    answer: 'b'
  },

  {
    qestion: `How is Bellatrix related to Tonks?\n
    a. Tonks is Bellatrix's Cousin\n
    b. Tonks is Bellatrix's half sister\n
    c. Tonks is Bellatrix's niece\n`,
    answer: 'c'
  },

  {
    qestion: `Who invented Extendable Ears?\n
    a. Sirius Black\n
    b. Albus Dumbledore\n
    c. The Weasley Twins\n`,
    answer: 'c'
  },

  {
    qestion: `What family does Winky the house elf work for before working at Hogwarts?\n
    a. Crouch Family\n
    b. Malfoy Family\n
    c. Lestrange Family\n`,
    answer: 'a'
  },

  {
    qestion: `Who takes over teaching Divination when Trelawney is briefly fired?\n
    a. Firenze\n
    b. Class is cancelled\n
    c. Professor Mospus\n`,
    answer: 'a'
  },

  {
    qestion: `What family are both Harry and Voldemort descended from?\n
    a. Gaunt\n
    b. Peverell\n
    c. Slytherin\n`,
    answer: 'b'
  },

  {
    qestion: `Who is attacked by Sirius Black when he tries to enter the Gryffindor common room?\n
    a. Sir Cadogan\n
    b. The Fat Lady\n
    c. Nicholas de Mimsy-Porpington\n`,
    answer: 'b'
  },

  {
    qestion: `How many Knuts are in a Sickle?\n
    a. 17\n
    b. 23\n
    c. 29\n`,
    answer: 'c'
  },

  {
    qestion: `What is Voldemort's mother's name?\n
    a. Marvola\n
    b. Morrigan\n
    c. Merope\n`,
    answer: 'c'
  },

  {
    qestion: `What is Cho Chang's patronus?\n
    a. Koala\n
    b. Swan\n
    c. Dolphin\n`,
    answer: 'b'
  },

  {
    qestion: `Which of thse students is NOT petrified by the Chamber of Secrets Basilisk?\n
    a. Millicent Bulstrode\n
    b. Hermione\n
    c. Cloin Creevey\n`,
    answer: 'a'
  },

  {
    qestion: `Whose death does Voldemort use to create his final horcrux?\n
    a. Bertha Jorkins\n
    b. Cedric Diggory\n
    c. Bathilda Bagshot\n`,
    answer: 'a'
  },

  {
    qestion: `Who disguises as Mad-Eye Moody and teach Defence Against the Dark Arts at Hogwarts during Harry's fourth year?\n
    a. Percy Weasley\n
    b. Barty Crouch Jr.\n
    c. Peter Pettigrew\n`,
    answer: 'b'
  },

  {
    qestion: `Who killed the Grey Lady?\n
    a. Rowena Ravenclaw\n
    b. Godric Gryffindor\n
    c. The Bloody Baron\n`,
    answer: 'c'
  },

  {
    qestion: `What is Ron's familt home called?\n
    a. Weasley Manor\n
    b. The Burrow\n
    c. High Grounds\n`,
    answer: 'b'
  },

  {
    qestion: `Where does Uncle Vernon work?\n
    a. Masons\n
    b. Prescotts\n
    c. Grunnings\n`,
    answer: 'c'
  },

  {
    qestion: `What did the youngest brother receive from Death in "The Tale of Beetle the Bard?\n
    a. The Cloak of Invisibility\n
    b. The Elder Wand\n
    c. The Ressurection Stone\n`,
    answer: 'a'
  },

  {
    question: `What was the charm Harry used to summon his brromstick in the Triwzard Tournament?\n
    a. Accio\n
    b. Confundus\n
    c. Diffindo\n`,
    answer: 'a'
  },

  {
    question: `What school did Igor Karkaroff teach at?\n
    a. Hogwarts\n
    b. Beauxbottoms\n
    c. Dumstrang\n`,
    answer: 'c'
  },

  {
    question: `What is the name of Dumbledore's pheonix\n
    a. Fawkes\n
    b. Hawkes\n
    c. Mawkes\n`,
    answer: 'a'
  },

  {
    question: `What is the Unforgivable Curse that puts under the spell-maker's control?\n
    a. Imperius Curse\n
    b. Cruciatus Curse\n
    c. The Killing Curse\n`,
    answer: 'a'
  },

  {
    question: `What quidditch position does Ron play?\n
    a. Keeper\n
    b. Beater\n
    c. Chaser\n`,
    answer: 'a'
  },

  {
    question: `Who teaches Harry Occlumency to protect him from Voldemort's Legilimency?\n
    a. Sirius Black\n
    b. Albus Dumbledore\n
    c. Severus Snape\n`,
    answer: 'c'
  },

  {
    question: `Which spell is used to conjure the Dark Mark?\n
    a. Impedimenta\n
    b. Morsmordre\n
    c. Cave Inimicum\n`,
    answer: 'b'
  },

  {
    question: `Which two Gryffindors are chosen as prefects in the fifth book\n
    a. Ron and Hermione\n
    b. Neville and Parvati\n
    c. Ron and Lavender\n`,
    answer: 'a'
  },

];

console.log(questions.length);