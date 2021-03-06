"use strict";
// Собственная реализация split, sort и join
String.prototype.mySplit = function (separator) {
  let newArr = [];
  let word = "";
  for(let i = 0; i < this.length; i++) {
    if(separator === "") {
      newArr.push(this[i]);
    } else {
      if(this[i] !== separator) {
        word += this[i];
      }
      if(this[i] === separator || i === this.length - 1) {
        newArr.push(word);
        word = "";
      }
    }
  }
  return newArr;
};

Array.prototype.sortArray = function () {
  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this.length - 1 - i; j++) {
      if(this[j] > this[j + 1]) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

Array.prototype.myJoin = function () {
  let word = "";
  for(let i = 0; i < this.length; i++) {
    word += this[i];
  }
  return word;
};

// 1
function checkIsAnagram(firstWord, secondWord) {
  if(typeof firstWord !== "string" && typeof secondWord !== "string") {
    throw new Error("Data type is not a string");
  }

  return firstWord.mySplit("").sortArray().myJoin() 
         === secondWord.mySplit("").sortArray().myJoin();
}

// 2 Блок-схема находится в каталоге под названием task2.png

// 3
const countingNumber = function (givenNumber) {
  if(typeof givenNumber !== "number") {
    throw new Error("Data type is not a number");
  }

  let counter = 0;
  for(let i = 0; (i = givenNumber); i++) {
    givenNumber = Math.floor(givenNumber / 10);
    counter++;
  }
  return counter;
};

const countingNumberRecursion = function (givenNumber, counter) {
  if(typeof givenNumber !== "number") {
    throw new Error("Data type first argument is not a number");
  }
  if(counter && typeof counter !== "number") {
    throw new Error("Data type second argument is not a number");
  }

  counter = counter || 0;

  if(givenNumber < 9) {
    counter++;
    return counter;
  }

  return countingNumberRecursion(Math.floor(givenNumber / 10), ++counter);
};

// 4
function checkIsPalindrome(word) {
  if(typeof word !== "string") {
    throw new Error("Data type is not a string");
  }

  let wordArray = word.toLowerCase().mySplit("");
  let newWordArray = [];

  for(let i = wordArray.length - 1; i >= 0; i--) {
    newWordArray.push(wordArray[i]);
  }

  return newWordArray.myJoin() === word;
}

// 5
function calcWords(sentence) {
  if(typeof sentence !== "string") {
    throw new Error("Data type is not a string");
  }

  let arrayWords = sentence.toLowerCase().mySplit(" ");
  let newWords = [];

  for(let i = 0; i < arrayWords.length; i++) {
    if(arrayWords.indexOf(arrayWords[i]) === i) {
      newWords.push(arrayWords[i]);
    }
  }

  return newWords.length;
}

// 6
function entryWords(sentence) {
  if(typeof sentence !== "string") {
    throw new Error("Data type is not a string");
  }

  let words = {};
  let arrayWords = sentence.toLowerCase().mySplit(" ");

  for(let i = 0; i < arrayWords.length; i++) {
    words[arrayWords[i]] === undefined ? (words[arrayWords[i]] = 1) : words[arrayWords[i]]++;
  }

  return words;
}

// 7
function Rectangle(length, width) {
  if(typeof length !== "number" || typeof width !== "number") {
    throw new Error("Data type is not a number");
  }
  this.length = length;
  this.width = width;
}

Rectangle.prototype.square = function () {
  return this.length * this.width;
};
Rectangle.prototype.perimeter = function () {
  return this.length + this.width * 2;
};

function Triangle(sideA, sideB, sideC) {
  if(typeof sideA !== "number" || typeof sideB !== "number" || typeof sideC !== "number") {
    throw new Error("Data type is not a number");
  }

  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.square = function () {
  return (this.sideA * this.sideB) / 2;
};
Triangle.prototype.perimeter = function () {
  return this.sideA + this.sideB + this.sideC;
};

function Circle(radius) {
  if(typeof radius !== "number" && radius > 0) {
    throw new Error("Data type is not a number");
  }

  if(radius < 0) {
    throw new Error("Radius cannot be negative");
  }

  this.radius = radius;
}

Circle.prototype.square = function () {
  return Math.PI * this.radius ** 2;
};
Circle.prototype.perimeter = function () {
  return 2 * Math.PI * this.radius;
};

class RectangleClass {
  constructor(length, width) {
    if(typeof length !== "number" || typeof width !== "number") {
      throw new Error("Data type is not a number");
    }

    this.length = length;
    this.width = width;
  }
  getPerimeter() {
    return (this.length + this.width) * 2;
  }
  getSquare() {
    return this.length * this.width;
  }
}

class TriangleClass {
  constructor(sideA, sideB, sideC) {
    if(typeof sideA !== "number" || typeof sideB !== "number" || typeof sideC !== "number") {
      throw new Error("Data type is not a number");
    }
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  getPerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }
  getSquare() {
    return (this.sideA * this.sideB) / 2;
  }
}

class CircleClass {
  constructor(radius) {
    if(typeof radius !== "number" && radius > 0) {
      throw new Error("Data type is not a number");
    }

    if(radius < 0) {
      throw new Error("Radius cannot be negative");
    }

    this.radius = radius;
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
  getSquare() {
    return Math.PI * this.radius ** 2;
  }
}

// 8
const factorial = function (number) {
  if(typeof number !== "number" || number < 0) {
    throw new Error("Data type is not a number");
  }

  let result = 1;

  for(let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
};

const factorialRecursion = function (number) {
  if(typeof number !== "number" || number < 0) {
    throw new Error("Data type is not a number");
  }

  return number ? number * factorialRecursion(number - 1) : 1;
};

const factorialMemo = (function () {
  let memo = {};
  return function factorial(num) {
    if(typeof num !== "number" || num < 0) {
      throw new Error("Data type is not a number");
    }

    if(num === 0) {
      return 1;
    }

    if(memo[num] === undefined) {
      memo[num] = factorial(num - 1);
    }

    return num * memo[num];
  };
})();

// 9
function getSumElementArray(array, callback) {
  let sum = 0;

  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      sum += array[i];
    }
  }

  return sum;
}

function getSumElementRecursion(array, callback, index) {
  index = index || 0;
  let sum = null;

  sum += callback(array[index]) ? array[index] : 0;
  if(array.length <= index) {
    return sum;
  }

  return sum + getSumElementRecursion(array, callback, ++index);
}

function getSumElementMatrix(matrix, callback) {
  let sum = 0;

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(callback(matrix[i][j])) {
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}

// 10
function getAmountElementArray(array, callback) {
  let amount = 0;

  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      amount++;
    }
  }

  return amount;
}

function getAmountElementMatrix(matrix, callback) {
  let amount = 0;

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(callback(matrix[i][j])) {
        amount++;
      }
    }
  }

  return amount;
}

