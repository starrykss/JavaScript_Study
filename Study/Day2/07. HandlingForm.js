// ✏️ DOM에서 폼 다루기

// 1️⃣ 폼 요소에 접근하고 값 가져오기

// (1) 텍스트 필드에 입력한 값 가져오기 : value
// - 폼 요소 중 텍스트 필드나 이메일 필드에 사용자가 입력한 값을 가져올 수 있다.
document.querySelector("#order-name").value;

// (2) name 속성값을 사용해 폼 요소에 접근하기
// - 폼 요소에 id나 class 속성이 없고 name 속성만 있으면 name 식별자를 사용해 폼 요소에 접근할 수 있다.

/* <form name="order">   // *
    <fieldset>
        <legend>상품 정보</legend>
        <ul>
            <li>
                <label class="field" for="product">상품 : </label>
                <input type="text" class="input-box" id="product" name="product">  // * 
            </li>
        </ul>
    </fieldset>
</form> 
*/
document.order.product.value;

// (3) 폼 배열을 사용해 폼 요소에 접근하기
// - 폼 요소에 id나 class 속성뿐만 아니라 name 속성도 없으면 폼 배열을 사용할 수 있다.
{
  /* <form>
  <div id="login_input">
    <input type="text" autofocus placeholder="아이디">
    <input type="password" placeholder="비밀번호">
  </div>
  <div id="login_bttn">
    <button type="submit" class="order">
      로그인
    </button>
  </div>
</form>; */
}

document.forms;
// HTMLCollection [form]
//  > 0: form
//  > [[Prototype]]: HTMLCollection

document.forms[0].elements; // HTMLFormControlsCollection(3) [input, input, button.order]

document.forms[0].elements[0]; // <input type="text" autofocus="" placeholder="아이디">

// 2️⃣ 선택 목록과 항목에 접근하기
// - <select> 태그를 사용한 목록을 선택 목록이라고 한다.

// (1) 선택 목록에 접근하기
/* 
<label class="reg" for="class">학과</label>
<select name="major" id="major">
    <option>--- 학과 선택 ---</option>
    <option>컴퓨터공학과</option>
    <option>독어독문학과</option>
    <option>경영학과</option>
    <option>회계학과</option>
</select> 
*/

document.querySelector("#major"); // 선택 목록에 접근하기

document.querySelector("#major").options; // 옵션 항목에 접근하기

// (2) 알림 창에 선택한 항목 표시하기
const selectMenu = document.querySelector("#major");

function displaySelect() {
  let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText; // selectedIndex 값으로 선택 매뉴에서 몇 번째 항목을 선택했는지 확인할 수 있다.
  alert(`[${selectedText}]를 선택했습니다.`);
}
selectMenu.onchange = displaySelect;

// 3️⃣ 라디오 버튼과 체크 박스에 접근하기

/* 
<form name="testForm">
    <fieldset>
        <legend>신청 과목</legend>
        <label><input type="radio" name="subject" value="speaking">회화</label>
        <label><input type="radio" name="subject" value="grammar">문법</label>
    </fieldset>
    <fieldset>
        <legend>메일링 주제</legend>
        <label><input type="checkbox" name="mailing" value="news">뉴스</label>
        <label><input type="checkbox" name="mailing" value="dialog">5분 회화</label>
    </fieldset>
</form> 
*/

// (1) 라디오 버튼에 접근하기
document.testForm.subject; // '문법'을 선택하면 'grammar'가 value에 포함된다.

// (2) 체크 박스에 접근하기
document.testForm.mailing;

document.testForm.mailing[0].value; // '뉴스'를 선택할 경우 'news'가 출력된다.

// (3) checked 속성을 사용해 선택한 항목에 접근하기
document.querySelector("input[name='subject']:checked"); // 선택된 라디오 버튼 항목만 접근하기
document.querySelectorAll("input[name='mailing']:checked"); // 선택된 체크 박스 항목만 접근하기 (노드 리스트 형태로 저장)
