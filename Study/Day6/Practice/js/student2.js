let xhr = new XMLHttpRequest();

xhr.open("GET", "student2.json");
xhr.send();

xhr.onreadystatechange = function () {
  // 서버에서 제대로 자료를 가져온 상태인 경우
  if (xhr.readyState === 4 && xhr.status === 200) {
    let students = JSON.parse(xhr.responseText);

    renderHTML(students);
  }
};

function renderHTML(contents) {
  let output = "";

  for (let content of contents) {
    output += `
      <h2>${content.name}</h2>
      <ul>
        <li>전공 : ${content.major}</li>
        <li>학년 : ${content.grade}</li>
      </ul>
      <hr>
    `;
  }
  document.getElementById("result").innerHTML = output;
}

// forEach 문을 사용할 경우
// function renderHTML(contents) {
//   let output = '';
//   contents.forEach(function (content) {
//     output += `
//       <h2>${content.name}</h2>
//       <ul>
//         <li>전공 : ${content.major}</li>
//         <li>학년 : ${content.grade}</li>
//       </ul>
//       <hr>
//     `;
//   });
//   document.getElementById("result").innerHTML = output;
// }
