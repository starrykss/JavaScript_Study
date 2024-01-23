// ✏️ fetch API
// - 서버에 있는 JSON 파일을 가져올 때 XMLHttpRequest 객체를 사용한다.
// - XMLHttpRequest를 통해 자료를 주고 받는 방법은 자바스크립트 초기 버전부터 지금까지 사용하고 있다.
// - 모던 자바스크립트에서 XMLHttpRequest를 대신할 fetch API가 등장하였다.

// 1️⃣ 프로미스를 반환하는 fetch
// - fetch는 AJAX처럼 서버로 요청을 보내거나 자료를 받아오는 방법이지만, 프로미스를 반환한다는 게 가장 중요한 차이점이다. ⚠️
// fetch(위치, 옵션)
// -> 위치 : 자료가 있는 URL이나 파일 이름
// -> GET/POST와 같은 요청 방식(Method) (기본값 : GET, 매개변수가 필요한 경우 매개변수를 넣을 수 있다.)

// fetch.html을 편집기로 열고 Live Server를 실행한 후 콘솔창에 아래의 명령을 실행한다.
fetch("student1.json"); // Promise {<pending>}  (프로미스 반환)

fetch("student1.json").then(console.log); // (Response 객체 반환)
// ▼ Response {type: 'basic', url: 'http://127.0.0.1:3000/Study/Day6/Practice/student1.json', redirected: false, json: ƒ, text: ƒ, …}
// json: ƒ ()
// text: ƒ ()
// body: (...)
// bodyUsed: false
// headers: Headers {}
// ok: true ✅
// redirected: false
// status: 200 ✅
// statusText: "OK"
// type: "basic"
// url: "http://127.0.0.1:3000/Study/Day6/Practice/student1.json"

// -> Response 객체에는 지정한 파일을 가져오는 데 성공했을 때 반환되는 값이 들어 있다.
// -> 자료를 성공적으로 가져왔는지 여부를 확인하려면 status 값이 200인지 또는 ok값이 true인지 체크한다.

// 2️⃣ fetch로 파일 가져오기
// - 예1) XMLHttpRequest로 JSON 자료 가져오기
let xhr = new XMLHttpRequest();

xhr.open("GET", "student2.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let students = JSON.parse(xhr.responseText);

    renderHTML(students);
  }
};

function renderHTML(contents) {
  let output = "";

  for (let content of contents) {
    output += `
      <h2>${content.name}</h2>
      <ul>
        <li>전공 : ${content.major}</li>
        <li>학년 : ${content.grade}</li>
      </ul>
      <hr>
    `;
  }
  document.getElementById("result").innerHTML = output;
}

// 예2) fetch로 JSON 자료 가져오기
// - fetch를 사용할 경우 따로 if 문을 쓰지 않아도 된다.
// (then() 함수를 연결하면서 이미 자료를 성공적으로 가져왔다는 전제가 생겼기 떄문이다.)
fetch("student2.json") // 1) json 파일을 읽어온다.
  .then((response) => response.json()) // 2) json 파일을 객체로 변환한다.
  .then((json) => {
    // 3) 객체를 출력한다.
    let output = "";

    json.forEach((student) => {
      output += `
      <h2>${student.name}</h2>
      <ul>
        <li>전공 : ${student.major}</li>
        <li>학년 : ${student.grade}</li>
      </ul>
      <hr>
    `;
    });
    document.querySelector("#result").innerHTML = output;
  })
  .catch((error) => console.log(error)); // 4) 에러가 발생하면 에러를 출력한다.
