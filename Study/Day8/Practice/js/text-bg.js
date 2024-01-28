const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.font = "bold 300px sans-serif";
ctx.fillText("GOOD", 100, 320);

ctx.beginPath();
ctx.globalCompositeOperation = "source-in"; // 나중에 작성한 그래픽 요소(source)가 먼저 작성한 요소(destination)보다 위에 나타나도록 표시

let img = new Image();

img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
img.src = "images/text-bg.jpg";
