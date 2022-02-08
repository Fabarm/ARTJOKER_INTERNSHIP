"use strict"
// Собственная реализация split, sort и join
String.prototype.MySplit = function(){
    let array = [];
    for(let i = 0; i < this.length; i++){
        array.push(this[i]);
    }
    return array;
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

String.prototype.mySplit = function (separator){
    let newArr = [];
    let word = '';
    for (let i = 0; i <= this.length; i++) {
        if(this[i] !== separator){
        word += this[i];
        }

        if(this[i] === separator || i === this.length-1) {
            newArr.push(word);
            word = '';
        }
    }
    return newArr;
}

// 1
function checkIsAnagram(firstWord, secondWord) {
    if(typeof(firstWord) !== 'string' && typeof(secondWord) !== 'string'){
        throw new Error("Data type is not a string");
    }
    return firstWord.MySplit().SortArray().MyJoin() 
           === 
           secondWord.MySplit().SortArray().MyJoin();   
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
}

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
}

// 4
function checkIsPalindrome(word){
    if(typeof(word) !== 'string'){
        throw new Error("Data type is not a string");
    }

    let wordArray = word.toLowerCase().MySplit();
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

    let arrayWords = sentence.toLowerCase().mySplit(' ');
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
    let arrayWords = sentence.toLowerCase().mySplit(' ');

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
        result = result * i;
    }
    return result;
}

const factorialRecursion = function(number){
    if(typeof(number) !== 'number'){
        throw new Error("Data type is not a number");
    }
    return number ? number * factorial(number-1) : 1;    
}

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
    let counter = 0;
    for(let i = 0; i < array.length; i++){        
        if(callback(array[i])){
            counter += array[i];
        }
    }
    return counter;
}

function getSumElementRecursion(array, callback, index){
    index = index || 0;
    let sum = null;    
    sum += callback(array[index]) ? array[index] :  0;
    if(array.length <= index) {
        return sum ;
    }
    return sum + getSumElement(array, callback, ++index);
}

function getSumElemenMatrix(matrix, callback){
    let counter = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(callback(matrix[i][j])){
                counter += matrix[i][j];
            }
        }
    }
    return counter;
}

// 10
function getAmountElementArray(array, callback){
    let counter = 0;
    for(let i = 0; i < array.length; i++){        
        if(callback(array[i])){
            counter++;
        }
    }
    return counter;
}

function getAmountElementMatrix(matrix, callback){
    let counter = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(callback(matrix[i][j])){
                counter++;
            }
        }
    }
    return counter;
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
    return Number(result.join(''));
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

    let count = 0;
    for(let i = min; i <= max; i++){        
        if(callback(i)){
            count++;
        }
    }
    return count;
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
    let result = 0;
    let counter = 0;

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            result += array[i];
            counter++;
        }
    }
    
    if(result === 0 || counter === 0){
        throw new Error("Data entered incorrectly");
    }

    return result/counter;   
    
}

function averageElementsMatrix(matrix, callback){
    let result = 0;
    let counter = 0;
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(callback(matrix[i][j])){
                result += matrix[i][j];
                counter++;
            }
        }
    }
    return result/counter;
}

// 15
function transformMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let  somebody = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] =  somebody;
        }
    }
    return matrix;
}

function SumMatrix(firstMatrix,secondMatrix){
    let result = [];
    for (let i = 0; i < firstMatrix.length; i++){
        result[i] = [];
        for (let j = 0; j < firstMatrix[0].length; j++){
           result[i][j] = firstMatrix[i][j]+secondMatrix[i][j];
        }
    }
    return result;
}

// 16
function removeRow(matrix){
    let index = [];
    for(let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                index.push(matrix.indexOf(matrix[i]));
            }
        }
    }
    let counter = 0;
    for (let i = 0; i < index.length; i++){
        matrix.splice(index[i] - counter, 1);
        counter++;
    }
    return matrix;
}

