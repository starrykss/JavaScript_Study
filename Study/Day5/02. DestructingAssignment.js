// ✏️ 구조 분해 할당(Destructing Assignment)
// - ES6의 구조 분해 할당 기능은 프로그램에서 아주 유용하게 사용된다.
// - JavaScript에서 객체나 배열을 많이 사용하는 이유 중 하나는 구조 분해 할당이 가능하기 때문이다.

// 1️⃣ 구조 분해 할당이란?
// - 주어진 자료의 구조를 분해해서 변수에 할당하는 기능
// - 배열이나 객체는 하나의 변수에 다양한 값이 들어 있는데, 그중에서 일부만 꺼내어 다른 변수로 할당할 때 편리하게 사용할 수 있다.

// (1) 배열 구조 분해 할당
// - 왼쪽에는 변수, 오른쪽에는 분해할 값을 넣는다.

const fruits = ["사과", "복숭아"];

let apple = fruits[0];
let peach = fruits[1];
// 위와 같은 방식으로 새로운 변수에 할당하면 코드 라인이 길어진다.

let [apple, peach] = ["사과", "복숭아"]; // 구조 분해 할당 (한 줄로 작성 가능)

// 다음과 같이 변수를 먼저 선언한 후 구조 분해할 수도 있다.
const fruits = ["사과", "복숭아"];

let [apple, peach] = fruits;

apple; // '사과'
peach; // '복숭아'

// 변수에 빈 배열을 구조 분해하면, 배열에서 가져올 값이 없으므로 각 변수에는 undefined라는 값이 저장된다.
let [member1, member2] = [];
member1; // undefined
member2; // undefined

// (2) 일부 값만 구조 분해 할당하기
// - 구조 분해는 값의 일부만 변수에 할당할 때 더욱 편리하다.
let [spring, fall] = ["봄", "여름", "가을", "겨울"];
spring; // '봄'
fall; // '가을'

// (3) 나머지 변수를 사용해 구조 분해 할당하기
// - 구조 분해에서 일부 값을 변수로 지정한 후 나머지 값을 묶어서 하나의 변수로 할당할 수 있는데, 이렇게 나머지 값을 묶어서 만든 변수를 '나머지 변수(Rest Variable)'라고 한다.
// - 나머지 변수를 만들 때는 변수 이름 앞에 ...를 붙이고, 나머지 변수에 할당하는 값은 마지막에 오는 값이어야 한다. (중간의 값을 묶을 수 없다. ⚠️)
let [teacher, ...students] = ["Kim", "Lee", "Park", "Choi"];
teacher; // 'Kim'
students; // ['Lee', 'Park', 'Choi']

// (4) 두 변수의 값 교환하기
// - 구조 분해를 사용하면 두 변수의 값을 서로 교환해서 할당할 때도 편리하다.
let x = 10;
let y = 20;

[x, y] = [y, x];

// 2️⃣ 객체 구조 분해
// - 객체에는 여러 개의 프로퍼티와 메서드가 있는데, 변수 이름은 프로퍼티나 메서드 이름을 똑같이 사용한다.
// - 왜냐하면 객체에는 순서가 없으므로 키 이름과 변수 이름이 같아야 해당 키를 찾아서 값을 가져올 수 있기 때문이다.
// {var1, var2} = {var1: 값1, var2: 값2, ...}

const number = {
  name: "Kim",
  age: 25,
};

let { name, age } = member;

name; // 'Kim'
age; // 25

// 다음과 같이 변수를 먼저 선언할 수도 있고, 객체를 오른쪽에 작성할 수도 있다.
// 이렇게 객체를 구조 분해해서 변수에 할당하면 객체 프로퍼티키에 접근하지 않고 변수를 사용해서 프로그래밍할 수 있다.
let name, age;

({ name, age } = { name: "Kim", age: 25 }); // 중괄호({})의 시작이 블록으로 인식되는 것을 방지하기 위해 소괄호를 사용
name; // 'Kim'
age; // 25

// (1) 새로운 변수 이름 사용하기
// - 구조 분해할 때, 변수 옆에 새로운 변수 이름을 지정한다.
const member = {
  name: "Kim",
  age: 25;
}

let { name: userName, age } = member;   // name 프로퍼티 값을 userName 변수에 할당 (member 객체에 있는 name 키의 값을 가져온 후 userName에 할당)
userName;   // "Kim"

// (2) 중첩된 객체 구조 분해하기
const student = {
  name: "김자바",
  score : {
    korean: 85,
    english: 94
  },
  friends: ["Kim", "Park", "Jay"]
}

let { 
  name,    // student.name의 값
  score : {
    korean,   // student.score.korean 값
    english   // student.score.english 값
  },
  friends : [f1, f2, f3]   // friends 배열의 요소를 순서대로 구조 분해
} = student;

// 한 줄로 표현
let { name, score: { korean, english }, friends: [f1, f2, f3] } = student;

korean; // 85
f2;  // 'Park'