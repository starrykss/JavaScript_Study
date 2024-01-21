// ✏️ 문자열 메서드 활용하기

// 1️⃣ 문자열에서 공백 제거 : trim(), trimStart(), trimEnd()
// - 문자열에서 공백 : [Spacebar], [Tab], '\n', '\r' 등
// 문자열.trim();   // 앞뒤 공백 제거
// 문자열.trimStart();   // 앞쪽 공백 제거
// 문자열.trimEnd();   // 뒤쪽 공백 제거
let str3 = "   ab cd ef   ";
str3.trim(); // 'ab cd ef'
str3.trimStart(); // 'ab cd ef   '
str3.trimEnd(); // '   ab cd ef'

// 2️⃣ 문자열의 대소문자 바꾸기 : toUpperCase(), toLowerCase()
// 문자열.toUpperCase()  // 모두 대문자로 변환
// 문자열.toLowerCase()   // 모두 소문자로 변환
let str4 = "Good morning.";
str4.toUpperCase(); // "GOOD MORNING."
str5.toLowerCase(); // "good morning."

// 3️⃣ 부분 문자열 추출하기 : substring(), slice()
// - 문자열 중에서 특정 문자열만 추출할 때 사용한다.

// (1) substring()
// - 시작 위치부터 끝 위치의 직전까지 추출해서 반환한다. (끝 위치의 직전까지만 추출하고 끝 위치는 포함하지 않는다. ⚠️)
// - 위치값에 음수가 들어가면 무조건 0으로 바꿔서 실행한다. ⚠️
// 문자열.subString(시작위치)
// 문자열.subString(시작위치, 끝위치)
let str4 = "Good morning.";
str4.substring(5); // "morning"
str4.substring(0, 4); // "Good"
str4.substring(-5, 12); // "Good morning" (위치값에 음수가 들어가면 무조건 0으로 바꿔서 실행)

// (2) slice()
// - slice() 메서드는 substring()과 달리 위치를 지정할 때 음수를 사용할 수 있다. ⚠️
// (음수로 지정하면 문자열의 끝에서부터 위치를 찾는다.)
// 문자열.slice(시작위치)
// 문자열.slice(시작위치, 끝위치)
let str4 = "Good morning.";
str.slice(4); // " morning." (4번째 위치부터 끝까지 자르기)
str4.slice(0, 4); // "Good"
str4.slice(-5, 12); // "ning"

// 4️⃣ 구분자에 따라 문자 쪼개기 : split()
// - 구분자를 기준으로 쪼개서 새로운 배열에 반환한다.
// 문자열.split(구분자)
let str5 = "Hello everyone";
array1 = str5.split(" "); // ["Hello", "everyone"] (공백을 기준으로 문자열 자르기)

// 문자열을 각각의 글자로 나누어서 글자별로 구분할 때는 큰따옴표와 큰따옴표 사이에 공백이 없어야 한다.
array2 = str5.split(""); // ['H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']
