var starterBtn = document.querySelector("#starterBtn");
var sideBtn = document.querySelector("#sideBtn");

starterBtn.onclick = () => {
  var starter = document.querySelector("#starter-dropDown");
  show_list(starter);
};

sideBtn.onclick = () => {
  var side = document.querySelector("#side-dropDown");
  show_list(side);
};

function show_list(dropDown) {
  if (dropDown.style.display == "block") {
    dropDown.style.display = "none";
  } else {
    dropDown.style.display = "block";
  }
}
