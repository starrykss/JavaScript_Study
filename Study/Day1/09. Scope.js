// ✏️ 스코프(Scope)

// var로 선언한 변수는 크기 지역 스코프(Local Scope)와 전역 스코프(Global Scope)를 가진다.

// (1) 지역 스코프
// - 변수를 특정 영역에서만 사용할 수 있을 때 '지역 스코프를 가지고 있다'고 말하고, 이런 변수를 '지역 변수'라고 한다.
// - ES6 이전에 사용했던 var 예약어를 사용해서 변수를 선언하면, 해당 변수는 함수 스코프를 가진다.
function sum(a, b) {
  var result = a + b; // 지역 변수
}
console.log(result); // Uncaught ReferenceError: result is not defined

// (2) 전역 스코프
// - 프로그램의 시작 부분에서 변수를 선언하면 프로그램 전체에서 사용할 수 있는 스코프
// - 전역 스코프를 가지는 변수를 '전역 변수'라고 한다.
var hi = "hello"; // 전역 변수

function greeting() {
  console.log(hi);
}

greeting();

// 전역 변수는 함수의 어디에서나 값을 변경할 수 있다.
// 하지만 여러 사람이 공동 작업하는 프로그램일 경우, 다른 함수에서 전역 변수를 수정하면 예상하지 못한 결과가 나올 수 있으니 주의해야 한다.
var hi = "hello"; // 전역 변수

function change() {
  hi = "bye";
}
console.log(hi); // "hello"
change();
console.log(hi); // "hi"

// 함수에서 변수를 선언할 때 변수 이름 앞에 var 예약어를 붙이지 않으면 JavaScript는 전역 변수로 인식한다.
// ⭐ 함수에서 var을 사용해서 변수를 선언하면 함수에서만 사용하는 '지역 변수'가 되고, var 없이 선언하면 프로그램 전체에서 사용할 수 있는 '전역 변수'가 된다.
function greeting() {
  hi = "hello"; // 전역 변수로 인식
}
greeting();
console.log(hi); // 함수 밖에서 사용 가능

// let이나 const를 사용한 변수도 프로그램의 맨 앞에 선언하면 프로그램 전체에서 사용할 수 있다.
// 하지만, 이 경우에는 '전역 스코프를 가진다'고 하지 않고, '스크립트 스코프'를 가진다고 한다.

// (3) 블록 스코프
// - JavaScript에서 블록은 중괄호({})로 둘러싸인 영역을 가리킨다.
// - 블록별로 변수의 유효 범위가 결정되는 것을 '블록 스코프' 라고 한다.
// - let이나 const를 사용해 만든 변수는 기본적으로 변수가 선언된 블록 안에서만 유효하다.
// - 이것을 '블록 스코프를 가진다'라고 하고, 블록 스코프를 가진 변수를 간단히 '블록 변수'라고 한다.

// factor 변수는 모든 블록의 바깥쪽에서 선언했으므로 모든 블록에서 사용할 수 있다.
// num 변수와 result 변수는 두 번째 블록에서 선언했으므로, 두 번째 블록을 벗어나면 사용할 수 없다.
// 따라서 첫 번째 블록인 calc() 함수에서 두 번째 블록에 있는 num 변수를 사용할 수 없다.
const factor = 5; // 모든 블록에서 사용 가능

function calc() {
  return num * factor; // num 변수에 접근할 수 없다.
}
{
  const num = 10;
  let result = calc();
  document.write(`result : ${result}`); // Uncaught ReferenceError: num is not defined
}

// 블록 스코프를 고려해서 위의 코드를 아래와 같이 수정할 수 있다.
const factor = 5;

function calc(factor) {
  return num * factor;
}
{
  let result = calc(10);
  document.write(`result : ${result}`);
}

// ⭐ JavaScript 변수 사용법
// [1] var 변수보다 let, const 변수를 사용한다.
// - var 변수는 다시 선언할 수 있어서 실수로 같은 변수를 다시 선언해도 오류가 발생하지 않는다.
// - 심지어 변수를 먼저 실행한 후에 나중에 선언해도 오류가 발생하지 않는다.
// - 따라서 여러 사람들과 함께 진행하는 프로젝트라면 호이스팅이 없는 let이나 const 변수를 사용하는 것이 안전하다.

// [2] 전역 변수는 최소한으로 사용한다.
// - 전역 변수는 프로그램의 모든 곳에서 접근할 수 있어서 편리하게 사용할 수 있다.
// - 하지만 어디에서든지 값을 변경할 수 있으므로 예상하지 못한 곳에서 값이 달라질 수 있으므로, 오류가 발생할 확률이 높아진다.
// - 그러므로 가능하면 전역 변수의 사용을 줄이고, 프로그램에서 값이 변하지 않는다면 const로 선언하는 것이 좋다.

// [3] 객체 선언은 const를 사용한다.
// - 프로그래밍 도중에 객체 자체가 바뀌지 않도록 const를 사용해서 선언한다.
// - 객체를 const로 선언해도 객체 안에 있는 프로퍼티는 얼마든지 수정할 수 있다.
