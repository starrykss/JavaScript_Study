// ✏️ 프로미스(Promise)
// - 콜백 안에 계속 콜백이 포함될 경우 콜백 지옥을 만나게 된다.
// - 프로미스는 이러한 콜백 지옥을 만들지 않기 위해 ECMAScript2015(ES6)에서 도입한 방법이다.

// 1️⃣ Promise 객체 만들기
// - 프로미스는 처리에 성공했을 때 실행할 콜백 함수와 성공하지 않았을 때 실행할 콜백 함수를 미리 '약속'하는 것이다.
// - 프로미스를 사용하려면 먼저 Promise 객체를 만들어야 한다.
// -> 성공했을 때 실행할 resolve() 콜백 함수와, 실패했을 때 실행할 reject() 콜백 함수를 매개변수로 사용한다.
// new Promise(resolve, reject)

let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다.");
  } else {
    reject("피자를 주문하지 않습니다.");
  }
});

// -> likePizza가 true이면 '피자를 주문합니다'를 resolve 함수에, false이면 '피자를 주문하지 않습니다.'라는 텍스트를 reject 함수에 넘긴다.
// -> 프로미스에서 resolve 함수와 reject 함수 중 하나는 반드시 실행해야 하고, 둘 다 실행할 수도 있다.
// -> Promise 객체는 실행 결과에 따라 resolve 함수나 reject 함수로 연결하는 것일 뿐, 성공하거나 실패했을 때 실행할 명령을 가지고 있지는 않다.
// --> 즉, 위의 코드는 Promise 객체를 만들기만 할 뿐 실제 이 프로미스를 사용하지는 않는데, 이렇게 Promise 객체를 만드는 코드를 '제작 코드(Producing Code)'라고 한다.

// 2️⃣ Promise 객체 사용하기
// - Promise 객체를 사용하는 코드를 '소비 코드(Consuming Code)'라고 한다.
// -> 즉, 프로미스는 '객체를 생성하는 부분'과 '프로미스를 사용하는 부분'으로 나뉜다.

// - 프로미스를 실행할 때는 then() 메서드와 catch() 메서드, finally() 메서드를 사용한다.
// -> then() 메서드는 프로미스에서 '성공'했다는 결과를 보냈을 때 실행할 함수나 명령을 연결한다.
// -> catch() 메서드는 프로미스에서 '실패'했다는 결과를 보냈을 때 실행할 함수나 명령을 연결한다.

// (1) then() : 프로미스에서 성공 결과를 보냈을 때 실행
// - .then().catch(); 가 하나의 문(Statement)이다.
let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다."); // v
  } else {
    reject("피자를 주문하지 않습니다.");
  }
});

pizza
  .then((result) => console.log(result)) // v, 프로미스에서 성공 결과를 보냈을 떄 처리 (세미콜론을 붙이지 않는다.)
  .catch((err) => console.log(err)); // 프로미스에서 실패 결과를 보냈을 때 처리

// (참고) result와 err의 이름은 임의로 지정해도 된다.⚠️

// (2) catch() : 프로미스에서 실패 결과를 보냈을 때 실행
let likePizza = false;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다.");
  } else {
    reject("피자를 주문하지 않습니다."); // v
  }
});

pizza
  .then((result) => console.log(result)) // 프로미스에서 성공 결과를 보냈을 떄 처리
  .catch((err) => console.log(err)); // v, 프로미스에서 실패 결과를 보냈을 때 처리

// (3) finally() : 성공과 실패에 상관 없이 실행
// - 프로미스에서 성공을 넘기든, 실패를 넘기든 상관 없이 마지막에 실행하려고 할 때 사용
// - .then().catch().finally()가 하나의 문(Statement)이다.
let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다."); // v
  } else {
    reject("피자를 주문하지 않습니다.");
  }
});

pizza
  .then((result) => console.log(result)) // v, 프로미스에서 성공 결과를 보냈을 떄 처리
  .catch((err) => console.log(err)) // 프로미스에서 실패 결과를 보냈을 때 처리
  .finally(() => console.log("완료")); // v, 프로미스에서 성공/실패 결과를 보냈을 때와 상관 없이 처리

// 3️⃣ 프로미스의 상태
// - 프로미스는 resolve() 함수나 reject() 함수를 매개변수로 받아서 실행하는 객체이다.
// - 프로미스 객체는 자신의 상태를 저장했다가 resolve() 함수나 reject() 함수를 실행하면 상태를 바꾼다.
// - 그리고 다음의 3단계 상태로 진행된다.
/*
    1. pending : 처음 프로미스를 만들면 대기 상태(pending)가 된다.
    2. fulfilled : 처리에 성공하면 이행 상태(fulfilled)가 된다.
    3. rejected : 처리에 실패하면 거부 상태(rejected)가 된다.
 */

