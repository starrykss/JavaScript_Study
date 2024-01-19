// ✏️ 자료형 변환(Data Type Transform)

// 강력한 자료형 체크(Strong Data Type Check)
int num = 20;
char *name = "John";

// 느슨한 자료형 체크(Weak Data Type Check)
num = 20;
num = "John";

// JavaScript는 미리 변수의 자료형을 지정하지 않고, 그 값에 따라 자료형이 결정된다.

// (1) 자동 형 변환(묵시적 형 변환)
// - 문자열을 사칙 연산에 사용할 때는 자동으로 숫자형으로 변환된다.
// - 숫자와 문자열을 연결하면 숫자가 자동으로 문자열로 변환된다.
one = "20";
two = 10;

// JavaScript에서는 + 기호를 더하기 연산자, 연결 연산자로 사용하는데, + 기호의 앞이나 뒤에 문자열이 있으면 + 기호는 연결 연산자가 된다.
one + two;    // "2010"

// 하지만, 뺄셈과 곱셈, 나눗셈은 숫자끼리만 계산할 수 있으므로 문자열을 숫자로 바꿔서 인식한다.
one - two;    // "10"

// 다음과 같이 Number 함수를 이용하여 직접 숫자형으로 변환 할 수 있다.
Number(true);                // 1
Number(false);               // 0
Number([숫자]);                // 1
Number(null);               // 0
Number(undefined);          // NaN(Not a Number)
Number([정수_문자열]);         // 20 (맨 앞에 0이 있으면 제거)
Number([실수_문자열]);         // 2.23 (맨 앞에 0이 있으면 제거)
Number([16진수_문자열]);       // 31 (10진수)
Number([빈_문자열]);           // 0
Number([기타]);                // NaN

// parseInt()는 인자를 정수로 만든다.
let userInput = prompt("아무 숫자를 입력하시오.");
typeof(userInput);    // "string"
parseInt(userInput);     // 32
typeof(result);    // "number"

// parseFloat()는 인자를 실수로 만든다.
let bodyHeat = prompt("현재 체온은?");
parseFloat(bodyHeat);    // 36.4

// toString()은 null/undefined 자료형을 제외한 나머지 자료형을 문자열로 바꾼다.
// 2진수/8진수 형태의 문자열로 바꾸려면 인자에 2/8을 지정한다. (10 : 기본값)
num = 10;
isEmpty = true;

num.toString();            // '10' (10진수 문자열(기본값))
num.toString(2)            // '1010' (2진수 문자열)
num.toString(8)            // '12' (8진수 문자열)
isEmpty.toString();        // 'true'

var isUndefined;
isNull = null;

isUndefined.toString();    // undefined (그대로)
isNull.toString();         // null (그대로)

// String 함수는 null/undefined 자료형까지 모두 포함해서 문자열로 바꾼다.
isFull = false;
initValue = null;
var isUndefined;

String(isFull);       // 'false'
String(initValue);    // 'null'
String(isUndefined);  // 'undefined'

// 다음과 같이 간단하게 숫자나 문자열로 변환할 수 있다.
let userInput = "20";      // 문자열 "20"
userInput = +userInput;    // 숫자 20

let userAge = 30;          // 숫자 30
userAge = userAge + "";    // 문자열 "20"

// Boolean 함수는 다른 유형의 데이터를 논리형 데이터로 바꾼다.
Boolean(5 * 4);        // true
Boolean("Hi?");        // true
Boolean(undefined);    // false

//                 true 값이 되는 데이터       false 값이 되는 데이터
// -----           --------------------       --------------------
// 숫자형                0이 아닌 값                    0
// 문자열           빈 문자열이 아닌 문자열           빈 문자열
// undefined                -                      undefined