// 11
function getBinary(denaryNumber) {
  if(typeof denaryNumber !== "number") {
    throw new Error("Data type is not a number");
  }

  let result = [];
  while(denaryNumber > 0) {
    result.unshift(denaryNumber % 2);
    denaryNumber = Math.floor(denaryNumber / 2);
  }

  return Number(result.myJoin());
}

function getDenary(binaryNumber) {
  if(typeof binaryNumber !== "number") {
    throw new Error("Data type is not a number");
  }

  let array = [];
  let result = 0;
  for(let i = 0; (i = binaryNumber); i++) {
    array.unshift(binaryNumber % 10);
    binaryNumber = Math.floor(binaryNumber / 10);
  }

  for(let j = 0; j < array.length; j++) {
    result += array[j] * 2 ** j;
  }

  return result;
}

// 13
function getSum(min, max, callback) {
  if(typeof min !== "number" || typeof max !== "number") {
    throw new Error("Data type min or max is not a number");
  }
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  let sum = 0;

  for(let i = min; i <= max; i++) {
    if (callback(i)) {
      sum += i;
    }
  }

  return sum;
}
// Блок-схема находится в каталоге под названием task13.png

function getSumRecursion(min, max, callback) {
  if(typeof min !== "number" || typeof max !== "number") {
    throw new Error("Data type min or max is not a number");
  }
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  let sum = 0;

  if(callback(min)) {
    sum += min;
  }

  if(++min <= max) {
    sum += getSumRecursion(min, max, callback);
  }

  return sum;
}

// 14
function averageElementsArray(array, callback) {
  if(Array.isArray(array) === false) {
    throw new Error("Data type array is not a array");
  }
  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  let sum = 0;
  let counter = 0;

  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      sum += array[i];
    }
    if(array[i] !== 0) {
      counter++;
    }
  }

  return sum / counter;
}

function averageElementsMatrix(matrix, callback) {
  if (!Array.isArray(matrix)) {
    throw new Error("Data type matrix is not an array");
  }

  if (typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  let sum = 0;
  let counter = 0;

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(callback(matrix[i][j])) {
        sum += matrix[i][j];
        counter++;
      }
    }
  }

  return sum / counter || 0;
}

