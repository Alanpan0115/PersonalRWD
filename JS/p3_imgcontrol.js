// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
//var modalImg = document.getElementsByClassName("img01");

img1.onclick = function () {
  modal1.style.display = "block";
};
img2.onclick = function () {
  modal2.style.display = "block";
};
img3.onclick = function () {
  modal3.style.display = "block";
};

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = "none";
};
span2.onclick = function () {
  modal2.style.display = "none";
};
span3.onclick = function () {
  modal3.style.display = "none";
};
