const questions = [
  {
    question: `In the order they taught, who were the six Defence Against the Dark Arts professors who taught Harry at Hogwarts?\n
    a. Quirrell, Lockhart, Lupin, Moody, Umbridge, Snape
    b. Quirrell, Lockhart, Lupin, Moody, Umbridge, Slughorn
    c. Lockhart, Quirrell, Moody, Lupin, Snape, Slughorn`,
    answer: 'a'
  },

  {
    question: `Which creatures pull the carriage that take students from Hogwarts Express to the Castle?\n
    a. Hippogriffs
    b. Thestrals
    c. Manticores`,
    answer: 'b'
  },

  {
    question: `What is the name of the room Harry uses to teach the DA?\n
    a. Restricted section of the library
    b. Girls bathroom on the first floor
    c. The room of requirement`,
    answer: 'c'
  },

  {
    question: `Who was the Hogwarts headmaster when the Chamber of Secrets was opened for the first time?\n
    a. Armando Dippet
    b. Phineas Nigellus Black
    c. Brutus Scrimgeour`,
    answer: 'a'
  },

  {
    question: `What is the name of the book Hermione supposes Voldemort used to learn about Horcruxes?\n
    a. Magik Most Evil
    b. Secrets of the Darkest Art
    c. A Guide to Medival Sorcery`,
    answer: 'b'
  },

  {
    question: `Slughorn teaches his students that Amortentia smells different to each person. What food does Harry smell?\n
    a. Mrs. Weasley's Chocolate Fudge
    b. Treacle Tart
    c. Lemon Drops`,
    answer: 'b'
  },

  {
    question: `Who is Harry's Godfather?\n
    a. Remus Lupin
    b. Severus Snape
    c. Sirius Black`,
    answer: 'c'
  },

  {
    question: `What is Voldemort's real name?\n
    a. Tom Elvis Gaunt
    b. Tom Marvolo Riddle
    c. Tom Merope Black`,
    answer: 'b'
  },

  {
    question: `In which year do Hogwarts students take O.W.L.s?\n
    a. Fifth
    b. Sixth
    c. Seventh`,
    answer: 'a'
  },

  {
    question: `What magazine does Xenophilius Lovegood publish?\n
    a. The Fiddler
    b. The Riddler
    c. The Quibbler`,
    answer: 'c'
  },

  {
    question: `Who anonymously sends Harry his father's Invisibility Cloak?\n
    a. Hagrid
    b. Sirius Black
    c. Albus Dumbledore`,
    answer: 'c'
  },

  {
    question: `Which animal or bird is the symbol of Ravenclae?\n
    a. Raven
    b. Lion
    c. Eagle`,
    answer: 'c'
  },

  {
    question: `Which potion gives good luck to those who drink it?\n
    a. Felix Felicis
    b. Murtlap Essence
    c. Baneberry Potion`,
    answer: 'a'
  },

  {
    question: `Who does Bill Weasley marry?\n
    a. Fleur Delacour
    b. Nymphadora Tonks
    c. Penelope Clearwater`,
    answer: 'a'
  },

  {
    question: `Where is the entrance to the Chamber of Secrets hidden?\n
    a. The Room of Requirement
    b. The Girls' Bathroom on the First Floor
    c. The Slytherin Common Room`,
    answer: 'b'
  },

  {
    question: `What kind of wood is Harry's first wand made out of?\n
    a. Yew
    b. Holly
    c. Willow`,
    answer: 'b'
  },

  {
    question: `How many horcruxes did Voldemort create intentionally\n
    a. Five
    b. Six
    c. Seven`,
    answer: 'b'
  },

  {
    question: `Who wrote "A History of Magic"?\n
    a. Nicolas Flamel
    b. Newt Scamander
    c. Bathilda Bagshot`,
    answer: 'c'
  },

  {
    question: `Which of these is NOT located in Hogsmeade?\n
    a. Madam Puddifoot's Tea Shop
    b. Zonko's Joke Shop
    c. Florean Fortescue's Ice Cream Parlour`,
    answer: 'c'
  },

  {
    question: `Which children's book contains the story of "The Deathly Hallows"?\n
    a. The Tales of Beedle the Bard
    b. Newts of Bognor
    c. E. Nesbit's Fairy Tales`,
    answer: 'a'
  },

  {
    question: `What is James Potter's Marauder nickname?\n
    a. Stag
    b. Padfoot
    c. Prongs`,
    answer: 'c'
  },

  {
    question: `What name does Buckbeak take after avoiding execution?\n
    a. Flutterfeather
    b. Swiftfoot
    c. Witherwings`,
    answer: 'c'
  },

  {
    question: `What does Harry do with his winnings from the Triwizard Tournament?\n
    a. Gives it to the Weasley twins
    b. Leaves Hogwarts to start Defence Against the Dark Arts School
    c. Gives it to Amos Diggory`,
    answer: 'a'
  },

  {
    question: `What is Voldemort's mother's name?\n
    a. Marvola
    b. Morrigan
    c. Merope`,
    answer: 'c'
  },

  {
    question: `What year can Hogwarts students start taking Care of Magical Creatures?\n
    a. Second Year
    b. Third Year
    c. Fourth Year`,
    answer: 'b'
  },

  {
    question: `Who is the first person to ever successfully break into Gringotts?\n
    a. Griphook
    b. Quirinus Quirrell
    c. Hermione`,
    answer: 'b'
  },

  {
    question: `How is Bellatrix related to Tonks?\n
    a. Tonks is Bellatrix's Cousin
    b. Tonks is Bellatrix's half sister
    c. Tonks is Bellatrix's niece`,
    answer: 'c'
  },

  {
    question: `Who invented Extendable Ears?\n
    a. Sirius Black
    b. Albus Dumbledore
    c. The Weasley Twins`,
    answer: 'c'
  },

  {
    question: `What family does Winky the house elf work for before working at Hogwarts?\n
    a. Crouch Family
    b. Malfoy Family
    c. Lestrange Family`,
    answer: 'a'
  },

  {
    question: `Who takes over teaching Divination when Trelawney is briefly fired?\n
    a. Firenze
    b. Class is cancelled
    c. Professor Mospus`,
    answer: 'a'
  },

  {
    question: `What family are both Harry and Voldemort descended from?\n
    a. Gaunt
    b. Peverell
    c. Slytherin`,
    answer: 'b'
  },

  {
    question: `Who is attacked by Sirius Black when he tries to enter the Gryffindor common room?\n
    a. Sir Cadogan
    b. The Fat Lady
    c. Nicholas de Mimsy-Porpington`,
    answer: 'b'
  },

  {
    question: `How many Knuts are in a Sickle?\n
    a. 17
    b. 23
    c. 29`,
    answer: 'c'
  },

  {
    question: `Who kills Nagini, Voldermort's last horcrux?\n
    a. Luna Lovegood
    b. Draco Malfoy
    c. Neville Longbottom`,
    answer: 'c'
  },

  {
    question: `What is Cho Chang's patronus?\n
    a. Koala
    b. Swan
    c. Dolphin`,
    answer: 'b'
  },

  {
    question: `Which of thse students is NOT petrified by the Chamber of Secrets Basilisk?\n
    a. Millicent Bulstrode
    b. Hermione
    c. Cloin Creevey`,
    answer: 'a'
  },

  {
    question: `Whose death does Voldemort use to create his final horcrux?\n
    a. Bertha Jorkins
    b. Cedric Diggory
    c. Bathilda Bagshot`,
    answer: 'a'
  },

  {
    question: `Who disguises as Mad-Eye Moody and teach Defence Against the Dark Arts at Hogwarts during Harry's fourth year?\n
    a. Percy Weasley
    b. Barty Crouch Jr.
    c. Peter Pettigrew`,
    answer: 'b'
  },

  {
    question: `Who killed the Grey Lady?\n
    a. Rowena Ravenclaw
    b. Godric Gryffindor
    c. The Bloody Baron`,
    answer: 'c'
  },

  {
    question: `What is Ron's family home called?\n
    a. Weasley Manor
    b. The Burrow
    c. High Grounds`,
    answer: 'b'
  },

  {
    question: `Where does Uncle Vernon work?\n
    a. Masons
    b. Prescotts
    c. Grunnings`,
    answer: 'c'
  },

  {
    question: `What did the youngest brother receive from Death in "The Tale of Beetle the Bard"?\n
    a. The Cloak of Invisibility
    b. The Elder Wand
    c. The Ressurection Stone`,
    answer: 'a'
  },

  {
    question: `What was the charm Harry used to summon his brromstick in the Triwzard Tournament?\n
    a. Accio
    b. Confundus
    c. Diffindo`,
    answer: 'a'
  },

  {
    question: `What school did Igor Karkaroff teach at?\n
    a. Hogwarts
    b. Beauxbatons
    c. Dumstrang`,
    answer: 'c'
  },

  {
    question: `What is the name of Dumbledore's pheonix\n
    a. Fawkes
    b. Hawkes
    c. Mawkes`,
    answer: 'a'
  },

  {
    question: `What is the Unforgivable Curse that puts under the spell-maker's control?\n
    a. Imperius Curse
    b. Cruciatus Curse
    c. The Killing Curse`,
    answer: 'a'
  },

  {
    question: `What quidditch position does Ron play?\n
    a. Keeper
    b. Beater
    c. Chaser`,
    answer: 'a'
  },

  {
    question: `Who teaches Harry Occlumency to protect him from Voldemort's Legilimency?\n
    a. Sirius Black
    b. Albus Dumbledore
    c. Severus Snape`,
    answer: 'c'
  },

  {
    question: `Which spell is used to conjure the Dark Mark?\n
    a. Impedimenta
    b. Morsmordre
    c. Cave Inimicum`,
    answer: 'b'
  },

  {
    question: `Which two Gryffindors are chosen as prefects in the fifth book\n
    a. Ron and Hermione
    b. Neville and Parvati
    c. Ron and Lavender`,
    answer: 'a'
  },

];


module.exports = {questions};