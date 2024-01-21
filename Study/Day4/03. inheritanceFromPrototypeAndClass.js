// ✏️ 프로토타입과 클래스에서의 상속
// - 객체를 사용한 프로그래밍에서는 부모 객체의 프로퍼티나 메서드를 가져와서 사용할 수 있는데, 이것을 상속(Inheritance)이라고 한다.
// - JavaScript에서는 객체 간의 상속을 구현하기 위해 프로토타입(Prototype)을 사용한다.
// -> 그래서 JavaScript는 '프로토타입 언어'라고도 한다.
// - 클래스는 Syntactic Sugar이므로, 클래스 상속도 프로토타입을 기반으로 한다.

// 1️⃣ 프로토타입
// - JavaScript 객체에서 프로토타입은 객체를 만들어 내는 원형이라고 볼 수 있고, 상위 객체 또는 부모 객체라고도 할 수 있다.
// - 모든 객체는 프로토타입을 가지고 있고, 프로토타입으로부터 프로퍼티와 메서드를 상속 받는다.
let arr = new Array();
arr;
/* [출력 결과]
▼ []
    length: 0
 ▶ [[Prototype]]: Array(0)     // Prototype 부분은 arr 객체가 어디에서부터 온 것인지 알려 주는 속성이다.

-> arr 배열의 프로토타입은 Array 객체이고, arr 배열은 Array 객체의 프로퍼티와 메서드를 상속 받아 사용할 수 있다.
-> 이때, Array 객체를 arr 배열의 프로토타입이라고 한다.
 */

// 이와 같이 숫자형은 Number 객체, 문자열은 String이라는 객체 등 JavaScript의 자료형은 각자 프로토타입 객체를 가지고 있다.
let hello = "안녕하세요?"; // hello는 문자열(string)
hello.length; // 6, length는 String 객체의 프로퍼티

// (1) 생성자 함수와 프로토타입 객체
// - 사용자가 프로그램에서 직접 객체를 만들어 사용할 경우 프로토타입이 어떻게 되는지 확인해보자.

const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
};

const book1 = new Book("자바스크립트의 첫 걸음", 648, false);

// -> 생성자 함수를 선언하는 순간 바로 프로토타입 객체가 만들어진다.
// -> 생성자 함수 이름과 프로토타입 객체 이름은 같다.

// book1 객체의 프로토타입이 Book 객체이므로, Book() 함수의 프로퍼티를 가져와서 사용할 수 있다.
// 이렇게 프로토타입인 객체에 있는 프로퍼티나 메서드를 가져와서 사용하는 것을 '프로토타입 상속(Prototype Inheritance)'이라고 한다.
book1.pages; // 435

// (3) __proto__ 프로퍼티와 prototype 프로퍼티
// - 객체의 프로토타입을 확인할 떄는 __proto__ 프로퍼티를 사용한다.
// - __proto__ 프로퍼티는 모든 객체가 가지고 있는 프로퍼티로, 자신에게 연결된 부모 프로토타입 객체를 확인할 때 사용한다.
book1.__proto__; // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// - 생성자 함수의 프로토타입을 확인할 때는 prototype 프로퍼티를 사용한다.
// - prototype 프로퍼티는 생성자 함수에서 사용하는데, 어떤 생성자 함수를 사용했는지, 어떤 프로퍼티와 메서드를 가지는지 등의 정보를 확인할 때 사용한다.
Book.prototype;
/* [출력 결과]
▼ {constructor: ƒ}
  ▶ constructor: ƒ (title, pages, done)
  ▶ [[Prototype]]: Object

-> Book 프로토타입 객체의 프로토타입은 Object() 객체이다. (Object 객체는 모든 객체의 조상 객체이다. 그래서 어떤 객체든지 프로토타입을 따라가다 보면 가장 마지막에는 Object 객체를 만난다.)
*/

// - 위의 프로퍼티들은 모두 똑같은 프로퍼티 객체를 반환하지만, 2개가 전혀 다른 객체이므로 주의한다.
// - book1에서 Book 객체에 없는 프로퍼티나 메서드를 사용하면 Book 객체의 프로토타입인 Object 객체에 있는지 확인해 보고, 그곳에 있으면 해당 프로퍼티나 메서드를 사용한다.
// (참고) 최근 JavaScript 명세에서는 __proto__ 프로퍼티를 사용하지 않을 것을 권유하고 있지만, 아직까지도 웹 개발에서 많이 사용하고 있다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

