[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// accumulator : 총 합계
// currentValue : 개별 요소

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// const total = prices.reduce((total, price) => {
//   return total + price;
// });

// console.log(total);

// const total = prices.reduce((total, price) => total + price);
// console.log(total);

// 최소값 구하기
const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

console.log(minPrice);
