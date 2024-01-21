// ✏️ 배열의 다양한 메서드
// - 배열에서 메서드를 사용할 때는 기존 배열을 변경하는지의 여부가 중요하므로 이 부분을 주의해서 살펴본다.

// 1️⃣ 배열 합치기 : concat(), 전개 연산자
// - ES6까지는 concat() 메서드를 사용했지만, ES6부터는 전개 연산자(...)를 많이 사용한다.

// (1) concat()
// - 둘 이상의 배열이나 새로운 값을 추가해서 새 배열을 만든다.
// 배열.concat(배열|값, 배열|값, ...)
let vegetables = ["배추", "토마토", "상추"];
let meat = ["불고기"];

let meatBurger = vegetables.concat(meat, "빵");
meatBurger; // ['배추', '토마토', '상추', '불고기', '빵']

// 다음과 같이 사용하면 배열의 위치가 바뀐다.
let meatBurger2 = meat.concat("빵", vegetables);
meatBurger2; // ['불고기', '빵', '배추', '토마토', '상추']

// (2) 전개 연산자
let vegetables = ["배추", "토마토", "상추"];
let cheese = ["모짜렐라", "슈레드"];

let cheeseBurger = ["빵", ...vegetables, ...cheese];
cheeseBurger; // ['빵', '배추', '토마토', '상추', '모짜렐라', '슈레드']

// 2️⃣ 배열 요소 정렬하기 : reverse(), sort()

// (1) 역순으로 배치하기 : reverse()
// - 값의 크기와 상관 없이 배열 요소의 순서를 거꾸로 바꾸는 메서드
// 배열.reverse()
let numbers = [6, 9, 3, 21, 18];

numbers.reverse(); // [18, 21, 3, 9, 6]

// (2) 크기에 따라 정렬하기 : sort()
// - 값의 크기에 따라 가장 작은 값부터 순서대로 값을 정렬한다.
// 배열.sort();
let week = ["sun", "mon", "tue"];
let values = [5, 20, 3, 11, 15];

week.sort(); // ['mon', 'sun', 'tue']
values.sort(); // [11, 15, 20, 3, 5] (숫자로 보지 않고 문자열로 보기 때문에 정렬 순서가 이상하다.)

// - sort() 함수로 숫자를 비교하려면 따로 함수를 정의해야 한다.
// 배열.sort(정렬함수)
let values = [5, 20, 3, 11, 4, 15];

values.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === 0) return 0;
}); // [3, 4, 5, 11, 15, 20]

// 위의 함수 부분을 다음과 같이 간단하게 표현할 수 있다.
values.sort(function (a, b) {
  return a - b;
}); // [3, 4, 5, 11, 15, 20]

// 3️⃣ 배열의 맨 끝에 요소 추가하고 제거하기 : pop(), push()
// - pop()과 push()를 사용하면 원래 배열이 변경된다.
// 배열.pop()      // 맨 끝의 값 제거
// 배열.push(값)   // 맨 끝에 값 추가
let animals = ["lion", "bear", "bird"];

animals.pop(); // "bird"
animals; // ["lion", "bear"]

animals.push("tiger"); // 3 (배열에 새로운 값을 추가한 후 animals 배열의 크기 반환)
animals; // ["lion", "bear", "tiger"]

// 4️⃣ 배열의 맨 앞에 요소 추가하고 제거하기 : shift(), unshift()
// 배열.shift()        // 맨 앞의 값 제거
// 배열.unshift(값)    // 맨 앞에 값 추가
let fruits = ["apple", "pear", "banana"];

fruits.shift(); // "apple" (추출하 ㄴ값 반환)
fruits; // ["pear", "banana"]

fruits.unshift("cherry"); // 3 (배열에 새로운 값을 추가한 후 fruits 배열의 크기 반환)
fruits; // ['cherry', 'pear', 'banana']

// shift()와 unshift()는 배열에서 맨 앞의 요소를 변경하므로 메서드를 처리할 때 인덱스를 변경하는 작업도 해야 한다.
// 그래서 배열의 요소가 많거나 요소의 내용이 복잡할수록 실행 시간이 좀 더 길어진다.

// 5️⃣ 원하는 위치에 요소 추가하거나 제거하기 : splice()
// - 배열의 중간 부분에 요소를 추가하거나 삭제할 때 사용할 수 있다.
// - 한꺼번에 2개 이상의 요소를 추가하거나 삭제할 때 사용할 수 있다.
// - splice() 메서드는 추출한 요소들을 배열로 만들어서 반환하는데, 이때 원본 배열은 변경된다.

// (1) 특정 위치부터 끝까지 요소 제거하기
// 배열.splice(위치) // '위치' 부터 끝까지 요소 삭제
let subjects = ["html", "css", "javascript", "react", "typescript"];

subjects.splice(2); // ["javascript", "react", "typescript"] (3번째부터 끝까지 요소 삭제 후 반환)
subjects; // ["html", "css"]

// (2) 특정 위치에서 원하는 개수만큼 요소 제거하기
// 배열.splice(위치, 숫자)    // '위치'에서 '숫자' 개수만큼 요소 삭제
let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let weekday = week.splice(1, 5);

weekday; //  ['mon', 'tue', 'wed', 'thu', 'fri']
week; //  ['sun', 'sat']

// (3) 특정 위치에 요소 추가하기
// 배열.splice(위치, 숫자, 값)   // '위치'에서 '숫자' 개수만큼 요소를 삭제한 후, 해당 위치에 '값'을 추가
let brunch = ["egg", "milk", "apple", "banana"];

brunch.splice(2, 0, "coffee", "bread"); // [] (세번째 자리에 새 요소 추가)
brunch; // ['egg', 'milk', 'coffee', 'bread', 'apple', 'banana']

// 6️⃣ 원하는 위치에 있는 요소 추출하고 추가하기 : slice()
// - 시작 인덱스와 끝 인덱스를 지정해서 그 사이의 요소를 꺼낸다.
// 배열.slice(위치)    // 위치에서부터 끝까지 추출 (위치 <= X)
// 배열.slice(위치1, 위치2)    // 위치1부터 위치2 '직전'까지 추출 (위치1 <= x < 위치2) ⚠️
let colors = ["red", "green", "blue", "white", "black"];

colors.slice(2); // ['blue', 'white', 'black']
colors; // ['red', 'green', 'blue', 'white', 'black'] (기존의 배열은 바뀌지 않는다. splice() 메서드와 가장 큰 차이점 ⚠️)

let colors2 = colors.slice(1, 4); // 2번째 값부터 5번째 값 직전까지(2번째, 3번째, 4번째) 추출

colors2; // ['green', 'blue', 'white']
colors; // ['red', 'green', 'blue', 'white', 'black']

// [정리]
// - 배열에서 특정 위치의 요소를 활용한다는 점에서 splice() 함수와 slice() 함수는 기능이 같다.
// - 하지만, slice() 함수는 원래 배열에 영향을 주지 않고, splice() 함수는 요소를 추가하거나 삭제할 경우 원래 배열 자체가 수정된다.
// - 따라서 배열에서 추출한 요소로 새로운 배열을 만들어 사용하려면 slice() 함수를, 배열에서 일부 요소를 삭제하려면 splice() 함수를 쓰는 것이 좋다.
