// ✏️ JSON(JavaScript Object Notation)
// - 서버와 클라이언트 사이에 자료를 주고받을 때 자주 사용하는 형식
// - 자바스크립트 객체 표기법을 사용하는 텍스트 형식의 자료

// 1️⃣ JSON이란?
// - 서버와 클라이언트 간에 자료를 주고 받으려면 양쪽 컴퓨터 모두 이해할 수 있는 형식을 사용해야 한다.
// - XML은 컴퓨터에서 처리하는 모든 문서의 표준 형식이므로 웹에서도 표준 형식으로 사용하지만, 최근에는 JSON 형식을 더 많이 사용한다.
// - 텍스트로만 구성되어 서버와 클라이언트 사이에 주고받을 때 아주 빠르게 전송된다.
// - 프로그래밍 언어나 플랫폼에 대해 독립적이다. (C++/Java/JavaScript/Python 등 많은 언어에서 사용 가눙)
// - 자바스크립트 객체로 쉽게 변환 가능
// - 대부분의 공개 API에서 JSON 형식 사용

// (1) JSON의 형식
// - 중괄호({}) 사이에 이름(Name)과 값(Value)으로 구성되고, 쉼표로 구분해서 여러 개의 쌍을 나열할 수 있다.
// {
//     "이름": "값";
//     // ...
// }

// - JSON은 자바스크립트의 리터럴 표기법을 사용하므로 객체와 아주 비슷하게 생겼지만, 객체에서는 '키' 부분에 큰따옴표가 붙지 않는 반면, JSON에서는 '이름' 부분에 반드시 큰따옴표를 붙여야 하는 차이점이 있다.

// 객체로 표현할 때
{
    name: "김자바",
    major: "컴퓨터공학",
    grade: 2
}

// JSON으로 표현할 때
{
    "name": "김자바",
    "major": "컴퓨터공학",
    "grade": 2
}

// - 실제로 프로그램에서 인식하는 JSON은 다음과 같이 하나의 문자열이다. (그래서 'JSON 문자열'이라고도 한다.)
{ "name": "김자바", "major": "컴퓨터공학", "grade": 2 }

// - 객체의 '값'에는 기본 자료형 뿐만 아니라 function() 함수도 사용할 수 있고, 이것을 활용해서 객체 안에 함수(메서드)를 함께 정의할 수 있다.
// - 하지만, JSON의 '값'에는 숫자, 문자열, Boolean, null, 배열만 사용할 수 있고, 함수는 사용할 수 없다. ⚠️

// (2) JSON의 이름
// - JSON 자료의 '이름' 부분은 반드시 큰따옴표("")로 묶어야 한다.
// - '이름'에 작은 따옴표를 사용하거나 큰따옴표가 없는 이름은 JSON에서 사용할 수 없다.
{ "name": "김자바" }   // O
{ 'name': "김자바" }   // X
{ name: "김자바" }     // X

// - JSON '이름'에는 공백이나 하이픈(-), 언더바(_)를 함께 사용할 수 있다.
{ "full name": "김자바" }   // O
{ "full-name": "김자바" }  // O
{ "full_name": "김자바" }  // O

// 하지만, 이름에 공백이나 하이픈(-)이 있으면 프로그램을 통해 그 이름에 접근할 때 쉽지 않다. ⚠️
// 그래서 둘 이상의 단어로 된 이름을 사용한다면, 다음과 같이 언더바(_)를 사용하는 것이 좋다.
{ "full_name": "김자바" } 

// (3) JSON의 값
// - JSON 자료의 값에서는 수(number), 문자열(string), 논리값(boolean), null과 같은 기본 자료형과 배열, 객체와 같은 복합 자료형을 사용할 수 있다.

// [1] 숫자형 : 정수, 실수 사용 가능. 8진수/16진수를 사용한 표기법 미지원
48, -72, 25.7, -9.4, 2.3e4

// [2] 문자열 : 항상 큰따옴표("")로 묶어야 한다. (작은따옴표는 사용하지 않는다. ⚠️)
"자바스크립트", "HTML5"

// [3] 논리값과 null : true/false/null 사용 가능
true, false, null

// [4] JSON 문자열과 배열
// - JSON 문자열에는 또 다른 JSON 문자열이나 배열을 값으로 사용할 수 있다.
// - 일반 배열과 마찬가지로 대괄호([])를 사용하여 배열을 표현한다.
{
    "name": "김자바",
    "major": "컴퓨터공학",
    "grade": 2,
    "course": ["웹기초", "자바스크립트", "인공지능"]
}

{
    "name": "김자바",
    "major": "컴퓨터공학",
    "grade": 2,
    "course": {
        "title": "웹기초",
        "timePerWeek": 3
    }
}

// - 배열에 여러 개의 JSON 문자열을 묶을 수도 있다.
// (참고 : https://jsonplaceholder.typicode.com/users)
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]

// 이렇게 JSON 문자열을 사용하면 하나의 JSON 문자열 안에 수많은 정보를 저장할 수 있다.

// 2️⃣ 객체를 JSON 자료로 변환하기 : JSON.stringify()
// - 자바스크립트 프로그램에서 만든 객체를 JSON 형식으로 저장해야 하거나, JSON 형식을 요구하는 서버로 자료를 보내야 할 경우에는 객체 형식을 JSON 형식으로 변환해야 한다.
// (이렇게 객체를 JSON 문자열로 변환하는 것을 직렬화(Stringify)라고 한다.)
// JSON.stringify(객체)
let student = { name : "김자바", major : "컴퓨터과학", grade: 2 };
let json = JSON.stringify(student);

student === json;   // false (student는 객체(object), json은 문자열(string))
json;  // '{"name":"김자바","major":"컴퓨터과학","grade":2}' (JSON)

// 3️⃣ JSON 문자열을 객체로 변환하기 : JSON.prase()
// - 서버에서 JSON 문자열을 가져오려면 별도의 함수가 필요하다.
// - JSON 문자열을 자바스크립트 객체로 변환하는 것을 파싱(Parsing)이라고 한다.
// JSON.parse(JSON_문자열)

// JSON은 문자열이므로 문자열을 나타내는 작은 따옴표('')를 JSON 앞뒤에 붙인다.
let member = '{ "name": "김자바", "age": 30, "hobby": "swimming" }';
let member_obj = JSON.parse(member);

member_obj;   // {name: '김자바', age: 30, hobby: 'swimming'} (Object)