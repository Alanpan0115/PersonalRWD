$(document).ready(function () {
  // 监听下拉按钮的点击事件
  $("#dropbtn").click(function (event) {
    event.stopPropagation(); // 阻止事件冒泡，避免立即隐藏下拉选单
    $("#box").toggleClass("open");
    let box = $(".box");
    if ($(".box").height() === 0) {
      $(".box").height(200);
    }
  });

  // 监听文档的点击事件
  $(document).click(function (event) {
    // 检查点击事件是否发生在 #dropbtn 或 .box 内
    if (
      !$("#dropbtn").is(event.target) &&
      !$(".box").is(event.target) &&
      $(".box").has(event.target).length === 0
    ) {
      $(".box").height(0); // 隐藏下拉选单
      $("#box").removeClass("open");
    }
  });
});
