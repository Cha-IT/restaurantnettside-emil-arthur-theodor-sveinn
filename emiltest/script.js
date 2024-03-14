// const Http1 = new XMLHttpRequest();
// const allcaturl='https://www.themealdb.com/api/json/v1/1/categories.php';
// 
// Http1.open("GET", allcaturl);
// Http1.send();
// Http1.onreadystatechange = function() {
//     if (Http1.readyState == XMLHttpRequest.DONE) {
//         const obj = JSON.parse(Http1.responseText);
//         console.log(obj);
//     }
// }

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
        console.log(obj['meals'][Math.floor(Math.random() * Object.keys(obj['meals']).length)]['strMeal']);
    }
}