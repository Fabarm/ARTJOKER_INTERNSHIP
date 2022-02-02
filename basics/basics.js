'use stric'
// // 1
// function isAnagram(first, second) {
//     let firstWord = first.toLowerCase().split('').sort().join("");
//     let secondWord = second.toLowerCase().split('').sort().join("");
//     if(firstWord == secondWord){
//         return true;
//     }
//     return false;
// }

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
//     let newStr = str.toLowerCase().split('').reverse().join('');
//     if( str == newStr){
//         return true;
//     }
//     return false;
// }

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

// 7
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

// 9


// // 10
// function calc(array, info){
//     if(info === '0'){
//         let res = array.filter(item => item === 0);
//         return res.length;
//     }

//     if(info === "<0"){
//         let res = array.filter(item => item < 0);
//         return res.length;
//     }

//     if(info === '>0'){
//         let res = array.filter(item => item > 0);
//         return res.length;
//     }

//     if(info === 'simple'){
//         let res = array.filter(item => {
//             let flag = true;
//             if(item === 1){
//                 flag = false;
//             }
//             for (let i = 2; i < item; i++) {
//                 if (item % i == 0) {
//                     flag = false;
//                 }        
//             }
//             if(flag === true){
//                 return item;
//             }
//         })
//         return res.length;
//     }
// }

// // two-dimensional array
// function calc(array, info){
//     let amount = 0;
//     for(let i = 0; i < array.length; i++){
//         if(info === '0'){
//             let res = array[i].filter(item => item === 0);
//             amount += res.length;
//         }
    
//         if(info === "<0"){
//             let res = array[i].filter(item => item < 0);
//             amount += res.length;
//         }
    
//         if(info === '>0'){
//             let res = array[i].filter(item => item > 0);
//             amount += res.length;
//         }
    
//         if(info === 'simple'){
//             let res = array[i].filter(item => {
//                 let flag = true;
//                 if(item === 1){
//                     flag = false;
//                 }
//                 for (let i = 2; i < item; i++) {
//                     if (item % i == 0) {
//                         flag = false;
//                     }        
//                 }
//                 if(flag === true){
//                     return item;
//                 }
//             })
//             amount += res.length;
//         }
//     }
//     return amount;
// }

// 15
// function transformMatrix(array){
//     let newMatrix = array[0].map((_, i) => array.map(row => row[i]));
    
//     return newMatrix;
// }
// console.log(transformMatrix([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]));

// function SumMatrix(A,B){   
//     let res = [];
//     for (var i = 0; i < A.length; i++){ 
//         res[ i ] = [];
//        for (var j = 0; j < A[0].length; j++) res[ i ][j] = A[ i ][j]+B[ i ][j];
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
// function removeString(array){
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
// console.log(removeString([
//     [1,2,3,4,5,6,7,8,9],
//     [1,2,3,4,0,6,7,8,9],
//     [9,8,7,6,5,4,3,2,1],
// ]));
functionas9