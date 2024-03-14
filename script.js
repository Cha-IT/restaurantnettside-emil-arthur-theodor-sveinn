var starterBtn = document.querySelector("#starterBtn");

starterBtn.onclick = () => {
  var starter = document.querySelector("#starter");
  show_list(starter);
};
function show_list(dropDown) {
  if (dropDown.style.display == "block") {
    dropDown.style.display = "none";
  } else {
    dropDown.style.display = "block";
  }
}
