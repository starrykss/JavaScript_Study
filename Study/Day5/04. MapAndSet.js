// ✏️ Map과 Set
// - 여러 개의 값을 하나의 변수로 묶어서 처리할 때 보통 배열이나 객체를 사용하였다.
// - 하지만, 배열과 객체에서 해야할 일이 점점 많아지면서 배열과 객체로는 부족하다고 생각했던 부분을 보완해 맵(Map)과 셋(Set)이 도입되었다.

// 1️⃣ 맵과 셋이 등장한 이유
// - 객체는 '키'와 '값'으로 구성되어 있다.
// - 배열은 객체의 한 종류이지만, '값'만 있다.
// - 아래와 같은 이유로 ES6에서는 기존의 객체나 배열과 비슷한 새로운 구조인 맵과 셋을 도입했다.
/*
    1. 객체에서 '키'에는 문자열만 사용할 수 있다. 하지만 맵에서는 키에 모든 값을 사용할 수 있다.
    2. 객체에는 여러 정보를 담을 수 있지만, 프로퍼티 간에 순서가 없다. 하지만 맵과 셋에는 순서가 있다.
    3. for 문과 같은 반복문을 이용해서 객체의 프로퍼티를 반복할 수 없다. 하지만 맵과 셋에서는 for ... of와 같은 반복문을 사용할 수 있다.
    4. 객체에는 프로퍼티의 개수를 알려주는 프로퍼티가 없다. 하지만 맵과 셋에는 별도의 프로퍼티가 있고, 이 외에도 객체보다 많은 메서드를 가지고 있다.
*/

// 2️⃣ Map
// - 키(Key)와 값(Value)이 하나의 쌍으로 이루어졌고, 여러 개의 프로퍼티를 가지고 있는 자료 형태
// - 객체의 프로퍼티키는 문자열과 심벌만 사용할 수 있지만, 맵의 프로퍼티키는 문자열뿐만 아니라 모든 자료형을 사용할 수 있다. (심지어 객체나 함수도 사용할 수 있다.)
// - 그리고 맵에 저장된 프로퍼티는 순서대로 접근하고 처리할 수 있다.
// - 맵을 만들려면 new 예약어를 사용해서 Map 객체의 인스턴스를 만들어야 한다. 그리고 맵을 만들었으면 set() 메서드를 사용해서 키와 값을 추가해야 한다.
// new Map()    // Map 객체 만들기
// set(키, 값)  // Map 객체에 프로퍼티 추가
let bag = new Map(); // Map 객체의 인스터스인 bag을 만든다.

bag.set("color", "red"); // {'color' => 'red'}

// - 맵 객체를 만들 때 대괄호([])를 사용하면 처음부터 프로퍼티를 지정할 수 있다.
// new Map()([
//     [키1, 값1],
//     [키2, 값2],
//     ...
// ]);

