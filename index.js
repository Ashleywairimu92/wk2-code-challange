const header = document.getElementById("header")
header.style = "color: purple";


let items = ["sugar", "milk", "bread", "maize flour", "wheat flour", "potatoes", "onions", "cabbage", "charcoal", "mangoes"];

const ul = document.getElementById("shopping_List");
ul.style = "color:maroon";
items.forEach(element =>{
    let li = document.createElement('li');
    li.textContent =element; 

    ul.appendChild(li);
});                                          


