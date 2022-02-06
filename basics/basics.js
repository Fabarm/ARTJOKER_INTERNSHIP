"use strict"
// // 1
// function isAnagram(firstWord, secondWord) {
//     let firstArray = sortArray(firstWord.toLowerCase().split(''));
//     let secondArray = sortArray(secondWord.toLowerCase().split(''));
//
//     function sortArray (array) {
//         for (let n = 0; n < array.length; n++) {
//             for (let i = 0; i < array.length - 1 - n; i++) {
//                 if (array[i] > array[i + 1]) {
//                     const smb = array[i]
//                     array[i] = array[i + 1]
//                     array[i + 1] = smb
//                 }
//             }
//         }
//         return array
//     }
//     return firstArray.join("") === secondArray.join("");
// }
// console.log(isAnagram('kamuw', 'muwka'));

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
// function isPalindrome(word){
//     return  str === word.toLowerCase().split('').reverse().join('');
// }
// console.log(isPalindrome('kabak'));

// // 5
// function calcWords(sentence){
//     let words = sentence.toLowerCase().split(' ');
//     let newWords = words.filter((item, index) => words.indexOf(item) === index);
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
//     return words
// }
// console.log(entryWords('hello world my name is my world'));

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
//     this.square = Number((Math.PI * (radius**2)).toFixed(2));
//     this.perimeter = Number((2 * Math.PI * radius).toFixed(2));
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
//         return Number((2 * Math.PI * this.radius).toFixed(2));
//     };
//     getSquare(){
//         return Number((Math.PI * (this.radius**2)).toFixed(2));
//     };
// }

// // 8
// const factorial = function (num){
//     let res = 1;
//     for(let i = 1; i <= num; i++){
//         res = res * i
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
// };
// console.log(getSumElement([1,1,2,3,4,5,6,7,8,9,10], item => item%2 === 0));

// function getSumElementRecursion(array, callback, index){
//     index = index || 0;
//     let sum = null;    
//     sum += callback(array[index]) ? array[index] :  0;
//     if(array.length <= index) {
//         return sum ;
//     }
//     return sum + getSumElement(array, callback, ++index)
// };
// console.log(getSumElement([1,1,2,3,4,5,6,7,8,9,10], item => item % 3 === 0));

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
//             counter += 1;
//         }
//     }
//     return counter;
// }

// function getAmountElementMatrix(matrix, callback){
//     let counter = 0;
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[i].length; j++){
//             if(callback(matrix[i][j])){
//                 counter += 1;
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
// console.log(getBinary(13));

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
// console.log(getDenary(101011));

// // 13
// function getSum(min, max, callback){
//     let count = 0;
//     for(let i = min; i <= max; i++){        
//         if(callback(i)){
//             count += i;
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
// console.log(averageElements([10,20,30,40,50,6,7,8,9,10,11,12], item => item));

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
// console.log(averageElements([[10,20,30,40,50],[6,7,80,9,10,11,12]], item => item%3===0));

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
// console.log(transformMatrix([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]));

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
// console.log(SumMatrix([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ],
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]));

// // 16
// function removeRow(matrix){
//     let index = [];
//     for(let i = 0; i < matrix.length; i++){
//         for (let j = 0; j < matrix[i].length; j++){
//             if(matrix[i][j] === 0){
//                 index.push(matrix.indexOf(matrix[i]))
//             }
//         }
//     }
//     let counter = 0
//     for (let i = 0; i < index.length; i++){
//         matrix.splice(index[i] - counter, 1);
//         counter++
//     }
//     return matrix
// }
// console.log(removeRow([
//     [1,2,5,4],
//     [1,2,0,6],
//     [2,8,7,5],
//     [3,8,0,5]
// ]));

// function removeColumn(matrix){
//     let index = [];
//     for(let i = 0; i < matrix.length; i++){
//         for (let j = 0; j < matrix[i].length; j++){
//             if(matrix[i][j] === 0){
//                 index.push(matrix[i].indexOf(matrix[i][j]))
//             }
//         }
//     }
//
//     for (let i = 0; i < matrix.length; i++){
//         let counter = 0
//         for(let j = 0; j < index.length; j++) {
//             matrix[i].splice(index[j + counter], 1);
//             counter++
//         }
//
//     }
//
//     return matrix
// }
// console.log(removeColumn([
//     [1,2,3,4,5],
//     [1,2,3,4,8],
//     [9,8,7,6,5],
//     [3,4,1,6,5],
//     [0,8,7,6,5]
// ]));

