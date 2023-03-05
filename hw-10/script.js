 let  arr = ['задайте', 'власний', 'текст', 'який', 'бажаєте','sadsdasdasdadas']
 function compare(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

arr.sort(compare)
console.log(arr);

arr.splice(1,3)
console.log(arr);