let header = document.querySelector("header");
let headerA = document.querySelectorAll("header nav ul li a");

// console.log(headerA);
window.addEventListener("scroll", (e) => {
  if (window.scrollY != 0) {
    header.style.backgroundColor = "gray";
    header.style.color = "white";
    //設定超連結的顏色透過迴圈去抓這四個標籤並將顏色給他們
    headerA.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    headerA.forEach((a) => {
      a.style.color = "";
    });
  }
});
