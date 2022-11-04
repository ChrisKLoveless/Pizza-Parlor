// Business Logic for Pizza
function Pizza(size, sauce, cheese, meat, veggie) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.veggie = veggie;
}

Pizza.prototype.price = function() {
  if(this.size === "large") {
    return "Your price is $12.99";
  }
}




// UI Logic
function handleSubmit(event) {
  event.preventDefault();

}

window.addEventListener("load", function () {
  this.document.getElementById("form").addEventListener("submit", handleSubmit);
})