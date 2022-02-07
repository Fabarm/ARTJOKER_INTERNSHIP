"use strict"
// // 1
// function checkIsAnagram(firstWord, secondWord) {
//     let firstArray = sortArray(firstWord.toLowerCase().split(''));
//     let secondArray = sortArray(secondWord.toLowerCase().split(''));
//
//     function sortArray (array) {
//         for (let n = 0; n < array.length; n++) {
//             for (let i = 0; i < array.length - 1 - n; i++) {
//                 if (array[i] > array[i + 1]) {
//                     const smb = array[i];
//                     array[i] = array[i + 1];
//                     array[i + 1] = smb;
//                 }
//             }
//         }
//         return array;
//     }
//     return firstArray.join("") === secondArray.join("");
// }

// // 3
// const countingNumber = function(givenNumber){
//     let counter = 0; 
//     for(let i = 0; i = givenNumber; i++){
//         givenNumber = Math.floor(givenNumber/10);
//         counter++;
//     }
//     return counter;
// } 

// const countingNumberRecursion = function (givenNumber, counter) {
//     counter = counter || 0;

//     if(givenNumber < 9){
//         counter++;
//         return counter;
//     }
        
//     return countingNumber(Math.floor(givenNumber/10), ++counter);
// }

// // 4
// function checkIsPalindrome(word){
//     let wordArray = word.toLowerCase().split('');
//     let newWordArray = [];
//     for (let i = wordArray.length; i >= 0; i--){
//         newWordArray.push(wordArray[i])
//     }
//     return  newWordArray.join('') === word;
// }

// // 5
// function calcWords(sentence){
//     let arrayWords = sentence.toLowerCase().split(' ');
//     let newWords = [];
    
//     for(let i = 0; i < arrayWords.length; i++){
//         if(arrayWords.indexOf(arrayWords[i]) === i){
//             newWords.push(arrayWords[i]);
//         }
//     }

//     return newWords.length;
// }

// // 6
// function entryWords(sentence){
//     let words = {};
//     let arrayWords = sentence.toLowerCase().split(' ');
//     for(let i = 0; i < arrayWords.length; i++){
//         if(words[arrayWords[i]] === undefined){
//         words[arrayWords[i]] = 1;
//         } else {
//             words[arrayWords[i]] += 1;
//         }
//     }
//     return words;
// }

// // 7
// function Rectangle(length, width){
//     this.square = length * width;
//     this.perimeter = (length + width)*2;
// }

// function Triangle(sideA, sideB, sideC){
//     this.square = (sideA*sideB)/2;
//     this.perimeter = sideA + sideB + sideC;
// }

// function Circle(radius){
//     this.square = Math.PI * (radius**2);
//     this.perimeter = 2 * Math.PI * radius;
// }

// class Rectangle {
//     constructor(length, width){
//         this.length = length;
//         this.width = width;
//     }
//     getPerimeter(){
//         return (this.length + this.width)*2;
//     };
//     getSquare(){
//         return (this.length * this.width);
//     };
// }

// class Triangle{
//     constructor(sideA, sideB, sideC){
//         this.sideA = sideA;
//         this.sideB = sideB;
//         this.sideC = sideC;
//     }
//     getPerimeter(){
//         return (this.sideA + this.sideB + this.sideC);
//     };
//     getSquare(){
//         return (this.sideA * this.sideB)/2;
//     };
// }

// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     }
    
//     getPerimeter(){
//         return 2 * Math.PI * this.radius;
//     };
//     getSquare(){
//         return Math.PI * (this.radius**2);
//     };
// }

// // 8
// const factorial = function (num){
//     let res = 1;
//     for(let i = 1; i <= num; i++){
//         res = res * i;
//     }
//     return res;
// }

// const factorialRecursion = function(num){
//     return num ? num * factorial(num-1) : 1;    
// }

// const factorialMemo = (function () {
//     let memo = {};
//     return function factorial(num){
//         if (num === 0) {
//             return 1;
//         }

//         if(memo[num] === undefined) {
//             memo[num] = factorial(num - 1);
//         }

//         return num * memo[num];
//     };
// })();

// // 9
// function getSumElementArray(array, callback){
//     let count = 0;
//     for(let i = 0; i < array.length; i++){        
//         if(callback(array[i])){
//             count += array[i];
//         }
//     }
//     return count;
// }

