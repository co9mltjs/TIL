function singSong() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
}

function isSnakeEyes(num1, num2) {
  if (num1 === 1 && num2 === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}

function multiply(num1, num2) {
  return num1 * num2;
}

function isShortsWeather(temp) {
  if (temp >= 75) {
    return true;
  } else {
    return false;
  }
}

function lastElement(arr) {
  if (arr.length < 1) {
    return null;
  }
  return arr[arr.length - 1];
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function sumArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function returnDay(oneToSeven) {
  if (oneToSeven < 1 || oneToSeven > 7) {
    return null;
  } else {
    return days[oneToSeven - 1];
  }
}

// console.log(returnDay(4));

let radius = 8;
if (radius > 0) {
  const PI = 3.14159;
  let msg = "HIII!";
}

// console.log(radius);

function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Balack Panther"];
  function cryForHelp() {
    for (let hero of heroes) console.log(`PLEASE HELP US. ${hero.toUpperCase()}`);
  }
  cryForHelp();
}

const add = function (x, y) {
  return x + y;
};

function callTwice(func) {
  func();
  func();
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

// callTwice(rollDie);

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("CONGRATS! I AM A GOOD FUNCTION!");
      console.log("YOU WIN A MILLION DOLLARS");
    };
  } else {
    return function () {
      alert("YOU HAVE BEEN INFECTED BY A VIRUS");
      alert("STOP TRYING TO CLOSE THIS WINDOW");
      alert("STOP TRYING TO CLOSE THIS WINDOW");
    };
  }
}

const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num * num;
  },
};

const square = {
  area(num) {
    return num * num;
  },
  perimeter(num) {
    return num * 4;
  },
};

const Hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};
