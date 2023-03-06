'use strict';

class ShoppingCart {
    constructor() {
      this.items = []; 
    }
  
    addItem(item) {
      const existingItem = this.items.find((i) => i.name === item.name);
  
      if (existingItem) {
        existingItem.count++;
      } else {
        this.items.push({ ...item, count: 1 });
      }
    }
  
    deleteItem(name) {
      const itemIndex = this.items.findIndex((i) => i.name === name);
  
      if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1);
      }
    }

    getTotalSum() {
      return this.items.reduce((total, item) => {
        return total + (item.price * item.count);
      }, 0);
    }
  }
  
  const cart = new ShoppingCart();
  
  cart.addItem({ name: 'Монітор', price: 2000 });
  cart.addItem({ name: 'Клавіатура', price: 500 });
  cart.addItem({ name: 'Мишка', price: 300 });
  cart.addItem({ name: 'Монітор', price: 2000 }); 
  
  console.log(cart.items);

  cart.deleteItem('Клавіатура');
  
  console.log(cart.items);
  console.log(cart.getTotalSum());
  