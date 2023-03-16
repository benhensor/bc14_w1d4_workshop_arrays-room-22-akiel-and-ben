// TASK 1

const favouriteSongs = ["Tiny Dancer", "Running Up That Hill", "Don't Stop Moving", "Tragedy", "Crazy Horses"];

const pyramidScheme = [1, 2, 4, 8, 16, 32, 64];

const friends = [
  {name: 'chris', skill: 'changing lives'},
  {name: 'lizzie', skill: 'being friendly'},
  {name: 'ben', skill: 'code rapping'},
  {name: 'tao', skill: 'hand raising'},
  {name: 'liz', skill: 'crochet'},
  {name: 'patrick', skill: 'Call of Duty'},
  {name: 'tim', skill: 'analogies'},
  {name: 'james', skill: 'friendship'},
  {name: 'joseph', skill: 'being positive'},
  {name: 'max', skill: 'papier-mâché'},
]

console.log(friends[2].skill);

// TASK 2

let options = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(options[8]);

console.log(options[3]);
console.log(options[11]);

// TASK 3

/*
let englishNumbers = ["one", "two", "three", "four", "five"];
let i=0
while (i != englishNumbers.length){
console.log(englishNumbers[i]);
i++;
}
*/
// TASK 4

let englishNumbers = ["one", "two", "three", "four", "five"];
for (i = 0; i < 5; i++) {
  console.log(englishNumbers[i]);
}

// TASK 5

let words = ["ben", "ha", "spla", "fa", "ca", "dra"];
// for loop goes here
for (i = 0; i < 6; i++) {
console.log(words[i] + "t");
}