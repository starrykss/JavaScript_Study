// ✏️ 연산자(Operator)
// - 프로그램에서 특정한 동작을 하도록 지시하는 기호

// (1) 산술 연산자
let x = 10,
  y = 4,
  result;

result = x + y;
result = x - y;
result = x * y;
result = x / y;
result = x % y;
result = x++;
result = x--;
result = ++y;
result = --y;

// 증가 연산자(++)와 감소 연산자(--)는 대입 연산자(=) 보다 빠르기 때문에 사용된다.
// 예) x = x + 1 => 더하기 연산(+)은 시간이 얼마 걸리지 않지만, 대입 연산(=)에서는 시간이 많이 걸린다. 하지만 증가 연산자를 사용하면(x++) 그보다 더 빠르게 계산할 수 있다.
let a = 10;
a = ++a; // 11

result = x + y--; // 14
y; // 3

result = ++x - y; // 8
x; // 11

// (2) 연결 연산자
// - 문자열과 다른 자료형 또는 2개의 문자열을 합해서 하나의 문자열을 만드는 연산자
// - + 연산자의 피연산자가 모두 숫자형이면 더하기 연산이 된다.
// - + 연산자 중 하나라도 문자열이 있으면 연결 연산이 된다.
let value = "3";

"Hi " + value; // "Hi 3"
value + 2; // 5

// (3) 할당 연산자(대입 연산자)
let x = 10,
  y = 4,
  result;

y = x + 2;
y += x; // y = y + x;
y -= x; // y = y - x;
y *= x; // y = y * x;
y /= x; // y = y / x;
y %= x; // y = y % x;

// (4) 비교 연산자
// - 주로 조건을 체크할 때 사용
3 == "3"; // true (피연산자값과 같으면 true)
3 === "3"; // false (피연산자값과 자료형이 모두 같으면 true)
3 != "3"; // false
3 !== "3"; // true (피연산자값과 자료형이 모두 다르면 true)
3 < 4; // true
3 <= 4; // true
3 > 4; // false
3 >= 4; // false

// (참고) ==/!= 연산자와 ===/!== 연산자
// - == 연산자와 != 연산자는 비교하는 피연산자의 자료형을 자동으로 변환해서 비교한다.
// - === 연산자와 !== 연산자는 값뿐만 아니라 자료형까지 비교한다. (피연산자의 자료형이 자동으로 변환되지 않는다.)
// - 그래서 프로그램에서 값을 비교할 때는 ==/!= 연산자보다 ===/!== 연산자를 사용하는 것이 좋다.
3 === "3"; // false
3 !== "3"; // true

// 문자열 끼리 비교할 경우, 문자열에 있는 문자들의 아스키 코드(ASCII Code) 값을 비교해서 결정한다.
// - 숫자보다 문자의 아스키 코드 값이 더 크다. (숫자 : 48(0) ~ 57(9), 문자 : 65(A)~90(Z), 97(a)~122(z))
// - 영문 대문자 보다 영문 소문자의 아스키 코드 값이 더 크다. (65(A)~90(Z), 97(a)~122(z))
// - 맨 앞에서부터 하나씩 문자를 비교해 간다.
"A" > "B"; // false
"JavaScript" > "JAVASCRIPT"; // true

// (5) 논리 연산자(불리언 연산자)
// - 주로 조건을 체크할 때 사용
!true; // false (피연산자값의 반대 값)
true && false; // false (피연산자값 모두 true일 때만 true)
true || false; // true (피연산자값 중 하나면 true여도 true)

// (6) 조건 연산자(삼항 연산자)
// - (조건) ? true일_때_실행할_명령 : false일_때_실행할_명령
// 조건문으로 표현
if (num1 < num2) {
  small = num1;
} else {
  small = num2;
}

small = num1 < num2 ? num1 : num2; // 조건 연산자를 이용하여 표현
