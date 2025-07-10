// const form = document.querySelector("#shelterForm");
// const input = document.querySelector("#catName");
// const list = document.querySelector("#cats");
// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // 기본 동작을 막음 (페이지 이동 x)
//   const catName = input.value;
//   const newLI = document.createElement("LI"); // 리스트 생성
//   newLI.innerText = catName;
//   console.log(newLI);
//   list.append(newLI);
//   input.value = ""; // 입력창 초기화
// });

// 실습
const form = document.querySelector("form");
const ul = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const qty = form.elements.qty.value;
  const product = form.elements.product.value;
  const li = document.createElement("li");
  li.innerText = `${qty} ${product}`;
  ul.append(li);
  form.reset();
});
