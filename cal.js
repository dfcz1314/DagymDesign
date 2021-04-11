document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new Calendar(calendarEl, {
    initialView: "dayGridMonth",
    plugins: ["interaction", "dayGrid", "timeGrid"],
    header: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar
    drop: function (info) {
      // is the "remove after drop" checkbox checked?
      if (checkbox.checked) {
        // if so, remove the element from the "Draggable Events" list
        info.draggedEl.parentNode.removeChild(info.draggedEl);
      }
    },
    dateClick: function () {
      alert("a day has been clicked!");
    },
    contentHeight: 400,
    dayHeaderContent: function (date) {
      let weekList = ["일", "월", "화", "수", "목", "금", "토"];
      return weekList[date.dow];
    },
    locale: "ko",
  });
  calendar.render();
});

//Calendar 초기화 후 클릭 이벤트 추가
calendar.on("dateClick", function (info) {
  console.log("clicked on " + info.dateStr);
});

calendar.addEvent({ title: "evt4", start: "2019-09-04", end: "2019-09-06" });
var arrCal = calendar.getEvents();
alert(arrCal[0].title);
// var calendarEl = document.getElementById("calendar");

// var calendar = new FullCalendar.Calendar(calendarEl, {
//   initialView: "dayGridMonth",
//   headerToolbar: {
//     start: "",
//     center: "prev title next",
//     end: "today",
//   },
//   titleFormat: function (date) {
//     return `${date.date.year}년 ${date.date.month + 1}월`;
//   },
//   contentHeight: 400,
//   dayHeaderContent: function (date) {
//     let weekList = ["일", "월", "화", "수", "목", "금", "토"];
//     return weekList[date.dow];
//   },
// });
// calendar.render();
