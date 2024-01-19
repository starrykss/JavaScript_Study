// ✏️ 함수 표현식(Function Expression)

// 1️⃣ 익명 함수(Anonymous Function) : 이름이 없는 함수

// (1) 변수에 할당해서 사용하는 익명 함수
// 이름이 없는 함수의 경우 함수를 변수에 할당해서 사용할 수 있다.

// 함수를 변수에 할당
let sum = function (a, b) {
  return a + b;
};
console.log(`함수 실행 결과 : ${sum(10, 20)}`);

// JavaScript에서는 함수를 마치 하나의 값처럼 사용할 수 있어서 함수를 변수에 할당할 수 있고, 함수를 다른 함수의 매개변수로 넘길 수도 있다.
// 그래서 JavaScript 함수를 '1급(first-class) 시민' 또는 '1급 함수'라고 한다.
// 함수를 익명 항수로 선언하는 이유는 변수처럼 사용하기 위해서이다.

// (2) 즉시 실행 함수
// 함수를 정의하면서 동시에 실행할 수 있는 함수
// (function([매개변수]) {
//     // ...
// } ([인수]));

(function (a, b) {
  let sum = a + b;
  console.log(`함수 실행 결과 : ${sum}`);
})(100, 200);

// 2️⃣ 화살표 함수(Arrow Function)
// - ECMAScript 2015(ES6)버전 부터 지원하는 기능
// - 표현식을 사용해 함수를 정의할 경우에만 사용 가능
// (매개변수) => { 함수 내용 }

// [1] 매개변수가 없는 경우
// Step 1
let hi = function () {
  return "안녕하세요?";
};
hi();

// Step 2
let hi = () => {
  return "안녕하세요?";
};
hi();

// Step 3
let hi = () => "안녕하세요?";
hi();

// [2] 매개변수가 1개일 때
// Step 1
let hi = function (user) {
  console.log(`${user}님, 안녕하세요?`);
};
hi("홍길동");

// Step 2
let hi = (user) => console.log(`${user}님, 안녕하세요?`);
hi("홍길동");

// [3] 매개변수가 2개 이상일 경우
// Step 1
let sum = function (a, b) {
  return a + b;
};
sum(10, 20);

// Step 2
let sum = (a, b) => a + b;
sum(10, 20);

// 3️⃣ 콜백 함수(Callback Function)
// - 다른 함수의 인수로 사용하는 함수

// (1) 함수의 이름을 사용해 콜백 함수 실행하기
const bttn = document.querySelector("button"); // 버튼 요소 가져오기

function display() {
  // 콜백 함수 선언
  alert("클릭했습니다.");
}

bttn.addEventListener("click", display); // 버튼을 클릭하면 display 함수(콜백 함수)를 실행한다.

// (2) 함수에 직접 작성해서 콜백 함수 실행하기
const bttn = document.querySelector("button"); // 버튼 요소 가져오기

bttn.addEventListener("click", () => {
  // 버튼을 클릭하면 alert를 실행
  alert("클릭했습니다.");
});

// 4️⃣ 1급 시민(First-class Citizen)
// - 1급 시민은 다음과 같은 조건을 만족한다.
// <1> 변수에 할당할 수 있어야 한다.
// <2> 다른 함수의 인자로 사용할 수 있어야 한다.
// <3> 다른 함수에서 반환값으로 반환할 수 있어야 한다.

// JavaScript는 함수가, Kotlin은 객체가 1급 시민이다.

// (1) 변수에 함수 할당하기
let sum = (a, b) => a + b; // 변수에 함수 할당
sum(2, 10);

// or

function add(a, b) {
  return a + b;
}

let sum = add; // 변수에 함수 할당 (함수 뒤에 소괄호를 붙이면 실행 한다는 의미가 있으므로 붙이지 않음.)
sum(2, 10);

// (2) 함수를 다른 함수로 전달하기
function hello() {
  return "안녕하세요?";
}

function bye() {
  return "안녕히 가세요.";
}

function userCheck(name, func) {
  // func 함수를 전달 받아서 실행
  console.log(`${name}님`, func());
}

userCheck("홍길동", hello); // 홍길동님 안녕하세요?
userCheck("오랑우탄", bye); // 오랑우탄님 안녕히 가세요.

// (3) 함수에서 다른 함수 반환하기
let init = () => {
  return function (a, b) {
    return a - b > 0 ? a - b : b - a;
  };
};

console.log(`init(30, 20) : ${init(30, 20)}`); // init(30, 20) : 10
