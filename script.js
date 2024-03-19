import menuData from "./menu.json" assert { type: "json" };

var starterBtn = document.querySelector("#starterBtn");
var sideBtn = document.querySelector("#sideBtn");
var breakfastBtn = document.querySelector("#breakfastBtn");
var dessertBtn = document.querySelector("#dessertBtn");
var vegitarianBtn = document.querySelector("#vegitarianBtn");
var starter = document.querySelector("#starter-dropDown");
var side = document.querySelector("#side-dropDown");
var breakfast = document.querySelector("#breakfast-dropDown");
var dessert = document.querySelector("#dessert-dropDown");
var vegitarian = document.querySelector("#vegitarian-dropDown");

starterBtn.onclick = () => {
  show_list(starter);
};

sideBtn.onclick = () => {
  show_list(side);
};
breakfastBtn.onclick = () => {
  show_list(breakfast);
};
dessertBtn.onclick = () => {
  show_list(dessert);
};
vegitarianBtn.onclick = () => {
  show_list(vegitarian);
};

function show_list(dropDown) {
  if (dropDown.style.display == "block") {
    dropDown.style.display = "none";
  } else {
    dropDown.style.display = "block";
  }
}

function addToDropdown(dropDown, mealType) {
  for (var i = 0; i < mealType.length; i++) {
    console.log(mealType[i]);
    let meal = document.createElement("div");
    meal.id = dropDown.id + i;
    document.getElementById(dropDown.id).appendChild(meal);

    document.getElementById(dropDown.id + i).style.border =
      "thick solid #0000FF";

    let name = document.createElement("div");
    name.innerHTML = mealType[i].strMeal;
    document.getElementById(dropDown.id + i).appendChild(name);

    let image = document.createElement("div");
    image.innerHTML = mealType[i].strMealThumb;
    document.getElementById(dropDown.id + i).appendChild(image);

    let price = document.createElement("div");
    price.innerHTML = mealType[i].mealPrice;
    document.getElementById(dropDown.id + i).appendChild(price);

    let description = document.createElement("div");
    description.innerHTML = mealType[i].mealDescription;
    document.getElementById(dropDown.id + i).appendChild(description);

    let allergies = document.createElement("div");
    allergies.innerHTML = mealType[i].mealAllergies;
    document.getElementById(dropDown.id + i).appendChild(allergies);
  }
}

addToDropdown(starter, menuData.starters);
addToDropdown(side, menuData.sides);
addToDropdown(breakfast, menuData.breakfast);
addToDropdown(dessert, menuData.dessert);
addToDropdown(vegitarian, menuData.vegitarian);
