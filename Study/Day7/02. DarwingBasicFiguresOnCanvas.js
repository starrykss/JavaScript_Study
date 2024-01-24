// ✏️ 캔버스에 기본 도형 그리기
// - 캔버스에서 기본으로 제공하는 도형은 사각형 뿐이다.
// -> 따라서 삼각형이나 원을 비롯한 다른 도형은 경로를 직접 그려야 한다.

// 1️⃣ 사각형 그리기
// - 캔버스에서는 다음의 3가지 메서드를 제공한다.
/*
    1. fillRect(x, y, width, height) : (x, y) 위치부터 시작해서 지정한 너비와 높이만큼 색이 채워진 사각형 그리기 (색상 지정하지 않을 경우 : 검정색)
    2. strokeRect(x, y, width, height) : (x, y) 위치부터 시작해서 지정한 너비와 높이만큼 테두리만 있는 사각형 그리기 (선 색상 지정하지 않을 경우 : 검정색)
    3. clearRect(x, y, width, height) : (x, y) 위치부터 시작해서 지정한 너비와 높이만큼 사각형 영역 지우기
*/

// (1) 채우기 색과 색 선 지정하기
// - 색상값은 색상 이름이나 rgb/rgba, 16진숫값 등을 모두 사용할 수 있다.
// - 채우기 색이나 선 색은 스타일을 지정하면 해당 코드 뒤에 오는 모든 도형에 똑같이 적용된다.
// -> 다른 색을 채우거나 다른 선 색을 사용하려면 도형을 그리기 전에 스타일을 각각 다르게 지정해야 한다.
fillStyle = "색상"; // 도형을 채우는 색상 지정
strokeStyle = "색상"; // 도형의 선 색상 지정

// 예) 기본적인 사각형 그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200, 0, 0)"; // 채우기 색 - 빨강
ctx.storkeStyle = "black"; // 선 색 - 검정

ctx.fillRect(10, 10, 200, 100); // 빨간색으로 채운 사각형
ctx.strokeRect(10, 10, 200, 100); // 검정색 선을 가진 사각형

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 120, 100); // 파란색으로 채운 사각형

ctx.clearRect(70, 80, 80, 45); // 사각형 지우기

// 2️⃣ 삼각형 그리기
// - 캔버스에서 사각형을 제외한 삼각형이나 원 같은 도형은 별도의 메서드를 제공하지 않으므로 경로 그리기를 이용해 직접 도형을 그려야 한다.
// - 경로를 이용해 도형을 그릴 경우, 아래의 단계를 거친다.
/*
    1. beginPath() 메서드를 이용해 경로가 시작되는 것을 알린다.
    2. 원하는 경로를 그린다. (경로에 따라 사용하는 메서드가 달라진다.)
    3. closePath() 메서드를 이용해 경로의 시작점부터 끝나는 점까지 선을 그린다.
       (이 메서드는 옵션으로, 도형을 채울 경우에는 사용하지 않아도 된다.)
    4. stroke() 메서드로 테두리를 그리거나 fill() 메서드로 도형을 채운다.
*/

// (1) 경로 그리기의 시작과 끝을 나타내기 : beginPath(), closePath()
// - 경로 그리기를 시작하려면 반드시 beginPath() 메서드로 시작해야 한다.
// - 원하는 경로를 다 그렸는데 시작 위치와 끝나는 위치가 같다면 저절로 닫힌 도형이 되므로 closePath()를 사용하지 않아도 된다.
// - (그러지 않을 경우에는 closePath()를 붙여야 한다.)
// beginPath()
// closePath()

// (2) 직선 경로를 만들기 : lineTo()
// - 시작점에서부터 (x, y) 위치까지 직선 경로를 만드는 메서드
// - 두 위치 사이에 직선 경로를 만들기만 할 뿐, 경로를 화면에 보여 주지 않는다. ⚠️
// lineTo(x, y)

// (3) 경로를 그리고 채우기 : stroke(), fill()
// - 경로를 만들었으면 stroke() 메서드를 실행해야 경로가 화면에 나타난다.
// - 만약 경로를 사용해서 닫힌 공간을 만들었으면 fill() 메서드를 사용해서 그 공간에 색을 채울 수 있다.
// stroke()
// fill()

