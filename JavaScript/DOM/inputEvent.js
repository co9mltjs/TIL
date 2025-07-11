const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener('change', function(e) {
//   console.log("AHHHHH") // 인풋창을 떠날 때 출력됨
// })

// input.addEventListener("input", function (e) {
//   h1.innerText = input.value;
// });

// 실습
// 입력이 발생할 때마다 "Welcome, "이라는 문자열 뒤에 현재 텍스트 입력 필드값이 오도록 업데이트
// 입력창이 빈 상태가 되면 "Enter Your Username"이 표시되도록

input.addEventListener("input", function () {
  if (input.value === "") {
    h1.innerText = `Enter Your Username`;
  } else {
    h1.innerText = `Welcome, ${input.value}`;
  }
});
