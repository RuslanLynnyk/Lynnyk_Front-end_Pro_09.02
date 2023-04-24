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
   return {
     [Symbol.iterator]: function* () {
       console.log('start')
       while (count < 3) {
         yield ++count;
       }
       console.log('finish')
     }
   };
 }
 
 const iterator1 = Boo()[Symbol.iterator]();
 console.log(iterator.next().value); // 1
 console.log(iterator.next().done); // true
 