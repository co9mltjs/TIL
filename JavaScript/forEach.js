const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// map
const doubles = numbers.map(function (num) {
  return num * 2;
});

const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function (t) {
  return t.toUpperCase();
});

const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map(function (name) {
  return name.first;
});

// 화살표 함수
// const add = function (x, y) {
//   return x + y;
// };

const add = (x, y) => {
  return x + y;
};

const square = (x) => {
  return x * x;
};

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const greet = (name) => {
  console.log(`Hey ${name}!`);
};

// console.log("HELLO!");
// setTimeout(() => {
//   console.log("...are you still there?");
// }, 3000);

// console.log("GOODBYE!!!");

const id = setInterval(() => {
  console.log(Math.random());
}, 2000);
