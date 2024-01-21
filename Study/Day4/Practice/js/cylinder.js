// 원기둥의 부피 구하기
// 생성자 함수로 나타내기
/*
function Cylinder(cylinderDiameter, cylinderHeight) {
  this.diameter = cylinderDiameter; // 지름
  this.height = cylinderHeight; // 높이

  this.getVolume = function () {
    let radius = this.diameter / 2; // 반지름 계산

    return parseFloat((Math.PI * radius * radius * this.height).toFixed(2)); // 소수점 2자리로 고정 (원기둥 부피 = πr²h)
  };
}
*/
// 클래스로 나타내기

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }

  getVolume = function () {
    let radius = this.diameter / 2;

    return parseFloat((Math.PI * radius * radius * this.height).toFixed(2)); // 소수점 2자리로 고정 (원기둥 부피 = πr²h)
  };
}

// let cylinder = new Cylinder(8, 10); // 인스턴스 생성
// console.log(`원기둥의 부피는 ${cylinder.getVolume()}입니다.`); // 결과값 표시

let button = document.querySelector("#submit");
let result = document.querySelector("#result");

button.onclick = document.addEventListener("click", function (e) {
  e.preventDefault();

  const diameter = document.querySelector("#diameter").value;
  const height = document.querySelector("#height").value;

  // 빈 공간일 경우 처리
  if (diameter === "" || height === "") {
    result.innerText = `지름값과 높잇값을 입력하세요.`;
  } else {
    let cylinder = new Cylinder(parseInt(diameter), parseInt(height)); // 인스턴스 생성
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}입니다.`;
  }
});
