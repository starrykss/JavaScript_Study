// ✏️ Date 객체
// - 날짜와 시간에 대한 정보를 조절할 수 있는 객체
// - 참고 : https://developer.mozilla.org/ko/search?q=Date

// 1️⃣ 객체 인스턴스 만들기
// - Date 객체를 사용하려면 JavaScript의 Date 객체를 똑같이 만들어서 사용하는데, 이렇게 내장 객체와 똑같은 모양으로 찍어내는 것을 인스턴스(Instance)라고 한다.

// (1) 현재 날짜를 기준으로 인스턴스 만들기
let today = new Date();
console.log(today); // Sat Jan 20 2024 19:22:14 GMT+0900 (한국 표준시)
today.getDate(); // 20

// (2) 특정 날짜를 기준으로 인스턴스 만들기
new Date("2025-02-25"); // 2025년 2월 25일
new Date("2025-2-25"); // 2025년 2월 25일
new Date("2025, 2, 25"); // 2025년 2월 25일
new Date("2025-02-25T18:00:00"); // 시간 정보와 함께 지정 (날짜 + T + 시간)

// (3) JavaScript의 날짜와 시간 입력 방식
new Date("2022-02-05"); // YYYY-MM-DD
new Date("2022-02"); // YYYY-MM
new Date("2022"); // YYYY
new Date("2022-02-25T18:00:00"); // YYYY-MM-DDTHH:MM:SS (T : 시간 표시)
new Date("2022-02-25T18:00:00Z"); // YYYY-MM-DDTHH:MM:SSZ (Z : UTC(국제 표준시)로 표시)
new Date("02/25/2022"); // MM/DD/YYYY (슬래시 사용)
new Date("Thu Aug 17 2022 15:00:41 GMT+0900 (대한민국 표준시"); // 전체 형식 (월과 요일은 전체 이름이나 줄여쓴 이름을 모두 사용 가능)
new Date("Thursday August 17 2022 15:00:41 GMT+0900 (대한민국 표준시"); // 전체 형식 (월과 요일은 전체 이름이나 줄여쓴 이름을 모두 사용 가능)

// (4) Date 객체의 메서드
// - 날짜와 시간의 정보를 가져오는 메서드
getFullYear(); // 현재 시간을 기준으로 연도값 가져오기
getMonth(); // 현재 시간을 기준으로 월을 가져오기 (0부터 시작하여 0이 1월, 11이 12월을 나타냄)
getDate(); // 현재 시간을 기준으로 월의 날짜 가져오기 (1부터 시작하여 해당 월의 날짜)
getDay(); // 현재 시간을 기준으로 요일 가져오기 (0부터 시작하여 0이 일요일, 1이 월요일, ..., 6이 토요일)
getTime(); // 1970년 1월 1일 00:00:00 UTC부터 현재까지의 밀리초 반환
getHours(); // 현재 시간을 기준으로 시간 가져오기 (0부터 시작하여 0이 자정)
getMinutes(); // 현재 시간을 기준으로 분 가져오기
getSeconds(); // 현재 시간을 기준으로 초 가져오기
getMilliseconds(); // 현재 시간을 기준으로 밀리초 가져오기
setFullYear(); // 연도 설정
setMonth(); // 월 설정 (0부터 시작하여 0이 1월, 11이 12월을 나타냄)
setDate(); // 날짜 설정
setDay(); // 요일 설정 (0부터 시작하여 0이 일요일, 1이 월요일, ..., 6이 토요일)
setTime(); // 밀리초 단위의 시간 설정
setHours(); // 시간 설정 (0부터 시작하여 0이 자정)
setMinutes(); // 분 설정
setSeconds(); // 초 설정
setMilliseconds(); // 밀리초 설정

// - 날짜와 시간의 형식을 바꾸는 메서드
toUTCString(); // 현재 시간을 UTC 표준에 따라 문자열로 반환 (요일 일 월 연도 시:분:초 UTC 형식)
toLocaleString(); // 현재 지역의 날짜 및 시간 형식에 따라 문자열로 반환 (월/일/연도 시:분:초)
toString(); // 현재 날짜와 시간을 기본적인 형식의 문자열로 반환 (요일 월 날짜 시:분:초 UTC+대한민국 표준시)
toDateString(); // 현재 날짜를 기본적인 형식의 문자열로 반환 (Date에서 날짜 부분만 표시)
toTimeString(); // 현재 시간을 기본적인 형식의 문자열로 반환 (Date에서 시간 부분만 표시)
