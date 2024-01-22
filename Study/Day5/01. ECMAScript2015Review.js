// ✏️ 에크마스크립트2015 기능 복습

// 1️⃣ 매개변수 기본값
function hello(name, message) {
  console.log(`${name}님, ${message}`);
}

hello("김자바", "반갑습니다."); // 김자바님, 반갑습니다.
hello("김타입"); // 김타입님, undefined

// - ES6부터는 함수의 매개변수에 기본값을 넣을 수 있다.
function hello2(name, message = "안녕하세요?") {
  console.log(`${name}님, ${message}`);
}

hello("김자바", "반갑습니다."); // 김자바님, 반갑습니다.
hello("김타입"); // 김타입님, 안녕하세요?

// 2️⃣ 전개 구문(Spread Syntax)
// - 값을 펼쳐주는 구문
// - 전개 구문을 어디에 사용하느냐에 따라 '나머지 매개변수' 또는 '전개 구문'이라고 한다.

// (1) 나머지 매개변수로 사용할 때
// - 함수를 선언하면서 나중에 몇 개의 인수를 받게 될지 알 수 없는 경우
function addNum(...numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(addNum(1, 2)); // 3
console.log(addNum(1, 2, 3, 4, 5)); // 15

// (2) 전개 구문을 사용해 배열 연결하기
const animals = ["bird", "cat"];
const fruits = ["apple", "banana", "cherry"];

animals.concat(fruits); //  ['bird', 'cat', 'apple', 'banana', 'cherry']
[...animals, ...fruits]; // ['bird', 'cat', 'apple', 'banana', 'cherry']

// (3) 전개 구문을 사용해 배열 복사하기
// - 배열이나 객체는 참조형 변수이다.
// -> 배열을 복사해도 실제로 값이 복사되는 것이 아니라 배열이 저장된 메모리 주소가 복사된다. (그 결과 복사한 배열의 값을 수정하면 원래 배열도 수정된다.)
const fruits = ["apple", "banana", "cherry"];
const favorite = fruits;
favorite[1] = "grape";
fruits; // ['apple', 'grape', 'cherry'] (기존의 배열 내용도 수정됨.)

// - 전개 구문을 사용해 복사하면 주소로 가져와서 복사하는 방식(copy by reference)이 아닌, 원래 배열의 값을 가져와서 복사하는 방식(copy by value)으로 진행된다.
// - 배열을 복사해서 사용하면서도 원래의 배열에는 영향을 주지 않으려면 전개 구문을 사용해야 한다. ⭐
const mine = [...fruits];

mine; // ['apple', 'grape', 'cherry']
mine[1] = "orange";
fruits; // ['apple', 'grape', 'cherry'] (원래 배열의 내용이 바뀌지 않는다.)
mine; // ['apple', 'orange', 'cherry']

// 3️⃣ 객체의 프로퍼티
// - 일반적으로 객체의 프로퍼티는 점 표기법을 사용해서 접근한다.
// - 하지만, ES6부터는 대괄호([])를 사용할 수도 있고, 프로퍼티 이름에 계산식을 사용할 수도 있다.

// (1) 대괄호 표기법([])
// - 객체에 프로퍼티를 정의하거나 프로퍼티값을 가져올 때 저 표기법을 많이 사용한다.
// - 하지만 대괄호 표기법을 사용하면 프로퍼티 이름을 좀 더 다양하게 만들 수 있다.
const book = {
  title: "JavaScript",
  pages: 500,
};

// book.published date = "2022-01";   // Syntax Error
book["published date"] = "2022-01"; // (공백 포함 프로퍼티 입력 가능)
book; // {title: 'JavaScript', pages: 500, published date: '2022-01'}

// (2) 계산된 프로퍼티 이름
// - ES6에서는 괄호 표기법을 사용해서 함수나 계산식을 프로퍼티 이름으로 사용할 수 있다. (계산된 프로퍼티 이름(Computed Properly Name))
// - 함수의 반환값이 프로퍼티 이름이 된다.
function fn() {
  return "result";
}
const obj = {
  [fn()]: "함수 키", // Computed Property Name
};

obj; // {result: '함수 키'}

function add(a, b) {
  return a + b;
}
const obj2 = {
  [fn()]: "함수 키",
  [`${add(10, 20)} key`]: "계산식 키",
};

obj2; // {result: '함수 키', 30 key: '계산식 키'}

// (3) 프로퍼티값 단축하기
// - 객체를 정의할 때 객체 밖에서 점 표기법을 이용해서 프로퍼티 이름과 값을 지정할 수 있다.
let user = {
  name: "김자바",
};
user.age = 25;
user; // {name: '김자바', age: 25}

// - 프로그램에 따라 변수에 저장된 값을 가져와서 객체의  프로퍼티로 사용해야 할 경우가 있다.
// - 예) 프롬프트 창이나 폼에서 값을 입력 받고, 해당 값을 객체의 프로퍼티로 사용하는 경우

// 생성자 함수로 객체 정의
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user1 = makeUser("김자바", 20);
user1; // {name: '김자바', age: 20}

// 위의 경우처럼 변수와 프로퍼티 이름이 같으면 다음과 같이 줄여서 사용할 수 있는데, 이것을 '프로퍼티값 단축(Property Value Shorthand)'이라고 한다.
function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let user2 = makeUser("김타입", 27);
user2; // {name: '김타입', age: 27}

// 4️⃣ 객체에서 심벌키 사용하기
// - 심벌(Symbol)
// -> ES6 이후에 추가된 새로운 원시 자료형이다.
// -> 한 번 정의하면 값을 변경할 수 없고 유일한 값을 갖는다.
// -> 2명 이상의 개발자가 하나의 프로그램을 개발할 때 변수나 프로퍼티 이름을 같게 만드는 실수를 피할 수 있다.
let id1 = Symbol();
let id2 = Symbol();
id1 === id2; // false

// (1) 심벌을 사용해 프로퍼티 정의하기
// - 심벌은 객체를 만들어서 일부 정보를 드러내고 싶지 않을 때 사용하는데, 이런 객체를 프라이빗 객체(Private Object)라고 한다.
const id = Symbol("id");
const tel = Symbol("telephone number");

const member = {
  name: "Kim",
  age: 25,
  [id]: 1235,
  [tel]: function () {
    alert(prompt("전화번호 : "));
  },
};

// - 객체의 프로퍼티키로 사용한 심벌은 겉으로 드러나지 않는다.
// -> for...in 문이나 Object.keys(), Object.values(), Object.entries()에서 키에 접근해도 심벌키는 접근할 수 없으므로, 중요한 프로퍼티를 외부에 감출 때 매우 유용하다. ⭐
for (item in member) {
  console.log(`${item} : ${member[item]}`);
}
// name : Kim
// age : 25

// (2) 심벌키에 접근하기
// - 심벌키를 사용한 프로퍼티나 메서드에 접근하려면 대괄호를 사용한다.
// - 심벌키를 사용한 메서드를 실행할 때는 대괄호의 오른쪽에 소괄호(())를 붙인다.
member[id]; // 1235
member[tel](); // 프롬프트 창에 전화번호를 입력하면 알림창에 표시

// 5️⃣ 전역 심벌(Global Symbol)
// - 심벌은 만들 때마다 유일한 값을 가지지만, 상황에 따라 이미 만든 심벌을 다른 곳에서 사용해야 할 경우가 있다.
// - 예) 프로그램에서 하나의 객체를 사용하면서 그 안에 있는 심벌형 프로퍼티에 같이 접근해야 하는 경우
// - 이렇게 여러 곳에서 같이 사요할 수 있는 심벌을 '전역 심벌'이라고 한다.
// - 전역 심벌에 레지스트리에 접근하려면 Symbol.for() 메서드와 Symbol.keyFor() 메서드를 사용해야 한다.

// (1) Symbol.for() 메서드
// - 키를 인수로 받고 전역 심벌 레지스트리를 뒤져서 키에 해당하는 심벌을 찾는다.
// - 레지스트리에 키에 맞는 심벌이 있으면 해당 심벌을 반환하고, 그렇지 않으면 새로운 심벌을 만들어서 반환한다.
// Symbol.for(키)

// 예) tel 프로퍼티 키를 한 곳에서는 tel이라는 전역 심벌로, 다른 곳에서는 phone이라는 전역 심벌로 정의
let tel = Symbol.for("tel"); // 처음이므로 심벌을 생성
let phone = Symbol.for("tel"); // tel 키에 대한 심벌이 이미 있으므로 가져와서 사용
tel === phone; // true

// (2) Symbol.keyFor() 메서드
// - 심벌값을 인수로 받아서 전역 심벌 레지스트리에 저장된 심벌값의 키를 가져온다.
// Symbol.keyFor(심벌값)
Symbol.keyFor(phone); // "tel"
