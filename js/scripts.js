// Business Logic for Order
function Orders() {
  this.pizzas = {};
  this.currentId = 0;
}

Orders.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}

Orders.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for Pizza
function Pizza(size, sauce, cheese, meat, veggie) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.veggie = veggie;
}

Pizza.prototype.price = function () {
  if (this.size === "mini") {
    return "That will cost you:  $7.50";
  } else if(this.size === "small") {
    return "That will cost you:  $13.95";
  } else if(this.size === "medium") {
    return "That will cost you:  $18.95";
  } else if(this.size === "large") {
    return "That will cost you:  $22.95";
  } else if(this.size === "giant") {
    return "That will cost you:  $25.95";
  }
};

// UI Logic
let newOrder = new Orders();

function handleSubmit(event) {
  event.preventDefault();

  const pSize = document.getElementById("size").value;
  const pSauce = document.getElementById("sauce").value;
  const pCheese = document.getElementById("cheese").value;
  const pMeat = document.getElementById("meat").value;
  const pVeggie = document.getElementById("veggie").value;

  const newPizza = new Pizza(pSize, pSauce, pCheese, pMeat, pVeggie);
  const newPrice = newPizza.price();
  const pizzaInfo = newPizza.size + " " + newPizza.sauce + " " + newPizza.cheese + " " + newPizza.meat + " " + newPizza.veggie;
  document.querySelector("h3#cost").innerHTML = newPrice + " " + pizzaInfo;
  document.querySelector("h3#cost").classList.remove("invisible");

  newOrder.addPizza(newPizza);
}

const reset = function () {
  document.location.reload();
}

window.addEventListener("load", function () {
  document.getElementById("form").addEventListener("submit", handleSubmit);
  document.getElementById("reset-btn").addEventListener("click", reset);
});