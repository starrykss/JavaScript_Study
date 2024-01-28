// ✏️ 그래픽 요소 변형하기
// - Canvas API를 이용하면 도형이나 이미지를 단순히 그리는 것 뿐만 아니라 위치를 옮기거나 회전시키고 크기를 조절할 수 있다.
// - 이런 방향을 응용해서 애니메이션 등의 다양한 효과를 만들 수 있다.

// 1️⃣ 캔버스의 콘텍스트 상태 저장하기
// - 캔버스에서 이동시키거나 회전시키는 동작은 캔버스 위에 있는 그래픽 요소를 변형시키는 것이 아니라 2D 콘텍스트를 옮기거나 회전시키는 것이다.
// -> 2D 콘텍스트는 캔버스를 사용할 수 있도록 맨 처음에 만드는 환경을 가리킨다.
const ctx = canvas.getContext("2d");

// - 그래픽 요소를 변형하려면 콘텍스트 상태를 저장한 후 변형하고 다시 원래 상태로 복구시키는 과정이 필요하다.
// - 캔버스에서는 save() 메서드와 restore() 메서드를 사용해서 현재 상태를 저장하기도 하고 다시 가져오기도 한다.
// save(), restore() (->매개변수가 없다.)

// - save() 메서드를 사용하면 현재 상태를 캔버스에 적용된 여러 스타일이나 작업을 스택(Stack) 형태로 저장할 수 있다. (스택의 값을 추출할 때는 맨 나중에 저장된 값이 추출된다.)
// - 이렇게 저장해 놓은 값은 restore() 메서드를 사용해 꺼내오는데, restore() 메서드가 실행되면 가장 최근의 드로잉 상태를 꺼내온다.

// (참고) save() 메서드로 저장하거나 복구할 수 있는 캔버스 드로잉의 상태들
// - 캔버스에 적용된 변형
// - strokeStyle
// - fillStyle
// - globalAlpha
// - lineWidth
// - lineCap
// - lineJoin
// - miterlimit
// - shadowOffsetX
// - shadowOffsetY
// - shadowBlur
// - shadowColor
// - 클리핑 경로

// 2️⃣ translate() : 위치 옮기기
// - 캔버스에 그려진 도형이나 이미지, 텍스트 등의 위치를 변경한다.
// - 캔버스에 있는 도형이나 이미지는 좌표를 정할 때 캔버스의 원점을 기준으로 하므로, 이것을 옮기면 캔버스와 관련된 모든 요소도 그에 맞춰 위치가 바뀐다.
// - translate() 메서드를 사용하면 원점의 위치를 옮겨서 그래픽 요소의 위치를 바꿀 수 있다.
// translate(x, y)   // 원점의 위치를 (x, y)로 옮긴다.
// -> x : 왼쪽이나 오른쪽으로 옮길 크기
// -> y : 위쪽이나 아래쪽으로 옮길 크기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(10, 10, 100, 100);

ctx.save(); // 캔버스 현재 드로잉 상태 저장 ✅

ctx.translate(150, 150); // 원점을 (150, 150)으로 이동

ctx.fillStyle = "#222";
ctx.fillRect(10, 10, 100, 100);

// 이동한 원점(150, 150)을 기준으로 그려진다.
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 80, 20);

ctx.restore(); // 캔버스 드로잉 상태 복구 ✅

// -> 변형하기 전에 캔버스의 상태를 저장(save)하고, 변형이 끝난 후에는 다시 캔버스 상태를 복구한다는 점에 주의한다. ⚠️

// 3️⃣ rotate() : 회전 시키기
// - 그래픽 요소를 회전시킬 수 있다.
// - 그래픽 요소를 회전할 때는 캔버스의 원점을 기준으로 회전시킨다는 점에 주의한다. ⚠️
// rotate(각도)
// -> 각도 : 라디안값이고 시계 방향으로 회전한다. (라디안 = 각도 * (Math.PI / 180))

// 예1)
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 회색 사각형
ctx.fillStyle = "#ccc";
ctx.fillRect(150, 150, 100, 100);

ctx.rotate((45 * Math.PI) / 180); // 45도 회전
ctx.strokeRect(150, 150, 100, 100); // 선으로 그리기

// -> 도형이 의도와 다르게 어색하게 표현된다.
// -> rotate() 메서드는 원점을 기준으로 회전시키기 때문에 위의 도형을 45도 회전시키면 현재의 원점(0, 0)을 기준으로 회전시킨다.
// -> 이 상태에서 가로와 세로로 150만큼씩 옮겨져서 도형이 표시된다.
// - 이러한 문제를 없애기 위해 그래픽 요소를 회전시킬 때 가장 먼저 원점을 이동시켜야 한다. ⭐

// 예2)
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 회색 사각형
ctx.fillStyle = "#ccc";
ctx.fillRect(150, 150, 100, 100);

// 마름모 사각형
ctx.translate(150, 150); // 원점 이동 ✅

ctx.rotate((45 * Math.PI) / 180); // 45도 회전
ctx.strokeRect(0, 0, 100, 100);

ctx.translate(-150, -150); // 원점 복귀 ✅

// 4️⃣ scale() : 크기 조절하기
// - 확대/축소에 사용한다.
// - 배율이 1보다 크면 확대되고 작으면 축소된다.
// - 배율을 음수값으로 지정하면 방향이 반대로 바뀐다.
// - 캔버스에서 크기 단위는 1px인데, 확대/축소 배율을 2로 하면 기본 단위 1px의 2배인 2px로 변경된다.
// -> scale(2, 2)로 지정해서 사각형을 그리면 이 사각형의 크기가 바뀌는 것이 아니라 크기를 나타내는 단위가 1px에서 2px로 바뀌면서 2배로 표시된다. ⚠️
// scale(x, y)
// -> x : 가로 확대/축소 비율
// -> y : 세로 확대/축소 배열

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 기본 사각형
ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);
ctx.save();

// 확대한 후 사각형
ctx.scale(3, 2);
ctx.strokeRect(20, 70, 100, 50);

ctx.restore();
ctx.strokeRect(200, 50, 100, 50);

// -> (20, 70) 위치에 너비 100, 높이 50인 사각형을 그릴 때 사각형의 너비와 높이뿐만 아니라 (20, 70)이라는 시작 위치도 3배, 2배가 된다.
// -> 따라서 실제 사각형이 그려지는 위치는 (60, 140)부터 시작해서 사각형을 그린다.
// -> 계속 확대된 상태로 표시하지 않으려면 save()와 restore()를 사용해서 캔버스 상태를 복구해야 한다.
