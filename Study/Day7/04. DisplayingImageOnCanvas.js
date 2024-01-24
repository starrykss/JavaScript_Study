// ✏️ 캔버스에 이미지 표시하기

// 1️⃣ 이미지 표시하기
// - 캔버스에 이미지를 삽입하려면 이미지를 가져오는 과정과 가져온 이미지를 캔버스에 그리는 과정이 필요하다.

// (1) 이미지 가져오기
let img = new Image(); // 새로운 이미지 객체 만들기
img.src = "spring.jpg"; // 이미지 객체에 파일 경로 지정하기

// (2) 이미지 그리기
// darwImage(image, dx, dy)
// -> image : 캔버스에 표시할 이미지 객체 지정
// -> dx, dy : 캔버스의 왼쪽 위 모서리부터 얼마나 떨어져서 이미지를 표시할지 지정
let triangle = new Path2D();
triangle.moveTo(100, 100);

// - drawImage() 메서드는 이미지 객체의 메서드가 아니라 콘텍스트의 메서드이다.
// - 캔버스를 불러오면서 이미지 객체 안에 이미지를 그려야 하므로 ctx.onload처럼 load 이벤트와 함께 함수를 실행한다.
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = function () {
  ctx.drawImage(img, 0, 0);
};
img.src = "images/cat.jpg";

// (2) 이미지 크기 조절하기
// drawImage(image, dx, dy, dw, dh)
// -> image : 캔버스에 표시할 이미지 객체 지정
// -> dx, dy : 캔버스 왼쪽 위 모서리로부터 얼마나 떨어져서 이미지를 표시할지 지정
// -> dw, dh : 캔버스에 표시할 이미지 크기 지정
ctx.drawImage(img, 0, 0, 300, 200); // 이미지 크기 지정
ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // 캔버스 크기에 맞게 지정

// 2️⃣ 이미지의 일부분만 표시하기
// - 원래 이미지에서 잘라내서 캔버스에 표시하거나 캔버스에 표시한 이미지에서 불필요한 부분을 가리는 방식으로 표시할 수 있다.

// (1) 원래 이미지 잘라내기
// - 매개변수에 s가 붙는 것은 소스 이미지와, d가 붙는 것은 이미지를 붙여 넣은 캔버스와 관련된 것이다.
// drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
// -> image : 캔버스에 표시할 이미지 객체 지정\
// -> sx, sy : 원래 이미지에서 자를 영역이 왼쪽 위 모서리부터의 가로와 세로로 얼마나 떨어져 있는지(오프셋) 지정
// -> dx, dy : 잘라 낸 이미지를 캔버스의 왼쪽 위 모서리에서 가로와 세로로 얼마나 떨어지게 표시할지 지정
// -> dw, dh : 캔버스에 표시할 너비와 높이

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = function () {
  ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175); // 소스 이미지의 (100, 50) 위치에서부터 가로 280px, 세로 350px 만큼 잘라낸 후, 캔버스에서 (160, 100) 위치에서 너비 140px, 높이 175px 크기로 표시
};
img.src = "images/cat.jpg";

// (2) 이미지 클래핑하기
// - 클리핑(Cliping) : 경로를 그려 놓고 경로 밖의 부분은 감춰버리는 것
// - 이미지를 클리핑할 경우 클리핑 경로를 그려 놓고 clip() 메서드를 실행하면 그려 놓은 경로만큼 클리핑 된다.
// clip()

// 예) 이미지를 원형으로 클리핑하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // 캔버스 크기에 맞게 지정
};
img.src = "images/bird.jpg";

// 경로 지정 후 클리핑
ctx.beginPath();
ctx.arc(300, 200, 150, 0, Math.PI * 2, false); // 원 경로를 만든다.
ctx.clip(); // 클리핑
