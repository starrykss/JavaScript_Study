// ✏️ 전개 구문(Spread Syntax)
// - 배열처럼 값이 다양한 자료를 한꺼번에 인수로 넘겨주거나, 배열과 배열을 합할 때처럼 배열을 하나의 덩어리로 처리해야 할 때 유용한 기능
// - 값을 펼쳐주는 구문
// - 문자열이나 배열, 객체처럼 여러 개의 값을 담고 있는 자료형에서 다른 정보는 필요 없고 '그 안의 값만 꺼내 사용하려고 할 때' 유용

// 전개 구문은 오로지 배열에 있는 값만 꺼내 펼쳐서 보여준다.
const fruits = ["apple", "banana", "grape"];
console.log(fruits); // ['apple', 'banana', 'grape']
console.log(...fruits); // apple banana grape (전개 구문 사용)

// 전개 구문은 함수를 선언할 때 사용할 수도 있다.
// 예1) 인수의 개수와 상관없이 숫자 더하기
function addNum(...numbers) {
  let sum = 0;

  // of는 객체 안의 '값'을, in은 객체 안의 값의 '인덱스'를 추출한다.
  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(addNum(1, 3)); // 4
console.log(addNum(1, 3, 5, 7)); // 16

// 예2) 인수의 일부분만 나머지 매개변수로 받기
function displayFavorites(first, ...favs) {
  let str = `가장 좋아하는 과일은 "${first}"군요.`;
  return str;
}

console.log(displayFavorites("사과", "포도", "토마토")); // 가장 좋아하는 과일은 "사과"군요.
