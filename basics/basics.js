"use strict"
// Собственная реализация split, sort и join
String.prototype.MySplit = function (separator) {
    let newArr = [];
    let word = '';
    for (let i = 0; i < this.length; i++) {
        if (separator === '') {
            newArr.push(this[i]);
        } else {
            if (this[i] !== separator) {
                word += this[i];
            }
            if (this[i] === separator || i === this.length - 1) {
                newArr.push(word);
                word = '';
            }
        }
    }
    return newArr;
}

Array.prototype.SortArray = function () {
    for (let n = 0; n < this.length; n++) {
        for (let i = 0; i < this.length - 1 - n; i++) {
            if (this[i] > this[i + 1]) {
                const temporary = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temporary;
            }
        }
    }
    return this;
}

Array.prototype.MyJoin = function(){
    let word = '';
    for(let i = 0; i < this.length; i++){
        word += this[i];
    }
    return word;
}

// 1
function checkIsAnagram(firstWord, secondWord) {
    if(typeof(firstWord) !== 'string' && typeof(secondWord) !== 'string'){
        throw new Error("Data type is not a string");
    }

    return firstWord.MySplit('').SortArray().MyJoin() 
           === secondWord.MySplit('').SortArray().MyJoin();   
}

// 2 Блок-схема находится в каталоге под названием task2.png 

// 3
const countingNumber = function(givenNumber){
    if(typeof(givenNumber) !== 'number'){
        throw new Error("Data type is not a number");
    }

    let counter = 0; 
    for(let i = 0; i = givenNumber; i++){
        givenNumber = Math.floor(givenNumber/10);
        counter++;
    }
    return counter;
};

const countingNumberRecursion = function (givenNumber, counter) {
    if(typeof(givenNumber) !== 'number'){
        throw new Error("Data type first argument is not a number");
    }
    if(counter && typeof(counter) !== 'number'){
        throw new Error("Data type second argument is not a number");
    }

    counter = counter || 0;

    if(givenNumber < 9){
        counter++;
        return counter;
    }
        
    return countingNumberRecursion(Math.floor(givenNumber/10), ++counter);
};

// 4
function checkIsPalindrome(word){
    if(typeof(word) !== 'string'){
        throw new Error("Data type is not a string");
    }

    let wordArray = word.toLowerCase().MySplit('');
    let newWordArray = [];
    
    for (let i = wordArray.length - 1; i >= 0; i--){
        newWordArray.push(wordArray[i]);
    }
    
    return  newWordArray.MyJoin() === word;
}

// 5
function calcWords(sentence){
    if(typeof(sentence) !== 'string'){
        throw new Error("Data type is not a string");
    }

    let arrayWords = sentence.toLowerCase().MySplit(' ');
    let newWords = [];
    
    for(let i = 0; i < arrayWords.length; i++){
        if(arrayWords.indexOf(arrayWords[i]) === i){
            newWords.push(arrayWords[i]);
        }
    }

    return newWords.length;
}

// 6
function entryWords(sentence){
    if(typeof(sentence) !== 'string'){
        throw new Error("Data type is not a string");
    }

    let words = {};
    let arrayWords = sentence.toLowerCase().MySplit(' ');

    for(let i = 0; i < arrayWords.length; i++){
        if(words[arrayWords[i]] === undefined){
        words[arrayWords[i]] = 1;
        } else {
            words[arrayWords[i]] += 1;
        }
    }

    return words;
}

// 7
function Rectangle(length, width){
    if(typeof(length) !== 'number' || typeof(width) !== 'number'){
        throw new Error("Data type is not a number");
    }
    
    this.square = length * width;
    this.perimeter = (length + width)*2;
}


function Triangle(sideA, sideB, sideC){
    if(typeof(sideA) !== 'number' || typeof(sideB) !== 'number' || typeof(sideC) !== 'number'){
        throw new Error("Data type is not a number");
    }

    this.square = (sideA*sideB)/2;
    this.perimeter = sideA + sideB + sideC;
}