// (4) 시작점 옮기기 : moveTo()
// - 경로를 사용해서 도형을 만드는 것은 경로와 경로를 서로 연결하는 과정이다.
// - 예) 삼각형을 만들려면 3개의 직선 경로를 만들어야 한다.
// - moveTo() 메서드는 경로를 그릴 때 시작점을 옮기는 역할을 하며, 매우 중요하다.
// moveTo(x, y)
// -> (x, y) 위치로 시작점을 옮긴다. (캔버스를 처음 만들면 시작점은 원점(0, 0)이 된다.)

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath(); // 경로 시작
ctx.moveTo(50, 50); // 시작점 옮기기 (50, 50)
ctx.lineTo(200, 200); // 직선 경로 만들기 (50, 50) -> (200, 200)
ctx.stroke(); // 선에 색상 넣기 (기본값: 검정색)

// (5) 경로를 그리는 메서드로 삼각형 완성하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath(); // 경로 시작
ctx.moveTo(50, 50); // 시작점을 (50,50) 위치로 이동
ctx.lineTo(150, 100); // 시작점에서 (150, 100)까지 경로 만들기
ctx.lineTo(50, 150); // 앞서 그린 경로 끝점에서 (50, 150)까지 경로 만들기
ctx.closePath(); // 경로 닫기 (닫힌 도형)
ctx.stroke(); // 지금까지 만든 경로를 선으로 그리기

ctx.beginPath(); // 경로 시작
ctx.moveTo(150, 100); // 시작점을 (150, 100) 위치로 이동
ctx.lineTo(250, 50); // 시작점에서 (250, 50)까지 직선 만들기
ctx.lineTo(250, 150); // 시작점에서 (250, 150)까지 직선 만들기
ctx.closePath(); // 경로 닫기 (닫힌 도형)
ctx.fillStyle = "rgb(0, 200, 0)"; // 채우기 색을 rgb(0, 200, 0)으로 지정
ctx.fill(); // 만들어진 (닫힌) 도형에 색 채우기

// 3️⃣ 원이나 호 그리기
// - 원이나 호를 그릴 떄는 arc() 메서드를 사용한다.
// - 시계 방향이든, 반시계 방향이든 0도에서 시작하여 360도까지 그리면 원이 되고, 일부만 그리면 호가 된다.
// - 호는 각도에 따라 다른 형태로 그려진다.
// arc(x, y, r, startAngle, endAngle, [, counterClockwise])
// -> x, y : 원의 중심
// -> r : 원의 반지름
// -> startAngle : 원이나 호의 시작점을 라디안으로 표시
// -> endAngle : 원이나 호의 끝점을 라디안으로 표시
// -> counterClockwise : 반시계 방향으로 그릴지의 여부를 true 또는 false로 지정 (기본값 : true(반시계 방향))

// (1) 원 그리기
// - 원점을 정한 후, 시작 각도는 0도로, 끝나는 각도는 Math.PI * 2로 지정한다.
// - counterClockwise 값은 true나 false 중 어떤 것을 사용해도 상관 없다.
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";
ctx.strokeStyle = "red";

ctx.beginPath();
ctx.arc(200, 150, 100, 0, Math.PI * 2, true); // 원 그리기
ctx.closePath();
ctx.fill();
ctx.stroke();

// (2) 반원과 호 그리기
// - 반원은 0~180도 또는 90~270도처럼 시작 각도와 끝나는 각도의 차이가 180도만 되면 그릴 수 있다.
// - 그리고 antiClockwise의 값이 true인지 false인지에 따라 시작 각도에서 끝 각도로 가는 경로의 방향이 정해지므로, 방향에 따라 반대 방향의 반원이 그려진다.
// - 호는 원 둘레의 일부를 그리는 것으로, 시작하는 각도와 끝나는 각도를 지정한 후 회전 방향이 시계 방향인지, 반시계 방향인지만 지정하면 된다.
// - 이때 시작 각도와 끝나는 각도가 같아도 회전 방향에 따라 다른 모양의 호가 그려진다.
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 반원 그리기
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true); // 반시계 방향
ctx.arc(280, 100, 50, 0, (Math.PI / 180) * 180, false); // 시계 방향
ctx.fill();

ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false); // 90도부터 270도까지 시계 방향으로 선으로 반원 그리기
ctx.closePath();
ctx.stroke();

// 호 그리기
ctx.strokeStyle = "blue";
ctx.moveTo(200, 100);
ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false); // 0도부터 60도까지 시계방향을 선으로 호 그리기
ctx.stroke();