// 2️⃣ 프로토타입 메서드
// - 프로토타입을 사용해서 메서드를 정의해보자.
// 생성자 함수를 선언할 때 함수 안에서 프로퍼티와 메서드를 정의하였다.
function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  // (1) 생성자 함수 내부에서 생성자 함수 메서드 정의
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");

    return str;
  };
}

// 함수 밖에서 프로토타입을 사용해 생성자 함수의 메서드를 정의할 수도 있다.
function newBook(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
}

// (2) 생성자 함수 외부에서 생성자 함수 메서드 정의
newBook.prototype.finish = function () {
  let str = "";
  this.done === false ? (str = "읽는 중") : (str = "완독");

  return str;
};

const nBook1 = new newBook("자바스크립트의 정석", 452, false);
const nBook2 = new newBook("노드의 정석", 360, true);

nBook1.finish(); // 읽는 중
nBook2.finish(); // 완독

// 생성자 함수 안에서 메서드를 정의하려면 처음 객체를 만들 때부터 필요한 함수를 모두 알고 있어야 한다.
// -> 만약 중간에 새로운 함수가 필요하거나 기존 함수를 수정해야 한다면 생성자 함수 자체를 수정해야 한다.
// 프로토타입을 사용해 메서들르 정의한다면 생성자 함수를 정의할 때 미처 생각하지 못했던 메서드도 필요할 때마다 추가할 수 있다.
// -> 그래서 일반적으로 객체의 메서드는 프로토타입을 사용해서 정의한다. ⭐

// 3️⃣ 프로토타입을 상속하는 새로운 객체 만들기
function Book(title, price) {
  this.title = title;
  this.price = price;
}

// 외부에서 Book() 생성자 함수의 메서드 추가
Book.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
};

const Book1 = new Book("ABCD", 10000); // 인스턴스 객체 생성
book1.buy(); // ABCD을(를) 10000원에 구매하였습니다.

// 기존의 생성자 함수에 있던 프로퍼티와 메서드를 다른 생성자 함수에서 가져와 사용할 때는 call() 메서드를 사용한다.
// 기존객체명.call(this, 프로퍼티|메서드);   // this는 새로 만드는 객체를 의미한다.
function Textbook(title, price, major) {
  Book.call(this, title, price); // 기존 객체의 프로퍼티를 재사용
  this.major = major;
}

// 외부에서 Textbook() 생성자 함수의 메서드 추가
Textbook.prototype.buyTextbook = function () {
  console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
};

// Textbook 객체에서 Book 객체의 프로퍼티와 메서드를 상속받기 위해 Textbook 객체의 프로토타입으로 Book 객체를 지정해보자.
// 다른 객체를 프로토타입으로 지정하려면 Object 객체의 setPropertyOf() 메서드를 사용한다.
// Object.setPrototypeOf(하위_객체, 상위_객체);
Object.setPrototypeOf(Textbook.prototype, Book.prototype); // Textbook 프로토타입을 Book 프로토타입으로 연결

const book2 = new Textbook("알고리즘", 5000, "컴퓨터공학");
book2.buyTextbook(); // Textbook 객체의 메서드 사용
book2.buy(); // Book 객체의 메서드 사용(*)

// 4️⃣ 클래스 상속 연습하기
// 클래스를 사용해서 객체 만들기
class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
  }
}

const book1 = new BookC("자료구조", 15000);
book1.buy();

// 기존의 BookC 클래스를 상속받아서 새로운 TextbookC 클래스 정의해보자.
// - class 새클래스명 extends 기존클래스명

// 기존 클래스에 있는 프로퍼티를 사용할 때는 constructor() 함수에서 super() 메서드를 사용한다.
// - super(프로퍼티)

class TextbookC extends BookC {
  constructor(title, price, major) {
    super(title, price); // 기존 클래스의 프로퍼티를 재사용
    this.major = major; // 새로운 프로퍼티 정의
  }

  // 새로운 메서드 정의
  buyTextbook() {
    console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
  }
}

const book2 = new TextbookC("인공지능", 5000, "컴퓨터공학");
book2.buyTextbook(); // TextbookC 객체의 메서드 사용
book2.buy(); // BookC 객체의 메서드 사용(*)

TextbookC.prototype;
// [출력 결과]
// ▼ BookC {constructor: ƒ, buyTextbook: ƒ}
//  ▶ buyTextbook: ƒ buyTextbook()
//  ▶ constructor: class TextbookC
//  ▶ [[Prototype]]: Object
