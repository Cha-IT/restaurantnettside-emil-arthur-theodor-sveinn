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
  if (dropDown.style.display == "flex") {
    dropDown.style.display = "none";
  } else {
    dropDown.style.display = "flex";
  }
}

function addToDropdown(dropDown, mealType) {
  for (var i = 0; i < mealType.length; i++) {
    let list = document.createElement("li");
    document.getElementById(dropDown.id).appendChild(list);

    let meal = document.createElement("div");
    meal.id = dropDown.id + i;
    meal.className = "mealClass";
    list.appendChild(meal);

    let mealInner = document.getElementById(dropDown.id + i);

    //mealInner.style.backgroundColor = "#f5f5dc";

    let name = document.createElement("div");
    name.innerHTML = mealType[i].strMeal;
    mealInner.appendChild(name);

    let image = document.createElement("div");
    mealInner.appendChild(image);
    let imageInner = document.createElement("img");
    imageInner.className = "img";
    imageInner.src = mealType[i].strMealThumb;
    image.appendChild(imageInner);

    let price = document.createElement("div");
    price.innerHTML = mealType[i].mealPrice;
    mealInner.appendChild(price);

    let description = document.createElement("div");
    description.innerHTML = mealType[i].mealDescription;
    mealInner.appendChild(description);

    let allergies = document.createElement("div");
    allergies.innerHTML = mealType[i].mealAllergies;
    mealInner.appendChild(allergies);
  }
}

addToDropdown(starter, menuData.starters);
addToDropdown(side, menuData.sides);
addToDropdown(breakfast, menuData.breakfast);
addToDropdown(dessert, menuData.dessert);
addToDropdown(vegitarian, menuData.vegitarian);
