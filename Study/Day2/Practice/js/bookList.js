// 책 목록에 추가
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

save.addEventListener("click", (e) => {
  e.preventDefault();

  const item = document.createElement("li");
  item.innerHTML = `
    ${title.value} - ${author.value} 
    <span class="delButton">삭제</span>
  `;
  bookList.appendChild(item);

  title.value = "";
  author.value = "";

  // 목록에서 제거
  const delButtons = document.querySelectorAll(".delButton"); // '삭제' 버튼 모두 가져오기

  for (let delButton of delButtons) {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
      // 아래와 같이 변수를 사용할 수도 있다.
      // let list = this.parentNode;
      // list.parentNode.removeChild(list);
    });
  }
});
