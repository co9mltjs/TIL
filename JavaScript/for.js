// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 6; i++) {
//   console.log("Da ba dee da ba daa");
// }

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//   console.log(i);
// }

// for (let i = 25; i >= 0; i -= 5) {
//   console.log(i);
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//   guess = prompt("enter the secret code...");
// }

// console.log("CONGRATS YOU GOT THE SECRET!");

// let input = prompt("Hey, say something");

// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me") {
//     break;
//   }
// }
// console.log("OK YOU WIN!");

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter yout first guess! (Type 'q' to quit)");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   guess = parseInt(guess);
//   if (guess > targetNum) {
//     guess = prompt("Too high! Enter a new guess!");
//     attempts++;
//   } else if (guess < targetNum) {
//     guess = prompt("Too low! Enter a new guess!");
//     attempts++;
//   } else {
//     guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
//   }
// }

// if (guess === "q") {
//   console.log("OK, YOU QUIT");
// } else {
//   console.log(`YOU GOT IT! It's your ${attempts}th try`);
// }

const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];

for (let sub of subreddits) {
  console.log(sub);
}
