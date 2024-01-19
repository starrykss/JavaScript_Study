// 화씨를 섭씨로 바꾸기

let degreeFahrenheit = parseFloat(prompt("변환할 온도는?"));
let degreeCelsius;

// 화씨를 섭씨로 바꾸기
degreeCelsius = ((degreeFahrenheit - 32) / 1.8).toFixed(1); // 소숫점 한자리로 고정

alert(`화씨 ${degreeFahrenheit}도는 섭씨 ${degreeCelsius}도 입니다.`);
