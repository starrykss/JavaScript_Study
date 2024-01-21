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
