// 불리언으로 반환 (true/false)

const allEvens = function (arr) {
  return arr.every((num) => num % 2 === 0);
};

console.log(allEvens([2, 4, 6, 8, 10]));
