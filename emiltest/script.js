const catlist = ["Starter", "Side", "Breakfast", "Dessert", "Vegetarian"]
var category = catlist[Math.floor(Math.random() * catlist.length)]
console.log(category);

const Http2 = new XMLHttpRequest();
const filtercaturl='https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category;

Http2.open("GET", filtercaturl);
Http2.send();
Http2.onreadystatechange = function() {
	if (Http2.readyState == XMLHttpRequest.DONE) {
		const obj = JSON.parse(Http2.responseText);
		console.log(obj);
		if (Object.keys(obj['meals']).length >= 5) {
			for (let i = 0; i < 5; i++) {
				console.log(obj['meals'][i]['strMeal']);
			}
		} else {
			for (let i = 0; i < Object.keys(obj['meals']).length; i++) {
				console.log(obj['meals'][i]['strMeal']);
			}
		}
	}
}