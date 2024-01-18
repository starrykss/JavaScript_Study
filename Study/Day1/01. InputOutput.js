// (1) alert(내용)
// 알림창 표시
var content = "안녕하세요";
alert(content);

// (2) confirm(내용)
// [확인] 버튼과 [취소] 버튼이 있는 알림창 표시
// [확인] 버튼을 누르면 true, [취소] 버튼을 누르면 false 반환
var result = confirm("프로그램을 종료하시겠습니까?");

// (3) prompt(내용 [, 기본값])
// 사용자가 간단한 값을 입력할 수 있는 창
// [아니오]를 누를 경우, 'null'이 반환된다.
var name = prompt("당신의 이름은?");
var result = prompt("회의 참석 여부 (예/아니오)", "예"); // 기본값(예) 표시

// (4) console.log(내용|변수)
console.log("I love JavaScript");

var name = "JavaScript";
console.log("I love " + name);

// (5) document.write()
// 괄호 안의 인자를 웹 브라우저 창에 표시해준다.
var name = "JavaScript";
document.write("My name is " + name);
