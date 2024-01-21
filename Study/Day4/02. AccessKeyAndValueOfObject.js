// ✏️ 객체의 키와 값에 접근하기
// - 객체에는 여러 개의 프로퍼티와 값이 담겨 있다.
// - 그런데 객체의 프로퍼티 이름을 알지 못하면 객체의 프로퍼티나 값에 접근할 방법이 없다.
// - 객체에 어떤 프로퍼티/값이 있는지 한 번에 살펴보는 방법을 알아보자.

// 1️⃣ for ... in 사용하기
// for (변수 in 객체) { ... }
let bag = {
  type: "backpack",
  color: "blue",
  size: 15,
};

for (key in bag) {
  console.log(`${key}`); // type, color, size
}

for (key in bag) {
  console.log(`${key} : ${bag[key]}`); // type : backpack, color : blue, size : 15
}

// 2️⃣ Object 객체 메서드 사용하기 : keys(), values(), entries()
// Object.keys(객체명);       // 객체의 키만 배열로 반환
// Object.values(객체명);     // 객체의 값만 배열로 반환
// Objects.entries(객체명);   // 객체의 [키, 값] 쌍을 배열로 반환
let book1 = {
  title: "자바스크립트 첫 걸음",
  pages: 435,
  buy: function () {
    console.log("이 책을 구입했습니다.");
  },
};

let keys = Object.keys(book1); // 키만 가져오기
console.log(keys); // ['title', 'pages', 'buy']

let values = Object.values(book1); // 값만 가져오기
console.log(values); // ['자바스크립트 첫 걸음', 435, ƒ]

let entries = Object.entries(book1); // 키와 값 함께 가져오기
console.log(entries); // [['title', '자바스크립트 첫 걸음'], ['pages', 435], ['buy', f]]

// (2) 인스턴스 객체와 프로토타입
book1;
/* [출력 결과]
▼ Book {"title": "자바스크립트 첫 걸음", "pages": 435}
  ▶buy: ƒ ()
    pages: 435
    title: "자바스크립트 첫 걸음"
    [[Prototype]]: Object

-> 생성자 함수 Book()을 통해 만들어진 객체라는 것을 확인할 수 있다.
-> book1 객체의 프로토타입은 Book 프로토타입 객체이다.
*/