// // 17
// function getTopDiagonal(matrix, condition){
//     let zero = 0;
//     let sum = 0;
//     let count  = 0;
    
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = i + 1; j < matrix[i].length; j++){        
//             if(matrix[i][j] === 0){
//                 zero++;
//             }
//             sum += matrix[i][j];
//             count++;
//         }
//     }
    
//     if(condition === "zero"){
//         return zero;
//     } else if (condition === "sum"){
//         return sum;
//     } else if (condition === "mean"){
//         return sum/count;
//     } else{
//         return "Задайте вторым аргументом одно из значений(zero, sum or mean)";
//     }
// }
// console.log(getTopDiagonal([
//     [1,2,3,4,5],
//     [1,2,3,4,0],
//     [9,8,7,6,5],
//     [9,8,0,6,5],
//     [0,8,7,6,5],
// ], 'mean'));

// function getBottomDiagonal(matrix, condition){
//     let zero = 0;
//     let sum = 0;
//     let count  = 0;
    
//     for(let i = 1; i < matrix.length; i++){
//         for(let j = 0; j < i; j++){        
//             if(matrix[i][j] === 0){
//                 zero++;
//             }
//             sum += matrix[i][j];
//             count++;
//         }
//     }
    
//     if(condition === "zero"){
//         return zero;
//     } else if (condition === "sum"){
//         return sum;
//     } else if (condition === "mean"){
//         return sum/count;
//     } else{
//         return "Задайте вторым аргументом одно из значений(zero, sum или mean)";
//     }
// }
// console.log(getBottomDiagonal([
//     [1,2,3,4,5],
//     [1,2,3,4,0],
//     [9,8,7,6,5],
//     [9,8,0,6,5],
//     [0,8,7,6,5],
// ], 'sum'));

// function getDiagonal(matrix, condition){
//     let zero = 0;
//     let sum = 0;
//     let count  = 0;
//
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = i; j < i + 1; j++){
//             if(matrix[i][j] === 0){
//                 zero++;
//             }
//             sum += matrix[i][j];
//             count++;
//         }
//     }
//
//     if(condition === "zero"){
//         return zero;
//     } else if (condition === "sum"){
//         return sum;
//     } else if (condition === "mean"){
//         return sum/count;
//     } else{
//         return "Задайте вторым аргументом одно из значений(zero, sum or mean)";
//     }
// }
// console.log(getDiagonal([
//     [1,2,3,4,5],
//     [1,2,3,4,0],
//     [9,8,7,6,5],
//     [9,8,0,6,5],
//     [0,8,7,6,5],
// ], 'sum'));

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
//         let lights = ['Красный', 'Желтый', "Зеленый"]
//         let counter = 0;
//         for(let i = 0; i < 15; i++) {
//             if(counter === 3){
//                 counter = 0;
//             }
//             yield lights[counter++]
//         }
//     }
// }
//
// for(let i of trafficLights){
//     console.log(i)
// }

// // 20
// function comparisonZero(number){
//     if(Math.sqrt(number**2) === number){
//         return "Больше 0"
//     }else{
//         return "Меньше 0"
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
//         return Math.abs(num)-1
//     }
//     if(num > 0){
//         return num - (num*2 + 1)
//     }
//     return -1
// }

// function bitWiseOperator(number){
//
//     function getBinary(denaryNumber){
//         let result = [];
//         while(denaryNumber > 0){
//             result.unshift(denaryNumber % 2);
//             denaryNumber = Math.floor(denaryNumber / 2);
//         }
//         return result
//     }
//     let binaryArray = getBinary(number);
//     console.log(binaryArray)
//
//     function getDenary(array){
//
//         let result = 0;
//
//         for(let j = 0; j < array.length; j++){
//             result += array[j] * 2**j;
//         }
//         return result;
//     }
//
//     let invertedArray = binaryArray.map(item => {
//         if(item === 0){
//             return 1
//         }else {
//             return 0
//         }
//     }).reverse();
//     console.log(invertedArray)
//
//     let arr = [];
//     let count = 1;
//     if(invertedArray[0] === 1){
//         for (let i = 0; i < invertedArray.length; i++){
//             if(invertedArray[i] + count === 2){
//                 arr.push(invertedArray[i]);
//             }
//             if(invertedArray[i] + count === 1 && count === 1){
//                 arr.push(invertedArray[i] + count);
//                 count--;
//                 continue;
//             }
//             if(invertedArray[i] + count === 1){
//                 arr.push(invertedArray[i] + count);
//             }
//             if(invertedArray[i] + count === 0){
//                 arr.push(invertedArray[i]);
//             }
//         }
//     }else{
//         arr.push(1);
//         for (let i = 1; i < invertedArray.length; i++){
//             arr.push(invertedArray[i])
//         }
//     }
//     let qwe = arr.reverse()
//     console.log(qwe)
//
//
// }
//
// console.log(bitWiseOperator(-13))


// 1+ 2+ 3+ 4+ 5+ 6+ 7+ 8+ 9+ 10+ 11+ 12+ 13+++ 14+ 15+ 16+ 17+ 18+-- 19+ 20+++