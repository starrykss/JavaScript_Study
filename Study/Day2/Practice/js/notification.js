const bttn = document.querySelector("#bttn");
const notificationBox = document.querySelector("#noti-box");

bttn.addEventListener("click", () => {
  const notification = document.createElement("div");
  notification.classList.add("noti"); // 스타일 적용
  notification.innerText = "알림이 도착했습니다."; // 내용 추가
  notificationBox.appendChild(notification);

  // 3초 뒤에 사라지도록 설정
  setTimeout(() => {
    notification.remove();
  }, 3000);
});
