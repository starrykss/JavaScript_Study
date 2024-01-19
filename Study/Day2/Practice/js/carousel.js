const container = document.querySelector("#container");
const pics = [`pic-1.jpg`, "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"];

container.style.backgroundImage = `url(images/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");
let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;

      // 첫 페이지의 경우
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id == "right") {
      i++;

      // 마지막 페이지의 경우
      if (i >= pics.length) {
        i = 0;
      }
    }
    container.style.backgroundImage = `url(images/${pics[i]})`;
  });
});
