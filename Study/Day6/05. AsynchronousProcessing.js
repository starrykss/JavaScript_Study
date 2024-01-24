// ✏️ 비동기 처리 방식
// - 자바스크립트에서 서버와 통신을 하다 보면 어떤 자료를 요청하고 받는지에 따라, 또는 네트워크 속도에 따라 조금씩 처리 시간이 달라진다.
// - 그리고 시간 차이가 나는 처리 결과를 받아서 순서대로 처리해야 하는데, 이러한 처리 방식을 '비동기 처리 방식'이라고 한다.
// - 자바스크립트 프로그램은 많은 함수들이 모여서 하나의 기능을 만든다.
// - 그런데 이들 함수의 실행 시간이 서로 다르므로 특정 작업이 끝나면 다른 작업을 하고, 그 작업이 끝나면 이어서 또 다른 작업을 하도록 서로 연결해 주어야 한다.
// - 이때 이전 작업이 끝날 때까지 기다렸다가 다음 작업을 하든지, 또는 이전 작업을 시작해 놓고 다음 작업도 동시에 하는지에 따라 동기(Synchronous)와 비동기(Asynchronous)로 나뉜다.

// 1️⃣ 동기 처리 방식과 비동기 처리 방식
// - 기본적으로 자바스크립트 프로그램은 코드가 작성된 순서대로 처리한다. (동기 처리 방식)
// - 동기 처리 방식은 '단일 스레드 방식', '싱글 스레드 방식'이라고 불린다.
// - 동기 처리 방식은 대기줄이 길어지면 처리 시간이 길어진다는 단점이 있다.

// (1) 동기 처리 방식
function displayA() {
  console.log("A");
}
function displayB() {
  console.log("B");
}
function displayC() {
  console.log("C");
}

displayA();
displayB();
displayC();

// 콘솔창에 A -> B -> C 순으로 표시된다.

// (2) 자바스크립트는 싱글 스레드 언어
// - 자바스크립트는 기본적으로 한 번에 하나의 작업만 처리하는 싱글 스레드(Single Thread) 언어이다.
// -> 스레드(Thread) : 프로세스에서 작업을 실행하는 단위
// -> 한 번에 하나의 스레드만 처리하면 '싱글 스레드', 한 번에 여러 개의 스레드를 사용하면 '멀티 스레드'라고 한다.

function displayA() {
  console.log("A");
}
function displayB() {
  setTimeout(() => console.log("B"), 2000); // 2초 뒤에 실행
}
function displayC() {
  console.log("C");
}

displayA();
displayB();
displayC();
// A -> C -> B 순으로 출력된다. (함수의 실행 시간에 따라 오래 걸리는 것은 별도로 처리하고, 실행이 끝났을 때 결과를 반환한다.)
// 자바스크립트는 싱글 스레드를 사용하지만, 시간이 많이 걸리는 작업은 따로 처리해서 싱글 스레드의 단점을 보완한다. ⭐

// (3) 비동기 처리 방식
// - 프로그램에서는 여러 개의 함수를 작성하는데, 실행 시간이 다른 함수들을 원하는 처리 순서에 맞게 프로그래밍하는 것을 '비동기 처리'라고 한다.
// - 서버에서 자료를 가져와서 화면에 표시한다면 서버에서 자료를 가져올 때 아무리 많은 시간이 걸려도 자료를 가져오는 함수 다음에 화면에 표시하는 함수를 실행해야 한다.

function displayA() {
  console.log("A");
}
function displayB(callback) {
  setTimeout(() => {
    console.log("B");
    callback();
  }, 2000); // 2초 뒤 실행
}
function displayC() {
  console.log("C");
}

displayA();
displayB(displayC);

// A -> B -> C (A를 표시하고 잠시 기다렸다가 B와 C를 표시한다.)

// - 자바스크립트에서 비동기 방식으로 처리하면 다음과 같이 크게 3가지 방법을 사용할 수 있다.
/*  비동기 방식         버전                                      기능
    -----------   --------------        -----------------------------------------------------
    콜백 함수      기존 부터 사용         함수 안에 또 다른 함수를 매개변수로 넘겨서 실행 순서 제어
                                        (콜백 함수가 많으면 가독성이 떨어짐.)
    프로미스       ES6부터 도입           Promise 객체와 콜백 함수를 사용해서 실행 순서 제어
    (Promise)
    async, await  ES8(ECMAScript2017)   async 함수와 await 예약어를 사용해서 실행 순서 제어
                  부터 도입
*/

// 2️⃣ 비동기 처리와 콜백 함수
// - 콜백 함수 : 다른 함수의 매개변수로 사용하는 함수
// - 자바스크립트는 오래 전부터 콜백 함수를 사용해서 비동기 처리를 구현해왔다.

// (1) 함수 이름을 콜백으로 사용하기

function order(coffee, callback) {
  // 커피 주문 (3초 기다린 후 표시)
  console.log(`${coffee} 주문 접수`);
  setTimeout(() => {
    callback(coffee);
  }, 3000);
}

function display(result) {
  // 커피 완료 표시
  console.log(`${result} 준비 완료`);
}

order("아메리카노", display);

// 아메리카노 주문 접수
// 아메리카노 준비 완료 (3초 후)

// (2) 익명으로 콜백 함수 작성하기
// - 콜백 함수를 사용할 때 함수 이름도 사용하지만, 함수 안에 직접 익명 함수로 작성하기도 한다.
// 예) A를 표시한 후 1초마다 B -> C -> D -> STOP! 순서로 표시하기
function displayLetter() {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("STOP!");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// - 콜백 함수에 다른 콜백 함수가 계속 들어가면 코드의 가독성이 떨어지고, 오류가 발생했을 때 디버깅하기 어렵다.
// - (이렇게 콜백이 계속 반복되는 상태를 '콜백 지옥(Callback Hell)'이라고 한다.) ⭐
// - 서버에서 자료를 가져와서 처리하는 코드라면 이보다 더 복잡해질 것이다.
// - 이러한 이유로 ES6에 프로미스(Promise)가 등장하였다.
