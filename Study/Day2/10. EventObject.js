// ✏️ 이벤트 객체(Event Object)
// - DOM에서 웹 문서에 발생하는 이벤트 정보를 저장하는 객체
// - 이벤트 객체에는 어떤 요소에서 이벤트가 발생했는지, 어떤 종류의 이벤트가 발생했는지 등의 정보가 포함된다.

// 웹 문서에서 이벤트가 발생하면 자동으로 이벤트와 관련된 객체가 만들어진다.
// event 객체에는 이벤트 이름이나 발생 위치, 발생한 시간 등 이벤트와 관련된 다양한 정보가 포함되어 있다.
// JavaScript에서 이벤트를 처리할 때는 event 객체를 자주 사용한다.
// event 객체에 담긴 정보(프로퍼티)로는 altKey, button, charCode, clientX, clientY, pageX, pageY, screenX, screenY, target, timeStamp, type, which 등이 있다.
// event 객체에서 사용할 수 있는 메서드는 preventDefault(기본 동작 취소)가 있다.
// https://developer.mozilla.org/ko/docs/Web/API/Event

// (1) 마우스 이벤트에서 클릭 위치 알아내기
const box = document.querySelector("#box");

box.addEventListener("click", (e) => {
  // e : 이벤트 객체
  alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
});

// (2) 키보드 이벤트에서 키값 알아내기
// - 예전에는 event.keyCode를 사용했지만, 지금은 폐기되어 event.code로 바뀌었다.
const body = document.body;
const result = document.querySelector("#result");

body.addEventListener("keydown", (e) => {
  // 키를 눌렀을 때
  result.innerText = `
        code: ${e.code},
        key: ${e.key}
    `;
});
