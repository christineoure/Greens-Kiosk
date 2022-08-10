// function pink(){ document.body.style.background = "pink"; }
// let id = document.getElementById("fruitList").style.background = "silver";
// console.log(fruitList);

let body = document.querySelector("body");
body.style.backgroundColor = "#000"
// body.style.backgroundImage = "url(https://blog.bolt.eu/wp-content/uploads/2022/04/grocery-list-1024x536.jpg)"
document.body.style.backgroundRepeat = "repeat-y";
body.style.backgroundSize = "cover"
let title = document.getElementById("title");
title.style.color = "#023020";
body.style.color = "#ffffff"
 
let box= document.querySelector(".box");
box.style.margin = "15%";
box.style.marginLeft = "25%";
box.style.marginTop = "2%";
// box.backgroundColor = "rgb(6, 5, 5,0.75)";
box.style.backgroundImage = "url(https://images.pexels.com/photos/1395004/pexels-photo-1395004.jpeg?auto=compress&cs=tinysrgb&w=400)"
box.style.backgroundRepeat = "repeat-y"
box.style.backgroundSize = "cover"
box.style.width = '50%';
box.style.opacity = "0.9";
box.style.filter  = 'alpha(opacity=90)';
box.style.padding = '20px';
box.style.border = '1px solid';
box.style.borderStyle = 'none';
box.style.borderRadius = '15px';
box.style.boxShadow = '10px 10px 10px green';
 

let h1 = document.querySelector("title");
console.log(h1)

const h3 = document.getElementById("h3");
// var console: Console
console.log(h3);
// h3.style.textTransform = 'uppercase'

let fruit = document.getElementById("fruitList");
let tag = document.createElement("li");
let text = document.createTextNode("Tangerine");
tag.appendChild(text);
fruit.appendChild(tag);
// var element = document.getElementById("new");
// element.appendChild(tag);

let vegetable = document.getElementById("vegList");
let tag1 = document.createElement("li");
let text1 = document.createTextNode("Brocolli");
tag1.appendChild(text1);
vegetable.appendChild(tag1);

