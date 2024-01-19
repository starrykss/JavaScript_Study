// ✏️ 반복문(Iteration)

// (1) for 문
// - for (초깃값; 조건; 증가식) { ... }
const students = ["Park", "Kim", "Lee", "Kang"];

for (let i = 0; i < students.length; i++) {
  document.write(`${students[i]}, `);
}

// (2) forEach 문
// - 배열명.forEach(콜백_함수 { ... });
// - 다음의 경우에 유용하게 쓰일 수 있다.
// > [1] 배열의 길이가 바뀌어 정확하게 배열의 크기를 알 수 없을 때
// > [2] 배열의 요소를 가져와서 함수를 실행해야 할 때

const students = ["Park", "Kim", "Lee", "Kang"]; // 보통 배열 변수 이름은 복수형으로 쓴다.

students.forEach(function (student) {
  document.write(`${student}, `); // 각 요소는 단수형으로 쓴다.
});

// (3) for...in 문
// - forEach 문은 배열에서만 반복되는 반복문이지만, for...in 문은 반복해서 객체의 값을 가져와서 처리할 수 있게 한다.
// - 객체의 키만 가져올 수 있으므로, 해당 키의 값에 접근하려면 대괄호([])를 사용한다.
const jsBook = {
  title: "자바스크립트 입문",
  pubDate: "2024-01-18",
  pages: 299,
  finished: true,
};

for (key in jsBook) {
  document.write(`${key} : ${jsBook[key]}<br/>`);
}

// - (참고) 배열에 for...in 문을 사용할 경우
const students = ["Park", "Kim", "Lee", "Kang"];

for (student in students) {
  document.write(`${students[student]}, `); // Park, Kim, Lee, Kang (student 변수에는 접근하는 각 요소의 인덱스 번호가 할당된다.)
}

// (4) for...of 문
// - 문자열이나 배열과 같은 반복 가능(iterable) 자료에서 사용
const students = ["Park", "Kim", "Lee", "Kang"];

for (student of students) {
  document.write(`${student}, `); // Park, Kim, Lee, Kang,
}

// (5) while 문 / do..while 문
// - 조건이 참(true)인 동안만 반복한다.
// - 반복 횟수 없이 조건만 주어졌을 때 많이 사용한다.
let stars = parseInt("별의 개수: ");

while (stars > 0) {
  document.write("*");
  stars--;
}

// - do...while 문은 우선 문장을 한 번 실행한 후 조건을 체크한다.
do {
  document.write("*");
  stars--;
} while (stars > 0);

// (6) break 문 / continue 문
// - 종료 조건이 되기 전에 반복문을 빠져나오려면 break 문을 사용한다.
// - continue 문은 조건에 해당되는 값을 만났을 때 실행하던 반복 문장을 건너뛰고 반복문의 맨 앞으로 되돌아가서 다음 반복 과정으로 넘어가도록 한다.
num = 1;
while (true) {
  if (num > 10) {
    break; // 숫자가 10 초과일 경우 반복문 종료하기
  }
  document.write(num);
  num++;
}

while (true) {
  if (num % 2 == 0) {
    continue; // 짝수일 경우 출력하지 않기
  }
  document.write(num);
}
