// ✏️ 변수(Variable)

/*************************/
/* ✅ 변수 이름 지정 규칙 */
/*************************/
// 1. 변수 이름은 숫자로 시작할 수 없다.
var 7eleven;

// 2. 변수 이름 안에는 공백이 포함될 수 없다.
var seven eleven;

// 3. 자바스크립트는 영문자의 대소문자를 구별한다.
var zebra, ZEBRA;

// 4. 한 단어로 이루어진 변수는 주로 영문자의 소문자로, 두 단어 이상으로 이루어진 변수는 언더바로 연결하거나 중간에 문자의 대문자를 섞어 사용(카멜 표기법)한다.
var total_score, totalScore;

// 5. 미리 정해 놓은 예약어(let 등)는 사용할 수 없다.
var let;

// 6. 무의미한 변수 이름은 피한다.

// (참고) 자바스크립트 변수 이름에 유니코드 문자(*, ? 등)를 사용할 수 있지만, 인코딩할 때 문제가 발생할 수 있으므로 사용하지 않는 것을 권장한다.

/***********************/
/* ✅ 변수 선언 및 할당 */
/***********************/
var 변수명;
let 변수명;
const 변수명;

// var, let 변수는 값을 수정할 수 있다.
let myVar1 = "123";
myVar1 = "abc";    // 수정 가능

let myVar2 = "123";
myVar2 = "abc";    // 수정 가능

// const 변수는 값을 수정할 수 없다.
const myVar3 = "123";
myVar3 = "abc";    // 수정 불가능

// const는 프로그램에서 같은 값을 여러 번 사용할 경우, 해당 상수를 가져와서 사용할 때 사용한다.

// ES6(ECMAScript 2015) 이전에는 변수를 선언할 때 var 예약어를 사용했다.
var x = 10;

// 🚨호이스팅(Hoisting) 
// 변수에 var 예약어를 사용할 경우, 호이스팅(Hoisting)을 조심해야 한다.
// 호이스팅은 "끌어올리다" 라는 뜻이며, 상황에 따라 변수의 선언 부분을 스코프의 가장 위쪽으로 끌어올리는 것이다. (코드를 이런식으로 해석한다는 뜻이다.)
var x = 10;
var sum = x + y;    // y 변수가 선언되기 전에 실행
var y = 20;
console.log(sum);    // NaN 출력 (y가 결정되기 전에 실행 되므로)

// JavaScript 해석기는 위의 코드를 아래와 같이 처리한다.
var x = 10;
var y;    // *
var sum = x + y;
y = 20;   // *
console.log(sum);

// let이나 const를 사용할 경우에는 변수를 선언하기 전에 사용하면 오류가 발생한다.
let x = 10;
let sum = x + y;    // 오류 발생(hoisting)
let y = 20;
console.log(sum);

// var을 사용했을 경우 호이스팅이 발생하면 오류 없이 결과값이 예상한 것과 다르게 나타나므로 오류를 찾기 어려워진다.
// 따라서 변수를 선언할 때 var를 사용하지 않는 것이 좋다.

/***************************/
/* ✅ 변수 재선언 및 재할당 */
/***************************/
function add(a, b) {
    return a + b;
}

// (1) var : 재선언 가능, 재할당 가능
var sum = add(10, 20);
console.log(sum);    // 30
var sum = 100;       // 재선언 (가능)
console.log(sum);    // 100
sum = 200;           // 재할당 (가능)
console.log(sum);    // 200

// (2) let : 재선언 불가능, 재할당 가능
let sum = add(10, 20);
console.log(sum);    // 30
let sum = 100;       // 재선언 (불가능) 
console.log(sum);    // Error: Identifier 'sum' has already been declared
sum = 200;           // 재할당 (가능)
console.log(sum);    // 200

// (3) const : 재선언 가능, 재할당 불가능
const sum = add(10, 20);
console.log(sum);    // 30
const sum = 100;     // 재선언 (불가능) 
console.log(sum);    // Error: Identifier 'sum' has already been declared
sum = 200;           // 재할당 (불가능) 
console.log(sum);    // Error: Assignment to constant variable.

// [정리]
// 예약어      선언하지 않고 사용할 경우     재선언       재할당 
// -----       ----------------------     ------       ------
// var         오류 없음(호이스팅 발생)       O            O
// let         오류 발생                     X            O
// const       오류 발생                     X            X