function Circle(radius){
    if(typeof(radius) !== 'number'){
        throw new Error("Data type is not a number");
    }

    this.square = Math.PI * (radius**2);
    this.perimeter = 2 * Math.PI * radius;
}

class RectangleClass {
    constructor(length, width){
        this.length = length;
        this.width = width;
    }
    getPerimeter(){
        return (this.length + this.width)*2;
    };
    getSquare(){
        return (this.length * this.width);
    };
}

class TriangleClass {
    constructor(sideA, sideB, sideC){
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    getPerimeter(){
        return (this.sideA + this.sideB + this.sideC);
    };
    getSquare(){
        return (this.sideA * this.sideB)/2;
    };
}

class CircleClass {
    constructor(radius){
        this.radius = radius;
    }
    
    getPerimeter(){
        return 2 * Math.PI * this.radius;
    };
    getSquare(){
        return Math.PI * (this.radius**2);
    };
}

// 8
const factorial = function (number){
    if(typeof(number) !== 'number'){
        throw new Error("Data type is not a number");
    }
    let result = 1;

    for(let i = 1; i <= number; i++){
        result *= i;
    }

    return result;
};

const factorialRecursion = function(number){
    if(typeof(number) !== 'number'){
        throw new Error("Data type is not a number");
    }

    return number ? number * factorialRecursion (number-1) : 1;    
};

const factorialMemo = (function () {
    let memo = {};
    return function factorial(num){
        if (num === 0) {
            return 1;
        }

        if(memo[num] === undefined) {
            memo[num] = factorial(num - 1);
        }

        return num * memo[num];
    };
})();

// 9
function getSumElementArray(array, callback){
    let sum = 0;

    for(let i = 0; i < array.length; i++){        
        if(callback(array[i])){
            sum += array[i];
        }
    }

    return sum;
}

function getSumElementRecursion(array, callback, index){
    index = index || 0;
    let sum = null;

    sum += callback(array[index]) ? array[index] :  0;
    if(array.length <= index) {
        return sum ;
    }

    return sum + getSumElementRecursion(array, callback, ++index);
}

function getSumElemenMatrix(matrix, callback){
    let sum = 0;

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(callback(matrix[i][j])){
                sum += matrix[i][j];
            }
        }
    }

    return sum;
}

// 10
function getAmountElementArray(array, callback){
    let amount = 0;

    for(let i = 0; i < array.length; i++){        
        if(callback(array[i])){
            amount++;
        }
    }

    return amount;
}

function getAmountElementMatrix(matrix, callback){
    let amount = 0;

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(callback(matrix[i][j])){
                amount++;
            }
        }
    }

    return amount;
}

// 11
function getBinary(denaryNumber){
    if(typeof(denaryNumber) !== 'number'){
        throw new Error("Data type is not a number");
    }

    let result = [];
    while(denaryNumber > 0){
        result.unshift(denaryNumber % 2);
        denaryNumber = Math.floor(denaryNumber / 2);
    }

    return Number(result.MyJoin());
}

function getDenary(binaryNumber){
    if(typeof(binaryNumber) !== 'number'){
        throw new Error("Data type is not a number");
    }

    let array = [];
    let result = 0;
    for(let i = 0; i = binaryNumber; i++){
        array.unshift(binaryNumber % 10);
        binaryNumber = Math.floor(binaryNumber / 10);
    }

    for(let j = 0; j < array.length; j++){
        result += array[j] * 2**j;
    }

    return result;
}

// 13
function getSum(min, max, callback){
    if(typeof(min) !== 'number' || typeof(max) !== 'number'){
        throw new Error("Data type min or max is not a number");
    }
    if(typeof(callback) !== 'function'){
        throw new Error("Data type callback is not a function");
    }

    let sum = 0;

    for(let i = min; i <= max; i++){        
        if(callback(i)){
            sum += i;
        }
    }

    return sum;
}
// Блок-схема находится в каталоге под названием task13.png 

