// 최대 공약수 구하기

const num1 = parseInt(prompt("숫자1을 입력하세요: "));
const num2 = parseInt(prompt("숫자2를 입력하세요: "));

let getGCD = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const gcd = getGCD(num1, num2);

alert(`${num1}와(과) ${num2}의 최대공약수는 ${gcd}입니다.`);
