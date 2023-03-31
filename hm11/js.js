function averageNumericElements(arr) {
    const numericArr = arr.filter((item) => typeof item === 'number');
    if (numericArr.length === 0) {
      return null;
    }
    const sum = numericArr.reduce((acc, val) => acc + val, 0);
    return sum / numericArr.length;
  }

  
  function doMath(x, znak, y) {
    let result;
  
    switch (znak) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        result = x / y;
        break;
      case "%":
        result = x % y;
        break;
      case "^":
        result = Math.pow(x, y);
        break;
      default:
        result = NaN;
    }
  
    return result;
  }
  
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  

  function removeChars(str, charsToRemove) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (!charsToRemove.includes(str[i])) {
        result += str[i];
      }
    }
    return result;
  }
  