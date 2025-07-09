// const dayOfWeek = prompt("ENETER A DAY").toLowerCase();

// if (dayOfWeek === "monday") {
//   console.log("UGHHH I HATE MONDAYS!");
// } else if (dayOfWeek === "saturday") {
//   console.log("YAY I LOVE SATURDAYS!");
// } else if (dayOfWeek === "friday") {
//   console.log("FRIDAYS ARE DECENT");
// } else {
//   console.log("MEH");
// }

// const age = 30;

// if (age < 5) {
//   console.log("YOU ARE A BABY");
// } else if (age < 10) {
//   console.log("YOU ARE A CHILD");
// } else if (age < 65) {
//   console.log("You are an adult");
// }

// const password = prompt("please enter a new password");

// Password must be 6+ characters
// if (password.length >= 6) {
//   console.log("LONG ENOUGH PASSWORD");
// } else {
//   console.log("TOO SHORT");
// }

// if (password.indexOf(" ") === -1) {
//   console.log("Good job! No SPACE!");
// } else {
//   console.log("CAN'T CONTAIN SPACES");
// }

// const age = -20
// if (age >= 0 && age < 5 || age >=65) {
// console.log("FREE")
// } else if (age >= 5 && age < 10) {
// console.log("$10")
// } else if (age >= 10 && age < 65) {
// console.log("$20")
// } else {
// console.log("INVALID AGE!")
// }

// const firstName = prompt("enter yout first name");
// if (!firstName) {
//   firstName = prompt("TRY AGAIN");
// }

// const age = 45;
// if (!((age >= 0 && age < 5) || age >= 65)) {
//   console.log("You are not a baby or senior");
// }

const day = 6;

switch (day) {
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
  case 7:
    console.log("WEEKEND!");
    break;
  default:
    console.log("I DONT KNOW THAT");
}