function removeColumn(matrix){
    let index = [];
    for(let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                index.push(matrix[i].indexOf(matrix[i][j]));
            }
        }
    }

    for (let i = 0; i < matrix.length; i++){
        let counter = 0;
        for(let j = 0; j < index.length; j++) {
            matrix[i].splice(index[j + counter], 1);
            counter++;
        }

    }

    return matrix;
}

// 17
function getTopDiagonal(matrix, direction, condition){
    let zero = 0;
    let sum = 0;
    let count  = 0;
    
    if(direction === "topDiagonal"){
        for(let i = 0; i < matrix.length; i++){
            for(let j = i + 1; j < matrix[i].length; j++){        
                if(matrix[i][j] === 0){
                    zero++;
                }
                sum += matrix[i][j];
                count++;
            }
        }
    }

    if(direction === "bottomDiagonal"){
        for(let i = 1; i < matrix.length; i++){
            for(let j = 0; j < i; j++){        
                if(matrix[i][j] === 0){
                    zero++;
                }
                sum += matrix[i][j];
                count++;
            }
        }
    }

    if(direction === "diagonal"){
        for(let i = 0; i < matrix.length; i++){
            for(let j = i; j < i + 1; j++){
                if(matrix[i][j] === 0){
                    zero++;
                }
                sum += matrix[i][j];
                count++;
            }
        }
    }

    if(condition === "zero"){
        return zero;
    } else if (condition === "sum"){
        return sum;
    } else if (condition === "mean"){
        return sum/count;
    } else{
        return "Задайте третьим аргументом одно из значений(zero, sum or mean)";
    }
}

// 18
const fibonacci = {
    [Symbol.iterator]: function* (limit){
        limit = limit || 5;
        let prePrevValue  = 0;
        let prevValue  = 1;

        for(let i = 1; i <= limit; i++){        
            let result = prePrevValue  + prevValue;
                [prePrevValue, prevValue ]=[prevValue, result];

            yield result;
        }
    }
}

const fibonacciRecurse = function (number) {
    if(number <= 1){
      return number;
    }else{
      return fibonacciRecurse(number - 1) + fibonacciRecurse(number - 2);
    }
}

const fibonacciRecurseMemo = (function () {
    let memo = {};

    return function fib(number){
        
        if(number <= 1){
        return number;
        }
        if(memo[number] === undefined) {
            memo[number] = fib(number - 1);
        }
        return fib(number - 1) + fib(number - 2);
        
    }
})();;


// 19
let trafficLights = {
    [Symbol.iterator]: function* (){
        let lights = ['Красный', 'Желтый', "Зеленый"];
        let counter = 0;
        for(let i = 0; i < 16; i++) {            
            yield lights[counter++];
            if(counter === lights.length){
                for(let j = 1; j > 0; j--){
                    yield lights[j];
                }
                counter = 0
            }
            
        }
    }
};

let trafficLightVariant2= {
    [Symbol.iterator]: function* (){
        let lights = ['Красный', 'Желтый', "Зеленый", 'Желтый'];
        let counter = 0;
        for(let i = 0; i < 16; i++) {            
            yield lights[counter++];
            if(counter === 4){
                counter = 0
                yield lights[counter++];
            }
            
        }
    }
};

// 20
function checkIsPositiveZero(number){
    if(typeof(number) !== 'number'){
        throw new Error("Data type is not a number");
    }

    return ((number & (1 << 63))===0)
}

function getSumBits(number){
    let result = [];
    while(number > 0){
        result.unshift(number % 2);
        number = Math.floor(number / 2);
    }
    let obj = {
        one: 0,
        zero: 0
    };
    for (let i = 0; i < result.length; i++){
        if(result[i] === 1){
            obj.one+=1;
        }else{
            obj.zero+=1;
        }
    }
    return obj;
}

const bitWiseOperatorFirstVariant =  (num) =>  -num - 1;


