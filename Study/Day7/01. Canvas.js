// ✏️ 캔버스(Canvas)
// - 캔버스는 웹에서 직접 그림을 그리거나 표시할 수 있도록 HTML5에 도입된 그래픽 요소이다.
// - 자바스크립트 프로그래밍만 할 수 있으면 캔버스를 이용해 그래픽 요소를 제어할 수 있다.
// - <img>, <picture> 태그는 이미 완성된 이미지 파일을 문서에 보여주는 태그이다.
// - <canvas> 태그는 문서에 직접 그림을 그리는 그래픽 태그로, 흔히 '캔버스'라고 부른다.
// - 웹에 그림을 그릴 수 있게 해 주는 기능은 Canvas API에 모두 모여 있다.

// 1️⃣ 캔버스란?
// - HTML에서 <canvas> 태그와 함께 Canvas API를 사용하여 웹 문서 화면에 자유롭게 도형이나 직선을 그리는 기능을 간단히 '캔버스'라고 한다.
// - Canvas API에는 사각형을 그리는 함수, 색을 칠하는 함수, 곡선을 그리는 함수 등을 비롯해 선의 굵기, 색상 속성처럼 필요한 기능이 모두 만들어져 있어서 자바스크립트를 이용해 얼마든지 자유롭게 사용할 수 있다.
// - 자바스크립트와 Canvas API만 있으면 웹 브라우저 창을 스케치북처럼 사용하면서 그림을 그릴 수 있다.

// (1) 캔버스의 특징
// - Canvas API를 이용하면 2차원 화면에 한 픽셀(px)씩 그림을 그릴 수 있어서 그래픽을 세밀하게 제어할 수 있다.
// - 그래서 UI나 차트 같은 그래픽보다 게임 캐릭터나 배경 이미지처럼 세밀한 제어가 필요한 그래픽 화면을 만들 때 주로 사용한다.
// - 또한 오디오나 비디오를 포함할 수도 있고, 자유로운 그래픽 편집도 가능하므로 사용자의 동작에 반응하여 다양한 효과를 연출할 수 있다.

// 2️⃣ 웹 문서에 캔버스 만들기

// (1) <canvas> 태그
// - <canvas> 태그는 웹 페이지에서 그래픽을 제어할 수 있는 캔버스 영역을 지정한다.
// - 캔버스 영역에서는 그림을 그릴 수 있을 뿐만 아니라 이미지나 동영상을 불러와서 조작할 수도 있다.
// - <canvas> 태그를 사용하면 웹 브라우저 창에서 기본으로 지정한 크기만큼 만들어지고, width나 height 속성을 사용하면 캔버스 크기를 직접 지정할 수 있다.
// <canvas></canvas>
// <canvas width="너비" height="높이"></canvas>
<div>
    <h2>크기를 지정하지 않을 때</h2>
    <canvas></canvas>
</div>
<div>
    <h2>크기를 지정했을 때</h2>
    <canvas width="400" height="300"></canvas>
</div>

// (2) 화면 전체를 캔버스로 사용하기
// - 자바스크립트의 window 객체의 innerWidth와 innerHeight 값을 캔버스의 너비와 높이러 지정한다.
// - 그런데 이렇게만 지정하면 웹 브라우저 창에는 margin 기본값이 있으므로 웹 브라우저 창의 테두리와 캔버스 영역 사이에 약간의 여백과 스크롤 막대가 생긴다.
// - 따라서 다음과 같이 margin 기본값을 0으로 지정하고, 문서 전체 스타일에 overflow: hidden; 속성을 추가해서 스크롤 막대를 없애야 한다.
<style>
    body {
        margin: 0;    // 여백 기본값 없애기
        overflow: hidden;   // 스크롤 막대 없애기
    }
    canvas {
        background-color: green;
    }
</style>

const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// (3) getContext() 메서드로 랜더링 콘텍스트 만들기
// - 캔버스에서 무엇인가를 그리려면 랜더링 콘텍스트(Rendering Context)를 만들고, 자바스크립트를 사용해서 랜더링 콘텍스트를 조작해야 한다.
// -> 콘텍스트(Context) : 프로그램에서 무언가를 호출하고 응답할 수 있도록 환경을 만드는 것
// --> 처음부터 준비하고 기다리는 것이 아니라 콘텍스트를 만드는 순간부터 환경이 갖춰진다.
// canvas.getContext("2d")   // 2차원 콘텍스트 다루기

const canvas = document.querySelector("canvas");   // 컨텍스트 영역 가져오기
const ctx = canvax.getContext("2d");  // 2차원 컨텍스트 생성

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(10, 10, 50, 100);

// (4) 캔버스에서 좌표 이해하기
// - 캔버스에서 그래픽을 그리거나 기존의 그래픽 또는 동영상을 불러와서 조작할 경우, 좌표값이 기준이 된다.
// - 캔버스 영역에서 왼쪽 위 구석을 원점(0, 0)으로 해서 오른쪽으로 갈수록 x좌표값이, 아래쪽으로 갈수록 y좌표값이 점점 더 커진다.
//    O           posX
//     +-------------→
//     │          (+)
//     │
//     │
// posY↓(+)

// (5) 캔버스에서 각도 이해하기
// - 원이나 호를 그릴 때는 각도를 이용해서 경로를 그리므로 캔버스에서 각도를 어떻게 지정해야 하는지 알고 있어야 한다.
// - 캔버스에서 가로 축의 오른쪽을 기준으로 시계 방향으로 각도를 측정한다.
// - 각도의 값은 도(Degree)로 표현하지 않고 라디안(Radian) 값으로 표기한다.
// -> 1라디안은 180도이고, Math.PI/180으로 표기한다.
// -> 360도는 Math.PI * 2이다.
radians = (Math.PI / 180) * degree;

// - (Math.PI / 180) * -90처럼 음수인 각도를 사용할 경우, (Math.PI / 180) * 270과 같은 각도를 가리킨다. 
// - (각도값에서 음수는 시계 반대 방향을 나타낸다.)