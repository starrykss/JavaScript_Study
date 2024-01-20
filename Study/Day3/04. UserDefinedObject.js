// ✏️ 사용자 정의 객체
// - 객체는 여러 개의 프로퍼티로 구성되어 있는데, 프로퍼티는 '키:값' 형태를 가지고 있다.
// - 프로퍼티의 값이 함수일 경우 이것을 메서드(Method)라고 한다.
// - 메서드 없이 자료만 있는 객체를 '데이터 객체(Data Object)'라고도 한다.
// - 예) window 객체에는 innerWidth라는 프로퍼티도 있고, alert라는 프로퍼티도 있다. (alert는 함수이므로 '메서드'라고 부른다.)

// 1️⃣ 키와 값
// - 객체를 만들 때는 객체 이름 다음에 중괄호({})를 사용하고, 중괄호 사이에 '키:값' 형식으로 필요한 프로퍼티를 나열한다.
// - 객체의 키는 문자열이나 숫자, 심벌만 사용할 수 있다.
// - 각 프로퍼티는 사이에 쉼표(,)를 넣어 구분한다.

/// (1) 객체 선언하기
// - 프로퍼티 : title, pages
// - 값: "자바스크립트의 첫 걸음", 647
let book1 = {
  title: "자바스크립트의 첫 걸음",
  pages: 647,
};

// 다음과 같이 book1 객체를 확인하면 객체 안의 프로퍼티가 모두 표시된다.
book1; // {title: "자바스크립트의 첫 걸음", pages: 647}

// (2) 객체의 프로퍼티에 접근하기
// - 점 표기법(Dot Notation) 또는 괄호 표기법(Bracket Notation)을 사용하여 객체의 프로퍼티에 접근할 수 있다.
book1.title; // 점 표기법, 프로퍼티 키에 큰따옴표가 없다.
book1["title"]; // 괄호 표기법, 프로퍼티 키에 큰따옴표가 있다.

// (3) 프로퍼티 수정하고 추가하기
// - 객체를 만든 후에 이미 있던 프로퍼티를 수정할 수도 있고, 새로운 프로퍼티를 추가할 수도 있다.
// - 객체를 상수(const)로 지정해도 객체의 프로퍼티값은 얼마든지 수정할 수 있다.

// 프로퍼티를 수정할 때 또는 추가할 때는 다음과 같이한다.
// - 객체에 지정한 키가 있을 경우, 기존 값을 새로운 값으로 수정한다.
// - 객체에 지정한 키가 없을 경우, 지정한 키와 값을 가지는 새로운 프로퍼티를 만든다.
// 객체명.키 = 값
book1.pages = 50; // 키(pages)가 존재하므로 새로운 값으로 수정
book1.author = "Mozilla"; // 키(author)가 존재하지 않으므로 새로운 키와 값 추가
book1; // {title: '자바스크립트의 첫 걸음', pages: 50, author: 'Mozilla'}

// (4) 빈 객체 작성 후 프로퍼티 추가하기
// - 객체는 중간에 프로퍼티를 추가할 수 있으므로, 처음에 빈 객체를 만든 후 필요할 때마다 프로퍼티를 추가할 수 있다.
let books2 = {}; // 빈 객체 생성 1
let book2 = new Object(); // 빈 객체 생성 방법 2 (Object 객체는 자바스크립트 객체들의 기본적인 프로퍼티와 메서드를 가지고 있는 최상위 객체이다.)

book2.title = "TypeScript"; // 새로운 키와 값 추가
book2.pages = 500;
book2.author = "Microsoft";
book2; // {title: 'TypeScript', pages: 500, author: 'Microsoft'}

// (5) 프로퍼티 삭제하기
// delete 객체명.키
delete book2.pages;
book2; //{title: 'TypeScript', author: 'Microsoft'}

// - 프로퍼티에서 키는 그대로 두고 값만 제거하는 경우
book1.author = undefined;
book2; // {title: 'TypeScript', pages: 500, author: undefined}

// (6) 객체 중첩하기
// - 객체 안에 또 다른 객체를 넣을 수 있다. (둘 이상의 객체가 중첩될 수 있다.)
// - 중첩된 객체의 프로퍼티에 접근할 때도 점 표기법을 사용해서 접근할 수 있다.
let student = {
  name: "Gawon",
  score: {
    history: 94,
    science: 85,
    average: function () {
      return (this.history + this.science) / 2;
    },
  },
};

student.score.history; // 94
student.score.average(); // 89.5

// 2️⃣ 객체의 메서드 정의하기
// - 메서드는 객체의 프로퍼티 중 객체의 동작을 지정하는 함수이다.
// - 메서드를 선언하는 방법은 일반적인 함수를 선언하는 방법과 비슷하다.
// 메서드명 : function() { ... }

let book3 = {
  title: "Hello World",
  pages: 360,
  buy: function () {
    // 메서드 정의
    console.log("이 책을 구입했습니다.");
  },
};

// ECMAScript 2015(ES6)에서는 메서드를 정의할 때 function이라는 예약어를 사용하지 않고 다음과 같이 간단하게 표기할 수 있다.
let book3 = {
  title: "Hello World",
  pages: 360,
  buy() {
    // 메서드 정의 (function 예약어 미사용)
    console.log("이 책을 구입했습니다.");
  },
};

