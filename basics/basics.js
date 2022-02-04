'use stric'
// // 1
// function isAnagram(firstWord, secondWord) {    
//     return first.toLowerCase().split('').sort().join("") ===
//             second.toLowerCase().split('').sort().join("");
// }
// console.log(isAnagram('kamuw', 'muwka'));

// // 3
// const calc = function(num){
//     let counter = 0; 
//     for(let i=0; i=num; i++){
//         num = Math.floor(num/10);
//         counter++;
//     }
//     return counter;
// } 

// const amount = function (num, count) {    
//     count = count || 0;

//     if(num < 9){
//         count++;
//         return count;
//     }
        
//     return amount(Math.floor(num/10), ++count);
// }

// // 4
// function isPalindrome(str){
//     return  str === str.toLowerCase().split('').reverse().join('');   
// }
// console.log(isPalindrome('kabak'));

// // 5
// function calcWords(str){
//     let words = str.toLowerCase().split(' ');
//     let newWords = words.filter((item, index) => words.indexOf(item) === index);
//     return newWords.length;    
// }

// // 6
// function entryWords(str){
//     let words = {};
//     let newStr = str.toLowerCase().split(' ');
//     for(let i = 0; i < newStr.length; i++){
//         if(words[newStr[i]] === undefined){
//         words[newStr[i]] = 1;
//         } else {
//             words[newStr[i]] += 1;
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

// function Riangle(a, b, c){
//     this.square = (a*b)/2;
//     this.perimeter = a + b + c;
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

// class Riangle{
//     constructor(a, b, c){
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     getPerimeter(){
//         return (this.a + this.b + this.c);
//     };
//     getSquare(){
//         return (this.a * this.b)/2;
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

// const factorial = function(num){
//     return num ? num * factorial(num-1) : 1;    
// }

// const factorialMemo = (function () {
//     let memo = {};
//     return function fact(num){
//         if (num === 0) {
//             return 1;
//         }

//         if(memo[num] === undefined) {
//             memo[num] = fact(num - 1);
//         }

//         return num * memo[num];
//     };
// })();

// // 9
// function getSumElement(array, callback){
//     let count = 0;
//     for(let i = 0; i < array.length; i++){        
//         if(callback(array[i])){
//             count += array[i];
//         }
//     }
//     return count;
// };
// console.log(getSumElement([1,1,2,3,4,5,6,7,8,9,10], item => item%2 === 0));

// function getSumElement(array, callback, i){
//     i = i || 0;
//     let sum = null;    
//     sum += callback(array[i]) ? array[i] :  0;
//     if(array.length <= i) {
//         return sum ;
//     }
//     return sum + getSumElement(array, callback, ++i)
// };
// console.log(getSumElement([1,1,2,3,4,5,6,7,8,9,10], item => item%3 === 0));

// function getSumElemen(array, callback){
//     let count = 0;
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array[i].length; j++){        
//             if(callback(array[i][j])){
//                 count += array[i][j];
//             }
//         }
//     }
//     return count;
// }

// // 10
// function getAmountElement(array, callback){
//     let count = 0;
//     for(let i = 0; i < array.length; i++){        
//         if(callback(array[i])){
//             count += 1;
//         }
//     }
//     return count;
// }

// function getAmountElement(array, callback){
//     let count = 0;
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array[i].length; j++){        
//             if(callback(array[i][j])){
//                 count += 1;
//             }
//         }
//     }
//     return count;
// }

// // 11
// function getBinary(num){
//     let arr = [];
//     while(num>0){
//         arr.unshift(num%2);
//         num = Math.floor(num/2);
//     }
//     return Number(arr.join(''));
// }
// console.log(getBinary(13));

// function getBinary(num){
//     let arr = [],
//         res = 0;
//     for(let i = 0; i=num; i++){
//         arr.unshift(num%10);
//         num = Math.floor(num/10);
//     }

//     for(let j = 0; j < arr.length; j++){
//         res += arr[j]*2**j;        
//     }
//     return res; 
// }
// console.log(getBinary(101011));

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

// // 14
// function averageElements(array, callback){
//     let res = 0,
//         counter = 0;

//     for(let i = 0; i < array.length; i++){
//         if(callback(array[i])){
//             res += array[i];
//             counter++;
//         }
//     }
//     return res/counter;
// }
// console.log(averageElements([10,20,30,40,50,6,7,8,9,10,11,12], item => item));

// function averageElements(array, callback){
//     let res = 0,
//         counter = 0;
    
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array[i].length; j++){        
//             if(callback(array[i][j])){
//                 res += array[i][j];
//                 counter++;
//             }
//         }
//     }
//     return res/counter;
// }
// console.log(averageElements([[10,20,30,40,50],[6,7,80,9,10,11,12]], item => item%3===0));

// // 15
// function transformMatrix(array){
//     let newMatrix = array[0].map((_, i) => array.map(row => row[i]));
    
//     return newMatrix;
// }
// console.log(transformMatrix([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]));

// function SumMatrix(firstMatr,secondMatr){   
//     let res = [];
//     for (let i = 0; i < firstMatr.length; i++){ 
//         res[i] = [];
//         for (let j = 0; j < firstMatr[0].length; j++){
//            res[i][j] = firstMatr[i][j]+secondMatr[i][j];
//         }
//     }
//     return res;
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
// function removeRow(array){
//     let res = array.filter(item => {
//         let flag = true;
//         for(let i = 0; i < item.length; i++){
//             if(item[i] === 0){
//                 flag = false;
//                 break;
//             }
//         }
//         if(flag === true){
//             return item;
//         }
//     })
//     return res;
// }
// console.log(removeRow([
//     [3,4,5,6],
//     [1,2,0,6],
//     [9,8,7,5],
//     [5,0,1,7],
// ]));

// function removeColumn(array){
//     function transform(arr){
//         return arr[0].map((_, i) => arr.map(row => row[i]));
//     }
    
//     return transform(newMatrix = transform(array).filter(item => {
//         let flag = true;
//         for(let i = 0; i < item.length; i++){
//             if(item[i] === 0){
//                 flag = false;
//                 break;
//             }
//         }
//         if(flag === true){
//             return item;
//         }
//     }));
// }
// console.log(removeColumn([
//     [1,2,3,4,5],
//     [1,2,3,4,0],
//     [9,8,7,6,5],
//     [9,8,0,6,5],
//     [0,8,7,6,5],
// ]));

// // 17
// function getTopDiagonal(matrix, condition){
//     let zero = 0,
//         sum = 0,
//         count  = 0;
    
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
//         return "Задайте вторым аргументом одно изи значений(zero, sum or mean)";
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
//     let zero = 0,
//         sum = 0,
//         count  = 0;
    
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
//         return "Задайте вторым аргументом одно изи значений(zero, sum или mean)";
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
//     let zero = 0,
//         sum = 0,
//         count  = 0;
    
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = i; j < i + 1; j++){        
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
//         return "Задайте вторым аргументом одно изи значений(zero, sum or mean)";
//     }
// }
// console.log(getDiagonal([
//     [1,2,3,4,5],
//     [1,2,3,4,0],
//     [9,8,7,6,5],
//     [9,8,0,6,5],
//     [0,8,7,6,5],
// ], 'sum'));


// 1+ 2+ 3+ 4+ 5+ 6+ 7+ 8+ 9+ 10+ 11+ 12+ 13++- 14+ 15+ 16+ 17- 18- 19- 20- 