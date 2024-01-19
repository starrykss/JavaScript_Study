// ✏️ 타이머 함수(Timer Function)
// - 특정 시간이 되었을 때 함수를 실행하거나 특정 시간 동안 함수를 반복하기 위해 시간을 재는 함수
// - 타이머 함수는 실행할 함수와 시간을 지정하는 함수로, 실행할 함수로 인수로 받기 때문에 콜백 함수를 매개변수로 사용한다.

// 1️⃣ setInterval() : 일정 시간마다 반복하기
// setInterval(콜백함수, 시간)
// - 한 번 실행하면 웹 브라우저를 종료하기 전까지는 문서를 새로 고침하거나 다른 페이지로 이동해도 계속 실행된다.

function greeting() {
  console.log("안녕하세요?");
}

setInterval(greeting, 2000); // 2초마다 greeting 함수 반복 실행 (콜백 함수를 직접 실행하는 것이 아니라 setInterval 함수에서 인수로 사용하기 때문에 괄호 없이 사용한다.)

setInterval(() => {
  // 또는 다음과 같이 한꺼번에 표현 가능
  console.log("안녕하세요?");
}, 2000);

// 2️⃣ clearInterval : 반복 실행 멈추기
// clearInterval(타이머)
// - setInterval() 함수로 시작한 타이머를 종료
let counter = 0;

let timer = setInterval(() => {
  // 타이머 시작
  console.log("안녕하세요?");
  counter++;
  if (counter === 5) {
    clearInterval(timer); // 타이머 종료
  }
}, 2000);

// 3️⃣ setTimeout() : 특정 시간 이후에 실행하기
// setTimeout(콜백함수, 시간)
// - 지정한 시간이 지난 후에 콜백 함수를 실행한다.
setTimeout(() => {
  console.log("반가워요.");
}, 3000); // 3초 뒤에 실행
