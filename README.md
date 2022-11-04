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
```