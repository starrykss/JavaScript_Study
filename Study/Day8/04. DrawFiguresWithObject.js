// ✏️ 객체를 사용해 도형 그리기
// - 캔버스에 자바스크립트 프로그래밍을 더하면 도형을 한꺼번에 그릴 수도 있고, 도형을 이리저리 움직이는 것도 가능하다.

// 1️⃣ 객체로 여러 개의 원 그리기
// - 캔버스에 여러 개의 원을 그리기 위해 원과 관련된 객체를 만들고 필요한 만큼 객체의 인스턴스를 만들어서 화면에 그릴 수 있다.

// (1) 객체 만들기
// - 생성자 함수로 객체를 만들 수 있다.

// 예) Circle 객체 만들기

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth; // 캔버스 너비
canvas.height = window.innerHeight; // 캔버스 높이

function Circle(x, y, radius, color) {
  this.x = x; // 중점 좌표 x
  this.y = y; // 중점 좌표 y
  this.radius = radius; // 반지름
  this.color = color; // 채우기 색

  // 원을 그리는 draw 메서드
  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };
}

// (2) 인스턴스를 만들고 화면에 그리기
// - draw 메서드를 사용해서 얼마든지 원하는 크기의 색상을 가진 원을 만들 수 있다.

const circleOne = new Circle(100, 100, 50, "red"); // 인스턴스 만들기
const circleTwo = new Circle(200, 200, 20, "blue"); // 인스턴스 만들기

circleOne.draw();
circleTwo.draw();
