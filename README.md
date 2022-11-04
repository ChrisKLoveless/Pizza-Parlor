# Stay Cheesey Pizza Parlor

#### Contributors  _**Chris Loveless**_

#### A website to order a pizza online

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Bootstrap_

## Description

This site will take customer input to order a pizza online. It will then display their order and add additional orders with price for most recent pizza added. 

## Setup/Installation Requirements

1. Access project through github repository (github.com/ChrisKLoveless)
2. Clone repository 
3. Open index.html file in browser

## Known Bugs
* Clicking on list items does not display the items details as intended.

## Testing:
```
Describe: Pizza()

Test: "It should return a pizza object with properties for size, sauce, cheese, and toppings"
Code: const myPizza = new Pizza("large", "red", "mozzerella", "pepperoni", "jalapeno")
Expected Output: Pizza{size: "large", sauce: "red", cheese: "mozzerella", meat: "pepperoni", veggie: "jalapeno"}

Describe: Pizza.prototype.price()

Test: "It should return a price when called on a pizza object"
Code: const myPizza = new Pizza("large", "red", "mozzerella", "pepperoni", "jalapeno")
      myPizza.price();
Expected Output:$12.99

Describe: Orders()

Test: "It should create an order object with a pizza object inside"
Code: function Orders() {
  this.pizza = {};
}
Expected Output: newOrder;
                Orders{Pizza1,Pizza2}

Describe: Orders.prototype.addPizza()

Test: "It should take a pizza object as an argument and add to Orders object"
Code: newOrder.addPizza(newPizza);
Expected Output: Orders{newPizza};

Describe: Orders.prototype.assignId()

Test: "It should assign a unique ID number for each pizza object added"
Code: Orders.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
Expected Output: newOrder{1:myPizza}

Describe: findPizza(id)

Test: "It should find a pizza with a defined Id"
Code: Orders.prototype.findPizza = function (id) {
  if (this.pizzas[id] !== undefined) {
    return this.pizzas[id];
  }
  return false;
};
Expected Output: newOrder.findPizza(1);
                newPizza{}

Describe: pizzaOrderInfo();

Test: "It should display the properties of the pizza object in a string"
Code: Pizza.prototype.pizzaOrderInfo = function () {
  return this.size + " " + this.sauce + " " + this.cheese + " " + this.meat + " " + this.veggie;
}
Expected Output: newPizza.pizzaOrderInfo();
"Large Red Sauce Pepperoni Jalapeno"
```
## License
Copyright (c) 2022 Chris Loveless, Ryan Krueger, Anahi Ruiz Robles
_[MIT](https://choosealicense.com/licenses/mit/)_