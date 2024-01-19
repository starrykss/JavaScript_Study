// 짝수와 홀수 구별하기

let userNumber = parseInt(prompt("숫자를 입력하세요: "));

if (userNumber !== null) {
  // 입력 받았을 경우
  userNumber % 2 === 0
    ? alert(`${userNumber} : 짝수`)
    : alert(`${userNumber} : 홀수`);
}
