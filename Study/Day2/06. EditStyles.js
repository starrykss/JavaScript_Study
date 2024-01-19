// ✏️ 스타일 수정하기

// 1️⃣ CSS 속성에 접근하고 수정하기
// - background-color 속성처럼 두 단어 이상으로 이루어진 속성에 접근할 때는 중간에 대시(-) 없이 연결해서 사용 (첫 번째 글자는 소문자, 두 번째 글자는 대문자로 시작)
const title = document.querySelector("#title");

title.onclick = () => {
  title.style.backgroundColor = "black";
  title.style.color = "white";
};

// 2️⃣ classList 프로퍼티
// - classList는 DOM에서 자주 사용하는 프로퍼티
// - 요소에 적용한 클래스 스타일을 모두 모아 놓은 프로퍼티
// - classList를 이용하여 클래스 스타일을 추가 또는 삭제하면서 다양한 효과를 만들 수 있다.

<div id="desc">
  <p class="user clicked">이름 : 자바스크립트</p>
  <p class="user">주소 : Korea</p>
  <p class="user">연락처 : 123-3241</p>
</div>;

document.querySelector("#desc p").classList; // 첫 번째 p 태그에 적용된 클래스 스타일 확인
// DOMTokenList(2) ['user', 'clicked', value: 'user clicked']
// 0: "user"
// 1: "clicked"
// length: 2
// value: "user clicked"
// [[Prototype]]: DOMTokenList

// (1) 클래스 스타일 추가하고 삭제하기 : add(), remove()
<style>
    h1 { font-size: 2rem; margin-bottom: 20px; }
    .clicked { background-color: yellow; color: blue; }
</style>

const title = document.querySelector("#title");

title.onclick = () => {
  title.classList.add("clicked"); // .clicked 클래스 스타일 추가
  title.classList.remove("clicked"); // .clicked 클래스 스타일 삭제
};

// (2) 특정 클래스 스타일이 있는 요소 찾기 : contains()
const title = document.querySelector("#title");

title.onclick = () => {
  if (!title.classList.contains("clicked")) {   // 스타일이 없을 경우
    title.classList.add("clicked");   // 스타일 추가
  }
  else {   // 스타일이 있을 경우
    title.classList.remove("clicked");    // 스타일 제거
  }
};

// (3) 클래스 스타일 토글하기 : toggle()
const title = document.querySelector("#title");

title.onclick = () => {
  title.classList.toggle("clicked");    // 클릭할 때마다 추가/삭제 반복
};

// (참고) 다크 모드
<style>
    .dark {
        background-color: #222;
        color: #eee;
    }
</style>

const bttn = document.querySelector("button");

bttn.onclick = () => {
  document.body.classList.toggle("dark");    // 클릭할 때마다 .dark 스타일 토글
};
