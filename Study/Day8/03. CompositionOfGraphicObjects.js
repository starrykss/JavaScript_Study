// ✏️ 그래픽 요소 합성하기
// - 캔버스 위에 그래픽 요소를 그리면 소스의 순서에 따라 자동으로 겹쳐진다.
// - 하지만 globalCompositionOperation 속성을 사용하면 겹쳐지는 요소들을 다양한 형태로 표시할 수 있다.
// - 참고 : https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Compositing

// 1️⃣ 코드 작성 순서에 따라 겹쳐지는 그래픽 요소
// - 2개 이상의 캔버스 그림을 겹쳐 그리면 나중에 그린 그래픽이 이전 그래픽 위에 그려진다.
// -> 코드 작성 순서에 따라 나중에 작성한 코드의 도형이 위에 겹쳐진다.

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100); // 회색 사각형

ctx.fillStyle = "#222";
ctx.beginPath();
ctx.arc(180, 120, 50, 0, Math.PI * 2, false); // 검은색 원
ctx.fill();

// -> 검은색 원이 회색 사각형 위에 그려진다.

// 2️⃣ globalCompositeOperation 속성 : 겹쳐진 그래픽 요소 합성하기
// - 2개 이상의 그래픽 요소가 겹쳐져 있으면 globalCompositionOperation 속성을 이용해서 여러 형태로 합성해서 표시할 수 있다.
// - 이 속성에 익숙해지면 원하는 효과를 만들기 위해 다양한 그래픽 요소를 합성해서 사용할 수 있다.
// globalCompositeOperation = type
// -> type : 사용 가능한 값 중에는 source-over, destination-over처럼 'source'라는 용어와 'destination'이라는 용어가 나온다. (destination : 먼저 그린 도형, source : 나중에 그린 도형)

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

// destination : 회색 사각형
ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100);

ctx.globalCompositeOperation = "source-over";

// source : 검은색 원
ctx.fillStyle = "#222";
ctx.beginPath();
ctx.arc(180, 120, 50, 0, Math.PI * 2, false);
ctx.fill();

// (1) source-over
// - source로 시작하는 값은 source 그래픽 요소를 그리기 위한 값이다.
// - 기본값은 source-over 값으로, source를 destination 위에(over) 그린다.
ctx.globalCompositeOperation = "source-over";

// (2) source-in
// - source를 그리면서 destination 그래픽과 겹쳐진 부분만 그리고 나머지는 투명하게 처리
ctx.globalCompositeOperation = "source-in";

// (3) source-out
// - source 요소를 그리면서 destination 그래픽과 겹쳐지지 않는 부분만 그리기
ctx.globalCompositeOperation = "source-out";

// (4) source-atop
// - source 요소를 그리면서 destination 그래픽과 겹쳐진 부분을 그린 후 destination 부분은 불투명하게 처리
ctx.globalCompositeOperation = "source-atop";

// (5) destination-over
// - destination로 시작하는 값은 destination 요소(코드에서 먼저 작성한 그래픽 요소)를 그리기 위한 값이다.
// - destination를 source 위에(over) 그린다.
ctx.globalCompositeOperation = "destination-over";

// (6) destination-in
// - destination를 그리면서 source 그래픽과 겹쳐진 부분만 그리고 나머지는 투명하게 처리
ctx.globalCompositeOperation = "destination-in";

// (7) destination-out
// - destination 그래픽 요소를 기준으로 그린다.
// - destination 요소를 그리면서 source 그래픽과 겹쳐지지 않는 부분만 그리기
ctx.globalCompositeOperation = "destination-out";

// (8) destination-atop
// - destination 요소를 그리면서 source 그래픽과 겹쳐진 부분을 그린 후 source 부분은 불투명하게 처리
ctx.globalCompositeOperation = "destination-atop";

// (9) lighter
// - 먼저 그린 그래픽과 나중에 그린 그래픽을 모두 표시한다.
// - 이때 겹쳐진 부분은 두 그래픽의 색상값이 합쳐지면서 결정된다.
ctx.globalCompositeOperation = "lighter";

// (10) darken
// - 먼저 그린 그래픽과 나중에 그린 그래픽을 모두 표시한다.
// - 이때 겹쳐진 부분은 두 그래픽의 색상값의 차이로 결정된다.
ctx.globalCompositeOperation = "darken";

// (11) copy
// - 나중에 그린 그래픽만 표시한다.
ctx.globalCompositeOperation = "copy";

// (12) xor
// - 먼저 그린 그래픽과 나중에 그린 그래픽을 모두 표시한다.
// - 이때 겹쳐진 부분은 투명하게 만들어서 아무것도 표시하지 않는다.
ctx.globalCompositeOperation = "xor";
