// ✏️ 똑똑하게 배열 사용하기

// 1️⃣ 새로운 배열 만들기

// (1) 빈 배열 만들고 값 할당하기
let season = [];

season[0] = "spring";
season[1] = "summer";
season; //  ['spring', 'summer']

// (2) 리터럴 표기법으로 만들기
let pets = ["dog", "cat", "parrot"];

pets; // ['dog', 'cat', 'parrot']

// (3) Array 객체의 인스턴스 만들기
let fruits = new Array("사과", "복숭아", "포도");

fruits; // ['사과', '복숭아', '포도']

// 2️⃣ 배열값 수정하기 및 추가하기
pets[1] = "hamster"; // 기존의 값은 수정된다.
pets; // ['dog', 'hamster', 'parrot']

// 중간에 인덱스를 건너뛰고 값을 할당할 수도 있다. (건너 뛴 부분은 empty(undefined)로 채워진다.)
let fruits = new Array("사과", "복숭아", "포도");

fruits[4] = "배";
fruits; // ['사과', '복숭아', '포도', empty, '배']
fruits[3]; // undefined
fruits.length; // 5

// 3️⃣ 배열 요소 순회하기 : forEach()

// (1) 일반적인 for 문
let colors = ["red", "green", "orange", "blue", "white"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// (2) 인수가 1개인 forEach()
// 배열.forEach(값)
let animals = ["lion", "cat", "dog"];

// 주로 배열명은 복수, 각 요소의 이름은 단수로 사용한다.
animals.forEach((animal) => {
  console.log(animal);
});

// (3) 인수가 2개인 forEach()
// 배열.forEach(값, 인덱스)
animals.forEach((animal, index) => {
  console.log(`animals[${index}] : ${animal}`);
});
// animals[0] : lion
// animals[1] : cat
// animals[2] : dog

// (4) 인수가 3개인 forEach()
// 배열.forEach(값, 인덱스, 배열)

animals.forEach((animal, index, array) => {
  console.log(`[${array}][${index}] : ${animal}`);
});
// [lion,cat,dog][0] : lion
// [lion,cat,dog][1] : cat
// [lion,cat,dog][2] : dog

// 일반적인 for 문은 특정 조건을 만족할 때 break 문이나 continue 문을 사용해서 순회를 멈출 수 있다.
// 하지만, forEach 문은 배열의 처음부터 끝까지 모두 순회해야 한다.⚠️
// forEach는 명시적으로 반복을 제어하는 데 사용되는 제어문이나 레이블을 지원하지 않기 때문에 break 문과 continue 문을 사용할 수 없다.
// 그 대신, return 문을 이용 continue 문처럼 사용할 수 있다.
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  if (number === 3) {
    // 현재 반복을 중단하고 다음으로 넘어감 (continue)
    return;
  }

  console.log(number);
});

// 1 2 4 5
