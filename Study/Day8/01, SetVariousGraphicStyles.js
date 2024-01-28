// ✏️ 다양한 그래픽 스타일 지정하기

// 1️⃣ 색상 지정하기
// - 도형에 책을 채우거나 테두리를 그릴 때 따로 색상을 지정하지 않으면 기본색인 검은색으로 채워지거나 테두리가 그려진다.
// - 하지만 fillStyle 속성을 이용하면 도형에 채워 넣을 색상을 지정할 수도 있다.
// - strokeStyle 속성을 지정하면 테두리 색상을 지정할 수도 있다.
// fillStyle = color;    // 채우기 색상
// strokeStyle = color;  // 선 색상

// - 색상에는 다음과 같은 값들을 사용할 수 있다.
// -> 색상 이름 : red, yellow 등
// -> 16진수 : 맨 앞에 # 기호를 붙이고 앞에서부터 두 자리씩 묶어 Red, Green, Blue의 양을 지정 (00: 색상이 하나도 없음, ff: 색상이 가득 있음.)
// -> rgb/rgba 값

// 2️⃣ 투명도 조절하기
// - 화면에 그린 도형은 globalAlpha 속성이나 rgba() 함수를 사용하여 투명도를 조절할 수 있다.

// (1) globalAlpha 속성
// - 캔버스에 그린 여러 개의 도형에 똑같은 투명도값을 적용할 수 있다.
// - 사용할 수 있는 값은 0.0(완전 투명)에서 1.0(완전 불투명)까지이고, 기본값은 1.0이다.
// - globalAlpha 속성으로 투명도를 설정하면 투명도를 설정한 이후에 그려지는 도형에는 같은 투명도가 적용된다.
// - 캔버스에 도형이 많고 이 도형들의 투명도를 같게 지정하려면 globalAlpha 속성을 사용하는 것이 편리하다.
// globalAlpha = 값

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.globalAlpha = 0.3; // 이후의 모든 도형에 투명도 적용
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 100, 50);
ctx.fillStyle = "rgb(0, 0, 255)";
ctx.fillRect(150, 50, 100, 50);
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(250, 50, 100, 50);
ctx.fillStyle = "rgb(255, 255, 0)";
ctx.fillRect(350, 50, 100, 50);

// (2) rgba() 메서드
// - 각 도형의 불투명도를 따로 설정하려면 fillStyle이나 strokeStyle 속성에서 색상값을 지정할 때 rgba() 메서드로 색상과 함께 불투명도 값을 추가할 수 있다.
// - r : red, g : green, b : blue, a : alpha(불투명도)
// -> alpha 값은 0.0(완전 투명) ~ 1.0(완전 불투명) 사이의 값을 사용할 수 있다. (소수점 앞의 0을 생략해서 0.2를 .2로 표기할 수 있다.)
// - globalAlpha는 여러 개의 도형을 한꺼번에 같은 투명도를 적용할 때, rgba()는 각 도형에 서로 다른 불투명도를 적용할 때 편리하다. ⭐const canvas = document.querySelector('canvas');

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0, 0, 255, .2)"; // alpha의 0.2를 .2로 표현할 수 있다.
ctx.fillRect(50, 50, 60, 50);
ctx.fillStyle = "rgba(0, 0, 255, .4)";
ctx.fillRect(110, 50, 60, 50);
ctx.fillStyle = "rgba(0, 0, 255, .6)";
ctx.fillRect(170, 50, 60, 50);
ctx.fillStyle = "rgb(0, 0, 255, .8)";
ctx.fillRect(230, 50, 60, 50);
ctx.fillStyle = "rgb(0, 0, 255, 1)";
ctx.fillRect(290, 50, 60, 50);

// 3️⃣ 그라데이션 채우기
// - 선형 그라데이션과 원형 그라데이션을 그릴 수 있다.

// (1) 선형 그라데이션 객체 만들기
// - 선형 그라데이션은 사각형 영역을 가지고 있으면서 가로 방향이나 세로 방향으로 그라데이션이 바뀐다.
// - 시작점(x1, y1)과 끝점(x2, y2)을 지정하여 사각 형태의 그라데이션 영역을 만든다.
// createLinearGradient(x1, y1, x2, y2)

let grad = ctx.createLinearGradient(0, 0, 0, 100);
// -> (0, 0)부터 (0, 100)까지 사각형 영역을 갖는다.
// -> 너비값이 없고 높이값만 있으므로 위에서 아래로 색상이 변하는 그라데이션이 된다.
// -> 아직 그라데이션 색상을 지정하지 않았으므로, 이 상태에서는 그라데이션이 적용되지 않는다.

