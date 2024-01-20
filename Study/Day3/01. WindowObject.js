// ✏️ window 객체
// - 내장 객체 중 웹 브라우저 창과 관련된 객체로, 모든 객체의 최상위 객체
// - 내장 객체(Built-in Object) : 사용자가 손쉽게 가져와서 사용할 수 있도록 미리 만들어진 객체
// - HTML5가 웹 표준으로 등장하면서 웹 문서나 웹 브라우저용 객체들은 HTML의 웹 API에 내장 되고, 웹 브라우저와 관련 없이 사용하는 객체들은 자바스크립트(에크마스크립트)에 내장되었다.
// - 웹 브라우저 창에서 웹 문서를 열면 가장 먼저 window라는 객체가 만들어지고, 하위에 웹 브라우저 창의 각 요소에 해당하는 객체들이 만들어진다.
// - window 객체를 비롯해서 하위에 연결된 객체들은 모두 HTML의 웹 API에 만들어져 있는 객체이고, array나 Math 같은 객체는 웹 브라우저 창과 관련이 없으므로 자바스크립트에 포함된 내장 객체이다.
// - 참고 : https://developer.mozilla.org/ko/docs/Web/API/Window

// 1️⃣ window 객체

// (1) window 객체의 프로퍼티
// - 웹 브라우저 창과 관련된 정보를 가지고 있다.
document; // 웹 브라우저에 표시된 웹 문서에 접근 가능
frameElement; // 현재 창이 다른 요소 안에 포함되어 있으면 해당 요소를, 그렇지 않으면 null 반환
innerHeight; // 내용 영역의 높이
innerWidth; // 내용 영역의 너비
localStorage; // 웹 브라우저 창에서 데이터를 저장하는 로컬 스토리지에 접근
location; // window 객체의 위치 / 현재 URL
name; // 웹 브라우저 창의 이름을 가져오거나 수정
outerHeight; // 웹 브라우저 창의 바깥쪽(외부) 높이
outerWidth; // 웹 브라우저 창의 바깥쪽(외부) 너비
pageXOffset; // 스크롤했을 때 수평으로 이동하는 픽셀(px) 수, scrollX와 같다.
pageYOffset; // 스크롤했을 때 수직으로 이동하는 픽셀(px) 수, scrollY와 같다.
parent; // 현재 창이나 서브 프레임의 부모
screenX; // 웹 브라우저 창의 왼쪽 테두리가 모니터의 왼쪽 테두리에서부터 떨어져 있는 거리
screenY; // 웹 브라우저 창의 위쪽 테두리가 모니터의 위쪽 테두리에서부터 떨어져 있는 거리
scrollX; // 스크롤했을 때 수평으로 이동하는 픽셀 수
scrollY; // 스크롤했을 때 수직으로 이동하는 픽셀 수
sessionStorage; // 웹 브라우저 창에서 데이터를 저장하는 세션 스토리지에 접근

// (2) window 객체의 메서드
// - 대화 창이나 웹 브라우저 창을 열 수도 있고, 웹 브라우저 창의 크기/위치를 알아내거나 저장할 수도 있다.
alert(); // 알림창 표시
blur(); // 창에서 포커스 제거
close(); // 현재 창 닫기
confirm(); // [확인] 버튼과 [취소] 버튼이 있는 확인 창 표시
focus(); // 현재 창에 포커스
moveBy(); // 현재 창을 지정한 크기만큼 이동
moveTo(); // 현재 창을 지정한 좌표로 이동
open(); // 새로운 창 열기
postMessage(); // 다른 창으로 메시지 전달
print(); // 현재 문서 인쇄
prompt(); /// 프롬프트 창에 입력한 텍스트 반환
resizeBy(); // 지정한 크기 만큼 현재 창의 크기 조절
resizeTo(); // 창의 크기를 지정한 크기만큼씩 늘리거나 줄이기
scroll(); // 문서에서 특정 위치로 스크롤
scrollBy(); // 지정한 크기만큼씩 스크롤
scrollTo(); // 지정한 위치까지 한 번에 스크롤
setCursor(); // 현재 차으이 커서를 변경
showModalDialog(); // 모달 창 열기
sizeToContent(); // 내용에 맞게 창의 크기 맞추기
stop(); // 웹 문서 가져오는 것 멈추기

// 웹 브라우저의 [개발자 도구]에서 아래의 명령을 실행하면 window 객체의 내부 목록을 볼 수 있다.
// - f가 붙어 있으면 메서드, 안 붙어 있으면 프로퍼티
window;

// 현재 웹 브라우저 창의 너비 확인
window.innerWidth;

// 인쇄 화면 표시
window.print();

// (3) 팝업 창 만들기
// window.open(경로, 창이름, 창옵션)
// - 창이름 : 팝업창에 이름을 지정하면 항상 지정한 창에 팝업 내용을 나타낼 수 있다. (이름을 지정하지 않으면 팝업 창이 계속 새로 나타난다.)
window.open("notice.html", "", "width=600 height=500");

