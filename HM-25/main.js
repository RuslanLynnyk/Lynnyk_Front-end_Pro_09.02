function* Foo() {
    console.log('start')
    yield 1
    yield 2
    yield 3
    console.log('finish')
  }
  
  const iterator = Foo()
  iterator.next().value // 1
  iterator.next().done // false

  function Boo() {
  let count = 0;
  const iterator = {
    next: function() {
      console.log('start')
      if (count < 3) {
        return { value: ++count, done: false };
      } else {
        console.log('finish')
        return { done: true };
      }
    }
  };
  return iterator;
}

const iterator2 = Boo();
console.log(iterator.next().value); 
console.log(iterator.next().done); 
