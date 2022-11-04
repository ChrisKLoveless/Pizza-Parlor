// Business Logic for Pizza
function Pizza(size, sauce, cheese, meat, veggie) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.veggie = veggie;
}

Pizza.prototype.price = function () {
  if (this.size === "large") {
    return "That will cost you:  $14.99";
  } else if(this.size === "medium") {
    return "That will cost you:  $12.99";
  } else if(this.size === "small") {
    return "That will cost you:  $9.99";
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