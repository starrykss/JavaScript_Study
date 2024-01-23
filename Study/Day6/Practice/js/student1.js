let xhr = new XMLHttpRequest();

xhr.open("GET", "student1.json", true);
xhr.send();

xhr.onreadystatechange = function () {
  // 서버에서 제대로 자료를 가져온 상태인 경우
  if (xhr.readyState === 4 && xhr.status === 200) {
    let student = JSON.parse(xhr.responseText);

    document.getElementById("result").innerHTML = `
            <h1>${student.name}</h1>
            <ul>
              <li>전공 : ${student.major}</li>
              <li>학년 : ${student.grade}</li>
            </ul>
        `;
  }
};
