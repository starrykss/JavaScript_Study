// ✏️ 문자열에 접근하기
// ECMAScript 2009(ES5)까지는 문자열을 다루는 함수가 별로 없었지만, ECMAScript 2015(ES6)부터는 문자열과 관련된 다양한 함수가 생겼다.

// 1️⃣ 원시 유형과 객체
// - 보통 단순한 값만 가지고 있을 경우 '원시 유형'이고, 프로퍼티와 메서드를 가지고 있을 경우 '객체'이다.
// - JavaScript에서는 원시 유형이어도 프로퍼티와 메서드를 사용할 수 있다.
let str = "hello";
str.length; // 5 (str 변수에 length라는 프로퍼티를 정의하지 않았는데도 length 프로퍼티를 사용할 수 있다.)

// - JavaScript에서 string, number, boolean 자료형은 별도로 프로토타입 객체가 만들어져 있다.
// - 숫자는 Number 객체, 문자열은 String 객체, boolean은 Boolean 객체라는 식으로 만들어져 있는데, 이런 객체들을 '래퍼 객체(Wrapper Object)'라고 한다.
// - number나 boolean, string과 같은 원시 유형에서 프로퍼티나 메서드를 사용하면 일시적으로 원시 유형을 해당 객체로 변환한다.
// - 그리고 프로퍼티나 메서드의 사용이 끝나면 해당 객체는 메모리에서 사라져 버린다.
// - 필요한 때만 임시로 객체로 바꿔 사용하고 사용이 끝나면 다시 원시 유형으로 돌아오는데, 이것을 '오토박싱(Autoboxing)'이라고 한다.

// 2️⃣ 문자열의 길이 : length 프로퍼티
// 문자열.length
let str = "Good Morning!";
let greeting = "안녕하세요?";
str.length; // 14
greeting.length; // 6

// 3️⃣ 문자열에서 문자의 위치 활용 : charAt(), indexOf()
// - 문자열은 여러 개의 문자가 나열되어 있으므로 배열처럼 각 문자의 위치를 가리키는 인덱스가 있다고 가정해서 사용한다.

// (1) 특정 위치의 문자 접근하기 : charAt()
// - ECMAScript 2015(ES6)부터는 별도의 메서드 없이 배열처럼 대괄호([])를 사용할 수 있다.
// - 위치는 인덱스로 표시되며 0부터 시작한다.
// 문자열.charAt(위치)
let str = "Good Morning!";
str.charAt(3); // "d" (4번째 위치)
str[5]; // "M" (6번째 위치)

// (2) 문자열에서 부분 문자열의 위치 찾기 : indexOf()
// - 문자열에서 부분 문자열이 어디에 있는지 검색할 때 사용한다.
// - 반환값은 문자열이 나타난 첫 번째 위치이며, 찾는 문자열이 없으면 -1을 반환한다.
// indexOf(문자열)    // 문자열이 나타난 위치 반환
// indexOf(문자열, 위치)   // 문자열이 나타난 첫 번째 위치 반환
let str1 = "Good morning, everyone. Beautiful mroning.";
str1.indexOf("morning"); // 5
str1.indexOf("evening"); // -1 (발견 못함.)

// 두 번째 morning의 위치를 알고 싶을 경우 아래와 같이 사용할 수 있다.
firstIndex = str1.indexOf("monring"); // 5 (첫 번째 morning의 위치)
str1.indexOf("morning", firstIndex + 1); // 34 (두 번째 morning의 위치)

// 4️⃣ 문자열에 어떤 문자가 있는지 확인하기 : startsWith(), endsWith(), includes()
// - ES6 이전에는 indexOf() 메서드를 응용해서 문자열의 시작과 끝에 특정 문자나 문자열이 있는지 확인했다.
// - 문자열에 특정 문자가 포함되었는지 확인할 때도 indexOf() 메서드를 사용했지만, ES6부터는 용도에 맞는 메서드들이 추가되었다.

// (1) 특정 문자나 문자열로 시작하는지 확인 : startsWith()
// 문자열.startsWidth(문자|문자열 [, 위치])
str2 = "Hello, everyone";
str2.startsWith("Hello"); // true
str2.startsWith("hello"); // false
str2.startsWith("He"); // true
str2.startsWith("Hello, ev"); // true
str2.startsWith("el", 1); // true
str2.startsWith("o", 4); // true

// (2) 문자열이 특정 문자나 문자열로 끝나는지 확인 : endsWith()
// 문자열.endsWidth(문자|문자열 [, 길이])
str2.endsWith("everyone."); // true
str2.endsWith("Everyone."); // false
str2.endsWith("one."); // true
str2.endsWith("lo, everyone"); // false

// startsWith() 메서드에서는 위치를, endsWith() 메서드에서는 길이를 사용하는 것에 주의한다. ⚠️
str2.endsWith("one", 16); // true ('Hello, everyone.'의 마지막은 'one.'이다.) ->  길이가 16인 문자열의 마지막 문자열이 one.인지 확인
str2.endsWith("lo", 5); // true ('Hello'의 마지막은 'lo'이다.) ->  길이가 5인 문자열의 마지막 문자열이 lo인지 확인

// (3) 문자열에 특정 문자나 문자열이 포함되었는지 확인 : includes()
// 문자열.includes(문자열)

// ES6 이전에는 특정 문자열이 포함되어 있는지 확인하기 위해 indexOf() 메서드를 사용했다.
// 예) str2에 every가 포함되어 있는지 확인
str2.indexOf("every") !== -1; // true

// 하지만, 이제는 includes() 메서드를 사용해 간단히 해결할 수 있다.
str2.includes("every"); // true
