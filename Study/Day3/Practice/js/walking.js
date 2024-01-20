// 만보 걷기, 오늘까지 며칠째일까?

const result = document.querySelector("#result"); // 결과값 표시 부분
const firstDay = new Date("2024-01-01"); // 시작한 날
const today = new Date(); // 오늘

// 시작한 날부터 오늘까지 흐른 시간 (밀리초)
let passedTime = today.getTime() - firstDay.getTime();

// 밀리초를 일수로 계산
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

// 결과값 표시하기
result.innerText = passedDay;
