// 영문자열의 첫 번째 글자를 대문자로 바꾸기

const str = prompt("영문 소문자로 된 문자열을 입력하세요.");

// (방법1) 일일히 잘라서 붙이기
// const firstCh = str[0].toUpperCase(); // 첫 번째 글자를 대문자로 만들기
// const remainStr = str.slice(1); // 두 번째 글자부터 끝까지 추출하기
// const result = firstCh + remainStr; // 문자열 합치기

// (방법2) 전개 연산자 사용
const result = [str[0].toUpperCase(), ...str.slice(1)].join("");

document.write(result);
