var starterBtn = document.querySelector("#starterBtn");
var sideBtn = document.querySelector("#sideBtn");
var breakfastBtn = document.querySelector("#breakfastBtn");
var dessertBtn = document.querySelector("#dessertBtn");
var vegitarianBtn = document.querySelector("#vegitarianBtn");

starterBtn.onclick = () => {
  var starter = document.querySelector("#starter-dropDown");
  show_list(starter);
};

sideBtn.onclick = () => {
  var side = document.querySelector("#side-dropDown");
  show_list(side);
};
breakfastBtn.onclick = () => {
  var breakfast = document.querySelector("#breakfast-dropDown");
  show_list(breakfast);
};
dessertBtn.onclick = () => {
  var dessert = document.querySelector("#dessert-dropDown");
  show_list(dessert);
};
vegitarianBtn.onclick = () => {
  var vegitarian = document.querySelector("#vegitarian-dropDown");
  show_list(vegitarian);
};

function show_list(dropDown) {
  if (dropDown.style.display == "block") {
    dropDown.style.display = "none";
  } else {
    dropDown.style.display = "block";
  }
}
