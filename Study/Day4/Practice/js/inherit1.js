// 프로토타입을 상속하는 새로운 객체 만들기
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
