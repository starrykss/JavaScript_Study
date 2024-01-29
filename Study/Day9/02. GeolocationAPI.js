// ✏️ Geolocation API
// - 지오로케이션(Geolocation) API는 PC용 웹 브라우저나 모바일 장치에서 현재의 위치 정보를 파악할 수 있게 해주는 인터페이스이다.

// 1️⃣ 위치 정보 서비스 알아보기
// - 위치 정보를 악용하면 본인의 의사와 상관 없이 자신의 위치가 추적될 수 있어서 사생활을 침해할 수 있다.
// - 그래서 사용자 위치 정보는 무조건 사용하는 것이 아닌, 사용자가 동의해야만 사용할 수 있다.
// - 크롬, 파이어폭스, 사파리 등 모던 웹 브라우저에서는 http 프로토콜을 사용하는 사이트에서 지오로케이션 API를 사용할 수 없게 하고 있다.
// -> 반드시 https 프로토콜 환경에서만 사용해야 한다.

// 2️⃣ Geolocation 객체
// - 지오로케이션 API를 사용하면 간단히 위치를 알아내고 움직이는 사용자의 위치까지 추적할 수 있다.
// - 지오로케이션 API를 실행하는 메서드들은 window.navigator 객체의 자식 객체인 geolocation 객체에 포함되어 있다.

// (1) getCurrentPosition() : 사용자의 현재 위치 확인하기
// - 하드웨어 장치에게 사용자 위치를 알려 주기 위해 최신 정보를 요청한다.
// - 그리고 위치를 찾았을 때 실행할 콜백 함수와 오류가 발생했을 때 처리할 콜백 함수를 지정한다.
// getCurrentPosition(successCallback[, errorCallback, options])
// -> successCallback : 메서드를 실행해서 위치를 성공적으로 가져왔을 때 실행할 콜백 함수
// -> errorCallback : 메서드를 실행해서 위치를 가져오지 못했을 때 실행할 콜백 함수 (선택 항목)
// -> options : 위치 확인에 걸리는 시간 제한이나 정확도를 높게 할 것인지에 대한 여부 등 위치 정보를 확인할 때 사용하는 옵션 (선택 항목)

// - options 매개변수에는 다음 3가지 프로퍼티를 사용할 수 있다.
/*
    1. enableHighAccuracy : 위치 정보의 정확도를 높일 것인지 여부 지정 (true/false)
    2. maximumAge : 위치 정보의 유효 기간 지정 (ms 단위, 지정한 기간이 지나면 새로운 위치 정보 가져옴, 0으로 지정하면 항상 새로운 위치 정보 확인, 기본값 : infinity(무한))
    3. timeout : 위치 정보를 확인하는 데 걸리는 시간 제한 (ms 단위, 제한 시간 안에 위치 정보를 확인할 수 없으면 오류 발생)
*/

// (2) position 객체 : 위치 정보 저장하기
// - getCurrentPosition() 메서드를 사용해서 사용자의 현재 위치를 가져오면 해당 정보는 position 객체에 저장된다.
// - position 객체에는 주소 정보, 경도/위도 좌표 정보, 가져온 시간 등이 저장된다.
// - position 객체의 프로퍼티는 모두 읽기 전용이다. ⚠️
// - 자주 사용하는 position 객체의 프로퍼티로는 다음이 있다.
/*
    1. address.country : 주소 중 국가
    2. address.city : 주소 중 시
    3. address.postalCode : 주소 중 우편번호
    4. address.street : 주소 중 거리 이름
    5. coords.latitude : 위치의 경도 (degree로 표시)
    6. coords.longitude : 위치의 위도 (degree로 표시)
    7. coords.speed : 이동 중일 경우 사용자의 움직이는 속도 (m/s로 표시)
    8. timestamp : 위치 정보를 가져온 시간
    
*/

<button id="getLocation">위치 정보 가져오기</button>
<div id="result"></div>

const getLocation = document.getElementById("getLocation");

getLocation.addEventListener("click", function (e) {
  e.preventDefault();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
  } else {
    alert("지오로케이션을 지원하지 않습니다.");
  }
});

function showPosition(position) {
  document.querySelector(
    "#result"
  ).innerHTML = `<b>위도:</b> ${position.coords.latitude}, <b>경도:</b> ${position.coords.longitude}`;
}

function errorPosition(err) {
  alert(err.message);
}

// (3) watchPosition() 메서드 : 지정한 시간마다 위치 확인하기
// - 현재 위치를 단 한 번만 가져온다.
// - 계속 움직이면서 현재의 위치를 파악해야 할 경우에는 watchPosition() 메서드를 사용할 수 있다.
// - clearWatch() 메서드를 이용해서 위치 확인을 종료할 때까지 지정한 시간마다 현재 위치를 확인한다.
// - 반환값은 정수이다.
// watchPosition(successCallback[, errorCallback, options])
// -> successCallback : 메서드를 실행해서 위치를 성공적으로 가져왔을 때 실행할 콜백 함수
// -> errorCallback : 메서드를 실행해서 위치를 가져오지 못했을 때 실행할 콜백 함수 (선택 항목)
// -> options : 위치 확인에 걸리는 시간 제한이나 정확도를 높게 할 것인지에 대한 여부 등 위치 정보를 확인할 때 사용하는 옵션 (선택 항목)

// - watchPosition() 메서드를 종료하면 watchPosition() 메서드에서 반환한 값을 사용해 clearWatch() 메서드를 실행한다.
// clearWatch(id)
// -> id : watchPosition() 메서드에서 반환된 값

const getLocation = document.getElementById("getLocation");

getLocation.addEventListener("click", function (e) {
  e.preventDefault();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const options = {
      enableHighAccuracy: true,   // 정확도 높이기
      timeout: 5000,   // 위치 정보 확인 제한 시간 5.000 밀리초로 지정
      maximumAge: 0,  // 바뀐 위치값을 곧바로 확인
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );

    setTimeout(function () {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("지오로케이션을 지원하지 않습니다.");
  }
});

function showPosition(position) {
  document.querySelector("#result").innerHTML = `
        <b>위도:</b> ${position.coords.latitude}, <b>경도:</b> ${position.coords.longitude}
      `;
}

function errorPosition(err) {
  alert(err.message);
}

// -> 정확도를 높이고(true), 위치 정보를 확인하기 위한 제한 시간을 5.000 밀리초로 하며(timeout:5000), 바뀐 위치값을 곧바로 확인하도록(maximumAge: 0) 옵션을 지정

// - 모바일 기기의 경우 계속 위치를 추적하다 보면 배터리가 빨리 소모된다.
// -> clearWatch() 메서드를 사용해 특정 버튼을 클릭하거나 지정한 시간이 넘으면 위치 추적을 멈추게 할 수 있게 하는 것이 좋다.