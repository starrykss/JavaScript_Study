// ✏️ 생성자 함수와 클래스
// - 똑같은 프로퍼티와 메서드를 가지고 있는 객체를 반복해서 만든다면 그만큼 메모리 공간이 낭비된다.
// - 이때 생성자 함수와 클래스를 사용할 수 있다.
// - 생성자 함수와 클래스는 비슷한 개념이지만, 클래스는 ECMAScript2015(ES6) 이후 버전에서만 사용할 수 있다. ⚠️

// 1️⃣ 생성자 함수로 객체 만들기
// - 프로그램에서 사용할 객체가 적다면 book1, book2처럼 책마다 따로 객체를 만들어서 사용해도 된다.
// - 하지만, 도서 관리 앱을 만든다면 책이 수십 권, 수백 권 될 수 있고, 책마다 별도의 객체로 만들어서 사용한다면 같은 코드를 수십 번 반복해서 사용해야 하고 그만큼 메모리 공간도 낭비될 것이다.
// - 이 경우, 객체마다 반복되는 프로퍼티와 메서드를 미리 정의해 놓고 필요할 때마다 그 틀을 사용해서 객체를 만들면 된다.
// - 이렇게 객체의 틀을 만들 때 함수를 사용하는데, 이 함수를 '생성자 함수'라고 한다.
// - 그리고 생성자 함수를 통해서 찍어 내는 객체를 '인스턴스' 또는 '인스턴스 객체'라고 한다.
// - 예) 생성자 함수를 쿠키 커터라고 생각하면, 커터로 찍어 내는 쿠키들은 인스턴스 객체가 된다.

// (1) 생성자 함수 정의하기
// - 일반적인 함수와 같은 형식을 사용한다. (function 예약어를 사용하고 매개변수를 넣을 수 있다.)
// - 생성자 함수가 인스턴스 객체를 만들어내는 함수이므로, 함수 내부에서 this를 사용한다는 점만 빼면 객체를 선언하는 것과 같다.
function 함수명(매개변수) {
    this.키1 = 값1,
    this키2 = 값2,
    // ...
    this.메서드1 = function() { /*...*/ }
    this.메서드2 = function() { /*...*/ }
    // ...
}

// 다음과 같이 표현식을 사용해 생성자 함수를 선언할 수도 있다.
const 함수명(매개변수) = function() {
    // ...
}

// 생성자 함수 이름의 첫 글자는 항상 영문자의 대문자로 쓴다.
// 생성자 함수에서 사용하는 this는 이 생성자 함수를 사용해서 만들어지는 인스턴스 객체를 가리킨다.
function Book(title, pages, done=false) {
    this.title = title;
    this.pages = pages;
    this.done = done;
    this.finish = function() {
        let str = "";
        this.done === false ? str = "읽는 중" : str = "완독";
        
        return str;
    }
} 

// (2) new 예약어를 사용해 인스턴스 만들기
// - 이렇게 만든 생성자 함수는 아직 객체가 아니라 그냥 틀일 뿐이다.
// - 이 틀을 사용해서 객체를 찍어 내려면 new라는 예약어를 사용한다.
let book1 = new Book("자바스크립트의 첫 걸음", 648, false);
let book2 = new Book("타입스크립트", 360, true);

console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);    // 자바스크립트의 첫 걸음 - 648쪽 - 읽는 중
console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}`);   // 타입스크립트 - 360쪽 - 완독

// - 콘솔창에서 직접 book1이나 book2를 입력하면 각 인스턴스 객체에 어떤 값이 저장되었는지 확인할 수 있다.
book1; // Book {title: '자바스크립트의 첫 걸음', pages: 648, done: false, finish: ƒ}   (객체 앞의 Book은 Book 유형(type)의 인스턴스 객체라는 의미이다.)
book2; // Book {title: '타입스크립트', pages: 360, done: true, finish: ƒ}

// 2️⃣ 클래스를 사용해 객체 만들기
// - ECMAScript2015(ES6) 이후에는 JavaScript에도 클래스(Class)라는 개념이 도입되었다.
// - 그러나 JavaScript의 클래스는 다른 프로그래밍 언어의 클래스와 동작 방법이 다르다.
// - JavaScript의 클래스는 정확한 클래스 개념이 아니라, 생성자 함수를 좀 더 표현하기 쉽게 바꾼, '신택틱 슈거(Syntactic Sugar, 완전히 새로운 개념이 아니라 기존 문법을 쉽게 바꿨다는 뜻)'이다. ⭐
// -> 클래스를 사용해 코드를 작성해도 실제로 내부에서는 이전의 생성자 함수로 바꾸어서 해석한다. (외부는 클래스이지만 내부에서는 생성자 함수로 동작한다.)

// (1) 클래스 선언하기
// - class 예약 어 다음에 클래스명을 작성한다.
// - 그리고 중괄호({}) 안에서 프로퍼티와 메서드를 분리해 정의한다.
// - constructor() 함수의 안에는 프로퍼티를 넣고 밖에서는 메서드를 정의한다.
// - constructor() 안에서 프로퍼티를 나열할 때는 프로퍼티 간에 쉼표로 구분하지만, 메서드를 나열할 때는 메서드와 메서드 사이에 쉼표가 없다는 점에 주의한다. ⚠️
class 클래스명 {
    constructor() {
        프로퍼티1,
        프로퍼티2,
        // ...
    }
    메서드1() { /*...*/ }
    메서드2() { /*...*/ }
}

// 다음과 같이 표현식을 통해 클래스를 선언할 수도 있다.
const 클래스명 = class {
    // ...
}

// 클래스를 사용해 객체 만들어보기
class Book2 {
    constructor(title, pages, done) {
        this.title = title;
        this.pages = pages;
        this.done = done;
    }

    finish() {
        let str = "";
        this.done === false ? str = "읽는 중" : str = "완독";
        
        return str;
    }
}

// 클래스를 정의했으면 다음과 같이 new 예약어를 사용해서 인스턴스 객체를 만들 수도 있고, 각 객체의 내용을 표시할 수도 있다.
let book1 = new Book("자바스크립트의 첫 걸음", 648, false);
let book2 = new Book("타입스크립트", 360, true);

console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);    // 자바스크립트의 첫 걸음 - 648쪽 - 읽는 중
console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}`);   // 타입스크립트 - 360쪽 - 완독