// (2) 색 중지점에 색 할당하기
// - 일단 그라데이션 객체를 만들었으면 만들어 놓은 영역에 2가지 이상의 색상을 지정해서 색상이 자연스럽게 섞여야 그라데이션 효과가 만들어진다.
// addColorStop(position, color)
// -> position
// ----> 색상의 위치를 상대적으로 표시 (0.0(시작 위치) ~ 1.0(끝나는 위치) 사이의 값 사용)
// ----> 2가지 색상을 지정하면 이들 사이의 중간 색상은 자동으로 계산하여 그라데이션을 만들어준다.
// -> color : 색상 이름 or 색상값

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let linGrad = ctx.createLinearGradient(0, 0, 0, 200);

linGrad.addColorStop(0, "#000"); // 시작 위치에 검정색
linGrad.addColorStop(0.6, "#fff"); // 0.6 위치에 흰색
linGrad.addColorStop(1, "#eee"); // 끝나는 위치에 회색

// -> 그라데이션을 만들기만 했을 뿐, 아직 적용하지 않았다.

// (3) 그라데이션 적용하기
// - 그라데이션을 만들었으면 fillStyle 속성이나 strokeStyle 속성을 이용해 스타일에 적용할 수 있다.

let linGrad = ctx.createLinearGradient(0, 0, 0, 200);

linGrad.addColorStop(0, "#000"); // 시작 위치에 검정색
linGrad.addColorStop(0.6, "#fff"); // 0.6 위치에 흰색
linGrad.addColorStop(1, "#eee"); // 끝나는 위치에 회색

ctx.fillStyle = linGrad;
ctx.fillRect(0, 0, 100, 200);

// (4) 원형 그라데이션 객체 만들기
// - 원형 그라데이션은 안에서 밖으로, 또는 밖에서 안으로 원형으로 그라데이션이 바뀐다. (동심원이 번져 나가는 것과 같다.)
// - 따라서 원형 그라데이션은 색상이 시작되는 원과 색상이 끝나는 원, 2개의 원을 지정해야 한다.
// createRadialGradient(x1, y1, r1, x2, y2, r2)
// -> 시작 원 : (x1, y1)을 중점으로 하는 반지름 r1인 원
// -> 끝나는 원 : (x2, y2)를 중점으로 하는 반지름 r2인 원

let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 80, 100);
// -> 안쪽 원 : (50, 60) r: 10
// -> 바깥 원 : (80, 80) r: 100

// - 원형 그라데이션 객체를 만들었으면 addColorStop() 메서드를 사용해서 그라데이션의 색상을 지정해야 한다.

// 예) 원형 그라데이션 만들고 적용하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);

radGrad.addColorStop(0, "white"); // 시작 위치에 흰색 원
radGrad.addColorStop(0.4, "yellow"); // 0.4 위치에 노란색 원
radGrad.addColorStop(1, "orange"); // 끝 위치에 주황색 원

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();

// 4️⃣ 패턴 채우기
// - fillStyle 속성과 strokeStyle 속성에 색상이나 그라데이션 객체뿐만 아니라 패턴을 지정할 수 있다.
// - 패턴을 채울 때도 패턴 객체를 만든 후 채우기 스타일이나 선 스타일에 모두 패턴 객체를 지정해서 사용하면 된다.

// (1) 패턴 객체 만들기
// createPattern(image, type)
// -> image : 패턴 이미지 파일의 경로 (이미지 객체를 만든 후 파일을 가져와서 사용)
// -> type : 패턴 이미지의 반복 형태 ("repeat", "repeat-x", "repeat-y", "no-repeat")

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();

img.onload = function () {
  let pattern = ctx.createPattern(img, "repeat"); // 패턴 객체 만들기
  ctx.fillStyle = pattern; // 채우기 스타일을 패턴으로 지정
  ctx.fillRect(0, 0, 200, 200); // 패턴을 채운 사각형 그리기
};
img.src = "images/pattern.png";

// 5️⃣ 그림자 효과 추가하기
// - CSS에서 텍스트 박스에 그림자 효과를 추가했던 것처럼, 캔버스에서도 도형이나 텍스트에 그림자 효과를 줄 수 있다.

