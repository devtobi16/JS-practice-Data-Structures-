// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = new Set([gameEvents]);
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3.
for (let i of gameEvents.keys()) {
  average = i++ / gameEvents.size;
}
console.log(`An event happened, on every average, every ${average} minutes`);

//4.
for (const [i, el] of gameEvents.entries()) {
  if (i < 45) {
    console.log(`[FIRST HALF] ${i}:${el}`);
  } else if (i > 45) {
    console.log(`[SECOND HALF] ${i}:${el}}`);
  }
}

//WORKING WITH STRINGS
const airline = `TAP Air Portugal`;
const plane = `A320`;
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(`B787`[0]);
console.log(`123`.length);

// Strings have array methods too
console.log(airline.indexOf(`A`));
// For the last repeated letter
console.log(airline.lastIndexOf(`A`));
/* Slice gives us the string that is in the index and other strings' characters that follow.
The string that comes out from the method is a new one. We would have to store it in a new 
variable*/
console.log(airline.slice(4));
// We can also use the slice method by giving an end point even if the string continues
console.log(airline.slice(4, 7));

// Using the time slice with the spaces of a string only
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.indexOf(' ') + 1));

//String characters can also e counted from behind
console.log(airline.slice(1, -5));
console.log(airline.slice(1, -1));

function airlineSeat(seatNo) {
  const s = seatNo.slice(-1);
  if (s === `B` || s === `E`) {
    console.log(`Seat is bad`);
  } else {
    console.log(`Enjoy!`);
  }
}
airlineSeat(`123E`);
airlineSeat(`143B`);
airlineSeat(`01w`);

//In ES6 method, each string characters are known to be objects
console.log(typeof new String(`Jonas`));
//But the slice methods convert the strings in objects to strings
console.log(typeof new String(`Jonas`).slice(-1));

// Converting strings to lower and upper cases
console.log(airline.toLowerCase());
console.log(`Tobi`.toUpperCase());
const passenger = `JoNaS`;
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Checking of email
const email = function (address) {
  if (address.toUpperCase()) {
    mainAddress = address.toLowerCase();
    console.log(mainAddress.trim());
    //There all also methods named trimStart and trimEnd
  } else {
    console.log(address);
  }
};
email(`tobI`);
email(`joDS`);

//Replacing text characters
const priceGB = `34.55$`;
const priceNaira = priceGB.replace(`$`, `#`).replace(`.`, `,`);
console.log(priceNaira);

const announcement = `All passengers should head to boarding door 23. Boarding door 23 is 
about to close`;
console.log(announcement.replaceAll(`door`, `gate`));
//The replaceAll is to replace all the word: "door" with "gate"

//Other methods of a string
const boeing = `Boeing 787`;
console.log(boeing.includes(`787`));
console.log(boeing.startsWith(`Boe`));
console.log(boeing.endsWith(`789`));

if (boeing.startsWith(`Boe`) && boeing.endsWith(7)) {
  console.log(`New Boeing Family`);
}

// Example1: Contraband Check
function contraband(items) {
  let smallItem = items.toLowerCase();
  if (smallItem.includes(`gun`) || smallItem.includes(`cocaine`)) {
    console.log(`He/She is a criminal`);
  } else {
    console.log(`He/She is free to go`);
  }
}
contraband(`I have Rice, Beans, Cocaine`);

// Splitting and joining methods
console.log('123+rtuh+123'.split('+'));
console.log('Jonas Schmedtmann'.split(` `));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(` `);
const newName = [`Mr.`, lastName, firstName.toUpperCase()].join();
console.log(newName);

const capitalizedNumber = function (name) {
  const names = name.split(' ');
  const nameUpper = [];
  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    //2nd method
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};
capitalizedNumber(`jonas schmedtmann`);

//Padding strings
//Padding adds more word to strings
const message = 'Go to gate 23';
console.log(message.padStart(`50`, `+`));
console.log(message.padStart(12, `=`));

console.log(message.padEnd(23, `-`));
//The numbers represent what the total number of characters in the string will be

//Real Life Example
// Credit card *****123***
const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
};
console.log(maskCreditCard(12345678901234));

//Repeat method allows us to repeat the same string multiple times
const message2 = `Bad weather.. All Departures Delayed`;
console.log(message2.repeat(10));

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', conversion);

function conversion(text) {
  const finalResult = [];
  textLower = text.toLowerCase();
  let [word1, word2] = textLower.split('_');
  finalResult.push(word1, word2[0].toUpperCase() + word2.slice(1));
  return finalResult.join('');
}
console.log(conversion('Bsgs_ydyiI'));
console.log(conversion(`underscore_case`));
// conversion(`delayed_departure`);