// 메서드를 실행하려면 다음과 같이 작성한다.
book3.buy(); // 이 책을 구입했습니다.

// (1) 메서드와 this
// - 메서드에 따라서 객체 안에 있는 프로퍼티값을 사용해야할 경우가 있는데, 이때 this 예약어를 사용한다.
let book4 = {
  title: "Git",
  pages: 500,
  author: "Kim",
  done: false,
  finish: function () {
    book4.done === false ? console.log("읽는 중") : console.log("완독"); // done 프로퍼티 사용
  },
};

book4.finish(); // 읽는 중

// - 위의 코드를 다음과 같이 this 예약어를 사용하여 나타낼 수 있다.
// - 같은 프로퍼티를 가지는 여러 개의 객체를 만들 경우, this.done처럼 사용해야 한다.
let book4 = {
  title: "Git",
  pages: 500,
  author: "Kim",
  done: false,
  finish: function () {
    this.done === false ? console.log("읽는 중") : console.log("완독"); // this 예약어 사용
  },
};

book4.finish(); // 읽는 중

// - JavaScript의 this 예약어는 어디에서 사용하느냐에 따라 가리키는 대상이 달라진다는 것에 주의한다.
// - 객체의 메서드를 정의할 때 function() { ... }에서 사용하는 this는 '현재 객체'를 가리킨다.
// - 하지만, 화살표 함수를 사용할 때 this를 사용하면 최상위 객체인 window 객체를 가리킨다. (화살표 함수에서는 this를 사용하지 않도록 주의한다.) ⚠️

// 3️⃣ 객체 복사하기
// - 객체를 사용할 때, 객체는 참조(by Reference) 형태로 값을 전달한다.

// (1) 원시 유형의 자료 복사하기
// - 숫자나 문자열과 같은 원시 유형 자료는 값(by Value)을 전달한다.
let number1 = 100;
let number2 = number1; // by Value
number1; // 100
number2; // 100

// number2만 바꿀 시, number2만 바뀐다.
number2 = 200;
number1; // 100
number2; // 200

// (1) number1 = 100;
// | 100 |     |     |     |     |     |     |
//   ↑ number1
// (2) number2 = number1;
// | 100 |     | 100 |     |     |     |     |
//   ↑ number1    ↑ number2
// (3) number2 = 200;
// | 100 |     | 200 |     |     |     |     |
//   ↑ number1    ↑ number2
//
// -> 숫자 유형인 number1을 number2로 할당하면 값을 그대로 전달하므로 해당 값을 넣어 둘 새로운 공간이 만들어진다.
// -> number1과 number2와 같이 2개의 변수 공간이 만들어지고, 각자 서로 다른 메모리 주소를 갖는데, 이렇게 값을 넘겨주는 것을 '값으로 전달한다(by Value)'라고 한다.
//

// (2) 참조 주소 전달하기
let bag1 = {
  color: "blue",
  width: 30,
  height: 50,
};

let bag2 = bag1;
bag1; // { color: "blue", width: 30, height: 50 }
bag2; // { color: "blue", width: 30, height: 50 }

// bag2 객체에서 color 프로퍼티값을 변경하면 bag1, bag2 모두 color 값이 red로 된다.
bag2.color = "red";
bag1; // { color: "red", width: 30, height: 50 }
bag2; // { color: "red", width: 30, height: 50 }

// (1) bag1 = { color: "blue" };
//     ┌──────────────────────────────┐
//     │                              ▼
// | 주소1 |     |     |     |  color: "blue"  |     |     |
//   ↑ bag1
//
// (2) bag1 = bag2;
//     ┌───────┬──────────────────────┐
//     │       │                      ▼
// | 주소1 | 주소2 |     |     |  color: "blue"  |     |     |
//   ↑ bag1  ↑ bag2
//
// (3) bag2.color = "red";
//     ┌───────┬──────────────────────┐
//     │       │                      ▼
// | 주소1 | 주소2 |     |     |  color: "red"  |     |     |
//   ↑ bag1  ↑ bag2
//
// -> 객체를 복사할 경우에는 값이 아니라 값이 저장된 메모리 주소가 전달된다.
// -> 객체 bag2에 bag1을 할당하면 bag1의 프로퍼티가 아니라, bag1이 저장된 위치(메모리 주소)가 전달된다.
// -> 단지 bag1을 찾아가기 위한 주소만 넘겨주기 때문에 bag2에서 프로퍼티값을 변경하면 bag1이 저장된 공간을 찾아가서 그 안의 프로퍼티 값을 변경한다.
// -> 이렇게 주소를 넘겨 주고 같은 공간을 사용하는 것을 '참조로 전달한다(by Reference)'라고 한다.

// [정리]
// - 객체를 복사할 때, 객체는 참조(by Reference) 형태로 전달된다.
// - 복사된 객체의 프로퍼티값을 변경하면, 원래의 객체의 프로퍼티값 또한 변경된다.
// - 숫자나 문자열과 같은 원시 유형 자료는 값(by Value)을 전달한다.
