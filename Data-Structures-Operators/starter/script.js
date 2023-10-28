'use strict';
const days = [`mon`, `tue`, `wed`, `thurs`, `fri`, `sat`, `sun`];
const openingHours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [`day${5 - 2}`]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //Before ES6
  // openingHours: openingHours,

  //After ES6
  //Instead of giving the object inside another object a new variable name, we just call it directly
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = `20:00`,
    address,
    mainIndex = 0,
    starterIndex = 1, //The names here need to be exactly the same as the names of the
    //object's variables
  }) {
    console.log(
      `Order received!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be
      delivered to ${address} at ${time} `
    );
  },
  //   orderPasta: function (ing1, ing2, ing3) {
  //     console.log(
  //       `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
  //     );
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Vial de Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Vial de Sole, 21',
// });
// //Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default values for objects
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// // Mutating object values
// // let a = 111;
// // let b = 999;
// // const numbers = { a: 23, b: 11, c: 7 };
// // ({ a, b } = numbers);
// // console.log(a, b);

// //Nested objects
// const { fri } = openingHours;
// console.log(fri);
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //Spread Method of an array:`...`
// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);
// console.log(...goodNewArr);
// const newMenu = [...restaurant.mainMenu, `Gnocchi`, `Sushi`];
// console.log(newMenu);

// // Copy Arrays
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// // Join two arrays or more
// const stressFree = [1, 2, 3, ...goodNewArr];
// console.log(stressFree);

// const menu2 = [
//   ...restaurant.starterMenu,
//   ...mainMenuCopy,
//   ...restaurant.mainMenu,
// ];
// console.log(menu2);

// //Iterables: arrays,strings,maps,and sets,but NOT objects.
// const str = `Jonas`;
// const letters = [...str, ``, `S.`];
// console.log(letters);

// //Real life application
// const ingredients = [
//   // prompt(`Let's make pasta! Ingredient 1`),
//   // prompt(`Let's make pasta! Ingredient 2`),
//   // prompt(`Let's make pasta! Ingredient 3`),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// // Spread method with objects
// const newRestaurant = {
//   ...restaurant,
//   founder: `John Oliver`,
//   foundedIn: 1904,
// };
// console.log(newRestaurant);

//Differences between spread and rest operators
//Spread because on right side of the '='
const arr1 = [1, 2, ...[3, 4]];

//Rest, because on the left side of the '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

//Rest with objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

//rest with functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  console.log(numbers);
};
add(2, 3);
add(4, 9, 3, 4, 5);

const x = [23, 5, 7];
add(...x);

function orderPizza(mainIngredient, ...optional) {
  console.log(mainIngredient);
  console.log(optional);
}
orderPizza(`Cheese`, `Pepperoni`);

//Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

//AND assignment operator

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
//Difference between Rest and spread

// The SPREAD operator is used where we will write VALUES separated by a comma,
//  while the REST operator is used where we will write VARIABLE NAMES separated by a comma.
//i.e SPREAD is used after the equality sign, while rest is used before when destructuring

//Short Circuiting(&&,||)
//Properties of the logical:
//They can use any data type, returning ANY data type, short-circuiting

//Short-Circuiting
console.log(`-------OR-------`);
//OR
restaurant.numGuest = 0;
console.log(3 || `Jonas`);
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);
const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log(`-------AND-------`);
//AND
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
//Practical example
console.log('Hello' && 7 && null && 'Jonas');
if (restaurant.orderPizza) {
  'mushrooms', 'Spinach';
}

const guests = restaurant.numGuest || 10;
console.log(guests);
/*The Nullish coalescing operator(??) only works for null and undefined(NOT 0 or '');
 */
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
// Destructuring an array

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// for skipping an element in an array:

// const [third, , fourth] = restaurant.mainMenu;
// console.log(third, fourth);

// switching two variables

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);
//first method without destructuring

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//second method with destructuring

// [main, secondary] = [secondary, main];
// console.log(secondary, main);

//Receive two return values from a function

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//nested destructuring