function getSumRecursion(min, max, callback){
    if(typeof(min) !== 'number' || typeof(max) !== 'number'){
        throw new Error("Data type min or max is not a number");
    }
    if(typeof(callback) !== 'function'){
        throw new Error("Data type callback is not a function");
    }

    let sum = 0;

    if(callback(min)){
        sum += min;
    }

    if (++min <= max) {
        sum += getSumRecursion(min, max, callback);
    }

    return sum;
}

// 14
function averageElementsArray(array, callback){
    if(Array.isArray(array) === false){
        throw new Error("Data type array is not a array");
    }
    if(typeof(callback) !== 'function'){
        throw new Error("Data type callback is not a function");
    }

    let sum = 0;
    let counter = 0;

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            sum += array[i];
                       
        }
        if(array[i] !== 0){
            counter++; 
        }
    }

    if(Number.isNaN(sum/counter)){
        return 0
    }

    return sum/counter;
}

function averageElementsMatrix(matrix, callback){
    let sum = 0;
    let counter = 0;
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(callback(matrix[i][j])){
                sum += matrix[i][j];
            }
            if(matrix[i][j] !== 0){
                counter++; 
            }   
        }
    }

    if(Number.isNaN(sum/counter)){
        return 0
    }

    return sum/counter;
}

// 15
function transformMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let  temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] =  temp;
        }
    }

    return matrix;
}

function sumMatrix(firstMatrix, secondMatrix){
    let result = [];
    for (let i = 0; i < firstMatrix.length; i++){
        result[i] = [];
        for (let j = 0; j < firstMatrix[i].length; j++){
           result[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
        }
    }

    return result;
}

// 16
function removeRow(matrix){
    let result = [];
    let flag = true
    for(let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                flag = false;               
                break;
            }
            flag = true;            
        }
        if(flag === true){
            result.push(matrix[i]);
        }
    }    
    return result;
}


function removeColumn(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if ((matrix[i][j])===0) {
                let index = matrix[i].indexOf(matrix[i][j]);

                for (let k = 0; k < matrix.length; k++) {
                    matrix[k].splice(index, 1);
                }
            }
        }
    }

    return matrix;
}

// 17




// 18
const fibonacci = {
    amountNumbers: 10,
    [Symbol.iterator]: function* (){
        
        let prePrevValue  = 0;
        let prevValue  = 1;

        for(let i = 0; i <= this.amountNumbers; i++){        
            let result = prePrevValue + prevValue;
            [prePrevValue, prevValue] = [prevValue, result];

            yield result;
        }
    }
};

const fibonacciRecurse = function (number) {
    if(typeof(number) !== 'number'){
        throw new Error("Data type is not a number");
    }

    if(number <= 1){
      return number;
    }

    return fibonacciRecurse(number - 1) + fibonacciRecurse(number - 2);    
};

const fibonacciRecurseMemo = (function () {
    let memo = {};

    return function fibonacci(number){        
        if(number <= 1){
            return number;
        }
        if(memo[number] === undefined) {
            memo[number] = fibonacci(number - 1);
        }

        return fibonacci(number - 1) + fibonacci(number - 2);        
    }
})();

// 19
let trafficLights1 = {
    amountCycles: 10,
    [Symbol.iterator]:function* (){
        for(let i = 0; i < this.amountCycles; i++){            
            yield 'Красный';
            yield 'Желтый';
            yield 'Зеленый';
            yield 'Желтый';
        }
    }
};

// 20
function checkIsPositiveZero(number){
    if(typeof(number) !== 'number'){
        throw new Error("Data type is not a number");
    }
    return ((number & (1 << 63))===0);
}

function getCounterBits(number) {
    if(typeof(number) !== 'number'){
        throw new Error("Data type is not a number");
    }
    const counterObject = {
        zero: 0,
        one: 0,
    };
    for (let i = 0; i < 32; i++) {
        if((number & 1 << i) === 1 << i) {
            counterObject.one++;
        }else{
            counterObject.zero++;
        }
    }

    return counterObject;
}

const bitWiseNotFirstVariant =  (num) =>  -num - 1;

const bitWiseNotSecondVariant =  (number) => {
    if(typeof(number) !== 'number'){
        throw new Error("Data type is not a number");
    }
    return number ^ -1;
};