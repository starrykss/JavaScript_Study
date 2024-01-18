// (1) if 문
let x = 10;
if (x > 5) {
  console.log("x는 5보다 크다.");
}

// (2) if...else 문
// if...else 문
let userInput = prompt("이름을 입력하세요: ");
if (userInput === null) {
  // [취소] 버튼을 클릭했을 경우
  alert("취소했습니다.");
} else {
  alert(userInput);
}

// if..else if..else 문
let score = parseInt(prompt("프로그래밍 점수: "));

if (score !== null) {
  if (score >= 90) {
    alert("A 학점");
  } else if (score >= 80) {
    alert("B 학점");
  } else {
    alert("C 학점");
  }
}

// if 문이나 else 문에서 명령이 한 줄이면 중괄호({})를 생략해서 좀 더 간단하게 작성하기도 한다.
if (userInput !== null) alert(userInput);

// 다음과 같이 2개 이상의 조건을 체크할 수 있다.
// op1 && op2(AND), op1 || op2(OR), !op(NOT)
const num1 = parseInt(prompt("첫 번째 양의 정수 : "));
const num2 = parseInt(prompt("두 번째 양의 정수 : "));

if (num1 % 2 === 0 && num2 % 2 === 0) {
  str = "두 수 모두 짝수입니다.";
} else {
  str = "짝수가 아닌 수가 있습니다.";
}
alert(str);

// 단축 평가값(Short Circuit Evaluation)
// - 조건식은 왼쪽에서 오른쪽으로 진행하면서 처리된다.
// - 2가지 이상의 조건을 함께 체크하는 조건식을 만들 때는 첫 번째 조건을 보고 빠르게 판단할 수 있도록 작성하는 것이 좋다.
// - 예) AND(&&) 연산자를 사용할 경우, false가 될 확률이 높은 조건을 첫 번째 조건식으로 사용하는 것이 좋다.
//       OR(||) 연산자를 사용할 경우, true가 될 확률이 높은 조건을 첫 번째 조건식으로 사용하는 것이 좋다.
let x = 10;
let y = 20;
if (x > 15 && y > 15) alert("둘 다 15보다 크다."); // y > 15는 실행되지 않는다.
if (y > 15 || x > 15) alert("둘 중 하나는 15보다 크다."); // x > 15는 실행되지 않는다.

// (2) switch 문
// - 체크해야 할 조건값이 많을 경우 if..else문 대신에 사용한다.
let subject = prompt("신청할 과목을 선택하세요. 1:HTML, 2:CSS, 3:JavaScript");

if (subject !== null) {
  switch (subject) {
    case "1":
      document.write("HTML을 선택했습니다.");
      break;
    case "2":
      document.write("CSS를 선택했습니다.");
      break;
    case "3":
      document.write("JavaScript를 선택했습니다.");
      break;
    default:
      document.write("잘못 입력했습니다. 다시 입력해 주세요.");
  }
}
