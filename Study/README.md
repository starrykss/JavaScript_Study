# JavaScript Study

<!--
<style>
    .image-container { position: relative; text-align: center; }
    .image-caption { position: absolute; bottom: 0; left: 0; width: 100%; background-color: rgba(0, 0, 0, 0.1); color: #fff; padding: 1px; box-sizing: border-box; font-size: 12px; }
</style>

-->

## JavaScript

### 역사

- Netscape에서 웹 문서를 좀 더 동적으로 표시하기 위해 LiveScript 개발
  - 새로운 기술을 통해서 HTML로는 할 수 없는 기능을 추가
- 1995년, Sun Microsystems가 LiveScript 개발권을 넘겨 받고, 이름을 JavaScript로 변경
- 1996년, JavaScript에 자극을 받은 Microsoft는 Jscript라는 언어를 개발하고 IE 3.0부터 지원하기 시작
  - 이에 대응해 Netscape에서는 JavaScript 기술 규격을 표준화 하기 위해 ECMA(European Computer Manufacturers Association, 유럽컴퓨터제조연합)에 JavaScript를 제출
  - 1997년 6월에 JavaScript는 스크립트 표준으로 채택되고, 공식적으로 이름이 **에크마스크립트(ECMAScript)** 로 정해졌다.
    - ECMAScript는 ECMA-262 표준을 따른다.
- ECMAScript는 새로운 기능이 추가되면서 계속 업그레이드되는데, 그때마다 판(Edition)이 달라진다.
  - 1997년에 초판이 채택되고 그 이후 ES2, ES3처럼 ECMAScript의 약자인 ES 뒤에 판 번호를 붙여서 구별한다.
  - ECMAScript 표준이 1년마다 업그레이드 되었으므로, 에크마스크립트위원회에서는 ES6처럼 이름 뒤에 판 번호를 붙이지 않고 **ECMAScript2015** 처럼 연도를 붙인 것을 공식적인 이름으로 결정한다.
- ECMAScript는 JavaScript를 기반으로 표준화된 스크립트 언어이다. JavaScript는 ECMAScript의 표준 사양을 따르는 가장 유명한 언어이지만, 이 외에도 여러 스크립트 언어가 있다.
  - 그래서 ECMAScript는 JavaScript라고 단적으로 말할 수 없다.
  - 하지만 JavaScript는 ECMAScript의 표준 사양을 따르므로 JavaScript를 공부한다는 것은 ECMAScript를 공부한다는 것과 같다고 할 수 있다.
- 모던 웹 브라우저는 대부분 **ECMAScript 2015(ES6)** 를 지원하고 있다.

<table>
    <tr>
    <td>
        <div class="image-container">
            <img 
                src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvRDIj%2FbtrTsnhqNJf%2F2bBzkpOgVnMOR7fp7EDVp1%2Fimg.png" 
                width=200 
                alt="ECMAScript and JavaScript"
            />
            <div class="image-caption">ECMAScript and JavaScript</div>
        </div>
    </td>
    <td>
        <div class="image-container">
            <img 
                src="https://tech.songyunseop.com/images/posts/es6_01.png" 
                alt="History of JavaScript(ECMAScript)"
            />
            <div class="image-caption">History of JavaScript(ECMAScript)</div>
        </div>
    </td>
    </tr>
</table>

### Front-end Development

- 사용자에게 보여지는 부분
- 웹 사이트나 애플리케이션에서 내용을 작성하고 화면을 디자인하는 것부터 사용자의 동작에 반응해서 결과를 만드는 것들

#### 자주 사용하는 JavaScript 프레임워크와 라이브러리

##### React.js

- 페이스북에서 만든 라이브러리
- 사용자 인터페이스(UI)를 만들 수 있다.
- https://react.dev/

##### Vue.js

- 사용자 인터페이스(UI)를 만들어 주는 프레임워크
- 웹 애플리케이션을 만들 수 있다.
- https://vuejs.org/

##### Angular.js

- Google에서 개발한 프레임워크
- 수많은 기능을 지원하므로 큰 규모의 웹 사이트를 개발하는 데 적합하다.
- https://angular.io/

<div class="image-container">
    <img 
        src="https://images.velog.io/images/longroadhome/post/bde0939c-8d7b-4e4a-b682-d95cf317a657/img.png" 
        width=400
        alt="프론트엔드 3대장(Angular, Vue, React)"
    />
    <div class="image-caption">프론트엔드 3대장(Angular, Vue, React)</div>
</div>

### Back-end Development

- Java, C#, PHP, Python, Go 등의 언어를 사용한다.
- 백엔드 개발에 어떤 언어를 사용할지는 진행하는 프로젝트에 따라 달라진다.
- JavaScript를 사용해서 백엔드를 개발할 때는 Node.js 프레임워크를 사용한다.
- TypeScript는 JavaScript의 자료형을 강하게 제한한 언어이다.

### 스크립트 작성 방법

#### ① 인라인 스크립트(Inline Script)

- HTML 태그 안에 직접 작성하는 방법
- 팝업 창을 열고 닫거나 알림 메시지를 표시할 때처럼 간단한 명령을 처리할 경우 많이 사용

```js
<button onclick="alert('알림 메시지')">클릭</button>
```

#### ② 내부 스크립트(Internal Script)

- `<script>` 태그와 `</script>` 태그를 사용해 JavaScript 소스만 모아 두는 방법
- 웹 문서의 모든 곳에 위치할 수 있고, 한 문서 안에 여러 개의 `<script>` 태그를 사용할 수 있다.
- 보통 모든 웹 요소가 불러와진 후 실행하는 경우가 많기 때문에 `</body>` 태그 앞에 작성한다.

```js
<body>
    <!-- ... -->
    <script>
        // ...
    </script>
</body>
```

#### ③ 외부 스크립트(External Script)

```js
<script src="스크립트_파일_경로"></script>
```

- 최근에는 `<script>` 안에 `defer`라는 속성을 추가해 **_무조건 문서를 다 가져온 후에_** 스크립트 소스를 실행하도록 지정하기도 한다.

```js
<script defer src="스크립트_파일_경로"></script>
```

- 보통 `<haed>`와 `</head>` 태그 사이에 작성한다.

```html
<head>
  <title>Test</title>
  <link rel="stylesheet" href="css/main.css" />
  <script defer src="js/test.js"></script>
</head>
```

### `use strict` (엄격 모드)

- 기본적으로 JavaScript는 **엄격하지 않은 모드(느슨한 모드, Sloppy Mode)** 로 동작한다.
  - 옛날 방식으로 사용해도 되고 새로운 기능에 맞추어서 작성해도 된다.
- 느슨한 모드를 해제하고 최신 버전에 맞는 소스를 작성하려면 스크립트 코드의 맨 위에 `use strict`라고 작성한다.
  - 이전에는 오류가 아니었던 코드를 깐깐하게 오류로 처리하고, JavaScript 엔진을 최적화하는 데 문제가 있는 코드는 걸러낸다.

```js
"use strict";
// ...
```

- **참고** : *https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode*

---

_**※ 참고** : Do It! 모던 자바스크립트 프로그래밍_
