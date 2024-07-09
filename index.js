
try {
    document.addEventListener("DOMContentLoaded", (event) => {
        loadList();
    });
} catch (error) {
    console.log(error)
}

const header = document.getElementById("header");
header.style.color = "purple";

let items = ["sugar", "milk", "bread", "maize flour", "wheat flour", "potatoes", "onions", "cabbage", "charcoal", "mangoes"];

const ul = document.getElementById("shopping_List");
    ul.style.color = "maroon";
items.forEach(element => {
    let li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
});

const addItemButton = document.getElementById("add");
function add() {
    let newItem = prompt("enter a new item:");
    if (newItem) {
        let li = document.createElement('li');
        li.textContent = newItem;
        ul.appendChild(li);
    }
}
addItemButton.addEventListener('click', add);

const markPurchaseButton = document.getElementById("markPurchased");
function markPurchased() {
    const items = ul.getElementsByTagName('li');
    for (let item of items) {
        item.style.textDecoration = "line-through";
    }
};
markPurchaseButton.addEventListener('click', markPurchased);

const clearListButton = document.getElementById("clearList");
function clearList() {
    ul.innerHTML = '';
;}
clearListButton.addEventListener('click', clearList);


function loadList() {
    // Additional logic for loading list if needed
}

