// 2025.07.09 DOM Event

// querySelector 사용

const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("YOU CLICKED ME!");
  console.log("I HOPE IT WORKED!");
};

function scream() {
  console.log("AAAAAHHHHH");
  console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
  alert("You Clicked the h1!");
};

// addEvetListener 사용

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("CLICKED!");
});

// addEventLister를 쓰는 이유 :
// querySelector는 동일한 이벤트에 대해 서로 다른 콜백 함수를 지정할 수 없음
// addEventLister는 1. 원하는 만큼 콜백 사용 가능  2. 여러 가지 옵션 사용 가능

// querySelector 사용 시
function twist() {
  console.log("TWIST!");
}
function shout() {
  console.log("SHOUT!");
}

const tasButton = document.querySelector("#tas");
// tasButton.onclick = twist;
// tasButton.onclick = shout; // SHOUT만 출력

// addEventLister 사용 시

tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout); // 모두 출력
