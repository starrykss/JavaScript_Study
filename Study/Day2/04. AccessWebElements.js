// ✏️ 웹 요소에 접근하기

// 1️⃣ querySelector() / querySelectorAll()
// - document 객체에 포함되어 있음.

// (1) querySelector() : 하나의 요소만 선택
<div id="container">
    <h1>안녕하세요</h1>
    <div id="profile">
        <img src="./profile.png"/>
    </div>
</div>
document.querySelector("#container"); // id가 container인 1개 요소만 가져오기
document.querySelector("h1");
document.querySelector("#profile img");

// (2) querySelectorAll() : 모든 요소 선택
<p class="user">이름 : 자바스크립트</p>
<p class="user">주소 : Korea</p>
<p class="user">연락처 : 123-3241</p>

document.querySelectorAll(".user");   // 노드 리스트 형태로 저장
document.querySelectorAll(".user")[2];     // 배열처럼 인덱스를 사용해서 접근 가능

// (참고) 요즘은 querySelector() 메서드나 querySelectorAll() 메서드를 많이 사용하지만, 아직 getElement* 메서드도 많이 사용하고 있다.
document.getElementById(id명)
document.getElementsByClassName(class명)
document.getElementsByTagName(태그명)

// 2️⃣ 웹 요소의 내용 가져오기
<div id="desc">
    <p class="user">이름 : 자바스크립트</p>
    <p class="user" style="display: none">주소 : Korea</p>
    <p class="user" style="display: none">연락처 : 123-3241</p>
</div>

// (1) innerText
// - 웹 브라우저 창에 보이는 내용만 가져온다.
// - display: none을 사용해서 감춘 요소의 내용을 가져오지 않는다.
// - 코드에 공백이 여러 개 입력되어 있어도 공백 1칸만 가져온다.
document.querySelector("#desc").innerText     // '이름 : 자바스크립트'

// (2) innerHTML
// - 요소 안에 있는 태그와 내용을 함께 가져와서 보여준다.
// - 소스 코드 그대로 가져온다.
document.querySelector("#desc").innerHTML    // '\n      <p class="user">이름 : 자바스크립트</p>\n      <p class="user" style="display: none">주소 : Korea</p>\n      <p class="user" style="display: none">연락처 : 123-3241</p>\n    '


// (3) textContent
// - 요소의 내용을 가져오되 웹 브라우저 창에 보이는 대로가 아니라 코드에 있는 대로 가져온다.
// - display:none을 사용해서 감춰진 요소들까지 가져온다.
document.querySelector("#desc").textContent    // '\n      이름 : 자바스크립트\n      주소 : Korea\n      연락처 : 123-3241\n    '

// [정리]
// 웹 요소의 내용을 가져올 경우에는 innerText나 textContent 프로퍼티를 사용한다.
// 웹 브라우저 창에 표시되지 않은 내용까지 모두 가져오려면 textContent 프로퍼티를 사용한다.
// 요소 안에 있는 태그까지 함께 가져오려면 innerHTML 프로퍼티를 사용한다.

// 3️⃣ 웹 요소 내용 수정하기
const title = document.querySelector("#title");
const userName = document.querySelector("#desc p");
const pfImage = document.querySelector("#profile img");

title.onclick = () => title.innerText = "프로필";
userName.onclick = () => userName.innerHTML = "이름 : <b>오랑우탄</b>";
pfImage.onclick = () => pfImage.src = "images/pf2.png";