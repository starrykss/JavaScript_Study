// ✏️ 이벤트 전파(Event Propagation)
// - 웹 요소에서 이벤트가 발생했을 때 해당 요소뿐만 아니라 해당 요소를 감싸고 있는 부모 요소, 그리고 그 요소의 부모 요소에서도 똑같이 이벤트가 처리되는 것
// - 크게 버블링(Bubbling)과 캡처링(Capturing) 형태가 있다.

// 1️⃣ 이벤트 버블링(Event Bubbling)
// - 특정 요소에서 이벤트가 발생했을 때, 그 이벤트가 해당 요소 뿐만 아니라 그 요소의 부모 요소, 부모 요소의 부모 요소에도 똑같이 발생한 것으로 간주하는 것
// - 모던 웹 브라우저에서 대부분의 이벤트는 버블링 된다.

<html>
  <head>...</head>
  <body>
    BODY
    <div onclick="console.log('div')">
      DIV
      <section onclick="console.log('section')">
        SECTION
        <p onclick="console.log('p')">P</p>
      </section>
    </div>
  </body>
</html>

// 위에서 P 요소를 클릭하면 p, section div가 출력되고,
// section 요소를 클릭하면 section, div가 출력되며,
// div 요소를 클릭하면 div가 출력된다.

// (1) event.target과 event.currentTarget
// - 이벤트가 발생하면 해당 이벤트와 관련된 정보는 event 객체에 담겨진다.
// - event 객체의 프로퍼티 중에서 이벤트 전파와 관련이 있는 것은 target 프로퍼티와 currentTarget 프로퍼티이다.
// - event.target은 처음 이벤트가 발생한 대상을, event.currentTarget은 이벤트가 전파되면서 햔재 이벤트 처리기가 실행되는 대상을 가리킨다.

<html>
  <head>...</head>
  <body>
    BODY
    <div>
      DIV
      <section>
        SECTION
        <p>P</p>
      </section>
    </div>
  </body>
</html>

const elements = document.querySelectorAll("*"); // 모든 요소를 가져와서 저장

for (let element of elements) {
  // 모든 요소를 순회하면서 click 이벤트가 발생하면 event.target인 태그 이름과 event.currentTarget인 태그 이름을 출력
  element.addEventListener("click", (e) => {
    console.log(
      `event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`
    );
  });
}

// P를 클릭하면 아래와 같이 출력된다. (P부터 HTML까지 차례대로 버블링)
// event.target : P, event.currentTarget : P
// event.target : P, event.currentTarget : SECTION
// event.target : P, event.currentTarget : DIV
// event.target : P, event.currentTarget : BODY
// event.target : P, event.currentTarget : HTML


// 2️⃣ 이벤트 캡쳐링(Event Capturing)
// - 웹 요소에서 이벤트가 발생하면 일단 최상위 요소에서 시작해서 이벤트가 발생한 요소까지 차례대로 이벤트가 전파되는 방식
// - 이벤트 리스너에서 세 번째 옵션은 기본적으로 false를 사용하므로, 이벤트 캡처링을 사용하려면 이 옵션을 true로 지정해야 한다.

<html>
  <head>...</head>
  <body>
    BODY
    <div>
      DIV
      <section>
        SECTION
        <p>P</p>
      </section>
    </div>
  </body>
</html>

const elements = document.querySelectorAll("*"); // 모든 요소를 가져와서 저장

for (let element of elements) {
  // 모든 요소를 순회하면서 click 이벤트가 발생하면 event.target인 태그 이름과 event.currentTarget인 태그 이름을 출력
  element.addEventListener("click", (e) => {
    console.log(
      `event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`
    );
  }, true);     // true : 이벤트 캡처링 지정 
}

// P를 클릭하면 아래와 같이 출력된다. (HTML부터 P까지 차례대로 캡처링)
// event.target : P, event.currentTarget : HTML
// event.target : P, event.currentTarget : BODY
// event.target : P, event.currentTarget : DIV
// event.target : P, event.currentTarget : SECTION
// event.target : P, event.currentTarget : P