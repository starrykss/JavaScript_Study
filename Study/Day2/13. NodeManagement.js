// ✏️ 노드 관리하기

// 1️⃣ 내용이 있는 텍스트 노드 추가하기
// (1) 요소 노드 만들기 : createElement()
let newP = document.createElement("p"); // 추가할 요소 만들기

// (2) 텍스트 노드 만들기 : createTextNode()
let textNode = document.createTextNode("TypeScript");

// (3) 자식 노드 연결하기 : appendChild()
newP.appendChild(textNode); // 텍스트 노드를 P 요소에 연결 (기존의 자식 노드가 있을 경우, 자식 노드 중 맨 끝에 추가)
document.body.appendChild(newP); // p 요소 노드를 body 노드의 자식 노드로 추가

// 2️⃣ 속성값이 있는 노드 추가하기
// (1) 요소 노드 만들기 : createElement()
let newImg = document.createElement("img");

// (2) 속성 노드 만들기 : createAttribute()
let srcNode = document.createAttribute("src"); // src 속성 추가
srcNode.value = "images/wall.jpg";

// (3) 속성 노드 연결하기 : setAttributeNode()
newImg.setAttribute(srcNode);

// (4) 자식 노드 연결하기 : appendChild()
document.body.appendChild(newImg);

// 3️⃣ 기존 노드의 앞에 새 노드 추가하기 : insertBefore()
// - 기본적으로 새로운 노드를 추가할 경우, 부모 노드의 맨 마지막 위치에 새로운 노드가 추가된다.
// - 하지만 insertBefore()를 이용하면 특정 노드의 앞에 새로운 노드를 추가할 수있다.
let tsNode = document.createElement("p");
let tsTextNode = document.createTextNode("TypeScript");
tsNode.appendChild(tsTextNode);

let basisNode = document.querySelectorAll("p")[0]; // 첫 번째 p 요소를 기준 노드로 지정
document.body.insertBefore(tsNode, basisNode); // 기준 노드의 앞에 tsNode 추가

// 4️⃣ 노드 삭제하기
// (1) remove() 사용하기
heading = document.querySelector("h1");
heading.remove();

// (2) removeChild() 사용하기
// - remove()는 노드 자체를 삭제한다.
// - removeChild()는 현재 요소 보다 하위 요소(자식 노드)를 삭제한다.
// - 이 메서드를 사용하려면 먼저 부모 노드를 찾아야 하고, 그 후에 자식 노드를 삭제해야 한다.
document.querySelector("h1").parentNode; // 부모 노드 찾기 (<body>...</body>)

// 예) 여러 항목 중 클릭한 항목 삭제하기
const items = document.querySelectorAll("li");

for (let item of items) {
  item.addEventListener("click", function () {
    this.parentNode.removeChild(this); // 부모 노드에서 삭제
  });
}

// (참고) this를 사용할 때 주의할 점 ⭐
// 이벤트 리스너에서 function() { ... }에 this를 사용하면 this는 이벤트가 발생한 노드를 가리킨다.
// (첫 번째 항목을 클릭하면 this는 첫 번째 항목이 된다.)
item.addEventListener("click", function () {
  this.parentNode.removeChild(this); // 부모 노드에서 삭제
});

// 하지만 위의 함수를 화살표 함수로 작성할 경우, this는 다르게 동작한다. 🟥
// 화살표 함수에서 사용한 this는 window 객체를 가리킨다.
// window 객체는 DOM의 최상위 객체이므로 클릭한 대상을 this라는 예약어로 사용하려면 화살표 함수가 아닌 '익명 함수' 형식으로 지정해야 한다. ⚠️
for (let item of items) {
  item.addEventListener("click", () => {
    this.parentNode.removeChild(this); // 오류 발생
  });
}
