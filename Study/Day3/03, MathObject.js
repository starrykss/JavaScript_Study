// ✏️ Math 객체
// - 수학적인 계산과 관련된 메서드들이 많이 포함되어 있다.
// 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math

// 1️⃣ Math 객체의 프로퍼티
E; // 오일러 상수
PI; // 원주율
SQRT2; // 루트2
SQRT1_2; // 1/루트2
LN2; // loge2
LN10; // loge10
LOG2E; // logee
LOG10E; // log10e

// 2️⃣ Math 객체의 메서드
abs(); // 주어진 숫자의 절댓값을 반환
acos(); // 주어진 숫자의 아크 코사인값을 반환 (라디안 단위)
asin(); // 주어진 숫자의 아크 사인값을 반환 (라디안 단위)
atan(); // 주어진 숫자의 아크 탄젠트값을 반환 (라디안 단위)
atan2(); // 두 인수의 아크 탄젠트값을 반환 (y좌표, x좌표 순으로 전달, 라디안 단위)
ceil(); // 주어진 숫자 이상의 가장 작은 정수를 반환
cos(); // 주어진 각도의 코사인값을 반환 (라디안 단위)
exp(); // 자연 로그의 밑인 e의 거듭제곱값을 반환
floor(); // 주어진 숫자 미만의 가장 큰 정수를 반환
log(); // 주어진 숫자의 자연 로그값을 반환
max(); // 주어진 숫자 중 가장 큰 값을 반환
min(); // 주어진 숫자 중 가장 작은 값을 반환
pow(); // 첫 번째 인수를 밑으로 하고 두 번째 인수를 지수로 하는 거듭제곱값을 반환
random(); // 0 이상 1 미만의 난수를 반환
round(); // 주어진 숫자를 가장 가까운 정수로 반올림
sin(); // 주어진 각도의 사인값을 반환 (라디안 단위)
sqrt(); // 주어진 숫자의 제곱근을 반환
tan(); // 주어진 각도의 탄젠트값을 반환 (라디안 단위)

// 소수점 이하 처리
Math.PI; // 3.141592653
Math.ceil(Math.PI); // 4 (올림)
Math.floor(Math.PI); // 3 (버림)
Math.round(Math.PI); // 3 (반올림)

// 소수점 자릿수 지정 : toFixed()
// - toFixed() 메서드는 Math 객체의 메서드가 아닌, Number 객체의 메서드이다.
// - 원시 유형인 숫자(number)는 Number 객체의 프로퍼티와 메서드에 사용할 수 있다.
Math.PI.toFixed(3); // 3.142 (소수점 이하 셋째 자리까지 표시)
Math.PI.toFixed(1); // 3.1 (소수점 이하 첫째 자리까지 표시)

// 무작위 수 추출하기 : random()
// - 0과 1 사이의 무작위 수를 반환한다. (0 ≤ x < 1)
Math.random(); // 0 이상 1 미만의 값
Math.floor(Math.random() * 100 + 1); // 1 이상 100 이하의 값
Math.floor(Math.random() * 7) + 1; // 1 이상 7 이하의 값
Math.floor(Math.random() * y) + x; // x 이상 y 이하의 값
