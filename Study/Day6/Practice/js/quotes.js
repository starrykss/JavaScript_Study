// const quotesURL = "http://dummyjson.com/quotes";
//
// fetch(quotesURL)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // 데이터 구조 파악. 한 번에 가져오는 데이터 갯수 확인
//   })
//   .catch((error) => console.log(error));

const quotesURL = "http://dummyjson.com/quotes";

fetch(quotesURL)
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30); // 0 이상 29 이하의 수

    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerHTML = ` - ${data.quotes[random].author}`;
  })
  .catch((error) => console.log(error));
