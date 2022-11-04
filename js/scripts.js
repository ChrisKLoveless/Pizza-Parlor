// Business Logic for Order
function Orders() {
  this.pizzas = {};
  this.currentId = 0;
}

Orders.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Orders.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Orders.prototype.findPizza = function (id) {
  if (this.pizzas[id] !== undefined) {
    return this.pizzas[id];
  }
  return false;
};
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
  } else {
    return "Please make a selection for all fields"
  }
};

Pizza.prototype.pizzaOrderInfo = function () {
  return this.size + " " + this.sauce + " " + this.cheese + " " + this.meat + " " + this.veggie;
}

// UI Logic
let newOrder = new Orders();

function listOrders(orderToDisplay) {
  let orderInfo = document.querySelector("div#order-list");
  orderInfo.innerText = null;
  const ul = document.createElement("ul");
  Object.keys(orderToDisplay.pizzas).forEach(function (key) {
    const pizza = orderToDisplay.findPizza(key);
    const li = document.createElement("li");
    li.append(pizza.pizzaOrderInfo());
    li.setAttribute("id", pizza.id);
    ul.append(li);
  });
  orderInfo.append(ul);
}

function displayOrderDetails(event) {
  const pizza = newOrder.findPizza(event.target.id);
  document.querySelector(".pizza-size").innerText = pizza.size;
  document.querySelector(".pizza-sauce").innerText = pizza.sauce;
  document.querySelector(".pizza-cheese").innerText = pizza.cheese;
  document.querySelector(".pizza-meat").innerText = pizza.meat;
  document.querySelector(".pizza-veggie").innerText = pizza.veggie;
  document.querySelector("div#order-details").removeAttribute("class");
}


function handleSubmit(event) {
  event.preventDefault();

  const pSize = document.getElementById("size").value;
  const pSauce = document.getElementById("sauce").value;
  const pCheese = document.getElementById("cheese").value;
  const pMeat = document.getElementById("meat").value;
  const pVeggie = document.getElementById("veggie").value;

  const newPizza = new Pizza(pSize, pSauce, pCheese, pMeat, pVeggie);
  const newPrice = newPizza.price();
  document.querySelector("h3#cost").innerHTML = newPrice;
  document.querySelector("h3#cost").classList.remove("invisible");

  newOrder.addPizza(newPizza);
  listOrders(newOrder);

  document.querySelector("select#size").value = null;
  document.querySelector("select#sauce").value = null;
  document.querySelector("select#cheese").value = null;
  document.querySelector("select#meat").value = null;
  document.querySelector("select#veggie").value = null;
}

const reset = function () {
  document.location.reload();
}

window.addEventListener("load", function () {
  document.getElementById("form").addEventListener("submit", handleSubmit);
  document.querySelector("div#order-list").addEventListener("click", displayOrderDetails)
  document.getElementById("reset-btn").addEventListener("click", reset);
});