//달력 관련

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    headerToolbar: {
      start: "",
      center: "prev title next",
      end: "today",
    },
    titleFormat: function (date) {
      return `${date.date.year}년 ${date.date.month + 1}월`;
    },
    contentHeight: 400,
    dayHeaderContent: function (date) {
      let weekList = [["asd", "bxcz"], "월", "화", "수", "목", "금", "토"];
      return weekList[date.dow];
    },
  });
  calendar.render();
});

// 음식 검색
const search = () => {
  let menu = $("#menu").val();
  let data = {};
  let url =
    "http://openapi.foodsafetykorea.go.kr/api/454c90aa80ae4a1ca314/I2790/json/1/1000/DESC_KOR=" +
    menu;
  $.get(url, data)
    .done(function (data) {
      console.log("성공");
      let row = data["I2790"]["row"];
      for (let i = 0; i < row.length; i++) {
        let menuName = row[i]["DESC_KOR"];
        let content = "<tr>";
        content += "<td>" + menuName + "</td>";
        for (let j = 1; j < 5; j++) {
          content += "<td>" + row[i][`NUTR_CONT${j}`] + "</td>";
        }
        content += `<td><button onclick="add('${menuName}')">추가하기</button></td>`;
        content += "</tr>";
        $("#b").append(content);
        console.log(content);
      }
    })
    .fail(function (data) {
      console.log("실패");
    });
};