// function getSumElementRecursion(array, callback, index){
//     index = index || 0;
//     let sum = null;    
//     sum += callback(array[index]) ? array[index] :  0;
//     if(array.length <= index) {
//         return sum ;
//     }
//     return sum + getSumElement(array, callback, ++index);
// }

// function getSumElemenMatrix(matrix, callback){
//     let counter = 0;
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[i].length; j++){
//             if(callback(matrix[i][j])){
//                 counter += matrix[i][j];
//             }
//         }
//     }
//     return counter;
// }

// // 10
// function getAmountElementArray(array, callback){
//     let counter = 0;
//     for(let i = 0; i < array.length; i++){        
//         if(callback(array[i])){
//             counter++;
//         }
//     }
//     return counter;
// }

// function getAmountElementMatrix(matrix, callback){
//     let counter = 0;
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[i].length; j++){
//             if(callback(matrix[i][j])){
//                 counter++;
//             }
//         }
//     }
//     return counter;
// }

// // 11
// function getBinary(denaryNumber){
//     let result = [];
//     while(denaryNumber > 0){
//         result.unshift(denaryNumber % 2);
//         denaryNumber = Math.floor(denaryNumber / 2);
//     }
//     return Number(result.join(''));
// }

// function getDenary(binaryNumber){
//     let array = [];
//     let result = 0;
//     for(let i = 0; i = binaryNumber; i++){
//         array.unshift(binaryNumber % 10);
//         binaryNumber = Math.floor(binaryNumber / 10);
//     }

//     for(let j = 0; j < array.length; j++){
//         result += array[j] * 2**j;
//     }
//     return result;
// }

// // 13
// function getSum(min, max, callback){
//     let count = 0;
//     for(let i = min; i <= max; i++){        
//         if(callback(i)){
//             count++;
//         }
//     }
//     return count;
// }

// function getSumRecursion(min, max, callback){
//     let sum = 0;
//
//     if(callback(min)){
//         sum += min;
//     }
//
//     if (++min <= max) {
//         sum += getSumRecursion(min, max, callback);
//     }
//
//     return sum;
// }

// // 14
// function averageElementsArray(array, callback){
//     let result = 0;
//     let counter = 0;

//     for(let i = 0; i < array.length; i++){
//         if(callback(array[i])){
//             result += array[i];
//             counter++;
//         }
//     }
//     return result/counter;
// }

// function averageElementsMatrix(matrix, callback){
//     let result = 0;
//     let counter = 0;
    
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[i].length; j++){
//             if(callback(matrix[i][j])){
//                 result += matrix[i][j];
//                 counter++;
//             }
//         }
//     }
//     return result/counter;
// }

// // 15
// function transformMatrix(matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < i; j++) {
//             let  somebody = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] =  somebody;
//         }
//     }
//     return matrix;
// }

// function SumMatrix(firstMatrix,secondMatrix){
//     let result = [];
//     for (let i = 0; i < firstMatrix.length; i++){
//         result[i] = [];
//         for (let j = 0; j < firstMatrix[0].length; j++){
//            result[i][j] = firstMatrix[i][j]+secondMatrix[i][j];
//         }
//     }
//     return result;
// }

// // 16
// function removeRow(matrix){
//     let index = [];
//     for(let i = 0; i < matrix.length; i++){
//         for (let j = 0; j < matrix[i].length; j++){
//             if(matrix[i][j] === 0){
//                 index.push(matrix.indexOf(matrix[i]));
//             }
//         }
//     }
//     let counter = 0;
//     for (let i = 0; i < index.length; i++){
//         matrix.splice(index[i] - counter, 1);
//         counter++;
//     }
//     return matrix;
// }

// function removeColumn(matrix){
//     let index = [];
//     for(let i = 0; i < matrix.length; i++){
//         for (let j = 0; j < matrix[i].length; j++){
//             if(matrix[i][j] === 0){
//                 index.push(matrix[i].indexOf(matrix[i][j]));
//             }
//         }
//     }
//
//     for (let i = 0; i < matrix.length; i++){
//         let counter = 0;
//         for(let j = 0; j < index.length; j++) {
//             matrix[i].splice(index[j + counter], 1);
//             counter++;
//         }
//
//     }
//
//     return matrix;
// }

// // 17
// function getTopDiagonal(matrix, direction, condition){
//     let zero = 0;
//     let sum = 0;
//     let count  = 0;
    
//     if(direction === "topDiagonal"){
//         for(let i = 0; i < matrix.length; i++){
//             for(let j = i + 1; j < matrix[i].length; j++){        
//                 if(matrix[i][j] === 0){
//                     zero++;
//                 }
//                 sum += matrix[i][j];
//                 count++;
//             }
//         }
//     }

//     if(direction === "bottomDiagonal"){
//         for(let i = 1; i < matrix.length; i++){
//             for(let j = 0; j < i; j++){        
//                 if(matrix[i][j] === 0){
//                     zero++;
//                 }
//                 sum += matrix[i][j];
//                 count++;
//             }
//         }
//     }

//     if(direction === "diagonal"){
//         for(let i = 0; i < matrix.length; i++){
//             for(let j = i; j < i + 1; j++){
//                 if(matrix[i][j] === 0){
//                     zero++;
//                 }
//                 sum += matrix[i][j];
//                 count++;
//             }
//         }
//     }

//     if(condition === "zero"){
//         return zero;
//     } else if (condition === "sum"){
//         return sum;
//     } else if (condition === "mean"){
//         return sum/count;
//     } else{
//         return "Задайте третим аргументом одно из значений(zero, sum or mean)";
//     }
// }

// // 18
// let fibonacci = {
//     [Symbol.iterator]: function* (limit){
//         limit = limit || 5;
//         let prePrevValue  = 0;
//         let prevValue  = 1;

//         for(let i = 1; i <= limit; i++){        
//             let result = prePrevValue  + prevValue;
//                 [prePrevValue, prevValue ]=[prevValue, result];

//             yield result;
//         }
//     }
// }

// // 19
// let trafficLights = {
//     [Symbol.iterator]: function* (){
//         let lights = ['Красный', 'Желтый', "Зеленый"];
//         let counter = 0;
//         for(let i = 0; i < 15; i++) {
//             if(counter === 3){
//                 counter = 0;
//             }
//             yield lights[counter++];
//         }
//     }
// }
//
// 
// function fibonacciArrayRecurse(number, index, fibonacciArray) {
//     index = index || 1;
//     fibonacciArray = fibonacciArray || [0, 1].splice(0, number);
//
//     if (++index < number) {
//         fibonacciArray.push(fibonacciArray[index - 1] + fibonacciArray[index - 2]);
//         fibonacciArrayRecurse(number, index, fibonacciArray);
//     }
//
//     return fibonacciArray;
// }
//
//
// const fibonacciArrayRecursionMemo = (function () {
//     const memo = {};
//
//     return function pushFibonacci(number, arrayFibonacci) {
//         arrayFibonacci = arrayFibonacci || [];
//
//         function getFibonacciNumber(number) {
//             let result = 0;
//
//             if (memo[number] !== undefined) {
//                 result = memo[number];
//                 return result;
//             }
//
//             if (number <= 1) {
//                 memo[number] = number;
//                 result = number;
//                 return result;
//             } else {
//                 result +=
//                     getFibonacciNumber(number - 1) + getFibonacciNumber(number - 2);
//                 memo[number] = result;
//             }
//             return result;
//         }
//
//         if (--number >= 0) {
//             arrayFibonacci.unshift(getFibonacciNumber(number));
//             pushFibonacci(number, arrayFibonacci);
//         }
//
//         return arrayFibonacci;
//     };
// })();

// // 20
// function comparisonZero(number){
//     if(Math.sqrt(number**2) === number){
//         return "Больше 0";
//     }else{
//         return "Меньше 0";
//     }
// }

// function getSumBits(number){
//     let result = [];
//     while(number > 0){
//         result.unshift(number % 2);
//         number = Math.floor(number / 2);
//     }
//     let obj = {
//         one: 0,
//         zero: 0
//     };
//     for (let i = 0; i < result.length; i++){
//         if(result[i] === 1){
//             obj.one+=1;
//         }else{
//             obj.zero+=1;
//         }
//     }
//     return obj;
// }

// const bitWiseOperatorFirstVariant =  (num) =>  -num - 1 ;

// function bitWiseOperatorSecondVariant (num){
//     if(num < 0){
//         return Math.abs(num)-1;
//     }
//     if(num > 0){
//         return num - (num*2 + 1);
//     }
//     return -1;
// }


// 1+ 2+ 3+ 4+ 5+ 6+ 7+ 8+ 9+ 10+ 11+ 12+ 13+++ 14+ 15+ 16+ 17+ 18+-- 19+ 20+++