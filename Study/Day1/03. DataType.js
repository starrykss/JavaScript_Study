/********************************************/
/* 🔎 자료형 : 프로그램에서 처리할 자료의 형태 */
/********************************************/

// JavaScript의 자료형은 원시 유형(Primitive Type)과 객체(Object)로 나뉘어진다.
// (1) 원시 유형(Primitive Type) : 하나의 값만 저장하는 유형
// - 숫자(number)
// - 문자열(string)
// - 논리형(boolean)
// - undefined
// - null
// - symbol

// (2) 객체(Object) : 원시 유형 외의 모든 자료형

/********************/
/* ✅ typeof() 함수 */
/********************/
// - JavaScript의 내장 함수
// - typeof(값|변수) 또는 typeof 값|변수

// (1) JavaScript에서는 정수와 실수를 함께 묶어서 숫자형이라고 한다.
typeof 10; // "number"
typeof "10"; // "string"  (따옴표로 묶으면 문자열로 인식)
typeof 3.145; // "number"

// (참고) JavaScript 는 정밀한 실수 계산에 적합하지 않다.
0.1 + 0.2; // 0.300000000000000000004

// (2) 문자열
typeof "안녕하세요"; // 'string'
typeof "10"; // 'string'
typeof ""; // 'string', 빈 문자열

// 이스케이프 문자나 특수 문자를 문자열에 포함할 수 있다.
console.log("I'm studying now.");
console.log("탭 \t 포함");

// (3) 템플릿 리터럴(Template Literal)
// - 변수와 식을 섞어서 하나의 문자열을 만드는 표현 형식
// - 백팃(``)을 사용해 문자열을 만든다.
// - 변수 부분만 ${}로 묶어 준다.
let name = "Kim";
let classroom = 201;
console.log(name + "님, " + classroom + "호 강의실로 입장하세요."); // 기존의 방법
console.log(`${name}님, ${classroom}호 강의실로 입장하세요.`); // 템플릿 리터럴 이용

// - 템플릿 리터럴에서는 사용자가 소스에 줄을 바꿔 입력하면 출력 결과에서도 줄이 바뀌어 표시된다. ('\n'과 같은 이스케이프 문자를 쓰지 않아도 된다.)
console.log(
  `${name}님,
${classroom}호 강의실로 입장하세요.`
);

// (3) 논리형
10 > 2; // true

// - false로 인정할 수 있는 값 : false로 인정할 수 있는 값 (falsy하다)
0;
("");
NaN; // Not a Number (숫자가 아님)
undefined;
null;

// - true로 인정할 수 있는 값 : true로 인정할 수 있는 값 (truthy하다)

// (4) undefined, null
// - undefined : 값이 할당되지 않았을 때 변수의 초기값 (값이면서 동시에 자료형)
let userName;
console.log(userName); // undefined

// - null : 값이 없거나 유효하지 않은 값 (값이면서 동시에 자료형)
// > undefined는 빈 값인지 유효한 값인지 정할 수 없는 상태이다.
// > prompt를 사용하여 [취소] 버튼을 누를 때 null 값이 반환된다. (프롬프트 창에 입력한 값을 가져와야 하는데 그 값이 없으므로)
// > 사용자가 직접 할당할 수도 있다.
let age = null;

// *undefined는 변수를 만들기만 하고 값을 할당하지 않을 때 JavaScript에서 자동으로 부여하는 초깃값
// *null은 변수에 값이 없거나 유효하지 않다는 의미로, 반환하거나 사용자가 할당할 수 있는 값
// *JavaScript 프로그램에서는 값이 있는지의 여부를 확인할 때 변수의 값이 null인지 아닌지 체크

// (5) 객체
// - 여러 개의 원시 유형을 하나로 묶어 놓은 것
// - JavaScript는 배열이나 함수도 객체로 취급
// - 하나의 변수에 다양한 정보가 포함
// - 중괄호({}) 안에 모든 정보를 담으며, 키(Key)와 값(Value)으로 하나 또는 여러 쌍을 만들 수 있음.
// - 객체 안에는 여러 개의 '키 : 값' 쌍을 쉼표(,)로 구분함. ('키:값' 쌍을 프로퍼티(Property)라고 함.)
let jsBook = {
  title: "자바스크립트 입문", // 문자열
  pubDate: "2024-01-18", // 문자열
  pages: 299, // 숫자
  finished: true, // 논리값
};

// - 다음과 같이 객체의 값에 접근 가능함.
jsBook.title; // title 값 가져오기
jsBook["finished"]; // finished 값 가져오기

// - 배열 선언 및 활용
var emptyArr = [];
var colors = ["red", "blue", "green"];
var arr = [10, "banana", true];

arr[1]; // banana
colors.length; // 3

// (6) 심벌(Symbol)
// - ECMAScript2015(ES6)에 새롭게 추가된 원시 유형의 자료형
// - 유일성을 보장
// - 객체 프로퍼티의 키(Key)로 사용 가능
// - 오픈 소스를 가져와 사용하거나 다른 팀원이 만든 객체들을 함께 사용할 경우 객체의 키 이름이 중복될 수 있다. 이런 경우에 키 이름을 심벌로 지정하면 서로 충돌하지 않는다.

// - 심벌 만들기
let var1 = Symbol();
let var2 = Symbol();
var1 === var2; // false

// - 심벌을 객체 프로퍼티의 키로 사용할 때는 [키]처럼 대괄호로 묶어서 사용한다.
let id = Symbol(); // id를 심벌로 지정한다.
const number = {
  name: "Kim",
  [id]: 12345, // 심벌을 키로 지정할 때 대괄호를 사용한다.
};
member; // {name: "Kim", Symbol(): 12345}
member[id]; // 12345

member.id = 6789; // id라는 프로퍼티 추가해보기
member; // {name: "Kim", id: 6789, Symbol(): 12345} (새로운 id 추가)

// - 다음과 같이 심벌에 설명을 추가할 수 있다.
let grade = Symbol("grade");
member[grade] = "VIP"; // 객체에 새로운 키와 값 추가
member; // {name: "Kim", id: 6789, Symbol(): 12345, Symbol(grade): "VIP"} (추가한 심벌이 나중에 등급을 표시한다는 것을 알 수 있다.)

// [정리]
// 자료형 - 원시 유형(Primitive Type) - 숫자형(number), 문자열(string), 논리형(boolean), 심벌(symbol), undefined, null
//        \ 객체(Object)
