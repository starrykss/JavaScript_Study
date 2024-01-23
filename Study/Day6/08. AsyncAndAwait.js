// ✏️ async 함수와 await 예약어
// - 프로미스는 콜백 지옥이 생기지 않도록 코드를 쉽게 바꾼 것이다.
// - 하지만 프로미스 체이닝은 프로미스를 계속 연결해서 사용하므로 콜백 지옥처럼 코드가 복잡해질 수도 있다.
// - 이 문제를 줄이기 위해 ECMAScript2017(ES8)부터 async 함수와 await 예약어가 등장했다.

// 1️⃣ async 함수
// - 함수를 선언할 때 async라는 예약어를 사용하면 그 함수 안에 있는 명령을 비동기적으로 실행할 수 있다.
// async function() { ... }

// 예1) 일반 함수 (hello.js)
function displayHello() {
  console.log("Hello");
}
displayHello();

// -> hello.html 문서를 웹 브라우저 창에 열고 콘솔창을 보면 Hello라고 표시된다.
// -> (hello.js 파일에서 콘솔창에 Hello라고 표시하는 함수를 정의했기 떄문이다.)
// -> 콘솔창에 다음과 같이 입력해도 반환되는 값은 똑같다.
displayHello();

// -> 이 함수를 수정해서 function 앞에 async라는 예약어를 붙이고 콘솔창에서 확인하면 이번에도 Hello가 나타난다.
async function displayHello() {
  console.log("Hello");
}
displayHello();

// -> 콘솔창에 다음의 코드를 입력하면 displayHello() 함수가 프로미스를 반환하는 것을 확인할 수 있다.
displayHello(); // Promise  {<fulfilled>: undefined}

// -> async 예약어를 붙인 비동기 함수가 프로미스를 반환하므로 이 특징을 이용해서 프로미스를 좀 더 간단하게 표현할 수 있다.
// 예2)
function whatsYourFavorite() {
  let fav = "Javascript";
  return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
  return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
}

whatsYourFavorite()
  .then(displaySubject) // .then(response => displaySubject(response))
  .then(console.log); // .then (result => console.log(result));

// Hello, Javascript

// -> 위의 코드의 whatsYourFavorite() 함수는 async 예약어를 사용하면 다음과 같이 변경할 수 있다.
async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello ${subject}`;
}

whatsYourFavorite()
  .then(displaySubject) //
  .then(console.log); //

// 2️⃣ await 예약어
// - 프로미스를 계속 연결하면서 실행할 경우 연달아 then을 사용한다. (프로미스 체이닝이 너무 길어지면 코드를 이해하기 어려워진다.)
// - 이럴 때 await 예약어를 사용하면 이전 프로미스 결과를 받아서 다음 프로미스로 연결해 주는 과정을 좀 더 쉽게 알아볼 수 있다.
// - 모든 프로미스 체이닝을 async와 awit으로 바꿀 필요는 없으니, 프로미스를 연결해서 실행할 때 이런 방법이 있다는 것을 알아두자.
// - await 예약어는 자바스크립트에서 비동기 코드를 실행할 때 유용한데, await은 async 함수에서만 사용할 수 있다.
// - async는 프로미스를 반환할 때도 사용할 수도 있고, await 예약어와 함께 사용해서 비동기 방식을 처리할 수도 있다.
// - 'await'은 '이 함수가 끝날 때까지 기다려!' 라고 표시하는 것이다.
// - await은 async 함수에서만 사용할 수 있으므로, async init() 함수를 따로 만든 후에는 그 안에서 await를 사용해 프로미스의 실행 순서를 지정하면 된다.

// 예1) await 사용하기
async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello ${subject}`;
}

async function init() {
  const response = await whatsYourFavorite(); // whatsYourFavorite() 함수의 실행이 끝날 때까지 기다린 후, 결과값을 response에 저장
  const result = await displaySubject(response); // response 값을 이용해 displaySubject() 함수를 실행하고, 끝나면 결과값을 result에 저장
  console.log(result); // result를 표시
}

init();

// [정리]
// - 자바스크립트 비동기 프로그래밍을 하려면 콜백 함수, 프로미스를 사용할 수 있다.
// - 프로미스를 사용할 때는 async, await을 사용할 수 있다.
// - 어떤것을 선택할지는 만들려고 하는 프로그램에 따라 달라지며, 팀 프로젝트의 경우 팀에서 논의를 거쳐 결정해야 한다.
