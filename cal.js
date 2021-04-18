<<<<<<< HEAD
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
=======
//달력 관련

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    //한글버전
    locale: "ko",
    initialView: "dayGridMonth",
    headerToolbar: {
      start: "",
      center: "prev title next",
      // end: "dayGridMonth,timeGridWeek,timeGridDay",
      end: "",
    },
    contentHeight: 700,

    events: [
      {
        // this object will be "parsed" into an Event Object
        title: "김수미 회원님 PT", // a property!
        start: "2021-04-02T12:30:00",
      },
    ],
    // 날짜 클릭했을 때
    // dateClick: function () {
    //   alert("날짜 클릭");
    // },
    // // 이벤트를 클릭했을 때
    eventClick: function (info) {
      alert(info.event.title);
    },
    dayMaxEventRows: true, // for all non-TimeGrid views
    views: {
      timeGrid: {
        dayMaxEventRows: 6, // adjust to 6 only for timeGridWeek/timeGridDay
      },
    },
  });

  calendar.render();

  calendar.on("dateClick", function (info) {
    window.open(
      "a.html",
      "네이버새창",
      "width=400, height=400, toolbar=no, menubar=no, scrollbars=no, resizable=yes"
    );
  });
  calendar.on("eventClick", function (info) {
    // console.log(info["el"]);
  });

  calendar.addEvent({ title: "evt4", start: "2021-04-15T12:30:00" });
  calendar.addEvent({ title: "evt2", start: "2021-04-11T12:30:00" });

  // 캘린더 이벤트 배열타입으로 다 가져옴
  var arrCal = calendar.getEvents();
  // alert(arrCal[0].title, arrCal[0].title);

  // console.log(calendar.getOption("locale"));
});
>>>>>>> c2de1c3d04cb9f8322b548974c9494d5b475b428