// - 프로미스는 fulfilled 상태인지, rejected 상태인지에 따라 '피자를 주문합니다.' 또는 '피자를 주문하지 않습니다.'라는 결과값을 이해하기 쉽게 result나 err 같은 변수 이름으로 받아서 사용한다.
// - 프로미스 자체에 2가지 결과값이 있는 것이 아니므로 혼동하지 않도록 주의한다. ⚠️

// 3️⃣ 콜백 함수로 여러 단계 연결하기
// - 프로그램은 몇 가지 함수를 계속 연결해서 사용하는 경우가 많다.
// - 여러 단계를 연결할 때 콜백 함수나 프로미스를 사용할 수 있다.
const step1 = (callback) => {
  setTimeout(() => {
    console.log("피자 도우 준비");
    callback();
  }, 2000);
};

const step2 = (callback) => {
  setTimeout(() => {
    console.log("토핑 완료");
    callback();
  }, 1000);
};

const step3 = (callback) => {
  setTimeout(() => {
    console.log("굽기 완료");
    callback();
  }, 2000);
};

console.log("피자를 주문합니다.");
step1(function () {
  step2(function () {
    step3(function () {
      console.log("피자가 준비되었습니다.");
    });
  });
});

// -> 위의 코드에서 실제로 실행되는 부분은 console.log() 이후의 코드이다.
// -> 먼저 '피자를 주문합니다.'가 표시된 후, 2초 후에 step1() 함수가 끝나면 1초 후에 step2() 함수가 실행된다.
// -> 그리고 다시 2초 후에 step3() 함수가 실행된 후 마지막에는 '피자가 준비되었습니다.'가 표시된다.

// 4️⃣ 프로미스 체이닝(Promise Chaining)
// - 비동기 작업을 순차적으로 처리해야할 때 콜백 함수를 사용하면 간단하지만, 잘못 사용할 경우 콜백 지옥에 빠질 수 있다.
// - 프로미스는 resolve와 reject을 사용해서 성공과 실패에 대한 동작을 명확하게 구별할 수 있고, 함수에 계속해서 함수를 포함시키지 않으므로 콜백 지옥을 벗어날 수 있는 좋은 방법이다.
// 예) A, B, C 작업은 각각 비동기 작업이어서 실행 시간이 다를 때, A 작업이 끝날 때까지 기다렸다가 B 작업을 하고, 다시 B 작업이 끝날 때까지 기다렸다가 C 작업을 해야 한다면, 프로미스를 반환해서 작업을 순차적으로 처리할 수 있다.
// -> A 작업이 끝난 후 B 작업을 하려면, A 프로미스를 만든 후 B 프로미스로 넘겨주면 된다. 그리고 B 프로미스를 다시 C 프로미스에게 넘겨준다.)
// -> 다음과 같이 .then()으로 계속 연결해서 사용하면 된다.
A.then(B).then(C);

// - 이렇게 then() 메서드를 사용해서 여러 개의 프로미스를 연결하는 것을 '프로미스 체이닝(Promise Chaining)'이라고 한다.
// - 프로미스 체이닝이 가능한 이유는 프로미스에서 then() 메서드를 실행하면 프로미스가 반환되기 때문이다.
// (반환되는 값이 프로미스이므로 여기에 then() 메서드나 catch() 메서드를 연결할 수 있다.)

// 예1)
const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve("피자를 주문합니다.");
  });
};

const step1 = (message) => {
  console.log(message);
};

pizza().then((result) => step1(result)); // 프로미스 체이닝

// 예2)
const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve("피자를 주문합니다.");
  });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 3000);
  });
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑 완료");
    }, 1000);
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("굽기 완료");
    }, 2000);
  });
};

pizza()
  .then((result) => step1(result)) // pizza()가 성공하면 step1() 실행
  .then((result) => step2(result)) // step1()이 성공하면 step2() 실행
  .then((result) => step3(result)) // step2()이 성공하면 step3() 실행
  .then((result) => console.log(result)) // step3()이 성공하면 "굽기 완료" 표시
  .then(() => {
    console.log("피자가 준비되었습니다. 🍕");
  });

// 5️⃣ 프로미스 소비 코드 줄여서 작성하기
// - 첫 번째 then() 함수를 살펴보면 이전 프로미스의 result 값을 받아서 step1() 함수의 인자로 넘겨주고 있다.
pizza().then((result) => step1(result));

// - 자바스크립트에서는 이 코드를 좀 더 간단하게 작성할 수 있다.
pizza().then(step1);

// - 위의 소비 코드를 아래와 같이 축약해서 표현할 수 있다.
pizza()
  .then(step1) // pizza()가 성공하면 step1() 실행
  .then(step2) // step1()이 성공하면 step2() 실행
  .then(step3) // step2()이 성공하면 step3() 실행
  .then(console.log) // step3()이 성공하면 "굽기 완료" 표시
  .then(() => {
    console.log("피자가 준비되었습니다. 🍕");
  });
