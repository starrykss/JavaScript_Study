// ✏️ 이벤트(Event)
// - 웹 브라우저나 사용자가 실행하는 어떤 동작

// 이벤트는 웹 페이지를 읽어 오거나 링크를 클릭하는 것처럼 웹 문서 영역에서 이루어지는 동작만을 의미한다.
// JavaScript 이벤트는 주로 마우스나 키보드를 사용할 때, 웹 문서를 불러올 때, 폼에 입력할 때 발생한다.

// 1️⃣ 문서 로딩 이벤트
// (1) abort : 웹 문서가 완전히 로딩되기 전에 불러오기를 멈추었을 때
// (2) error : 문서가 정확히 로딩되지 않았을 때
// (3) load : 문서 로딩이 끝났을 때
// (4) resize : 문서 화면의 크기가 바뀌었을 때
// (5) scroll : 문서 화면이 스크롤되었을 때
// (6) unload : 문서를 벗어날 때

window.onload = alert("안녕하세요"); // 문서를 불러오자 마자 알림창 표시

// 2️⃣ 마우스 이벤트
// (1) click : 요소를 클릭했을 때
// (2) dbclick : 요소를 더블 클릭했을 때
// (3) mousedown : 요소에서 마우스 버튼을 눌렀을 때
// (4) mousemove : 요소에서 마우스 포인터를 움직일 때
// (5) mouseover : 마우스 포인터를 요소 위로 옮길 때
// (6) mouseout : 마우스 포인터가 요소에서 벗어날 때
// (7) mouseup : 요소 위에 올려놓은 마우스 버튼에서 손을 뗄 때
const button = document.querySelector("button");

button.onclick = function () {
  document.body.style.backgroundColor = "green";
};

// 3️⃣ 키보드 이벤트
// (1) keydown : 키를 누루는 동안
// (2) keypress : 키를 눌렀을 때
// (3) keyup : 키에서 손을 뗄 때
const body = document.body;
const result = document.querySelector("#result");

body.addEventListener("keydown", (e) => {
  // 키를 눌렀을 때
  result.innerText = `
        code: ${e.code},
        key: ${e.key}
    `;
});

// 4️⃣ 폼 이벤트
// (1) blur : 폼 요소에 포커스를 잃었을 때
// (2) change : 목록이나 체크 상태 등이 변경됐을 때 (<input>, <select>, <textarea>)
// (3) focus : 폼 요소에 포커스를 놓았을 때 (<label>, <select>, <textarea>, <button>)
// (4) reset : 폼이 리셋되었을 때
// (5) submit : [전송] 버튼을 클릭했을 때
const startMenu = document.querySelector("#major");

function displaySelect() {
  let selectedText = selectMenu.options[selectMenu.seletedIndex].innerText;
  alert(`[${selectedText}]를 선택했습니다.`);
}

selectMenu.onchange = displaySelect;

// 이외의 자세한 내용은 https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Events 이곳을 참고한다.
