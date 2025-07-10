document.querySelector("button").addEventListener("click", function (evt) {
  console.log(evt);
});

// const input = document.querySelector("input");
// input.addEventListener("keydown", function () {
//   console.log("KEYDOWN"); // 키보드를 누를 때
// });

// input.addEventListener("keyup", function () {
//   console.log("KEYUP"); // 키보드에서 손을 뗄 떼
// });

// const input = document.querySelector("input");
// input.addEventListener("keydown", function (e) {
//   console.log(e.key);
//   console.log(e.code); // ex. key: (공백) code: space(키보드의 위치)
// });

window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    default:
      console.log("IGNORED!");
  }
});
