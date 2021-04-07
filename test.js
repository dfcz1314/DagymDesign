function onClickButton() {
  //   let value = $(this).closest("#re_parentCoNum").val();
  //   console.log(value);

  let form = $(this).parent();
  let parentCoNum = form.children("#re_parentCoNum").val();
  let comments = form.children(".comment_write_area").children().val();

  console.log("부모 : ", parentCoNum);
  console.log("코멘트 : ", comments);
}

$(function () {
  $(".recomment_save_btn").on("click", onClickButton);
});
