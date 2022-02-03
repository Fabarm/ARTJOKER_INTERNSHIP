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
//     return  str == str.toLowerCase().split('').reverse().join('');   
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
function getBinary(num){
    let arr = [];
    if(num>0){
        let res = num % 2
        
    }
    
}
console.log(getBinary(15));


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