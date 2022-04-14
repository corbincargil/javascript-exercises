const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(myArray) {
  let sum = 0;
  myArray.forEach(number => {
      sum += number;
  });
  return sum;
};

const multiply = function(myArray) {
  let product = 1;
  myArray.forEach(number => {
    product *= number;
  });
  return product;
};

const power = function(base, exponent) {
	return Math.pow(base,exponent);
};

const factorial = function(number) {
  let result = 1;
  if (number === 0) {
      
  } else {
    while (number > 1) {
        result *= number
        number--;
    };
  }
  return result;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
