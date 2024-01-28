// ✏️ 애니메이션 효과 추가하기
// - 캔버스에 그래픽 요소를 그렸으면 자바스크립트를 사용해 그래픽 요소를 움직이게 만들 수 있다.
// - 애니메이션을 통해 그래픽 요소를 움직일 경우에는 움직일 때마다 캔버스에 그래픽 요소를 새로 그려줘야 한다는 점에 주의한다. ⚠️

// 1️⃣ 그래픽 요소 옮기기
// - 그래픽 요소의 위치를 옮기려면 좌표를 조절해서 그래픽을 다시 그려야 한다.
// -> 예) 오른쪽으로 움직이려면 x 좌표값을 일정하게 커지게 만든다.

// (1) 좌표 옮기기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth; // 캔버스 너비
canvas.height = window.innerHeight; // 캔버스 높이

const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4, // 가로로 움직일 크기 (x축 이동 속도)
  dy: 4, // 세로로 움직일 크기 (y축 이동 속도)
  color: "#222",
};

// -> dx, dy 값은 한 번에 옮길 픽셀(px) 크기이므로 원이 움직이는 속도라고 할 수 있다.

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
}

function move() {
  drawCircle(); // 움직일 때마다 캔버스에 그래픽 요소를 새로 그려줘야 한다. ⚠️
  circle.x += circle.dx; // circle.x = circle.x + circle.dx
}

// (2) window.requestAnimationFrame() 메서드
// - 애니메이션은 한 위치에서 다른 위치로 옮겨가면서 그래픽 요소를 계속 화면에 그려야 한다.
// -> 즉, 좌표를 옮기고 그래픽 요소를 그리는 함수를 반복한다.
// - 이전에는 캔버스에서 같은 동작을 반복하기 위해 setInterval() 메서드나 setTimeout() 메서드를 사용했다.
// - 하지만, 최근에는 반복 애니메이션을 위한 requestAnimationFrame() 메서드가 생겨서 더욱 쉽게 애니메이션을 만들 수 있다.
// requestAnimationFrame(콜백)
// -> 콜백(callback) : 함수의 매개변수로 사용할 수 있는 함수

// - requestAnimationFrame() 메서드에 반복할 함수를 지정하면 함수가 계속 반복된다.

function move() {
  drawCircle(); // 움직일 때마다 캔버스에 그래픽 요소를 새로 그려줘야 한다. ⚠️
  circle.x += circle.dx; // circle.x = circle.x + circle.dx
  requestAnimationFrame(move); // move 함수를 반복한다.
}

move();

// 2️⃣ 다양한 애니메이션 만들기
// - 위의 예제 코드는 끝나는 위치가 정해져 있지 않아 끝없이 가로로 그려진다.
// - 원래 그래픽 형태를 그대로 유지하는 애니메이션이 더 많이 필요하다.
// -> translate() 메서드를 이용하여 다음과 같이 구현할 수 있다.
/*
    (1) 시작 위치에서 도형을 그린다.
    (2) 캔버스 지우기 (보통 clearRect() 메서드를 이용해 캔버스 크기만큼 지운다.)
    (3) 저장해야 할 스타일이 있으면 save() 메서드를 사용해 캔버스 상태를 저장한다.
    (4) 새로운 위치에 도형을 그린다.
    (5) 저장한 캔버스 상태가 있으면 저장한 상태를 복구한다. (restore() 메서드 사용)
*/