// const nested = [1, 2, [3, 8]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//challenge 2.1
for (let player of game.scored) {
  console.log(`Goal${game.scored.indexOf(player) + 1}: ${player}`);
}
for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}:${el}`);
}
//2.2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  average /= odds.length;
  console.log(average);
}

// }
//2.3
for (const [team, odd] of Object.entries(game.odds)) {
  let teamStr = team === `x` ? `draw ` : `Victory:${game[team]}`;
  console.log(`Odds of ${teamStr}:${odd}`);
}
//2.4(Bonus)

//Answer 1.
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
//Answer2
const [gk1, ...fieldPlayers1] = players1;
console.log(gk1, fieldPlayers1);
const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);
//Answer3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//Answer4

const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...fieldPlayers1];
console.log(players1Final);
//Answer5
const [team1, draw, team2] = [game.odds.team1, game.odds.team2, game.odds.x];
console.log(team1, team2, draw);
//Answer6
function printGoals(...playerName) {
  console.log(playerName.length, ...playerName);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(game.scored);
//Answer7
team1 < team2 && console.log('Team 1 is most likely to win');
team1 > team2 && console.log('Team 2 is most likely to win');

//For of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//For getting the values
for (const item of menu) {
  console.log(item);
}
//For getting the index
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
console.log([...menu.entries()]);

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
//Optional Chaining
console.log(restaurant.openingHours?.mon?.open);
//The optional chaining symbol(?)is used to check if an object exists before using it.
const weekDays2 = [`mon`, `tue`, `wed`, `thurs`, `fri`, `sat`, `sun`];
for (const day of weekDays2) {
  const open = restaurant.openingHours[day]?.open ?? `3:00`;
  console.log(`On ${day} we Open at ${open}`);
}
//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: `Jacob`, email: `example@gmail.com` }];
console.log(users[0]?.name ?? `Empty`);

//Looping Objects

//Property Names
const properties = Object.keys(openingHours);
let openStr = `There are ${properties.length} days:`;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}`;
  console.log(day);
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entire Property
const entries = Object.entries(openingHours);
console.log(entries);

//Looping Over Objects
for (const [key, { open, close }] of entries) {
  console.log(x);
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
//Sets
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  1,
  1,
]);
console.log(orderSet);

//Used to check if a set has a particular element
console.log(orderSet.has('pizza'));
console.log(orderSet.has('Pizza'));

//Used to add new elements to a set
orderSet.add('Garlic Bread');
orderSet.add('fish');

// Used to delete certain elements
orderSet.delete('Risotto');
console.log(orderSet);

// Used to delete all the elements in a set
//orderSet.clear();

//Looping over sets is possible

//Real life example
const staff = ['Waiter', 'Chef', 'Manager', 'Waiter'];
const uniqueStaff = new Set(staff);
console.log(...uniqueStaff);

//Maps
const newMap = new Map();
//To add new elements to a map..//the Set method
newMap.set('Name', 'Class');
newMap.set(1, 'Class');
newMap.set('categories', ['Rice', 'Beans', 'Noodles', 'Fish']);
newMap.set('open', 11);
newMap.set('close', 23);
newMap.set(true, 'We are open');
newMap.set(false, 'We are closed');
console.log(newMap);
console.log(newMap.get('categories'));
const time = 21;
//To retrieve elements from the map// the get method
console.log(
  newMap.get(time > newMap.get('open') && time < newMap.get('close'))
);
//To check if an element exists in a map
console.log(newMap.has('open'));
// We can also use the ".delete("object Key")"to delete a particular property from a map
newMap.delete(true);
console.log(newMap);

//The ".size" method is used to know the number of properties in a map
console.log(newMap.size);

//Wrong way of retrieving an array key

// newMap.set([1, 2], 'Red');
// console.log(newMap.get([1, 2]));

// Right way
const weirdArr = [1, 2];
newMap.set(weirdArr, `Red`);
console.log(newMap.get(weirdArr));

//Maps Iterators
newMap.set(document.querySelector('h1'), ' Heading');
const question = new Map([
  ['Question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);
console.log(question);

console.log(Object.entries(openingHours));
// Converting an object to a map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz App
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt(`Your Answer?`));

console.log(question.get(answer === question.get(`correct`)));

//  Google Step, Microsoft Explore, Two Sigma, NVDIA Ignite,
