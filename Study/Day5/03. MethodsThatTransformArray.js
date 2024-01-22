// ✏️ 배열을 변형하는 메서드
// - 단순히 요소를 추가하거나 삭제하는 메서드 외에도 배열 자체를 변형하는 메서들드도 있다.

// 1️⃣ 배열 요소에 같은 함수 적용하기 : map()
// - 각 배열 요소에 똑같은 함수를 실행한 후 그 결과를 새로운 배열로 반환하는 메서드
// map(함수(값))  // 요소의 값을 함수의 인수로 사용, 실행하는 함수는 콜백 함수

let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.map((number) => number * 2);

newNumbers; // [2, 4, 6, 8, 10]

// map() 메서드에서 콜백 함수를 실행할 때 요소의 값을 받을 수도 있고, 인덱스나 배열 전체를 받을 수도 있다.
// map(함수(값, 인덱스)) // 요소의 값과 인덱스를 함수의 인수로 사용
// map(함수(값, 인덱스, 배열)) // 요소의 값과 인덱스, 원래 배열을 함수의 인수로 사용

// 예1) map(함수(값, 인덱스))
let numbers = [1, 2, 3, 4, 5];
let newNumbers2 = numbers.map((number, index) => index + number * 3);

newNumbers2; // [3, 7, 11, 15, 19]

// 예2) map(함수(값, 인덱스, 배열))
let numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function (value, index, array) {
  console.log(`Value: ${value}, Index: ${index}, Original Array: ${array}`);
  return value ** 2;
});

console.log(squaredNumbers);
// Value: 1, Index: 0, Original Array: 1,2,3,4,5
// Value: 2, Index: 1, Original Array: 1,2,3,4,5
// Value: 3, Index: 2, Original Array: 1,2,3,4,5
// Value: 4, Index: 3, Original Array: 1,2,3,4,5
// Value: 5, Index: 4, Original Array: 1,2,3,4,5

// 2️⃣ 특정 조건으로 골라내기 : filter()
// - 특정 조건에 맞는 요소만 골라내는 메서드
// - 배열 요소 값이나 인덱스, 배열을 받아서 함수를 실행하고 return 문으로 반환한 값은 새로운 배열에 추가
// filter(함수(값))
// filter(함수(값, 인덱스))
// filter(함수(값, 인덱스, 배열))
let scores = [90, 35, 43, 85, 23, 94];

let highScores = scores.filter((score) => score >= 85);
highScores; // [90, 85, 94]

let highScores2 = scores.filter((score, index) => {
  if (score >= 85) {
    console.log(`index: ${index}, score: ${score}`);
    return score;
  }
});
// index: 0, score: 90
// index: 3, score: 85
// index: 5, score: 94

// 3️⃣ 값 하나로 누적하기 : reduce()
// - 배열 원소에 차례대로 함수를 실행해서 하나의 결과값을 만든다.
// - 결과값을 하나만 반환하므로 계산 결과를 하나의 변수에 계속 누적시키는데, 이것을 '누산기(Accumulator)'라고 한다.
// -> reduce() 메서드에 있는 함수를 실행하면서 생기는 결과값을 임시로 보관하는 변수를 '누산기'라고 한다.
// reduce(함수(누산기, 현재값, 인덱스, 원래_배열), 초기값)   // 필수값 : 누산기, 현재값, 나머지 값은 필요할 경우에만 추가

// 초기값은 생략할 수 있으며, 초기값을 생략하면 배열의 첫 번째 값을 초기값으로 사용한다.
// -> 이 경우 예상했던 것과 다른 결과가 나올 수 있으므로 초기값을 지정하는 것이 좋다.
let numbers = [1, 2, 3, 4, 5];

let result = numbers.reduce((total, current) => total + current, 0); // 0: 누산기의 초기값
result; // 15

//     total  current  result
//     -----  -------  ------
// [1]   0       1       1
// [2]   1       2       3
// [3]   3       3       6
// [4]   6       4       10
// [5]   10      5       15
