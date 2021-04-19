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
      end: "",
    },
    contentHeight: 300,

    // 날짜 클릭했을 때
    // dateClick: function () {
    //   alert("날짜 클릭");
    // },
    // // 이벤트를 클릭했을 때
    // eventClick: function (info) {
    // },
    dayMaxEventRows: true, // for all non-TimeGrid views
    views: {
      timeGrid: {
        dayMaxEventRows: 6, // adjust to 6 only for timeGridWeek/timeGridDay
      },
    },
  });

  calendar.render();

  calendar.on("dateClick", function (info) {});
  calendar.on("eventClick", function (info) {});
});