// (1) shadowOffsetX 속성
// - 도형이나 텍스트 등의 객체로부터 그림자가 수평 방향으로 얼마나 떨어져 있는지를 나타낸다.
// - 속성값이 양수이면 객체로부터 오른쪽 방향, 음수이면 왼쪽 방향으로 그림자가 생긴다.
// - 기본값은 0이다.
// ctx.shadowOffsetX = 거리값

// (2) shadowOffsetY 속성
// - 도형이나 텍스트 등의 객체로부터 그림자가 수직 방향으로 얼마나 떨어져 있는지를 나타낸다.
// - 속성값이 양수이면 객체로부터 아래쪽 방향, 음수이면 위쪽 방향으로 그림자가 생긴다.
// - 기본값은 0이다.
// ctx.shadowOffsetY = 거리값

// (3) shadowBlur 속성
// - 그림자가 얼마나 흐린지를 나타낸다.
// - 값이 0일 때 가장 진하고, 숫자가 커질수록 그림자는 점점 흐려진다.
// - 기본값은 0이다.
// ctx.shadowBlur = 값

// (4) shadowColor 속성
// - 그림자 색상을 지정한다.
// - 기본값은 완전히 투명한 검정색이다.
// ctx.shadowColor = 색상

// 예) 도형에 그림자 추가하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.shadowColor = "#ccc"; // 그림자 색
ctx.shadowOffsetX = 15; // 그림자의 가로 오프셋
ctx.shadowOffsetY = 20; // 그림자의 세로 오프셋
ctx.shadowBlur = 10; // 그림자의 흐림 정도

let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);

radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();

// 6️⃣ 텍스트 선과 관련된 속성 살펴보기
// - 텍스트를 그릴 때 선의 굵기나 선의 끝 모양 같은 스타일을 지정할 수 있다.

// (1) lineWidth 속성 : 선의 굵기
// - 사용할 수 있는 값은 양수이고, 기본값은 1.0이다.
// ctx.lineWidth = 값

// (2) lineCap 속성 : 선의 끝 모양
// - 선의 양쪽 끝점을 어떻게 마무리할지 지정할 수 있다.
// - 선택할 수 있는 값은 butt, round, square이다.
// ctx.lineCap = butt || round || square
// -> butt : 끝부분을 단면으로 처리 (기본값)
// -> round : 선 너비의 1/2을 반지름으로 하는 반원을 선의 양쪽으로 그린다.
// -> square : 선의 양쪽 끝에 높이가 선의 너비의 1/2인 사각형을 그린다.

// 예) 선의 굵기와 끝 모양 지정하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineCap = ["butt", "round", "square"]; // 선의 끝 모양

ctx.strokeStyle = "#222";
for (let i = 0; i < lineCap.length; i++) {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap[i]; // 선의 끝 모양 지정
  ctx.beginPath();
  ctx.moveTo(50, 50 + i * 30); // 시작 위치
  ctx.lineTo(350, 50 + i * 30); // 끝 위치
  ctx.stroke();
}

// (3) lineJoin 속성 : 선과 선의 만남
// - 2개의 선이 만날 때 선의 교차점을 어떻게 처리할 것인지 지정
// - 사용할 수 있는 값은 round, bevel, miter이다.
// ctx.lineJoin = bevel || miter || round
// -> bever : 두 선의 연결 부분을 칼로 자른 듯한 단면으로 처리
// -> miter : 연결한 흔적 없이 마치 처음부터 하나의 선이었던 것처럼 연결 (기본값)
// -> round : 선과 선이 만나는 부분을 둥글게 처리

// 예) 선과 선의 교차점 지정하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineJoin = ["bevel", "miter", "round"];

ctx.strokeStyle = "#222";
for (let i = 0; i < lineJoin.length; i++) {
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[i];
  ctx.beginPath();
  ctx.moveTo(60, 60 * i + 50); // 시작 위치
  ctx.lineTo(100, 60 * i + 15); // 교차하는 위치
  ctx.lineTo(140, 60 * i + 50); // 끝 위치
  ctx.stroke();
}

// (4) miterLimit 속성 : 선 연결 부분의 잘린 크기
// - lineJoin 속성에서 miter 유형을 선택하면 2개의 선이 연결된 부분에는 뾰족한 꼭지점이 생긴다.
// - 만약 선의 굵기나 다른 요인 때문에 이 꼭지점을 잘라내야 할 경우에는 miterLimit 속성을 이용해서 이 부분을 얼마나 잘라낼 것인지 결정할 수 있다.
// - 기본값은 10이다.
// ctx.miterLimit = 값
