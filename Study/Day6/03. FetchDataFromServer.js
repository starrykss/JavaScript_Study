// ✏️ 서버에서 자료 가져오기
// ES6 이전까지는 기본적으로 XMLHttp Request를 사용해 서버에 있는 자료를 가져와서 사용했고, ES6 이후에는 fetch API를 사용하고 있다.

// 1️⃣ AJAX(Asynchronous JavaScript And XML)
// - 서버와의 비동기 통신을 위한 방법
// -> '비동기(Asynchronous)' : 동시에 일어나지 않는다.
// - 웹 문서 전체를 다시 불러오지 않고 일부만 가져와서 실행하는 방법
// -> 서버에 한꺼번에 자료를 요청하고 수신이 완료될 때까지 기다리는 것이 아니라, 자료를 나누어 요청하고 요청한 자료가 도착하는 동안 다른 작업을 하는 것
// - 페이지 전체를 다시 가져오지 않고도 사용자의 이벤트에 따라 언제든지 웹 페이지의 일부만 최신 내용으로 표시할 수 있는 비동기 기법
// - 비동기 통신을 위해 서버와 클라이언트 사이에 주고받는 통신 기법이 XMLHttpRequest이다.

// 2️⃣ XMLHttpRequest 객체 만들기
// - 웹 브라우저 창에서 서버로 데이터를 요청하고 서버에서 자료를 받아올 때는 HTTP 통신이 가능한 XMLHttpRequest 객체를 사용한다.
// - XMLHttpRequest 객체의 프로퍼티와 메서드를 사용해서 자료를 주고 받거나 상태를 체크할 수 있다. (비동기 통신이 가능하므로 웹 페이지 전체가 아니라 필요한 부분만 가져올 수 있다.)
// - XML이라고 되어 있지만, XML뿐만 아니라 JSON을 비롯해 여러 종류의 자료를 요청하고 받아올 수 있다.
//
//               XMLHttpRequest 객체
//             ------(자료 요청)-------->
//   클라이언토                           서버
//             <-----(자료 전송)--------
//
// (참고) XML은 HTML4의 한계를 극복하기 위해 W3C에서 개발한 표준 형식이다. (HTML과 비슷하게 생겼지만, 구조화가 잘 되어 있어 다양한 자료를 담을 수 있다.)

// - XMLHttpRequest(XHR) 객체를 사용하려면 가장 먼저 new 예약어를 사용해서 객체의 인스턴스를 만들어야 한다.
// new XMLHttpRequest()

let xhr = new XMLHttpRequest();

// 3️⃣ 서버로 요청하기
// (1) open()
// - 서버로 자료를 요청하기 위해 XHttpRequest를 만들었으면 open() 메서드를 사용해서 어떤 방식을 사용할지, 어떤 자료가 필요한지 그리고 비동기 처리 여부를 지정한다. (요청 초기화(Request Initialize))
// open(방식, 자료위치, 비동기여부)
// -> 방식 : HTTP 요청 방식 (GET, POST, PUT 중 하나, 반드시 대문자로 표시)
// -> 자료위치 : 요청할 서버의 URL
// -> 비동기여부 : 비동기 요청인지 동기 요청인지 판단하는 항목 (true : 비동기(기본값), false : 동기)

// (2) send()
// - 사용자 요청을 서버로 보낸다.
// send(내용)
// -> open() 메서드에서 처리 방식을 POST로 지정할 경우 -> 서버로 넘길 내용
// -> open() 메서드에서 처리 방식을 GET으로 지정할 경우 -> null 또는 빈값

xhr.open("GET", "test.txt", true);
xhr.send();

// open()과 send()는 AJAX에서 가장 많이 사용하는 메서드이다.
// 이외에도 HTTP 헤더와 관련된 다양한 메서드가 있다.
// - setReuqestHeader(header, value) : HTTP 요청을 보내기 전, HTTP의 header 값을 특정 값으로 설정할 때 사용 (반드시 open() 메서드 다음에 사용)
// - getResponseHeader() : 서버 응답 중에서 HTTP 헤더를 알아내고 싶을 때 사용
// - getAllResponseHeaders() : HTTP 요청에 대한 모든 응답 헤더 반환 (Content-length, Date, URI 등을 포함하는 헤더 정보의 키와 값을 쌍으로 반환)

// 4️⃣ JSON 파일 요청하기
// - JSON 자료는 기본적으로 서버에 저장되어 있어서 클라이언트 요청에 따라 주고 받게 된다.
// - 여기에서는 사용자 컴퓨터를 서버라고 가정한다.

// 1. student.html 파일을 편집기로 연 후, Live Server를 켠다.
// <student.json 파일의 내용>
{
    "name": "김자바",
    "major": "컴퓨터공학",
    "grade": 2
}

// 2. Live Server가 실행되고 있는 웹 페이지의 콘솔에서 다음의 코드를 실행한다.
let xhr = new XMLHttpRequest();

xhr.open("GET", "student.json");
xhr.send();

// 3. 아래의 코드를 실행하여 자료를 가져왔는지 확인한다.
xhr;   // XMLHttpRequest {requestMethod: 'GET', __METHOD__: 'GET', __URL__: 'student.json', readyState: 4, onreadystatechange: ƒ, …}

// (1) readyState 프로퍼티
// - XMLHttpRequest 객체의 현재 상태를 나타낸다.
// - 객체에서 서버로 자료를 요청했는지, 자료가 도착했는지, 사용할 준비가 되었는지 등을 알려준다.
// -> 0 : 아직 아무 요청을 하지 않음.
// -> 1 : 서버로 자료를 요청하고 성공한 상태
// -> 2 : 서버 요청에 대한 응답 (헤더가 도착한 상태)
// -> 3 : 서버에서 자료가 로딩 중인 상태
// -> 4 : 자료 처리가 끝나 프로그램에서 사용할 수 있는 상태

// (2) state 프로퍼티와 statusText 프로퍼티
// - status 프로퍼티는 HTTP 상태 코드를 나타낸다.
// - statusText 프로퍼티는 상태에 대한 설명 메시지를 알려준다.

// (3) readystatechange 이벤트
// - readyState 값이 바뀔 때마다 발생하므로 이 이벤트를 사용하여서 상태에 따라 필요한 명령을 처리할 수 있다.
// - 예) 요청이 성공적으로 끝났을 때(readyState 값이 4일 때) 실행할 명령을 다음과 같이 작성할 수 있다.
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {    // 요청이 성공했다면
        // 필요한 명령
    }
}

// - 만약 서버에 없는 파일을 요청해도 일단 요청은 성공했으므로 readyState 값은 4이다.
// - (그래서 readyState 값만 확인하면 안 된다.)
// - readyState 값이 4이면서 state 프로퍼티 값이 200일 경우에만 서버에서 제대로 자료를 가져온 상태이다.
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.state == 200) {  // 자료가 있고 가져오는 데 성공했다면
        // 필요한 명령
    }
}

// (4) responseText 프로퍼티
// - 요청에 대한 응답이 문자열 형태로 저장된다.
// - 콘솔창에 다음과 같이 입력하면 student.json의 내용이 문자열로 저장된 것을 확인할 수 있다.
xhr.responseText;  // '{\r\n  "name": "김자바",\r\n  "major": "컴퓨터공학",\r\n  "grade": 2\r\n}\r\n'

// 이 JSON 문자열을 객체로 바꿔야 프로그램에서 사용할 수 있다.
let students = JSON.parse(xhr.responseText);

document.getElementById("result").innerHTML = `${students.name} 학생은 ${students.grade}학년입니다.`   // 김자바 학생은 2학년입니다.