// ✏️ 예외 처리(Exception Handling)

// 1️⃣ 예외 처리(에러 핸들링, 에러 처리)란?
// - 프로그램에서 문제가 발생하면 프로그램은 실행을 멈추므로 코드를 작성할 때부터 발생할 만한 문제를 미리 고려하고 대비하는 것
// - 예외(Exception)는 코드를 작성할 때 문법적인 실수로 발생하는 오류로, 프로그램의 작성 의도와 다르게 프로그램을 사용할 때도 발생한다.
// - 예) 프롬프트 창에서 입력을 받을 때 사용자가 [취소] 버튼을 클릭할 것을 대비해서 다음과 같이 작성
if (userInput !== null) {
  // ...
}

// 2️⃣ try 문, catch 문, finally 문
// try {
//   // 실행할 코드
// } catch (error) {
//   // try 블록에서 예외가 발생했을 때 실행할 코드 (error 객체에는 오류 이름과 오류 설명이 들어 있다.)
// } finally {
//   // try 블록 이후에 실행할 코드 (예외와 상관없이 실행, 일반적으로 생략)
// }

try {
  console.log("시작");
  add();
  console.log("실행중...");
} catch (err) {
  console.log(`오류 발생 : ${err}`);
}

console.log("끝");

// 3️⃣ 오류 표시하기
// (1) console.error() : 콘솔창에 오류 표시 (빨간색)
try {
  // ...
} catch (err) {
  console.error(`오류 발생 : ${err}`); // 오류 발생 : ReferenceError: add is not defined
}
// ...

// (2) error 객체 살펴보기
// - catch 블록에서는 error 객체를 인자로 받는다.
// 예) ReferenceError: add is not defined
// -> ReferenceError : error.name
// -> add is not defined : error.message

try {
  // ...
} catch (err) {
  console.error(`오류 발생 : ${err}`); // 오류 발생 : ReferenceError: add is not defined
  console.error(`오류 발생 : ${err.name}`); // 오류 발생 : ReferenceError
  console.error(`오류 발생 : ${err.message}`); // 오류 발생 : add is not defined
}

// 4️⃣ throw 문
// - 사용자가 직접 예외를 만들 수도 있다.
// - throw 문은 자바스크립트에서 사용자가 직접 예외를 만들면서 오류 메시지도 지정한다.
// throw 메시지

// 예) JSON 파일에는 많은 자료가 담겨 있는데, 참조하려는 자료가 없으면 오류가 발생한다. (이 경우, 특별히 오류를 표시하지 않는다.)
// 이 경우, 오류 메시지 없이 undefined라고만 표시된다.
let json = '{"grade": 3, "age": 25}';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw "사용자 이름이 없습니다."; // 오류 메시지 만들어서 출력
  }
} catch (err) {
  console.error(err);
}

// throw 문으로 오류 메시지를 만들 때 Error 객체를 사용할 수 있다.
// throw new Error(메시지)

let json = '{"grade" : 3, "age": 25}';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new Error("사용자 이름이 없습니다."); // Error 객체를 사용해서 오류 메시지 만들기
  }
} catch (err) {
  console.error(err);
}

// -> 이렇게 하면 catch 블록에서 받는 Error 객체의 name은 Error가 되고, message는 소괄호 안의 내용이 된다.
// err.name = Error
// err.message = "사용자 이름이 없습니다."
