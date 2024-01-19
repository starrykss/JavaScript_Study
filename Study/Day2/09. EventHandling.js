// ✏️ 이벤트 처리하기
// 이벤트 처리기(Event Handler) : 이벤트가 생겼을 때 그 이벤트를 처리하는 것

// 1️⃣ HTML 태그에 함수 연결하기
// - JavaScript 초기 버전부터 사용해온 방법
// - 속성 이름은 'on이벤트명'으로 표현하고 그 뒤에 함수를 연결한다.
// - 스크립트 코드에서 함수의 이름이 바뀌거나 변경 내용이 있을 경우 HTML 코드도 함께 수정해야 한다. (HTML 코드를 다 뒤져야 한다.)
<button onclick="alert('클릭!')">Click</button>;

// 2️⃣ 웹 요소에 함수 연결하기
// 예1)
const button = document.querySelector("button");

button.onclick = function () {
  document.body.style.backgroundColor = "green";
};

// 예2)
function changeBackground() {
  document.bodys.style.backgroundColor = "green";
}
const button = document.querySelector("button");
button.onclick = changeBackground;

// 위의 방법들은 이벤트가 발생했을 때 두 가지 이상의 함수를 동시에 실행할 수 없다.
// 요소에서 'on이벤트명' 프로퍼티를 하나만 사용할 수 있기 때문이다.
// 만약 동시에 사용한다면, 가장 마지막에 사용한 on 프로퍼티만 적용된다.
// 따라서 하나의 이벤트에 여러 함수를 연결하려면 addEventListener()를 사용해야 한다.

// 3️⃣ 이벤트 리스너로 이벤트 처리하기
// - 모든 DOM 요소에서도 사용할 수 있고, 모든 함수에서도 실행할 수 있다.
// 요소.addEventListener(이벤트, 함수, 캡쳐여부)

// 예1) 문서 배경색 바꾸기
// Way 1
function changeBackground() {
  document.bodys.style.backgroundColor = "green";
}

const button = document.querySelector("button");
button.addEventListener("click", changeBackground);

// Way 2
button.addEventListener("click", function () {
  document.bodys.style.backgroundColor = "green";
});

// Way 3
button.addEventListener("click", () => {
  document.bodys.style.backgroundColor = "green";
});

// 예2) 텍스트 필드에 입력한 글자 수 알아내기
const button = document.querySelector("#bttn");

button.addEventListener("click", () => {
  const word = document.querySelector("#word").value; // 텍스트 필드의 내용
  const result = document.querySelector("#result"); // 결과값을 표시할 영역
  let count = word.length; // 문자열의 길이

  result.innerText = `${count}`; // 결과값 표시
});