let myCup = new Map([
  ["color", "white"],
  ["haveHandle", true],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

myCup; // {'color' => 'white', 'haveHandle' => true, 'material' => 'ceramic', 'capacity' => '300ml'}

// (1) 맵에서의 체이닝
// bag라는 맵 객체에 type 프로퍼티와 purpose 프로퍼티를 추가해본다.
bag.set("type", "mini");
bag.set("purpose", "daily");

// 위의 코드를 한 줄로 연결하여 작성할 수 있는데, 이것을 체이닝(Chaining)이라고 한다.
bag.set("type", "mini").set("purpose", "daily");

// 3️⃣ 맵의 프로퍼티와 메서드
// - 맵에는 다양한 메서드들이 있는데, 메서드 이름만 보고도 무슨 역할을 하는지 쉽게 알 수 있다.
// size          // 맵 요소의 개수 반환
// set(키, 값)   // 프로퍼티 추가
// get(키)      // 해당 키의 값 반환
// has(키)      // 해당 키가 맵에 있는지 체크하고 true 또는 false로 반환
// delete(키)   // 해당 키가 있는 프로퍼티 삭제
// clear()      // 맵의 모든 요소 삭제
// keys()       // 각 요소의 키를 모아서 반환
// values()     // 각 요소의 값을 모아서 반환
// entries()    // [키, 값] 형태로 모든 요소를 반환

bag; // {'color' => 'red', 'type' => 'mini', 'purpose' => 'daily'}

bag.size; // 3

bag.get("color"); // 'red'
bag.get("name"); // undefined (맵에 없는 키를 지정할 경우)

bag.has("color"); // true

bag.delete("type"); // true (삭제에 성공하면 true 반환)
bag.delete("name"); // false
bag; // {'color' => 'red', 'purpose' => 'daily'}

bag.clear(); // 맵의 모든 요소 삭제
bag; // {}

// (2) keys(), values(), entries()
// - 맵은 이터러블(Iterable) 객체여서 순서대로 요소를 처리할 수 있다.
// -> 이터러블 객체란, 객체의 값을 순서대로 처리할 수 있는 객체를 가리킨다.
// - 객체는 순서가 없어서 이터러블 객체가 아니므로 순서대로 처리하려면 이터러블 객체로 변환해야 한다.
// - 맵에는 키와 값을 가져오는 몇 가지 메서드가 있다.
// - 맵에서 키나 값을 가져오는 메서드들도 이터러블 객체를 반환한다.
let myCup = new Map([
  ["color", "white"],
  ["haveHandle", true],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

myCup.keys(); // MapIterator {'color', 'haveHandle', 'material', 'capacity'}

// 반환된 값이 이터러블 객체이므로 for...of 문을 사용할 수 있다.
for (let key of myCup.keys()) {
  console.log(key); // color, haveHandle, material, capacity
}

// values()나 entries()도 값을 반환하거나 [키, 값]으로 된 쌍을 반환하는데, 모두 이터러블 객체이다.
for (let value of myCup.values()) {
  console.log(value); // color, haveHandle, material, capacity
}

for (let entry of myCup.entries()) {
  console.log(entry); // ['color', 'white'], ['haveHandle', true], ['material', 'ceramic'], ['capacity', '300ml']
}

// (참고) map.entries() 메서드
// - ECMAScript 2017(ES8) 이후에 추가된 메서드이다.
// - 만약 entries() 메서드를 사용하지 않는다면 키와 값을 가져올 때 다음과 같이 작성하면 된다.
for (let entry of myCup) {
  console.log(entry); // ['color', 'white'], ['haveHandle', true], ['material', 'ceramic'], ['capacity', '300ml']
}

// 4️⃣ Set
// - 배열은 키 없이 여러 개의 값을 모아 놓은 것으로, 값이 중복되어도 상관 없다.
// - 셋은 키 없이 여러 개의 값을 모아 놓았으므로 배열과 비슷하지만, 값이 중복되지 않는다는 것이 배열과 다르다.
// new set()
// new set(배열)

// - 셋에 값을 추가할 떄는 add() 메서드를 사용한다.
// add(값)

let numSet1 = new Set();

numSet1.add("one"); // {'one'}
numSet1.add("two"); // {'one', 'two'}

// 다음과 같이 배열을 인수로 받아서 셋으로 만들 수도 있다.
let numSet2 = new Set([1, 2, 3]);

numSet2; // {1, 2, 3}

let numSet3 = new Set([1, 2, 1, 3, 1, 5]);

numSet3; // {1, 2, 3, 5}

// 5️⃣ 셋의 프로퍼티와 메서드
// - 셋의 프로퍼티와 메서드는 키가 없을 뿐, 맵과 비슷하다.
// size         // 셋 요소의 개수 반환
// add(값)      // 셋에 값 추가
// has(값)      // 셋에 해당 값이 있는지 체크
// delete(값)   // 셋에서 해당 값 삭제
// clear()      // 셋 비우기

let students = new Set();

students.add("김자바");
students.add("박시샵");
students.add("김자바");
students; // {'김자바', '박시샵'}

students.has("박시샵"); // true
students.has("노타입"); // false
students.delete("김자바"); // true
students; // {'박시샵'}
students.clear();
student; // {}

// (1) keys(). values(), entries()
// - 셋에 있는 메서드 중 keys(), values(), entries() 메서드는 for...of 문을 사용할 수 있도록 이터러블 객체를 반환한다.
// - entries() 메서드를 사용할 때 셋에는 키가 없으므로 [값, 값] 형식으로 반환한다.
// keys()     // 셋에 있는 모든 값 반환
// values()   // 셋에 있는 모든 값 반환
// entries()  // [값, 값] 형식으로 모든 값 반환

let students = new Set(["김자바", "박시샵"]);

students; // {'김자바', '박시샵'}
students.keys(); // {'김자바', '박시샵'}
students.values(); // {'김자바', '박시샵'}
students.entries(); // {'김자바' => '김자바', '박시샵' => '박시샵'}
