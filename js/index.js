$(document).ready(function () {
  var sticky_box = document.getElementById("sticky_box");
  window.onscroll = function () {
    scrollFunction();
  };
  $(sticky_box).click(function () {
    scrollBack();
  });
  function scrollFunction() {
    if (document.documentElement.scrollTop > 500) {
      sticky_box.style.display = "block";
    } else {
      sticky_box.style.display = "none";
    }
  }
  function scrollBack() {
    document.documentElement.scrollTop = 0;
  }
});
