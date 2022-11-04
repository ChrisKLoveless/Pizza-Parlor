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
function handleSubmit(event) {
  event.preventDefault();

  const pSize = document.getElementById("size").value;
  const pSauce = document.getElementById("size").value;
  const pCheese = document.getElementById("size").value;
  const pMeat = document.getElementById("size").value;
  const pVeggie = document.getElementById("size").value;

  const newPizza = new Pizza(pSize, pSauce, pCheese, pMeat, pVeggie);
  const newPrice = newPizza.price();
  document.querySelector("div#cost").innerHTML = newPrice;
  document.querySelector("div#cost").classList.remove("invisible");
}

const reset = function () {
  document.location.reload();
}

window.addEventListener("load", function () {
  document.getElementById("form").addEventListener("submit", handleSubmit);
  document.getElementById("reset-btn").addEventListener("click", reset);
});