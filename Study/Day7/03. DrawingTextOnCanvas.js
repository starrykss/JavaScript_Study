// ✏️ 캔버스에 텍스트 그리기
// - 캔버스에는 도형뿐만 아니라 텍스트를 그릴 수도 있다.
// - 텍스트를 키보드로 입력하는 것이 아니라, 화면에 그리는 것이므로 캔버스에 그린 텍스트는 일반 텍스트처럼 마우스로 드래그해서 선택할 수 없다.

// 1️⃣ 텍스트를 그리는 메서드
// - 캔버스에는 도형뿐만 아니라 텍스트를 그리는 메서드와 속성도 준비되어 있다.
// fillText(text, x, y [,maxWidth]
// strokeText(text, x, y [,maxWidth])
// -> text : 캔버스에 그릴 텍스트
// -> x, y : 텍스트를 표시할 좌표
// -> maxWidth : 텍스트를 표시할 최대 너비 (옵션이므로 필요할 때만 사용. 이 값을 지정했을 때 텍스트의 전체 너비가 이 값보다 커지면 글꼴 너비를 더 좁게 조정하거나 전체 너비에 맞추어 글꼴 크기를 줄인다.)
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "60px Arial";
ctx.fillText("HELLO", 50, 70);
ctx.strokeText("HELLO", 50, 150);

// 2️⃣ 글꼴 및 글자 스타일 지정하기 : font 속성
// - 캔버스에서 텍스트의 글꼴이나 글자 크기를 지정하려면 font 속성을 사용한다.

// 예1)
ctx.font = "40px Arial"; // 40px의 Arial (글자 크기와 이름은 쉼표 없이 공백으로 구분)
ctx.fillText("HELLO", 50, 70);
ctx.strokeText("HELLO", 50, 150);

// 예2)
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "italic 60px serif";
ctx.fillText("Javascript", 50, 70);

ctx.font = "bold 60px sans-serif";
ctx.fillText("Javascript", 50, 150);
