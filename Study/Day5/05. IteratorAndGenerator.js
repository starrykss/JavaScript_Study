// ✏️ 이터레이터와 제너레이터

// 1️⃣ 이터러블 객체란?
// - 이터러블 객체(Iterable Object)에서 이터러블이란 '순서대로 처리할 수 있다'는 뜻이다.
// - 예) 배열 : 인덱스와 값을 가지고 있으므로 인덱스 0부터 차례대로 값을 가져와 처리할 수 있는데, 이런 객체를 '이터러블 객체'라고 한다.
// - 문자열, 배열, 맵, 셋이 이러한 이터러블 객체에 속한다.

// (1) 이터러블 객체의 특징
// - 이터러블 객체에서는 다음과 같은 기능을 사용할 수 있다.
/*
    1. for...of 반복문
    2. 전개 연산자(...)
    3. 구조 분해 할당
*/

// - ES6 이전에도 배열과 문자열은 이터러블 객체였지만, 일반 객체는 이터러블하지 않았다.
// - 다음과 같이 문자열은 이터러블 객체이므로 위의 기능을 사용할 수 있다.
let hi = "hello";

// for...of로 반복
for (let ch of hi) {
  console.log(ch); // h, e, l, l, o
}

// 전개 연산자 사용
let chArray = [...hi];

chArray; // ['h', 'e', 'l', 'l', 'o']

// 구조 분해 할당 사용
let [ch1, ch2] = hi;

ch1; // 'h'
ch2; // 'e'

// - JavaScript에서 다루는 데이터가 많아지면서 전개 연산자나 구조 분해 할당을 사용해서 처리할 수 있는 경우가 많다.
// - 또한 객체 안의 정보를 순회할 때도 일반적인 for 문보다 for..of 문을 사용하는 것이 훨씬 간단한데, 이렇게 하려면 일반 객체를 이터러블하게 만들어야 한다.
// - 이터러블 객체를 직접 만들기 위해서는 몇 가지 이터러블 객체의 기본 개념을 알고 있어야 한다.

// (2) Symbol.iterator
let arr = [1, 2, 3, 4, 5];

arr;
// [Prototype]]: Array(0)
// ...
// Symbol(Symbol.iterator): ƒ values() (Symbol.iterator라는 심벌키가 있고, 그 값은 함수이다.)

arr; // [1, 2, 3, 4, 5]
let it = arr[Symbol.iterator]();
it; // Array Iterator {}

// (3) 이터레이터 객체와 next() 메서드
// - 이터레이터 객체(Iterator Object)는 객체 안의 내용을 순서대로 하나씩 꺼낼 수 있다.
// - 이렇게 순서대로 동작할 수 있는 이유는 이터레이터 객체에 next()라는 메서드가 있기 때문이다.
// - next() 메서드는 객체에서 다음 요소를 가져오는 역할을 한다.
// - next() 메서드를 실행하면 항상 2가지 값이 반환된다. (value(다음값), done(이터레이터 객체가 끝났는지의 여부))
it.next(); // {value: 1, done: false}
it.next(); // {value: 2, done: false}
it.next(); // {value: 3, done: false}
it.next(); // {value: 4, done: false}
it.next(); // {value: 5, done: false}
it.next(); // {value: undefined, done: true}

// - 이터레이터 객체에는 next() 메서드가 있고, 이 메서드는 value와 done 프로퍼티가 있는 객체를 반환하는데 이것을 '이터레이터 프로토콜(Iterator Protocol)'이라고 한다.
// - 즉, 이터레이터 프로토콜도 이터러블 객체가 되기 위해 지켜야 하는 조건이라고 생각하면 된다.

// [Symbol.iterator]()
//    └─────────────────────> [next()] ──────> { value: 첫번째 값, done: false } ───next()───> { value: 두번째 값, done: false } ───next()───> --- ───next()───> { value: undefined, done: true }
//            반환            이터레이터

// 2️⃣ 제너레이터 함수
// - ES6부터 포함된 제네레이터 함수를 사용하면 배열이나 문자열 외에 일반 객체를 이터러블하게 만들 수 있다.
// - 제네레이터에 있는 next() 메서드를 사용하면 바로 앞에서 실행했던 요소에 이어서 다음 요소를 가져와서 실행한다.
// - 함수 안의 실행문을 한꺼번에 실행하는 것이 아니라 하나씩 실행하고, 필요하면 중간에 멈추었다가 나중에 다시 이어서 실행할 수 있다.

// (1) 제네레이터 함수 만들기
// - 제네레이터 객체를 만들 때도 제네레이터 함수를 사용한다.
// - 제네레이터 함수는 일반 함수와 구별하기 위해 function 다음에 * 기호를 붙여서 작성하고, 함수에 return 문 대신 yield 문을 사용한다.
// - 제네레이터 함수에 배개변수를 지정할 수도 있다.
// function* 함수명() {
//    ...
//    yield
//}

// - 제네레이터 함수를 사용해서 제네레이터 객체를 만들 때는 다음과 같이 함수 이름만 지정하면 된다.
// - (매개변수가 있는 함수이면 객체를 만들 때 함수의 소괄호 안에 인수값을 넣는다.)
// 객체명 = 함수명()
function fnc() {
  console.log("1");
  console.log("2");
  console.log("3");
}

fnc(); // '1', '2', '3' (한꺼번에 출력)

// 제네레이터 함수는 함수 안의 명령을 한꺼번에 실행하지 않고, yield 문까지 실행하고 멈춘다.
// 다시 next() 메서드를 실행하면 그 다음 yield 문을 실행한다.
// 제네레이터 함수에서는 어느 부분에서 끊어서 진행할지 지정한다고 생각하면 된다.
// yield 다음에 오는 값은 이터러블 객체의 value로 넘겨질 값이다.
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

// (2) 제네레이터 객체 만들기
// - 제네레이터 함수를 정의했으면 그 함수를 사용해 객체를 만들 수 있다.
let g1 = gen();

g1; // gen {<suspended>} (아직 객체를 시작하기 전이므로 대기 상태이다.)

g1.next(); // {value: 1, done: false}
g1.next(); // {value: 2, done: false}
g1.next(); // {value: 3, done: false}
g1.next(); // {value: undefined, done: true}

g1; // gen {<closed>} (처음부터 끝까지 순서대로 모두 처리되었다.)

// (3) for...of 문 사용하기
// - 제네레이터 함수로 만든 객체는 이터러블 객체이므로 for...of 문을 사용할 수 있다.
let g2 = gen();

for (let i of g2) console.log(i);
// 1
// 2
// 3

let g3 = gen();

g3.next(); // {value: 1, done: false}
for (let i of g3) console.log(i); // 2, 3