// 15
function isEquilateralMatix(matrix) {
  if(!Array.isArray(matrix)) {
    throw new Error("Data type matrix is not an array");
  }
  for(let i = 0; i < matrix.length; i++) {
    if(matrix[i].length !== matrix.length) {
      return false;
    }
  }
  return true;
}

function transformMatrix(matrix) {
  if(!Array.isArray(matrix)) {
    throw new Error("Data type matrix is not an array");
  }

  if(!isEquilateralMatix(matrix)) {
    throw new Error("Matrix is not equilateral");
  }

  let newMatrix = [];
  for(let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [];
    for(let j = 0; j < matrix[i].length; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }

  return newMatrix;
}

function sumMatrix(firstMatrix, secondMatrix) {
  let result = [];
  for(let i = 0; i < firstMatrix.length; i++) {
    result[i] = [];
    for(let j = 0; j < firstMatrix[i].length; j++) {
      result[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
    }
  }

  return result;
}

// 16
function removeRow(matrix, callback) {
  if(!Array.isArray(matrix)) {
    throw new Error("Data type matrix is not an array");
  }

  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(callback(matrix[i][j])) {
        matrix.splice(i, 1);
        i--;
        break;
      }
    }
  }

  return matrix;
}

function removeColumn(matrix, callback) {
  if(!Array.isArray(matrix)) {
    throw new Error("Data type matrix is not an array");
  }

  if(typeof callback !== "function") {
    throw new Error("Data type callback is not a function");
  }

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(callback(matrix[i][j])) {
        let index = matrix[i].indexOf(matrix[i][j]);

        for(let k = 0; k < matrix.length; k++) {
          matrix[k].splice(index, 1);
        }
      }
    }
  }

  return matrix;
}

// 17
function cutTopMatrix(matrix) {
  let topMatrix = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i + 1; j < matrix[i].length; j++) {
      topMatrix.push(matrix[i][j]);
    }
  }
  return topMatrix;
}

function cutBottomMatrix(matrix) {
  let bottomMatrix = [];
  for(let i = 1; i < matrix.length; i++) {
    for(let j = 0; j < i; j++) {
      bottomMatrix.push(matrix[i][j]);
    }
  }
  return bottomMatrix;
}

function cutDiagonalMatrix(matrix) {
  let diagonalMatrix = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i; j < i + 1; j++) {
      diagonalMatrix.push(matrix[i][j]);
    }
  }
  return diagonalMatrix;
}

function sumArrayElements(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function counterElements(array, desired) {
  let counter = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] === desired) {
      counter++;
    }
  }
  return counter;
}

function averageElements(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

// 18
const fibonacci = {
  amountNumbers: 10,
  [Symbol.iterator]: function* () {
    let prePrevValue = 0;
    let prevValue = 1;

    for(let i = 0; i <= this.amountNumbers; i++) {
      let result = prePrevValue + prevValue;
      [prePrevValue, prevValue] = [prevValue, result];

      yield result;
    }
  },
};

const fibonacciRecurse = function (number) {
  if(typeof number !== "number") {
    throw new Error("Data type is not a number");
  }

  if(number <= 1) {
    return number;
  }

  return fibonacciRecurse(number - 1) + fibonacciRecurse(number - 2);
};

const Memoization = (func) => {
  const cache = {};
  return (number) => {
    if(number in cache) {
      return cache[number];
    }
    cache[number] = func(number);
    return cache[number];
  };
};

const getMemoizationFibonacci = Memoization((number) => {
  if(number < 2) {
    return number;
  }

  return getMemoizationFibonacci(number - 1) + getMemoizationFibonacci(number - 2);
});

// 19
let trafficLights1 = {
  amountCycles: 10,
  [Symbol.iterator]: function* () {
    for(let i = 0; i < this.amountCycles; i++) {
      yield "Красный";
      yield "Желтый";
      yield "Зеленый";
      yield "Желтый";
    }
  },
};

// 20
function checkIsPositive(number) {
  if(typeof number !== "number") {
    throw new Error("Data type is not a number");
  }
  return (number & (1 << 31)) === 0;
}

function getCounterBits(number) {
  if(typeof number !== "number") {
    throw new Error("Data type is not a number");
  }

  const counterObject = {
    one: 0,
  };

  for(let i = 0; i < 32; i++) {
    if((number & (1 << i)) === 1 << i) {
      counterObject.one++ 
    }
  }
  counterObject.zero = 32 - counterObject.one;

  return counterObject;
}

const bitWiseNotFirstVariant = (num) => -num - 1;

const bitWiseNotSecondVariant = (num) => num ^ -1;
