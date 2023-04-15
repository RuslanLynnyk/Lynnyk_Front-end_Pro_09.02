
class Hamburger {
    constructor(size, toppings) {
      this.size = size;
      this.toppings = toppings;
    }
  
    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_LARGE = { price: 100, calories: 40 };

    static TOPPING_CHEESE = { price: 10, calories: 20 };
    static TOPPING_SALAD = { price: 20, calories: 5 };
    static TOPPING_POTATO = { price: 15, calories: 10 };

    static OPTION_SPICE = { price: 15, calories: 0 };
    static OPTION_MAYO = { price: 20, calories: 5 };
  
    calculatePrice() {
      let price = 0;
      price += this.size.price;
      this.toppings.forEach((topping) => {
        price += topping.price;
      });
      return price;
    }
  
    calculateCalories() {
      let calories = 0;
      calories += this.size.calories;
      this.toppings.forEach((topping) => {
        calories += topping.calories;
      });
      return calories;
    }
  
    addSpice() {
      this.toppings.push(Hamburger.OPTION_SPICE);
    }
  
    addMayo() {
      this.toppings.push(Hamburger.OPTION_MAYO);
    }
  }
  const myHamburger = new Hamburger(
    Hamburger.SIZE_SMALL,
    [Hamburger.TOPPING_CHEESE, Hamburger.TOPPING_SALAD]
  );
  
  console.log("Ціна гамбургера: " + myHamburger.calculatePrice() + " тугриків");
  console.log("Калорійність гамбургера: " + myHamburger.calculateCalories() + " калорій");
  
  myHamburger.addSpice();
  myHamburger.addMayo();
  
  console.log("Ціна гамбургера після додавання опцій: " + myHamburger.calculatePrice() + " тугриків");
  console.log("Калорійність гамбургера після додавання опцій: " + myHamburger.calculateCalories() + " калорій");
  