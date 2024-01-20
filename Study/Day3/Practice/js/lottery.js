const raffle = document.querySelector("#raffle");

raffle.addEventListener("click", (e) => {
  e.preventDefault();
  const seed = document.querySelector("#seed");
  const total = document.querySelector("#total");
  const result = document.querySelector("#result");
  let winner = "";

  for (let i = 0; i < total.value; i++) {
    // total.value 번 뽑기
    let picked = Math.floor(Math.random() * seed.value + 1); // 1 이상 seed.value 이하인 수 뽑기
    winner += `${picked}번, `;
  }

  result.innerText = `당첨자 : ${winner}`;
  result.classList.add("show");
});
