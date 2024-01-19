// 소수인지 여부 확인하기

const number = parseInt(prompt("자연수를 입력하세요: "));
let isPrime;

// 소수(Prime Number)란, 1과 자기 자신으로만 나눌 수 있는 숫자이다.
// 소수가 아닌 수를 합성수(Composite Number)라고 한다.
// 숫자 1은 소수도, 합성수도 아니다.

if (number === 1) {
  document.write(`${number}은(는) 소수도, 합성수도 아닙니다. <br\>`);
  isPrime = false;
} else if (number === 2) {
  isPrime = true;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      // 나누어 떨어지는 수가 있으면
      isPrime = false;
      break;
    } else {
      // 나누어 떨어지는 수가 없으면
      isPrime = true;
    }
  }
}

if (isPrime) {
  document.write(`${number}은(는) 소수입니다.`);
} else {
  document.write(`${number}은(는) 소수가 아닙니다.`);
}