// (3) 타원 그리기
// - 캔버스에는 타원을 그릴 수 있는 ellipse() 메서드가 따로 준비되어 있다.
// - 타원은 가로 반지름과 세로 반지름의 길이를 따로 지정하므로 arc() 메서드 기본형과 조금 다르다.
// ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, [, counterClockwise])
// -> x, y : 타원의 중점
// -> radiusX : 타원의 가로 반지름
// -> radiusY : 타원의 세로 반지름
// -> rotation : 타원의 회전 크기 (라디안값으로 지정)
// -> startAngle : 타원의 시작점 (라디안값으로 표시)
// -> endAngle : 타원의 끝점 (라디안값으로 표시)
// -> counterClockwise : 반시계 방향으로 그릴지의 여부를 true 또는 false로 지정 (기본값 : true(반시계 방향))

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
ctx.stroke();

// #. 원을 변형해서 타원 그리기
// - ellipse() 메서드를 사용해서 타원을 그릴 수도 있지만, 원을 그린 후에 가로와 세로 크기를 조절해서 타원으로 만들 수도 있다.
// - 캔버스에서 크기를 변형할 때는 scale() 메서드를 사용한다.
// scale(x, y)
// -> x : 가로 비율
// -> y : 세로 비율

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 원의 세로 길이를 축소해서 타원으로 그리기
ctx.strokeStyle = "blue";
ctx.scale(1, 0.7); // 가로 비율 : 1(그대로 유지), 세로 비율 : 0.7(축소)
ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2, false);
ctx.stroke();
ctx.closePath();

// 4️⃣ 곡선 그리기
// - 캔버스에서 곡선을 그릴 떄는 베지에 곡선(Bezier Curves)을 이용한다.
// - 베지에 곡선은 수학뿐만 아니라 제조업 등 다양한 분야에서 사용하는 곡선으로, 조절점을 이용해서 부드러운 곡선을 그릴 수 있다.

// (1) 2차 배지에 곡선
// - 베지에 곡선을 그릴 때는 현재 좌표에서 끝점 좌표 (x, y) 사이에 경로를 그리는데, 조절점을 통해 경로를 구부러지게 해서 곡선의 형태를 만든다.
// - 이때 조절점이 1개이면 '2차 베지에 곡선(Quadratic Bezier)', 조절점이 2개이면 '3차 베지에 곡선(Cubic Bezier)'이라고 한다.
// quadraticCurveTo(cpx, cpy, x, y)
// -> cpx, cpy : 조절점 좌표
// -> x, y : 곡선이 끝나는 점의 좌표

// 예1) 1개의 조절점을 사용해서 곡선 그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 200); // 곡선 시작 위치
ctx.quadraticCurveTo(200, 50, 350, 200); // 시작 위치부터 끝점(350, 200)까지 곡선 그리기
ctx.stroke();

// 예2) 베지에 곡선을 활용해서 물결 그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 100); // 곡선 시작 위치
ctx.quadraticCurveTo(100, 50, 150, 100);
ctx.quadraticCurveTo(200, 150, 250, 100);
ctx.quadraticCurveTo(300, 50, 350, 100);
ctx.stroke();

// (2) 3차 베지에 곡선
// - 2개의 조절점을 사용해서 그리는 곡선
// beizerCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
// -> cp1x, cp1y : 첫번째 조절점 좌표
// -> cp2x, cp2y : 두번째 조절점 좌표
// -> x, y : 곡선이 끝나는 점의 좌표

// 예1) 2개의 조절점을 사용해서 곡선 그리기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 100); // 곡선 시작 위치
ctx.bezierCurveTo(90, 250, 310, 10, 350, 100); // 조절점1 : (90, 250), 조절점2 : (310, 10)
ctx.strokeStyle = "green";
ctx.stroke();

// 5️⃣ Path2D 객체 사용하기
// - 캔버스는 온라인 게임처럼 복잡한 그래픽이 필요한 곳에서 자주 사용한다.
// - 그려야 할 경로도 많이 복잡할 뿐만 아니라 같은 경로를 반복해서 사용해야 할 경우도 있다.
// - 그래서 캔버스에는 같은 경로를 반복하지 않기 위해 경로를 저장해 두는 Path2D 객체가 있다.
// -> 이 객체를 사용하면 복잡한 경로를 변수로 저장한 후 필요한 곳에서 사용할 수 있다.
// new Path2D()
// new Path2D(경로)

// - Path2D 객체를 만든 후에는 위의 메서드를 그대로 사용할 수 있다.

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let triangle = new Path2D(); // 삼각형 경로 객체
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

let circle = new Path2D(); // 원 경로 객체
circle.arc(200, 155, 50, 0, Math.PI * 2);

ctx.fillStyle = "green";
ctx.stroke(triangle); // Path2D 객체 사용
ctx.fill(circle); // Path2D 객체 사용
