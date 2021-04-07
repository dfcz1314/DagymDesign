// function buttonToggle() {
//   $(this).next().toggleClass("on off");
//   $(this).attr("value", "닫기");
// }

// $(".toggleButton").on("click", buttonToggle);

function button() {
  $(this).next().toggleClass("on off");
}

$(".toggleButton").on("click", button);
