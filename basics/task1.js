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
// function calc(num){
//     let counter = 0; 
//     for(let i=0; i=num; i++){
//         num = Math.floor(num/10);
//         counter++;
//     }
//     return counter;
// } 

// const calcRecurs = (function () {
//     let count = 0;
//     return function amount(num){
//         if(num < 9){
//             count++
//             return count;
//         }
//         count++;
//         return amount(Math.floor(num/10));
//     }
// })();
// console.log(calcRecurs(2356));
// console.log(calcRecurs(235666));

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

// class Rectangle {
//     constructor(length, width){
//         this.length = length
//         this.width = width
//     }
//     perimeter(){
//         return (this.length + this.width)*2
//     };
//     square(){
//         return (this.length * this.width)
//     };
// }

// class Riangle{
//     constructor(a, b, c){
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     perimeter(){
//         return (this.a + this.b + this.c)
//     };
//     square(){
//         return (this.a * this.b)/2
//     };
// }

// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     }
    
//     perimeter(){
//         return Number((2 * Math.PI * this.radius).toFixed(2))
//     };
//     square(){
//         return Number((Math.PI * (this.radius**2)).toFixed(2))
//     };
// }

// // 8
// const factorial = (function () {
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