// 화면의 왼쪽 위를 기준으로 왼쪽에서 300px, 위쪽에서 200px 떨어진 위치에 팝업 창이 나타난다.
function openPopup() {
  window.open(
    "notice.html",
    "이벤트 팝업",
    "width=500 height=500 left=300 right=300"
  );
}

const bttn = document.querySelector("button");
bttn.onclick = openPopup;

// (4) 팝업 창 닫기
<button onclick="window.close()">닫기</button>;

// 2️⃣ screen 객체
// - 웹 사이트에 접속하는 사용자의 화면 크기가 모두 다르므로, 사용자 화면의 크기나 정보가 필요할 경우에는 screen 객체를 사용한다.
// - 여기에서 '화면'은 웹 브라우저 창의 크기가 아니라 PC 모니터나 모바일 기기의 화면 자체를 가리킨다.

// (1) screen 객체의 프로퍼티
availHeight; // UI 영역(윈도우의 작업 표시줄, 맥의 독)을 제외한 내용 표시 영역의 높이
availWidth; // UI 영역을 제외한 내용 표시 영역의 너비
colorDept; // 화면에서 픽셀을 렌더링할 때 사용하는 색상 수
height; // UI 영역을 포함한 호면의 높이
orientation; // 화면의 현재 방향
pixelDepth; // 화면에서 픽셀을 렌더링할 때 사용하는 비트 수
width; // UI 영역을 포함한 화면의 너비

// (2) screen 객체의 메서드
lockOrientation(); // 화면 방향 잠금
unlockOrientation(); // 화면 방향 잠금 해제

// 화면의 중앙에 팝업창 표시하기
const bttn = document.querySelector("button");
const popWidth = 600;
const popHeight = 500;

bttn.addEventListener("click", function () {
  let left = (screen.availWidth - popWidth) / 2; // (화면 너비 - 팝업 창 너비) / 2
  let top = (screen.availHeight - popHeight) / 2; // (화면 높이 - 팝업 창 높이) / 2
  window.open(
    "notice.html",
    "이벤트 팝업",
    `width=${popWidth} height=${popHeight} left=${left} top=${top}`
  );
});

// (참고) 최근에는 레이어를 사용해 팝업 창을 만든다.
// - window.open() 메서드를 사용할 경우 웹 브라우저 창의 형태를 그대로 가지고 있어 사이트 디자인과 동떨어질 수 있다는 단점이 있다.
// - 사이트 디자인과 일관성을 유지하기 위해 최근에는 <div>를 사용해서 본문에 팝업 창 형태를 만들어 놓고 필요에 따라 팝업 창 내용을 화면에 표시하거나 감추는 방법을 사용한다.

// 3️⃣ history 객체
// - history 객체에는 웹 브라우저 창에서 <뒤로> 버튼이나 <앞으로> 버튼을 클릭하거나 주소 표시줄에 입력해서 돌아다녔던 사이트 주소가 array 배열에 저장되어 있다.
// - 보안 문제 때문에 웹 브라우저 창에 있는 웹 브라우저 히스토리는 읽기 전용이다.

// (1) history 객체의 프로퍼티
length; // 현재 웹 브라우저 창의 history 목록에 있는 항목의 개수 (방문했던 사이트 개수)

// (2) history 객체의 메서드
back(); // history 목록에서 이전 페이지를 현재 화면에 불러오기
forward(); // history 목록에서 다음 페이지를 현재 화면에 불러오기
go(); // 현재 페이지를 기준으로 상대적인 위치에 있는 페이지를 현재 화면에 불러오기 (예: history.go(1) : 다음 페이지, history.go(-1) : 이전 페이지)

// 4️⃣ location 객체
// - 웹 브라우저 창의 주소 표시줄과 관련이 있다.
// - 현재 문서의 URL 주소에 대한 정보를 가지고 있으며, 이 정보를 편집하면 현재 웹 브라우저 창에 열릴 사이트나 문서를 지정할 수 있다.

// (1) location 객체의 프로퍼티
hash; // URL 중 # 기호로 시작하는 해시 부분의 정보
host; // URL의 호스트 이름과 포트 번호
hostname; // URL의 호스트 이름
href; // 전체 URL (이 값을 변경하면 해당 주소로 이동 가능)
password; // 도메인 이름 앞에 'username'과 'password'와 함께 입력해서 접속하는 URL일 경우 password 정보가 저장됨.
pathname; // URL 경로
port; // URL의 포트 번호
protocol; // URL의 프로토콜
search; // URL 중 ?로 시작하는 검색 내용
username; // 도메인 이름 앞에 'username'을 함께 입력해서 접속하는 사이트 URL의 경우 username 정보가 저장됨.

// (2) location 객체의 메서드
assign(); // 현재 문서에 새 문서 주소를 할당해서 새 문서 가져오기
reload(); // 현재 문서를 다시 불러오기
replace(); // 현재 문서의 URL을 지우고 다른 URL의 문서로 교체
toString(); // 현재 문서의 URL을 문자열로 반환

// 다음과 같이 웹 사이트에서 뒤로 이동을 금지시킬 수 있다.
<body>
  <button onclick="location.replace('https://www.example.com')">
    example 사이트로 이동하기
  </button>
</body>;
