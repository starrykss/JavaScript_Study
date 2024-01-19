// ✏️ 함수(Function)

// 웹 브라우저에서 자바스크립트 코드를 해석할 때 변수 선언이나 함수 선언 부분을 가장 먼저 해석한다.
// 따라서 보통 함수를 선언하는 코드를 실행 코드보다 앞에 넣는다.
// (함수 선언 코드를 실행 코드보다 뒤에 두면 함수에서도 호이스팅(Hoisting)이 발생해서 선언 부분을 앞으로 끌어 당겨 해석하게 된다.)
function calcSum() {
  let sum = 0;
  for (let i = 0; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10까지의 합은 ${sum}입니다.`);
}

calcSum(); // 함수를 호출할 때는 함수 이름 뒤에 반드시 소괄호(())를 붙여야 한다.

// 함수를 선언할 때 외부에서 값을 받는 변수를 매개변수(Parameter)라고 한다.
function sum(a, b) {
  // a, b : 매개변수
  let result = a + b;
  alert(`두 수의 합: ${result}`);
}

// 함수를 호출할 때 실제로 값을 넣어 넘겨주는 것을 인수(Argument)라고 한다.
sum(10, 20); // 10, 20 : 인수

// (참고) 매개변수와 인자를 통틀어서 '인자'라고 한다.
// 자바스크립트는 function이라는 예약어를 만나면 함수를 선언한다는 것을 알고 일단 메모리의 어딘가에 해당 함수의 내용을 저장한다. (당장 함수를 실행하지 않고 기억만 해둔다.)

// 다음과 같이 return 문을 사용하여 함수의 결과값을 반환해줄 수 있다.
function calcSum() {
  let sum = 0;
  for (let i = 0; i <= 10; i++) {
    sum += i;
  }
  return sum;
}

let num = parseInt(prompt("몇까지 더할까요?"));
console.log(`1부터 ${num}까지의 합은 ${calcSum(num)}입니다.`);

// 함수의 매개변수의 수만큼 인자를 넣어주지 않으면 NaN과 같은 값이 반환된다.
function multiple(a, b, c) {
  // 값을 전달 받지 못한 매개변수의 값은 undefined가 된다.
  return a * b + c;
}

multiple(2, 4, 8); // a:2, b:4, c:8, 결과값 16
multiple(2, 4); // a:2, b:4, C:undefined, 결과값 NaN

// ES6(ECMAScript2015)부터 매개변수가 있는 함수를 선언할 때, 매개변수의 기본값을 지정하는 기능이 생겼다.
function multiple(a, b = 5, c = 10) {
  return a * b + c;
}

multiple(5, 10, 20); // a:5, b:10, c:20
multiple(10, 20); // a:10, b:20, c:10(기본값)
multiple(10); // a:10, b:5(기본값), C:10(기본값)
